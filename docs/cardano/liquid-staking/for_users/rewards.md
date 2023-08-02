---
title: "Rewards"
sidebar_position: 4
---

# ADA Rewards

Staking rewards are distributed to stMADA holders on a pro-rata basis every epoch (~5 days) in the Cardano Mainnet. These rewards are calculated based on several factors, including the number of blocks created by the staking pool, the pool's performance, and the total amount of ADA staked in the pool.

The Milkomeda DAO charges a 5% fee on the Cardano staking rewards, which is used to support the development and maintenance of the Milkomeda ecosystem. The remaining 95% of the rewards are then distributed to the holders of stMADA tokens.


## Calculating Rewards

The rewards earned by each mADA holder are directly proportional to the amount of mADA they have staked in the **Milkomeda Liquid Staking** smart contract. These rewards are accumulated on-chain as accrued rewards. 

:::note

**Formula for determining ADA Rewards:**

<p class="text-center">rewards = (userShares / totalShares) x (totalRewards + totalDeposited) - userDeposit</p>


where:

- userShares - total amount of stMADA balance for user
- totalShares - total staked mADA representing shares that has been minted to stakers (ie, stMADA)
- totalRewards - total amount of unclaimed rewards for all users
- totalDeposited - amount of totalShares + claimed rewards
- userDeposit - total amount of stMADA + claimed rewards for that user

:::




## Example

### Staking proportion


Consider a scenario with only two stakers in the Liquid Staking smart contract, with the following shares:

| | Shares (stMADA)| Balance | Rewards |
|---|---|---|---|
| User A | 75 | 75 | 0 |
| User B | 25 | 25 | 0 |
| **Total** | **100** | **100** | **0** |


After 8 ADA rewards are deposited in the liquid staking contract, the distribution becomes:


| | Shares (stMADA)| Balance | Rewards |
|---|---|---|---|
| User A | 75 | 75 | 6 |
| User B | 25 | 25 | 2 |
| **Total** | **100** | **100** | **8** |


UserA reward = (75/100) * (8 + 100) - 75 = 6

UserB reward = (25/100) * (8 + 100) - 25 = 2


When only one user (User A) claims their rewards, the value will be added to his balance, but it won't change the proportion of the pool, which will ultimately determine future reward distributions.

| | Shares (stMADA)| Balance | Rewards |
|---|---|---|---|
| User A | 75 | 81 | 0 |
| User B | 25 | 25 | 2 |
| **Total** | **100** | **106** | **2** |



With a new distribution of 8 ADA rewards, each user would have unclaimed rewards of:

UserA reward = (75/100) * (8 + 2 + 106) - 81 = 6

UserB reward = (25/100) * (8 + 2 + 106) - 25 = 4

(ie, userB would have his previous rewards of 2 plus a new distribution of 2)

:::note
Users don't actually need to claim their rewards, because that will not affect the reward distribution and they will automatically be claimed when the user unstakes his shares.
:::




### stMADA Transfer

Holders of stMADA can transfer any part of their holdings to other users as they would with any ERC20 token. However, rewards must be claimed before being sent.


Consider in the following example that User B wants to make a transfer to User C.

| | Shares (stMADA)| Balance | Rewards |
|---|---|---|---|
| User A | 75 | 81 | 0 |
| User B | 25 | 25 | 2 |
| User C | 0 | 0 | 0 |
| **Total** | **100** | **106** | **2** |

Although, User B has a total amount of 27 (accrued rewards + balance), he may only transfer 25 until he claims the rewards. After doing so, he may now send the amount of 27.


