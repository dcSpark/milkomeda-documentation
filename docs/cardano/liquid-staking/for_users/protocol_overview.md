---
sidebar_position: 1
---

# Overview


**Milkomeda Liquid Staking** is a solution that enables users to stake their ADA on the Cardano's EVM Sidechain (Milkomeda C1) while simultaneously earning Cardano staking rewards. This is achieved by depositing mADA into a smart contract, which mints a liquid staking token (stMADA) representing the user's stake.

The basic premiss is that stMADA, a yield bearing representation of staked ADA, could become the base asset on Cardano's EVM Sidechain (Milkomeda C1) with the widespread usage in DeFi, Gaming and NFT Marketplaces. mADA allows the wrapping of ADA from Cardano to Milkomeda C1, but by staking mADA to obtain stMADA, users can continue receiving the staking rewards from the ADA they wrapped. 


## Understanding Milkomeda Liquid Staking

The infographic below depicts the several steps and components of the Milkomeda Liquid Staking flow. The protocol consists of three essential components: the Layer 1 (Cardano), the bridge (Milkomeda Bridge), and the Sidechain (Milkomeda C1).


import overview from "@site/static/img/liquid_staking/overview.png";

<img
  src={overview}
  className="img-full"
  alt="Overview"
/>


### Cardano Mainnet (Layer 1)

In the Cardano ecosystem, **Milkomeda Liquid Staking** delegates all wrapped ADA through the Milkomeda C1 Bridge to a carefully [selected stake pool](https://cexplorer.io/pool/pool1gq07hfmull6etsr23l36cvwgfkym6jqn4q2dz5vz4y446yat70t). 

Currently, all ADA is delegated to a dedicated Milkomeda pool. If the bridge's ADA holdings, i.e. the amount of ADA that was wrapped to Milkomeda C1, exceed what can be delegated to a single pool, delegation logic can be adjusted accordingly and split between more than one pool.

Staking rewards are proportionally shared with stmADA token holders, meaning users earn rewards equivalent to delegating their ADA to a stake pool on the Cardano mainnet, minus a commission fee.


### Milkomeda Bridge


The Milkomeda Bridge serves as a vital intermediary in the liquid staking process. It facilitates seamless communication between the Cardano mainnet (Layer 1) and the Milkomeda C1 Sidechain. The bridge enables the movement of ADA between the two layers, allowing users to stake and unstake while preserving their staking rewards.

The Milkomeda Bridge is responsible for depositing epoch-based rewards into the Milkomeda Liquid Staking smart contract. These rewards are then proportionally distributed among the addresses participating in staking


### Milkomeda C1

The Liquid Staking Smart Contract on the Milkomeda C1 serves as the protocol's core contract, tracking the total mADA deposited and keeping the track of the share of each address. 

Users deposit mADA into the Liquid Staking smart contract, receiving stmADA tokens representing their staked assets in return, and from the user's perspective, its primary functions are: staking, unstaking, and claiming rewards.

The stmADA tokens can then be used in DeFi protocols or traded on exchanges while continuing to earn staking rewards.

Milkomeda Liquid Staking unlocks the potential for users to leverage DeFi's earning possibilities while simultaneously accruing rewards from staked ADA on the Cardano mainnet.


## Summary

There are several benefits to using **Milkomeda Liquid Staking**:

- Dual Earning Potential: When you stake your ADA on Milkomeda, you receive stmADA tokens that continue to accrue Cardano staking rewards. This allows you to benefit from both the Milkomeda ecosystem and Cardano's staking system.
- DeFi Integration: stMADA tokens can be utilized within various DeFi protocols on Milkomeda. This functionality enables you to amplify your earnings by participating in lending, borrowing, and other decentralized finance activities.
- Trade Flexibility: StmADA tokens are tradable on exchanges, providing you with the convenience to easily convert them into other cryptocurrencies or fiat currencies as you see fit.

Overall, **Milkomeda Liquid Staking** is a promising new solution that has the potential to make it easier for users to participate in the Cardano & Miilkomeda ecosystem and earn rewards.
