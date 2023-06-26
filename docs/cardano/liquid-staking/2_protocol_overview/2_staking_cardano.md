---
sidebar_position: 1
---

# Cardano Mainnet

The Cardano-side of the Milkomeda Liquid Staking protocol takes care of a few of the different tasks or responsibilities in the staking process:

### Choosing the stake pool to delegate to

Currently all ADA will be delegated to a special Milkomeda pool. If the amount of ADA owned by the bridge exceeds what can be delegated to a single pool, the delegation logic can be changed.

### Ensure any rewards earned are properly send to the sidechain liquid staking contract

To do this, we do the following:

1. Calculate what the staking rewards will be ahead of the epoch boundary
1. Transfer that amount of tokens to Milkomeda ahead of time (Caradno has no tx prioritization, so sending too close to the epoch boundary may cause delays)
1. Right before the epoch boundary, stop processing wrap requests
1. Deposit the milkADA in Milkomeda from (2) into the liquid staking contract
1. Unpause the wraping requests

This ensures that no user claims rewards twice. To understand why, here is what a double-claim would look like:

1. Wait until the epoch boundary on Cardano
2. As soon as the epoch boundary passes, send your funds to Milkomeda
3. Deposit your funds into the staking contract and hope you got in before the Milkomeda DAO distributes the rewards for that epoch

As the bridge paused wrapping, such an attack is not possible. The cost is pausing the bridge, but transferring the rewards ahead of time should make the pause minimal in length

### Additional goal: keep bridge contract simple

We want to avoid hardcoding the liquid staking into the bridge contract to keep the bridge contract simple. That means

1. No special logic to deposit rewards (reuse wrapped smart contracts where possible)
2. Do not remove rewards on behalf of smart contracts directly, and instead have a separate dApp that can do it under the same security assumptions as the bridge

## Staking Concepts

- **Proof-of-Stake (PoS) Consensus**: Cardano utilizes a PoS consensus algorithm called Ouroboros, which enables stakeholders to participate in the network's block validation process.

- **ADA Staking**: Staking in Cardano involves holding ADA and delegating it to a stake pool or running your own stake pool. ADA is the native cryptocurrency of the Cardano blockchain. By staking ADA, you support the network's security and decentralization.

- **Stake Pools**: Stake pools are entities responsible for creating and validating blocks on the Cardano blockchain. They consist of a pool operator and multiple ADA holders who delegate their stake to the pool. Stake pool operators handle the technical aspects of block production, while delegators contribute their stake and receive rewards in proportion to their stake.

- **Delegation**: ADA holders can delegate their stake to a stake pool of their choice, allowing the pool operator to include their stake in the pool's collective stake. Delegation does not require sending or transferring ADA to the pool, and your funds remain under your control at all times.

- **Rewards and Incentives**: Cardano's staking system offers incentives to participants. Stake pool operators and delegators receive rewards in the form of additional ADA for their contribution to the network's operation. Rewards are distributed based on the amount of stake delegated to a pool and the pool's performance in block production.

- **Ouroboros Protocol**: Cardano's Ouroboros protocol incorporates a system of epochs and slots to manage block production and reward distribution. An epoch consists of multiple slots, and at the end of each epoch, rewards are calculated and distributed to stake pool operators and delegators.

- **Decentralization and Security**: The Cardano network aims to achieve a high level of decentralization by encouraging a large number of stake pools. This ensures that no single entity or group controls a significant portion of the network's stake, reducing the risk of centralization and enhancing security.

- **ADA Liquidity**: Staking in Cardano is designed to be highly liquid. ADA holders can freely move their tokens, including staked ADA, without any waiting period or lock-up period. This allows for flexibility and easy access to funds when needed.
