---
sidebar_position: 1
---

# Overview

Wrapped smart contracts (WSC) are a powerful protocol that enables the execution of Layer 2 smart contracts directly from Layer 1 wallets. This integration is made possible through the provider object, which adheres to the [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) standard, acting as a bridge between the EVM provider and the Layer 1 provider. By using WSC, EVM DApps can seamlessly communicate with Layer 1 wallets and execute transactions on Layer 2 smart contracts.


### Architecture

Wrapped Smart Contracts rely on three key components:

- **Smart Contracts** - Similar to wallets like Flint or Metamask in Milkomeda C1, users typically have dedicated accounts. To simplify the process, a smart contract called `Actor` is utilized as an account abstraction, executing actions on behalf of the user.

- **Oracle** - The Oracle is a node.js JSON-RPC API that facilitates message relay between Layer 1 and Layer 2 actors. It provides essential methods for deploying the `Actor` (using the `ActorFactory`) and executing transactions on behalf of users.

- **Provider** - The front-end library injects the provider object based on [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) into the window.ethereum object. This customized provider includes specific methods like `eth_sendTransaction` or `eth_requestAccounts`, which interact with the Layer 1 wallet and transform the result accordingly.


### Flow (TODO: Alternatives...)

Every single step requires user interaction in the form of a transaction.

- **User Action**: The user initiates an action on an EVM dApp while on the main blockchain. This request is translated into specific parameters for a proxy smart contract.
- **Proxy Deployment and Execution**: A proxy smart contract, reflecting the user's intent, is deployed on the sidechain. The proxy contract then interacts with the appropriate smart contract on the sidechain to execute the desired action.
- **Result Processing**: The outcome from the sidechain smart contract execution is relayed back to the user on the main blockchain. The user's state is updated, and they see the results of their action on the dApp, all while staying on the main blockchain.


import img1 from "@site/static/img/wsc/overview.png";

<img src={img1} className="img-full" alt="Connect Wallets" />





1. **User** sends request to create **Actor** with the `tx_data`calling **Final SC**, and get the actor address back. `tx_data` is an encoded transaction which the **Actor** will call on the **Final SC**. (The actor address is derived from the L1 address using the `CREATE2` opcode.)


2. **External** calls the **ActorFactory** to deploy **Actor** with the `tx_data` calling **Final SC**

3. **ActorFactory** deploys **Actor** using CREATE2 based on description of deploy function

4. **User** asserts correct **Actor** address and sends the funds there (through the **Bridge**)

5. **Bridge** wraps the funds and sends it to the **Actor**

6. **External** listens to the **Bridge** events and once the funds are wrapped it calls execute

7. **Actor** calls the **FinalSC** on behalf of **User**


8. After execute is complete, **Actor** calls the withdraw which creates a request to the **Bridge**

9. **Bridge** unwraps the funds back to the **User**



**Note on Gas:** The gas is being paid by the Actor smart contract itself, therefore to execute any transaction the actor needs to have enough balance not only to performa the trasaction but also to pay gas. To fund the **Actor** smart contract the **User** should use bridge or the DApp should prompt the wallet to send the funds to the **Actor** through the **Bridge**.


### Smart contracts

| Contract | Description |
|---|---|
| [Actor](https://github.com/dcSpark/wrapped-smartcontracts/blob/main/packages/contracts/contracts/Actor.sol) | a smart contract to be deployed on the Milkomeda Layer 2 that is bound to the specific L1 address. It serves as an account abstraction: it has a balance, a nonce, and can execute signed transactions on behalf of the user. 
| [ActorFactory](https://github.com/dcSpark/wrapped-smartcontracts/blob/main/packages/contracts/contracts/ActorFactory.sol) | a smart contract deployed on the Milkomeda Layer 2 that is used to deploy actors. It uses CREATE2 opcode to deterministically derive Actor address from the L1 address. |
| [L1MsgVerify](https://github.com/dcSpark/wrapped-smartcontracts/blob/main/packages/contracts/contracts/IL1MsgVerify.sol) | is a precompiled contract that is used to verify the signature of the message signed on the Layer 1 mainchain. |
| CardanoSigVerification | is a precompiled contract that is deprecated, but needed for backwards compatibility with the milkomeda-c1 testnet. |
 

To verify the signature the actor will use the [L1MsgVerify](https://github.com/dcSpark/wrapped-smartcontracts/blob/main/packages/contracts/contracts/IL1MsgVerify.sol) precompiled contract that can verify L1 signatures. The execution will be invoked by the oracle service, which will get exact refund for the gas paid during the execution. |


The [ActorFactory](https://github.com/dcSpark/wrapped-smartcontracts/blob/main/packages/contracts/contracts/ActorFactory.sol) has the deploy function the deploy the `Actor` to an address using CREATE2. The address will be hash(0xFF, sender, salt, bytecode),
where sender is factory, so salt has to be, hash(user, tx_data, random) and random can be predictable so it can be block.timestamp.

```javascript
  function deploy(string calldata mainchainAddress, bytes32 salt) public returns (Actor) {
      // Using CREATE2 to have deterministic actor address tied to the `mainchainAddress`
      Actor actor = new Actor{salt: salt}(mainchainAddress, l1Type);

      emit Deployed(address(actor), mainchainAddress, salt);

      return actor;
  }
```


Since the new address is the combination of `bytecode`, `user` and `tx_data`, we can be sure that the deployed `Actor` won't be corrupted, and we can also  ssert the address on the clientside.

In the [compile task](https://github.com/dcSpark/wrapped-smartcontracts/blob/main/packages/contracts/tasks/compile.ts) the `Actor` contract is compiled to yul code and prepended with the code to store the transaction gas limit to storage. The gas limit is crucial to the calculation of used gas and to verify that the oracle acted honestly and didn't provide less gas than user signed and therefore the transaction would run out of gas. The yul code is later compiled to the evm bytecode and edited in the artifacts.






