---
sidebar_position: 2
---

# Staking Guide

The **Milkomeda Liquid Staking** frontend is a secure and user-friendly way for users to interact with the protocol and to perform all user actions: staking, unstaking and claiming rewards. 

On the [homepage](https://liquidstaking-dev.milkomeda.com/), users can view all relevant statistics on Milkomeda Liquid Staking and the supported chains (currently Cardano only).



import forUsers from "@site/static/img/liquid_staking/users.png";


<img src={forUsers} className="img-full" alt="Homepage" />







import homepage from "@site/static/img/liquid_staking/homepage.png";
import stake from "@site/static/img/liquid_staking/stake.png";
import unstake from "@site/static/img/liquid_staking/unstake.png";
import claim from "@site/static/img/liquid_staking/claim.png";


From a users' perpective Milkomeda Liquid Staking is very simple: mADA is staked into the liquid staking smart contract in return for stMADA and ADA rewards will accrue to its holder inside the Liquid Staking smart contract.



Stake your mADA using Milkomeda Liquid Staking today on the following [link](https://liquidstaking-dev.milkomeda.com/)



<img src={homepage} className="img-full" alt="Homepage" />



### Staking mADA

Staking can be performed by navigating to the staking page, that contains the "Stake" and "Unstake" tabs.

On this page users can stake their mADA by folowing these steps:

1. Connecting a wallet (e.g Flint, Metamask, etc)
1. Select "Stake" tab
1. Enter the desired amount on mADA to stake, accept Terms of Use and press "Stake" button
1. The mADA will be sent to the smart contract and the connected wallet address wil receive the equivalent amount of stMADA

<p>
<button onClick={() => addTokenToMM('devnet')}  className='button button--secondary'>Add stMADA to Metamask</button>
</p>


<img src={stake} className="img-full" alt="Staking" />

The page will also show the user's available mADA and his current share of the total staked amount. 

import { addTokenToMM } from '../addTokens'


:::note
A prior step to be able to stake on Milkomeda C1 is to wrap ADA from Cardano. To move your funds from Mainnet to Milkomeda C1, please follow this [guide](/cardano/for-end-users/obtaining-milkada).
:::



### Claiming the rewards

You can claim your rewards every epoch (unlike Cardano where you have to wait multiple epochs before your first reward). As a user, rewards can be claimed through the liquid staking dApp.

To claim rewards:
1. Connect a wallet (e.g Flint, Metamask, etc)
1. Go to "Rewards" page
1. Press the "Claim" button

<img src={claim} className="img-full" alt="Claiming" />

When claiming rewards, no tokens are sent to the user's wallet. The claimed rewards are added to the Staked mADA balance inside the Liquid Staking smart contract.



### Unstaking

The steps to unstake stMADA are basically the opposite of staking. Users can unstake their stMADA using the Milkomeda DApp:

The requires steps are:

1. Connect a wallet (e.g Flint, Metamask, etc)
1. Go to "Staking" page and "Unstake" tab
1. Enter the desired amount on mADA to unstake, accept Terms of Use and press "Unstake" button
1. The stMADA will be sent to the smart contract and the connected wallet address wil receive mADA

<img src={unstake} className="img-full" alt="Unstaking" />

:::note
Milkomeda is encouraging DEXs, and other protocols to support stMADA 1:1 with MADA, so that the yield bearing version of the token can become the most used asset on the network

:::

