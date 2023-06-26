---
sidebar_position: 3
---

# EVM: Milkomeda C1


Milkomeda Liquid Staking protocol is composed of 3 core contracts with specific functions that can only be called from the bridge:

- **LiquidStaking**: The core staking contract.

- **StakedMilkADA**:An ERC20-like token used to represent stakers share of the pool.

* **Pillage**: A utility contract to withdraw rewards from smart contract account unable to withdraw their rewards


The LiquidStaking Smart Contract is the core contract of the protocol and keeps the count of the total milkADA deposited. Its core functions in the users's perspective are stake, unstake and withdrawRewards, and there are also important functions like accreditToPool and removeRewardsOnBehalf that can only be called by the bridge.



## Protocol Properties

A liquid staking protocol for Milkomeda should satisfy the following desirable properties:

- **No epoch missed**: if the user does the roundtrip L1 -> Milkomeda -> L1, they should not miss any reward epoch (they may receive less due to Milkomeda fees, but they should still receive something).<br/>
  _Note_: this means that for a 5 day epoch, if the user joins during day ⅖ , their next payout should be in 3 days just like the L1
- **No external oracles**: the protocol should not depend on the state of some oracle the Milkomeda DAO do not control
- **Non-wasteful**: if it’s clear rewards will never be claimable, the Milkomeda DAO should be able to take them as protocol revenue
- **Margin fee prepaid**: the DAO and other stakeholders should receive their share BEFORE being the public user reward pot is increased (no on-withdrawal attempt to calculate payouts for everyone)
- **No hard-coded epoch length**: the length of epochs may change at any time, so it should not be a hard-coded number. Payout period should match the L1 even if the L1 logic changes
- (Cardano specific) **No need to handle deregistration**: we assume the Milkomeda DAO will never deregister its staking key
- **Compatible with liquid staking L1**: For example, Cardano has no lockup period for its L1 staking
- **Compatible with non-liquid staking L1**: For example, Ethereum staking requires you to lock up your ETH for some period of time
  - **Liquidity Pool**: non-liquid staking L1s Milkomeda users should have a liquidity pool to go back to the native asset
- **Common engineering stack**: The protocol should leverage existing tools when possible. For example, if the protocol needs to send L1 funds to a L2 contract in one transaction, it can do this using the same engineering stack as wrapped smart contracts
- **Can be wrapped in an ERC20 token**: Either a new wStMilkADA or as wADA
- **Cannot be attacked by a flash loan**: users should not be able to loan ADA, stake it, pillage the reward pot and then return the ADA
- **No double-counting**: there should be no way to get rewarded twice for the same coins (ex: returning your ADA to the Cardano mainnet right before the epoch boundary every 5 days should give you no financial advantage)
- **Compounds**: rewards should automatically compound


