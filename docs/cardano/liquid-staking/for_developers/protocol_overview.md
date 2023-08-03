---
sidebar_position: 2
---

# Protocol Overview


**Milkomeda Liquid Staking** is a groundbreaking solution that enables users to stake their ADA on the Milkomeda sidechain while simultaneously earning Cardano staking rewards. This is achieved by depositing mADA into a smart contract, which mints a liquid staking token (stMADA) representing the user's stake.

The basic premiss is that stMADA, a yield bearing representation of staked ADA, could become the base asset on Cardano's Later 2 (Milkomeda C1) withe widespread usage in DeFi, Gaming and NFT Marketplaces. mADA allows the wrapping of ADA from Cardano to Milkomeda C1, but by staking mADA to obtain stMADA, users can continue receiving the staking rewards from the ADA they wrapped. 


## Understanding Milkomeda Liquid Staking

The infographic below depicts the several steps and components of the Milkomeda Liquid Staking flow. The protocol consists of three essential components: the Layer 1 (Cardano), the bridge (Milkomeda Bridge), and the Layer 2 (Milkomeda C1).


import overview from "@site/static/img/liquid_staking/overview.png";

<img
  src={overview}
  className="img-full"
  alt="Overview"
/>







### Cardano Mainnet (Layer 1)

The Cardano part of **Milkomeda Liquid Staking** involves the delegation of all ADA wrapped to Milkomeda C1 to a stake pool chosen by the Milkomeda DAO, which will choose a stake pool that is known to be reliable and has a good track record of performance, and it is committed to sharing the rewards with the holders of stMADA tokens in a fair and transparent manner.

Currently, all ADA is delegated to a dedicated Milkomeda pool. If the bridge's ADA holdings, i.e. the amount of ADA that was wrapped to Milkomeda C1, exceed what can be delegated to a single pool, delegation logic can be adjusted accordingly and split between more than one pool.

Staking rewards are proportionally shared with stmADA token holders, meaning users earn rewards equivalent to delegating their ADA to a stake pool on the Cardano mainnet, minus a commission fee.


### Milkomeda Bridge


The Milkomeda Bridge serves as a vital intermediary in the liquid staking process. It facilitates seamless communication between the Cardano mainnet (Layer 1) and the Milkomeda C1 (Layer 2) sidechain. The bridge enables the movement of ADA (mADA) between the two layers, allowing users to stake and unstake while preserving their staking rewards.

It is the Milkomeda Bridge that deposits the rewards received in each epoch to the Milkomeda Liquid Staking smart contract, to be distributed proporcionally between the addresses that are staking.


### Milkomeda C1 (Layer 2)

The LiquidStaking Smart Contract on the Layer 2 serves as the protocol's core contract, tracking the total mADA deposited and keeping strack of the share of each address. 

Users deposit mADA into the LiquidStaking smart contract, receiving stmADA tokens representing their staked assets in return, and from the user's perspective, its primary functions are: staking, unstaking, and claiming rewards.


The stmADA tokens can then be used in DeFi protocols or traded on exchanges while continuing to earn staking rewards.

Milkomeda Liquid Staking unlocks the potential for users to leverage DeFi's earning possibilities while simultaneously accruing rewards from staked ADA on the Cardano mainnet.


## Summary

There are several benefits to using **Milkomeda Liquid Staking**:

- Users can earn Cardano staking rewards while participating in the Milkomeda ecosystem. This is because the stmADA tokens that are minted when users stake their ADA on Milkomeda accrue Cardano staking rewards.
- Liquid staking tokens can be used in DeFi protocols. This means that users can earn additional rewards by using their stmADA tokens to participate in lending, borrowing, and other DeFi activities on Milkomeda.
- Liquid staking tokens can be traded on exchanges. This means that users can easily convert their stmADA tokens to other cryptocurrencies or fiat currencies.

Overall, **Milkomeda Liquid Staking** is a promising new solution that has the potential to make it easier for users to participate in the Milkomeda ecosystem and earn rewards.
