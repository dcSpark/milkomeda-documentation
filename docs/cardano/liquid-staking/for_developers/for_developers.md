---
sidebar_position: 2
---

# Components

**Milkomeda Liquid Staking** protocol is composed of 3 upgradeable smart contracts (UUPSUpgradeable implemented using an ERC1967Proxy), with most of the logic being contained the the Liquid Staking contract, which has some functions that are public and can be called by DApps or users, and a specific function to reposit rewards in the contract that can only be called from the Milkomeda Bridge.


| Contract      | Description                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------- |
| LiquidStaking | The core staking contract                                                                           |
| StakedMilADA  | A ERC20 like token used to represent stakers share of the pool                                      |
| Pillage       | A utility contract to withdraw rewards from smart contract account unable to withdraw their rewards |

You can find the contracts code [here](https://github.com/dcSpark/liquid-staking)


## Contracts

### LiquidStaking


#### Variables

The Staking Smart Contract keeps the count of the total _mADA_ available in total and for each user. There are at least three variables that track the movements of _mADA_ native tokens:

- `userDeposit`: a mapping of the amount of _mADA_ the user has as balance (includes deposits + claimed rewards)

- `totalDeposited`: the total amount of `userDeposit`

- `totalRewards`: the total unclaimed rewards deposited up until this point by the Milkomeda DAO

#### Functions

- **`stake`**

    Every time the `stake` method is executed, a specific amount of shares is minted in favor of the caller. This is due to a double accounting system shared by the LiquidStaking and the _stMADA_ Token smart contracts.

    In order to calculate the number of shares to be minted, the LiquidStaking contract keeps track of the total deposited in _mADA_ while the Staked _mADA_ Token keeps track of the percentage ownership of each user in relation to the total _mADA_ deposited.


```solidity
    function stake() public payable returns (uint256) {
        require(msg.value > 0, "LS: No value sent");

        uint256 shares = previewStake(msg.value);

        // Check for rounding error since we round dowm in `previewStake`
        require(shares != 0, "LS: ZERO_SHARES");

        _mint(_msgSender(), shares);

        totalShares += shares;
        totalDeposited += msg.value;
        userDeposit[_msgSender()] += msg.value;

        emit Staked(_msgSender(), msg.value, shares);

        return shares;
    }
```

The `stake` function with emit the `Staked` event

```solidity
    event Staked(
        address indexed account,
        uint256 indexed milkAdaDeposited,
        uint256 indexed sharesReceived
    );

```


:::note
Sending mADA to the liquid staking contract will indirectly call the _stake_ function for the value sent

```solidity
fallback() external payable {
    stake();
}
```

:::

- **`unstake`**

    The unstake with exchange stMADA for mADA.

    When the method `unstake` is executed, the `withdrawRewards` is called internally on behalf of the user and the additional rewards are deposited to them (needed to calculate the number of shares to burn)


```solidity
    function unstake(
        uint256 _amount
    ) external nonReentrant returns (uint256, uint256) {
        (...)
    }
```

The `unstake` function with trigger the `Unstaked` event.


```solidity
event Unstaked(
    address indexed account,
    uint256 indexed sharesToWithdraw,
    uint256 indexed milkAdaAmountToWithdraw
);
```



<!-- - **`withdrawRewards`**

    This function converts the unclaimed rewards of the caller to user stMADA balance. All externally owned accounts (EOA) have the assumption that they are capable of withdrawing rewards. For smart contract accounts, see [claim rewards](./claim-rewards)

    Since rewards are accumulated on each distribution, users do not need to call this function every epoch -->


<!-- :::danger
: withdraw any accumulated stmADA rewards (also: see _ableToWithdrawRewards_ for dApps)
::: -->


<!-- -  **`accreditToPool`**

    This function is used by Milkomeda DAO to deposit new rewards into the Liquid Staking smart contract. Onyle the Bridge address can call this function which is method is meant to be called at every epoch with all accrued gains from the Cardano chain.

    Rewards are deposited based on an `ROI` and value passed on the function call. The resulting rewards are then added to the `totalRewards` variable that keeps track of all unclaimed rewards.

    Note that this function has no concept of epochs or time passage. -->


- **removeRewardsOnBehalf**

    There is an access controlled function can only be called by the Milkomeda DAO to claim rewards for a smart contract that cannot claim its own rewards.

    See below [claim rewards](./claim-rewards)




#### Claiming rewards

Rewards can be claimed on every epoch (unlike Cardano where there is a wait period of multiple epochs before the first reward)

dApps can also accrue _stmADA_ and can claim the staking rewards of any token they've accrued.

The following are required:

1. Ensure the contract has a way of calling with `withdrawRewards` function of the liquid staking contract

```solidity
function withdrawRewards() external returns (uint256 _rewardsInmADA);
```

2. Ensure the contract has a `ableToWithdrawRewards` that returns true (a-la EIP-165). If the contract does not have a `ableToWithdrawRewards` function, your dApp will **forfeit** any staking rewards accrued by the _stMADA_ held in the smart contract

```solidity
function ableToWithdrawRewards() external pure returns (bool) {
    return true;
}
```

Optionally, `stake` and `unstake` functions can be implemented to convert to/from _mADA_


Additionally, note that the default behavior when sending _MADA_ to the liquid staking contract is to stake the tokens. For example, you can implement the stake function wrapper as seen below

```solidity
function stake(uint256 _amountToStake) external {
    payable(stakingSmartContractAddress).transfer(_amountToStake);
}
```

<details>
  <summary>Why is ableToWithdrawRewards required?</summary>
  
  To avoid staking rewards accumulating forever in dApps that will never be able to claim the rewards, the Milkomeda DAO has a feature where it can claim the rewards on behalf of a smart contract that it judges unable to ever claim the rewards

There were at 2 ways of checking whether or not a contract could claim rewards :

1. A staticcall following EIP-165. This costs 3,698 every time Milkomeda DAO attempts to withdraw rewards on behalf of a particular account. The downsides are that it requires work on the smart contract implementer and, if they forget to add the `ableToWithdrawRewards` function, they can't add it later without upgrading their contract
2. Maintaining a map of whether or not a particular contract has claimed rewards in the past so that once a contract claims rewards once, the DAO can no longer claim on their behalf. Other than censorship concerns, this would also cost 22,257 gas to initially add an entry into the map (higher initial cost for lower read cost)

Due to both the censorship concerns and the higher initial cost, Milkomeda implemented the first option (1).

</details>




#### Dead Shares

To mitigate against inflation attacks, we stake on initialization of the [Liquid Staking contract](https://github.com/dcSpark/liquid-staking/blob/0cffd0d6bdaff73d67d72983f652e7f152ad8074/src/LiquidStaking/LiquidStaking.sol#L148), creating dead shares. In order to create dead shares, a value (`msg.value` > 0) must be sent when initializating the staking contract. And this value is used to create the first stake in the pool, which is needed to protect against inflation attacks. Creating dead shares doesn't entirely solve this problem, but it reduces the profit that could be made from it .This dead shares is minted to the deployer - it's expected this shares and stake will never be withdrawn, unstaked or redeemed


### StakedMADA (stMADA)

_stMADA_ is an ERC20-like token - though it's not a rebase token, it still doesn't fully comply with the ERC20 standard. Modifications have been made to some of its functions, such as `transfer`, `transferFrom` and `balanceOf`. On top of that, the `mint` and `burn` methods have been protected by roles: only the Staking Smart Contract can call those methods. While it could have been possible to inherit the ERC20 contract from Open Zeppelin, it was more than necessary to only comply with the interface (IERC20) since several methods have custom implementations.

The contract only emits a Tranfer event when an explicit transfer occurs between holders. From the ERC20 standard the Transfer amount or value in the transfer signature represents the amount of the token sent. Though in the StakedMADA contract, while it still represents the amount being sent, it's not the amount of tokens, but the amount of mADA. A new event (TransferShares) has been added. This event has the same signature and can be seen as replicating the Tranfer event in the ERC20 standard; all that differs is the name.

The main reason for implementing customized complying methods is that there are two account systems within the token: one that is shares-based and another one that represents the equivalence one to one with the amount of mADA deposited. After staking an X amount of _mADA_, an Y amount of shares are minted for the user. However, he will only know about the total amount of _mADA_ deposited, which will be represented by the _stMADA_ Token that he will see in his wallet balance.

Let's see how the methods are affected:

- `balanceOf`

    Returns back the amount of _mADA_ deposited by the user in the LiquidStaking smart contract. The token _stMADA_ does not keep the count of the total _mADA_ deposited. Hence, when the method `balanceOf` is consulted, internally an inter-contract call is executed. The Staking Smart Contract responds to this query and returns the amount of _mADA_ deposited by a particular user. When the balance is shown, it's portrayed as _stMADA_ Token.

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

    Another inter-contract call is necessary to grab the total of _mADA_ deposited, which is stored in the LiquidStaking smart contract. In other words, `totalSupply` does not return the total number of minted shares but rather the total amount of _mADA_ deposited by all users.

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

    All methods that involve the movements of funds that are executed have as input a specific amount of mADA Token. After all, the user is only aware of the amount of _mADA_ deposited represented by _stMADA_ Token.

    When the methods `transfer` and `transferFrom` are called, the amount of _mADA_ received is converted to shares to make the necessary updates. 

    Since there is a double accounting system, aside from updating the number of shares one particular account has after the transfer of _mADA_, it's also required to update the balances of _mADA_ deposited in the LiquidStaking smart contract. For that reason, these two methods (`transfer` and `transferFrom`) have side effects on the other smart contract (the Liquid Staking contract). The side effect simply decreases the count of _mADA_ deposited in the sender and adds that exact amount to the count of the receiver.

```solidity
function sideEffectTransferMilkAda(...) … {
    ...
    userDeposit[_from] -= _milkAdaAmount;
    userDeposit[_to] += _milkAdaAmount;
}
```

- `mint` and `burn`

    These two methods can only be called by the LiquidStaking contract. In the same fashion as the two methods described above, before calling `mint` or `burn` the input of _mADA_ amount is converted into shares.
    The only place where `mint` is called is within the `stake` method of the LiquidStaking smart contract. Inversely, `burn` is only called when the user wants to `unstake` the total _mADA_ deposited.

- `increaseAllowance`, `decreaseAllowance`, `approve` and `allowance`

    All these methods are performed with the input of _mADA_ amount, not the shares. The user through `balanceOf` would be able to know the amount of mADA deposited and not the number of minted shares. Hence, it makes sense to work these methods with his _mADA_ balance.

### Pillage

Contracts that do not implement the `ableToWithdrawRewards` function (as explained [here](/cardano/liquid-staking/for_developers/#claiming-rewards) forfeit their staking rewards, and these rewards will be pillaged by the Milkomeda DAO.

When an account is Pillaged, its accumulated rewards are removed and the value is automatically staked on behalf of the pillager (Milkomeda DAO).

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

- Smart contract `A` doesn't implement the `ableToWithdrawRewards` function - 
- Smart contract `A` holds 5 stmADA and have accrued staking rewards of 3 MilkADA. 
- Account `A` is then pillaged by the Milkomeda DAO - its rewards of 3 MilkADA are withdrawn, and staked on behalf of the pillager. 
- Now the Milkomeda DAO has a stake balance of 3 MilkADA, and contract `A` has a stake balance of 5 MilkADA, but reward value of 0.

You can find the full contract [here](https://github.com/dcSpark/liquid-staking/blob/main/src/pillage/Pillage.sol)
