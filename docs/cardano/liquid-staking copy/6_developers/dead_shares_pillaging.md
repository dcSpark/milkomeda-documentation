# Dead Shares & Pillaging

### Dead Shares

To mitigate against inflation attacks, we stake on initialization of the [Liquid Staking contract](https://github.com/dcSpark/liquid-staking/blob/0cffd0d6bdaff73d67d72983f652e7f152ad8074/src/LiquidStaking/LiquidStaking.sol#L148), creating dead shares. In order to create dead shares, a value (`msg.value` > 0) must be sent when initializating the staking contract. And this value is used to create the first stake in the pool, which is needed to protect against inflation attacks. Creating dead shares doesn't entirely solve this problem, but it reduces the profit that could be made from it .This dead shares is minted to the deployer - it's expected this shares and stake will never be withdrawn, unstaked or redeemed

### Pillaging

Contracts that do not implement the `ableToWithdrawRewards` function (as explained [here](https://github.com/dcSpark/milkomeda-documentation/blob/liquid-staking/docs/cardano/liquid-staking/c1-overview/claim-rewards.mdx) forfeit their staking rewards, and these rewards will be pillaged by the Milkomeda DAO.

When an account is Pillaged, its accumulated rewards is removed and the value is automatically staked on behalf of the pillager (Milkomeda DAO).

#### Example:

Smart contract `A` doesn't implement the `ableToWithdrawRewards` function - they stake 5 MilkADA and have accrued staking rewards of 3 MilkADA. Account `A` is then pillaged by the Milkomeda DAO - its rewards of 3 MilkADA is withdrawn, and staked on behalf of the pillager. Now the Milkomeda DAO has a stake balance of 3 MilkADA, and contract `A` has a stake balance of 5 MilkADA, but reward value of 0.

You can find the full contract [here](https://github.com/dcSpark/liquid-staking/blob/main/src/pillage/Pillage.sol)

