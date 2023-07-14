---
sidebar_position: 3
---

# For Developers

Wrapped smart contracts is a protocol that enables executing of layer 2 smart contracts from the layer 1 wallet. The protocol provides the interface for dapps to communicate with the layer 1 wallet, through the provider object. The provider object is based on the [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) standard and operates as the bridge between the evm provider and the layer 1 provider. This way the evm dapp can communicate with the layer 1 wallet and execute transactions on the layer 2 smart contracts.





## Components

For the wrapped smart contracts to work, there are basically three components:
1. [Smart Contracts](#smart-contracts)
1. [Oracle](#oracle)
1. [Provider](#provider)

The exemplary flow of the protocol is as follows:

1. The dapp injects the provider.
2. The dapp calls `eth_requestAccounts` to get the user's L2 address.
3. The provider calls `eth_sendTransaction` to execute any transaction.
4. The transactions gets to the oracle from provider.
5. The oracle prevalidates the transaction and executes it on the actor.
6. The oracle gets refund for the paid gas.
7. Any uncustomized methods the provider passes to the regular provider node.



### 1. Smart contracts

The role of wallets like Flint or Metamask the Milkomeda C1 is for the user to have dedicated account. To get around this, the smart contract `Actor` will be used as an account abstraction that will be acting on behalf of the user.

#### Actor

[Actor](https://github.com/dcSpark/wrapped-smartcontracts/blob/main/packages/contracts/contracts/Actor.sol) is a smart contract deployed on the Milkomeda Layer 2 that is bound to the specific L1 address. It serves as an account abstraction: it has a balance, a nonce, and can execute signed transactions on behalf of the user. To verify the signature the actor will use the [L1MsgVerify](https://github.com/dcSpark/wrapped-smartcontracts/blob/main/packages/contracts/contracts/IL1MsgVerify.sol) precompiled contract that can verify L1 signatures. The execution will be invoked by the oracle service, which will get exact refund for the gas paid during the execution.

In the [compile task](https://github.com/dcSpark/wrapped-smartcontracts/blob/main/packages/contracts/tasks/compile.ts) the `Actor` contract is compiled to yul code and prepended with the code to store the transaction gas limit to storage. The gas limit is crucial to the calculation of used gas and to verify that the oracle acted honestly and didn't provide less gas than user signed and therefore the transaction would run out of gas. The yul code is later compiled to the evm bytecode and edited in the artifacts.

#### ActorFactory

[ActorFactory](https://github.com/dcSpark/wrapped-smartcontracts/blob/main/packages/contracts/contracts/ActorFactory.sol) is a smart contract deployed on the Milkomeda Layer 2 that is used to deploy actors. It uses CREATE2 opcode to deterministically derive Actor address from the L1 address.

#### L1MsgVerify

[L1MsgVerify](https://github.com/dcSpark/wrapped-smartcontracts/blob/main/packages/contracts/contracts/IL1MsgVerify.sol) is a precompiled contract that is used to verify the signature of the message signed on the Layer 1 mainchain.

#### CardanoSigVerification

CardanoSigVerification is a precompiled contract that is deprecated, but needed for backwards compatibility with the milkomeda-c1 testnet.

### 2. Oracle

Oracle is a node.js JSON-RPC api that relays messages from L1 to the L2 actors. It provides methods for interacting with the ActorFactory and to execute transactions on behalf of the user.

### 3. Provider

Provider is a front end library which injects the provider based on [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) object to the `window.ethereum` object. Provider customizes certain methods like `eth_sendTransaction` or `eth_requestAccounts` by invoking L1 wallet and transforming the result.


## Dapp setup

To use the wrapped smart contracts protocol the dapp needs to inject the provider from the [provider package](../packages/provider/). The example can be found in the [example dapp](../packages/dapp-example/src/App.tsx).
The provider takes two arguments, the oracle url and the regular node json-rpc api url. After injecting the dapp won't use the default evm provider, but the injected provider connecting the layer 1 wallet. To switch between those, we recommend saving a reference to the old provider.

The provider customizes few json-rpc methods like `eth_sendTransaction`, `eth_requestAccounts` etc. that interact with the wallet and sends the other to the json-rpc api. This way the most of the dapp interactions should work plug'n'play.

```typescript
const oldProvider = window.ethereum;
const provider = await import("provider");
await provider.inject(oracleUrl, nodeUrl).setup();
```

To switch back to the old provider, for example the MetaMask.

```typescript
window.ethereum = oldProvider;
```

### Actor Address

Under the hood the protocol creates an account abstraction called `Actor` that is bound to the specific L1 address. The actor is deployed on the layer 2 and is used to execute transactions on behalf of the user. The actor address is derived from the l1 address using the `CREATE2` opcode.

When prompting the provider with `eth_accounts` it will take the L1 address and derive the actor address, which acts as the user's account on the L2.

On the `eth_sendTransaction` the provider prompts the L1 wallet to sign the raw L2 transaction and sends it to the oracle. The oracle will verify the signature and execute the transaction on the actor.

### Gas payments

The gas is being paid by the Actor smart contract itself, therefore to execute any transaction the actor needs to have enough balance to pay gas. To fund the Actor smart contract the user should use bridge or dapp should prompt the wallet to send the funds to the Actor through the bridge. More on this can be found in the [milkomeda documentation](https://dcspark.github.io/milkomeda-documentation/).

### Sending assets

If the application requires L1 assets it is necessary that they belong to the Actor smart contract. For example to use the DEX, the user needs to first move assets to the Actor smart contract through the Milkomeda bridge, then he can use the L2 dapp in the regular fashion with the L1 wallet, and then the assets will need to be moved back to the L1 through the bridge.

## Full roundtrip of assets example

### Wrapping of assets

```typescript
import { ethers } from "ethers";
import { Blockfrost, Lucid } from "lucid-cardano";

const milkomedaProvider = await import("provider");
await milkomedaProvider.inject(oracleUrl, nodeUrl).setup();

const amount = 10;

const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();
const actorAddress = await signer.getAddress();

const lucid = await getLucid(BLOCKFROST_API_KEY);

const api = await window.cardano.enable();

lucid.selectWallet(api);

const tx = await lucid
  .newTx()
  .payToAddress(STARGATE_ADDRESS, { lovelace: BigInt(amount * 10 ** 6) })
  .attachMetadata(87, "devnet.cardano-evm.c1")
  .attachMetadata(88, actorAddress)
  .complete();

const signedTx = await tx.sign().complete();

const txHash = await signedTx.submit();
```

### Calling destination contract

```typescript
import { ethers } from "ethers";

const milkomedaProvider = await import("provider");
await milkomedaProvider.inject(oracleUrl, nodeUrl).setup();

const amount = 10;

const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();

const contract = new ethers.Contract(address, abi, provider);

const tx = await contract.connect(signer).someMethod(params, {
  gasLimit: 1_000_000,
  value: ethers.utils.parseEther(amount.toString()),
});

const receipt = await tx.wait();
```

### Unwrapping of assets

```typescript
import { ethers } from "ethers";

const milkomedaProvider = await import("provider");
await milkomedaProvider.inject(oracleUrl, nodeUrl).setup();

const amount = 10;

const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();

const bridgeContract = new ethers.Contract(bridgeAddress, bridgeAbi, provider);

await bridgeContract.connect(signer).submitUnwrappingRequest(
  {
    assetId: "0x0000000000000000000000000000000000000000000000000000000000000000",
    from: await signer.getAddress(),
    to: cardanoDestination,
    amount,
  },
  { value: amount.add(ethers.utils.parseUnits("1")), gasLimit: 1_000_000 }
);
```


