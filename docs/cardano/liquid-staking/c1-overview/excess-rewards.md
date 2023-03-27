---
title: "Excess rewards"
sidebar_position: 2
---

# Add rewards


```solidity
function accreditToPool(uint256 _roi) public payable returns (uint256 amountIn, uint256 amountOut)
```

The Milkomeda bridge adds rewards to the LiquidStaking contract via the `accreditToPool` function. When utilising this function to add rewards to the contract, an `ROI` value which is a value ranging from 1% - 100% is specified. This `ROI` is used to calculate the amount of rewards that should be added to the contract, while the value leftover is stored in the contract, to be withdrawn by only the bridge; calculated using the [calculateDeposit](https://github.com/dcSpark/liquid-staking/blob/06210a0591087dc64ea3a0d9c09a5c12773d327b/src/liquidstaking/LiquidStaking.sol#L860) function. The amount of excess rewards is tracked via the [excessRewards](https://github.com/dcSpark/liquid-staking/blob/06210a0591087dc64ea3a0d9c09a5c12773d327b/src/liquidstaking/LiquidStaking.sol#L43) variable.

#### Example
`accreditToPool` is called with an `ROI` of 40(%) and a value of 100 MilkAda was sent in the transaction. 60 MilkAda will be added to the contract as rewards, while the leftover 40 MilkAda will be excess rewards that can be withdrawn by the bridge.

This function (`accreditToPool`) has no access control - anyone can call this it, but the excess rewards can only be withdrawn by the Milkomeda Bridge.

# Excess rewards

```solidity
function withdrawExcessRewards() external
```
The Milkomeda Bridge can call this function (`withdrawExcessRewards`) to withdraw the excess rewards. This function calls the bridge function `sendReward` and passing in the value of excess rewards, to the accumulated excess rewards to the bridge. Only the bridge can call this function.
