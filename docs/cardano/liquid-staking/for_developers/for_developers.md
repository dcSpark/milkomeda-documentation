---
sidebar_position: 5
---


# For Developers

**Milkomeda Liquid Staking** protocol is composed of 3 smart contracts with most of the logic being contained the the Liquid Staking contract, which has some functions that are public and can be called by DApps or users, and a specific function to reposit rewards in the contract that can only be called from the Milkomeda Bridge.


| Contract      | Description                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------- |
| LiquidStaking | The core staking contract                                                                           |
| StakedMilADA  | A ERC20 like token used to represent stakers share of the pool                                      |
| Pillage       | A utility contract to withdraw rewards from smart contract account unable to withdraw their rewards |

You can find the contracts code [here](https://github.com/dcSpark/liquid-staking)



## LiquidStaking Contract


### Variables

The Staking Smart Contract keeps the count of the total _mADA_ available in total and for each user. There are at least three variables that track the movements of _mADA_ native tokens:

- `userDeposit`: a mapping of the amount of _mADA_ the user has as balance (includes deposits + claimed rewards)

- `totalDeposited`: the total amount of `userDeposit`

- `totalRewards`: the total unclaimed rewards deposited up until this point by the Milkomeda DAO

### Functions

#### **stake**

Every time the `stake` method is executed, a specific amount of shares is minted in favor of the caller. This is due to the double accounting system shared by the LiquidStaking and the _stMADA_ Token smart contracts.

In order to calculate the number of shares to be minted, the LiquidStaking contract keeps track of the total deposited in _mADA_ while the Staked _mADA_ Token keeps track of the percentage ownership of each user in relation to the total _mADA_ deposited.

:::note
Sending mADA to the liquid staking contract will indirectly call the _stake_ function for the value sent
:::

#### unstake

When the method `unstake` is executed, the `withdrawRewards` is called internally on behalf of the user and the additional rewards are deposited to them (needed to calculate the number of shares to burn)

#### withdrawRewards

This function converts the unclaimed rewards of the caller to user stMADA balance. All externally owned accounts (EOA) have the assumption that they are capable of withdrawing rewards. For smart contract accounts, see [claim rewards](./claim-rewards)

Since rewards are accumulated on each distribution, users do not need to call this function every epoch


:::danger
: withdraw any accumulated stmADA rewards (also: see _ableToWithdrawRewards_ for dApps)
:::


#### **accreditToPool**



This function is used by Milkomeda DAO to deposit new rewards into the Liquid Staking smart contract. Onyle the Bridge address can call this function which is method is meant to be called at every epoch with all accrued gains from the Cardano chain.

Rewards are deposited based on an `ROI` and value passed on the function call. The resulting rewards are then added to the `totalRewards` variable that keeps track of all unclaimed rewards.

Note that this function has no concept of epochs or time passage.

#### **removeRewardsOnBehalf**:

called by the Milkomeda DAO to claim rewards for a smart contract that cannot claim its own rewards

See [claim rewards](./claim-rewards)

## Claiming rewards

You can claim your rewards every epoch (unlike Cardano where you have to wait multiple epochs before your first reward)

dApps can also accrue _stmADA_ and can claim the staking rewards of any token they've accrued.

The following are required:

1. Ensure your contract has a way of calling with `withdrawRewards` function of the liquid staking contract

```solidity
function withdrawRewards() external returns (uint256 _rewardsInmADA);
```

2. Ensure your contract has a `ableToWithdrawRewards` that returns true (a-la EIP-165). If your contract does not have a `ableToWithdrawRewards` function, your dApp will **forfeit** any staking rewards accrued by the _stMADA_ in your dApp

```solidity
function ableToWithdrawRewards() external pure returns (bool) {
    return true;
}
```

Optionally, you can implement the `stake` and `unstake` functions if you want to convert to/from _MADA_

Additionally, note that the default behavior when sending _MADA_ to the liquid staking contract is to stake the tokens. For example, you can implement the stake function wrapper as seen below

```solidity
function stake(uint256 _amountToStake) external {
    payable(stakingSmartContractAddress).transfer(_amountToStake);
}
```

<details>
  <summary>Why is ableToWithdrawRewards required?</summary>
  
  To avoid staking rewards accumulating forever in dApps that will never be able to claim the rewards, the Milkomeda DAO has a feature where it can claim the rewards on behalf of a smart contract that it judged unable to every claim the rewards

There are 2 ways of checking whether or not a contract can claim rewards that we investigated:

1. A staticcall following EIP-165. This costs 3,698 every time Milkomeda DAO attempts to withdraw rewards on behalf of a particular account. The downsides are that it requires work on the smart contract implementer and, if they forget to add the `ableToWithdrawRewards` function, they can't add it later without upgrading their contract
2. Maintaining a map of whether or not this contract has claimed rewards in the past so that once a contract claims rewards once, the DAO can no longer claim on their behalf. Other than censorship concerns, this would also cost 22,257 gas to initially add an entry into the map (higher initial cost for lower read cost)

Due to both the censorship concerns and the higher initial cost, we chose option (1)

</details>

## stMADA formula

Whenever a user stakes, internally, the user has a mapping that represents the percentage ownership a particular user has as a result of his deposit.

The following formula is used to calculate the number of shares to receive from an amount of _MADA_ deposited:

_Formula one_:

```
_sharesAmount = (totalShares * _MADAAmount) / (totalDeposited + totalRewards)
```

where

- `totalShares`: Total shares created as a result of staking _MADA_
- `_milkAdaAmount`: Amount of _milkADA_ that a user is converting to shares
- `totalDeposited`: Total amount of _milkADA_ deposited in the Staking Smart Contract
- `totalRewards`: Total amount of rewards deposited by Milkomeda DAO
- `_sharesAmount`: Amount of shared to received as a result of depositing `_milkAdaAmount`

Once the amount of shares is calculated, the Staking Smart Contracts calls the `mint` function from the token to increase the balance of the user in the same amount.

## stMilkADA vs sstMilkADA

This contract has two tokens:

| Ticker     | Name                     | Staking rewards  | Denominated in |
| ---------- | ------------------------ | ---------------- | -------------- |
| stMilkADA  | Staked Milk ADA          | Manually claimed | milkADA        |
| sstMilkADA | Share of Staked Milk ADA | Automatic        | Shares         |

The tradeoff is that

- stMilkADA is intuitive to use (denominated in milkADA), but requires manually claiming rewards (so you may not get your rewards if you store your milkADA inside a dApp)
- sstMilkADA is less intuitive as it is denominated in shares (which we will explain below) and as such its ADA value changes over time

When you deposit milkADA into the contract, internally the contract computes how much of all staked ADA belongs to you and allocates shares appropriately

For example, if there is 45 milkADA locked in contract and you deposit 5 ADA, you will own 5 ADA of (45 + 5) total ADA, so you will have 10% ownership

This 10% ownership is what is meant to be (indirectly) represented by _sstMilkADA_ (to see the formula the defines the amount of `sstMilkADA` given, see [contract overview](./contract-overview))

Many protocols in the past have experimented with automatically rebasing assets (assets where the value of the asset changes automatically overtime) as they can capture behavior like automatic accural of staking rewards. However, these rebasing tokens are historically hard to use with DeFi protocol (ex: most DEXs don't expect the value of a token to suddenly go up during an epoch boundary). To partially address this, _sstMilkADA_ is denominated in shares instead of a rebased _milkADA_ value.

To maintain a simple user experience, _stMilkADA_ provided a token that requires a manual rebase (aka manually claiming accured rewards). This is both more similar to how Cardano works and also more intuitive for users (at the cost of losing the ability to claim your rewards if you send your tokens to a smart contract)

You can find the full contract [here](https://github.com/dcSpark/liquid-staking/blob/main/src/pillage/Pillage.sol)

## Dead Shares

To mitigate against inflation attacks, we stake on initialization of the [Liquid Staking contract](https://github.com/dcSpark/liquid-staking/blob/0cffd0d6bdaff73d67d72983f652e7f152ad8074/src/LiquidStaking/LiquidStaking.sol#L148), creating dead shares. In order to create dead shares, a value (`msg.value` > 0) must be sent when initializating the staking contract. And this value is used to create the first stake in the pool, which is needed to protect against inflation attacks. Creating dead shares doesn't entirely solve this problem, but it reduces the profit that could be made from it .This dead shares is minted to the deployer - it's expected this shares and stake will never be withdrawn, unstaked or redeemed


# Contract: StakedMilkAda

_stMilkADA_ is is an ERC20-like token - though it's not a rebase token, it still doesn't fully comply with the ERC20 standard. Modifications have been made to some of its functions, such as `transfer`, `transferFrom` and `balanceOf`. On top of that, the `mint` and `burn` methods have been protected by roles: only the Staking Smart Contract can call those methods. While it could have been possible to inherit the ERC20 contract from Open Zeppelin, it was more than necessary to only comply with the interface (IERC20) since several methods have custom implementations.

The contract only emit a Tranfer event when an explicit transfer occurs between holders. From the ERC20 standard the Transfer amount or value in the transfer signature represents the amount of the token sent. Though in the StakedMilkAda contract, while it still represents the amount being sent, it's not the amount of tokens, but the amount of MilkAda. A new event (TransferShares) has been added. This event has the same signature and can be seen as replicating the Tranfer event in the ERC20 standard; all that differs is the name.

The main reason for implementing customized complying methods is that there are two account systems within the token: one that is shares-based and another one that represents the equivalence one to one with the amount of Milkada deposited. After staking an X amount of _milkADA_, a Y amount of shares are minted for the user. However, he will only know about the total amount of _milkADA_ deposited, which will be represented by the Staked _milkADA_ Token that he will see in his wallet balance.

Let's see how the methods are affected:

- `balanceOf`

Returns back the amount of _milkADA_ deposited by the user in the Staking Smart Contract. The token Staked _milkADA_ does not keep the count of the total _milkADA_ deposited. Hence, when the method `balanceOf` is consulted, internally an inter-contract call is executed. The Staking Smart Contract responds to this question and returns the amount of _milkADA_ deposited by a particular user. When the balance is shown, it's portrayed as Staked _milkADA_ Token.

```solidity
    function balanceOf(
        address _account
    ) public view override returns (uint256) {
        bytes memory returndata = _staticcall(
            abi.encodeWithSignature("balanceOf(address)", _account),
            stakingSCProxy
        );

        return abi.decode(returndata, (uint256));
    }
```

- `totalSupply`

Another inter-contract call is necessary to grab the total of _milkADA_ deposited, which is stored in the Staking Smart Contract. In other words, `totalSupply` does not give back the total number of minted shares but rather the total amount of _milkADA_ deposited by all users.

```solidity
    function totalSupply() public view override returns (uint256) {
        bytes memory returndata = _staticcall(
            abi.encodeWithSignature("totalDeposited()"),
            stakingSCProxy
        );

        return abi.decode(returndata, (uint256));
    }
```

- `transfer` and `transferFrom`

All methods that involve the movements of funds that are executed have as input a specific amount of Milkada Token. After all, the user is only aware of the amount of _milkADA_ deposited represented by Staked _milkADA_ Token.

When the methods `transfer` and `transferFrom` are called, the amount of _milkADA_ received is converted to shares to make the necessary updates. The Formula One described before comes into play to convert the amount of Milkada to shares.

Since there is a double accounting system, aside from updating the number of shares one particular account has after the transfer of _milkADA_, it's also required to update the balances of _milkADA_ deposited in the Staking Smart Contract. For that reason, these two methods (`transfer` and `transferFrom`) have side effects on the other smart contract (the Liquid Staking contract). The side effect simply decreases the count of _milkADA_ deposited in the sender and adds that exact amount to the count of the receiver.

```solidity
function sideEffectTransferMilkAda(...) … {
    ...
    userDeposit[_from] -= _milkAdaAmount;
    userDeposit[_to] += _milkAdaAmount;
}
```

- `mint` and `burn`

As of now, these two methods can only be called by the Liquid Staking contract. In the same fashion as the two methods described above, before calling `mint` or `burn` the input of _milkADA_ amount is converted into shares first.
The only place where `mint` is called is within the `stake` method of the Staking Smart Contract. Inversely, `burn` is only called whenever the user wants to `unstake` the total _milkADA_ deposited.

- `increaseAllowance`, `decreaseAllowance`, `approve` and `allowance`

All these methods are performed with the input of _milkADA_ amount, not the shares. The user through `balanceOf` would be able to know the amount of MIlkAda deposited and not the number of minted shares. Hence, it makes sense to work these methods with his _milkADA_ balance.

# Contract: Pillage

### Pillaging

Contracts that do not implement the `ableToWithdrawRewards` function (as explained [here](./contract_liquidstaking) forfeit their staking rewards, and these rewards will be pillaged by the Milkomeda DAO.

When an account is Pillaged, its accumulated rewards is removed and the value is automatically staked on behalf of the pillager (Milkomeda DAO).

```solidity
    function pillage(address _account, bytes32 _transactionId) external {
        // Ensure the msg.sender is a validator
        _assertValidator(msg.sender);

        // Add the validator vote, encoding the the data to be executed.
        // The staking smart contract has a function removeRewardsOnBehalf
        // that removes the rewards from an account that cannot withdraw rewards
        // and adds it as a stake for the pillager.
        Transaction memory transaction = _addTransaction(
            _transactionId,
            abi.encodeWithSignature("removeRewardsOnBehalf(address)", _account),
            stakingSCProxy
        );

        Status status = _confirmTransaction(_transactionId, transaction);
        if (status == Status.SUCCESS) {
            emit Pillaged(_account);
        }
    }
```

#### Example:

Smart contract `A` doesn't implement the `ableToWithdrawRewards` function - they stake 5 MilkADA and have accrued staking rewards of 3 MilkADA. Account `A` is then pillaged by the Milkomeda DAO - its rewards of 3 MilkADA is withdrawn, and staked on behalf of the pillager. Now the Milkomeda DAO has a stake balance of 3 MilkADA, and contract `A` has a stake balance of 5 MilkADA, but reward value of 0.

You can find the full contract [here](https://github.com/dcSpark/liquid-staking/blob/main/src/pillage/Pillage.sol)
