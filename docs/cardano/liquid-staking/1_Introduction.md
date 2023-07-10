---
title: Introduction
sidebar_position: 1
---

### Staking on Cardano

Staking is an integral part of the Cardano blockchain's consensus mechanism and incentivization system. It allows Cardano holders to participate in the network's operation, secure the blockchain, and earn rewards in the form of additional ADA for their participation. Staking plays a crucial role in maintaining the network's decentralization and security.

With close to three-quarters of the native token (ADA) staked, Cardano is a network with one of the highest staking participation, surpassing even well-known projects like Ethereum.

A stake is a vote for a validator, where holders who stake to a validator join a pool made up of hundreds or thousands of other stakers. The process is called delegating, in which ADA holders delegate their ADA to a certain pool, enabling that pool to reach a higher level of staked ADA, helping everyone to earn a higher yield. Pools with higher staked amounts are more likely to be chosen to build a block and earn rewards.

### Liquid Staking



When considering Layer 2 adoption, users tend to value the pros and cons of moving from the Layer 1. The trade-off is normally taking advatange of the scalability of the Layer 2 (speed and cost) while letting go of some of the security of the Layer 1.

However, since many blockchains have reward systems for users on their Layer 1 for participating in the staking/governance of the network,
it is important that users keep earning these rewards even after they move their funds to the Layer 2 network.

The concept of ongoing rewards beyond the layer 1 is highly beneficial for various reasons:

- It helps to enhance **user retention** by incentivizing users to remain engaged with the blockchain ecosystem. By offering rewards that extend to layer 2 solutions, users have a continuous incentive to actively participate and contribute to the network.
- The ability to earn layer 1 rewards on layer 2 adoption also **increases developer incentives**. L2 dApps can leverage the rewards earned on the layer 1 blockchain, providing an additional revenue stream and motivating developers to build and maintain innovative solutions on top of the layer 2 infrastructure.
- As users continue to stake their assets and earn rewards on different layers of the blockchain, the protocol benefits from **increased activity and transaction volume**, leading to potential revenue generation for the overall ecosystem.

To achieve this seamless continuity of rewards, Milkomeda has devoloped a **Liquid Staking** standard that allows users to participate in a staking protocol while maintaining custody of their funds and receiving a yield baring tokenized representation of those funds.
In the case of Cardano, users can stake their milkADA (tokenized representation of ADA) to receive stMilkADA, which accrues layer 1 staking rewards.

:::note Example of Liquid Staking Steps

1. Cardano User A wants to use Milkomeda C1
1. User A wraps 50 ADA and get 50 milkADA on Milkomeda C1
1. The ADA on the Cardano side is staked to a pool chosen by the Milkomeda DAO.
1. User A can wrap their milkADA into a smart contract (which locks their ADA for 1+ epoch) to get back stMilkADA
1. Milkomeda DAO shares staking rewards with stMilkADA holders every epoch
:::

By implementing liquid staking and enabling the accumulation of rewards on layer 2 solutions, blockchain platforms like Cardano aim to create a ecosystem that incentivizes user engagement, fosters developer innovation, and generates sustainable protocol revenue across multiple layers of the network.
