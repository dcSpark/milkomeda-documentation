---
sidebar_position: 3
---

# Integrating Liquid Staking


Milkomeda Liquid Staking can be integrated in any DApp by supporting the stMADA token, since rewards will accrue to the smart contract where that hold stMADA.

As a simple example, consider a smart contract where anyone can deposit any amount of stMADA, which will then accumulate rewards. This smart contract will also contain a withdraw function and the first person to call this function will receive all the amount deposited plus rewards accrued.

### Example: `RewardsAccruer` Smart Contract


We will call this smart contract _RewardsAccruer_, an we will initialize it with the address of the stMADA token (proxy) contract and the LiquidStaking (proxy) contract.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract RewardsAccruer {
    address public stMADA;
    address public liquidStaking;

    constructor(address _stMADA, address _liquidStaking) {
        stMADA = _stMADA;
        liquidStaking = _liquidStaking;
    }
}
```

To interact with the stMADA and LiquidStaking contracts we will also add the requires interfaces.

```solidity
interface ISTMADA {
    function transferFrom(
        address _from,
        address _to,
        uint256 _amount
    ) external returns (bool);

    function transfer(address _to, uint256 _amount) external returns (bool);
    function balanceOf(address _account) external view returns (uint256);
}

interface ILiquidStaking {
    function withdrawRewards() external returns (uint256);
    function rewards(address _account) external view returns (uint256);
}
```


The deposit function will be very simple as the contract won't store individual balances.

```solidity
    function deposit(uint256 _amount) public payable {
        ISTMADA(stMADA).transferFrom(msg.sender, address(this), _amount);
    }
```


Then we'll add a function for the smart contract to claim it's rewards, and a withdraw function.
Calling the withdraw function will return to the caller all the stMADA available in the smart contract, which includes the accrued rewards for the contract's shares.
(Notice the withdraw function is )


```solidity
    function claim() public {
        ILiquidStaking(liquidStaking).withdrawRewards();
    }

    function withdraw() public returns (bool) {
        claim();
        uint256 totalAmount = ISTMADA(stMADA).balanceOf(address(this));
        return ISTMADA(stMADA).transfer(msg.sender, totalAmount);
    }
```

<details><summary>
Full code
</summary>
<p>

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface ISTMADA {
    function transferFrom(
        address _from,
        address _to,
        uint256 _amount
    ) external returns (bool);

    function transfer(address _to, uint256 _amount) external returns (bool);
    function balanceOf(address _account) external view returns (uint256);
}

interface ILiquidStaking {
    function withdrawRewards() external returns (uint256);
    function rewards(address _account) external view returns (uint256);
}

contract RewardsAccruer {
    address public stMADA;
    address public liquidStaking;

    constructor(address _stMADA, address _liquidStaking) {
        stMADA = _stMADA;
        liquidStaking = _liquidStaking;
    }

    function deposit(uint256 _amount) public payable {
        ISTMADA(stMADA).transferFrom(msg.sender, address(this), _amount);
    }

    function claim() public {
        ILiquidStaking(liquidStaking).withdrawRewards();
    }

    function withdraw() public returns (bool) {
        claim();
        uint256 totalAmount = ISTMADA(stMADA).balanceOf(address(this));
        return ISTMADA(stMADA).transfer(msg.sender, totalAmount);
    }
}

```
</p>
</details>


#### Deployment 

We will use [forge](https://book.getfoundry.sh/reference/forge/forge-create) from the Foundry is a smart contract development toolchain to deploy our smart contract.

First, let's creating a `.env` file to store some variables:

```bash
RPC_URL=https://rpc-devnet-cardano-evm.c1.milkomeda.com
STMADA_ADDRESS=0xE42f60abfC51c9620706b69aEEEf838D25120150
LIQUID_STAKING_ADDRESS=0x45f48842ef34da79a5b426f427e63d9fa8b53696
PRIVATE_KEY=d0f3d1a282be7ec0489e0c37130d104e8297397cccadeaa8cb30d680aa48a128
DEPLOYED_CONTRACT=
```


The RPC url is pointing to [Devnet](/cardano/for-developers/overview) and for the contstructor arguments we'll use the [addresses](/cardano/liquid-staking/for_developers/deployed_contracts) of stMADA token and the LiquidStaking contract. The private key should be for an address that has mADA to be able to deploy and interact with the smart contract.

Load the variables into the environment by running:

```bash
source .env
```



Now we can deploy the smart contract:

```bash
forge create src/tutorial/RewardsAccruer.sol:RewardsAccruer\
 --legacy\
 --rpc-url $RPC_URL\
 --private-key $PRIVATE_KEY\
 --constructor-args $STMADA_ADDRESS $LIQUID_STAKING_ADDRESS
```

(Notice the `--legacy` flag is used since Milkomeda C1 mainnet and devnet don't support EIP-1559)

After deployment, save the contract address to the `DEPLOYED_CONTRACT` variable in the `.env` file and load it again.




To test the new deployed contrct, let's make a deposit, using forge's [cast](https://book.getfoundry.sh/reference/cast/cast). The first command will approve spending the stMADA by the newly deployed contract, and the second will make a deposit of 1 stMADA.

```bash
cast send $STMADA_ADDRESS\
 "approve(address,uint256)(bool)" $DEPLOYED_CONTRACT 1ether\
 --rpc-url $RPC_URL\
 --legacy --private-key $PRIVATE_KEY

cast send $DEPLOYED_CONTRACT\
 "deposit(uint256)()" 1ether\
  --rpc-url $RPC_URL\
  --legacy --private-key $PRIVATE_KEY
```

Now we can check the stMADA balance of the smart contract, which should output 1000000000000000000 (1 stMADA) after one inicial deposit.

```bash
cast call $STMADA_ADDRESS "balanceOf(address)(uint256)" $DEPLOYED_CONTRACT --rpc-url $RPC_URL
```

We can also check the unclaimed rewards for the deployed smart contract in the Liquid staking contract. It should be zero until some ADA rewards are deposited distributed.

```bash
cast call $LIQUID_STAKING_ADDRESS "rewards(address)(uint256)" $DEPLOYED_CONTRACT --rpc-url $RPC_URL
```

And finally, all balance (including rewards) can we removed from the deployed smart contract by calling the `withdraw` function:


```bash
cast send $DEPLOYED_CONTRACT "withdraw()()" --rpc-url $RPC_URL --legacy --private-key $PRIVATE_KEY
```

















