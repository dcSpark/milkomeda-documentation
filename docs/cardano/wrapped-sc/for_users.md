---
sidebar_position: 2
---


# For Users

We're going to explain a usecase by showing the steps of buying an amount of ReserveCoin from the [Djed Protocol](https://bafybeiecog5fbxooyh7o6444zkw4mvucsreytwyq2fnzisxuocsuzmr3va.on.fleek.co/rc) from mainnet.

The user will connect to the protocol via a wrapped smart contract and will buy the Reservecoin on the Layer 2 using his funds on the Layer 1, with the Reservecoin being unwrapped to finnaly arrive in the user's wallet on the Layer 1.


### Connecting a Wallet 
When clicking "Connect you wallet", the user is presented with several alternatives to connect a Layer 2 address (Metamask, Flint and Eternl) but he can also select "Flint WSC" to connect from the Layer 1 through a Wrapped Smart Contract.


import selectWallet from "@site/static/img/wsc/connect_wallets.png";



![Select Wallet](/img/wsc/connect_wallets.png)


By selecting "Flint WSC" and connecting a Wallet, a new addresses is created with the user's Wrapped Smart Contract


![Connected](/img/wsc/connected.png)


### Initiating the Action

In this example, the user will buy Djed ReserveCoin with funds that are in his wallet on the Layer 1.

By clicking on the wallet address in the top right corner, an interface will pop up with info and to interact with the WSC.
In the image below, we can see that this wallet has 3000 ADA on the Layer 1.

![Wallet](/img/wsc/wallet.png)


We will now trigger the "Buy" Djed ReserveCoin action with our WSC Wallet.

![Buy](/img/wsc/buy_reservecoin.png)



import buyReservecoin from "@site/static/img/wsc/buy_reservecoin.png";

<!-- <img className="img-full" src={buyReservecoin} alt="Buy ReserveCoin" /> -->




## Steps

The perform the several interactions necessary to complete the flow, a popup interface with open on the webpage to perform the several steps explains below:

### 1. Wrapping
The first step is to convert your Mainchain assets into Milkomeda assets, knowns as wrapping you assets, for them to be available to perform the action on the Layer 2. In this example we will be need 50.9 TADA to buy the Reservecoin and we will need to wrap an additional 4.2 TADA to cover transaction costs.

**Example:**

|  |  |
|---|---|
| Buy ReserveCoin | 50.9 TADA |
| Bridge fees | 1.1 TADA |
| Bridge Lock-up | 3 TADA |
| Estimated EVM fees |  ~0.1 TADA |
| Total | 55.1 TADA |


:::note
Wrapping transaction may take a few minutes (~4m).
:::


A few minutes after signing the transaction, a confirmation with be presented and the user can move to the next step. A link to the bridge transaction for wrapping the assets is presented.

![Buy](/img/wsc/djed_step1.png)

At this point, the assets are now in the WSC on the Layer 2.



### 2. Execute Action
The second step is to action execute the action on the Layer 2. In this case we are buying Djed ReserveCoin, so we will be swapping TADA for Djed ReserveCoin (MOR).

After confirming the transaction, a confirmation is presented with a link to the transaction on the Layer 2 (Milkomeda C1 Sidechain).

![Buy](/img/wsc/djed_step2.png)

After this step, the WSC holds the ReserveCoin.


### 3. Token Allowance
Because the call to transfer the tokens (ReserveCoin) held in the WSC to the Mainchain wallet will triggered by another contract, the user must set an allowance for this transfer in step 3.

After confirming the allowance change, a confirmation is presented with a link to the transaction on the Layer 2 (Milkomeda C1 Sidechain).

![Buy](/img/wsc/djed_step3.png)

After this step, the WSC still holds the ReserveCoin.



### 4. Unwrapping
The final step will transfer the asset (ReserveCoin in this example) to the Layer 1.

Initiate the unwrapping process to retrieve your assets. Wrapped Smart Contracts will seamlessly interact with the Milkomeda Bridge. Once bridge confirmations are complete, your assets will be securely returned to your Mainchain wallet.

![Buy](/img/wsc/djed_step4.png)

**Example:**
Is this example, 50 ReserveCoin will be transferred to the Layer 1 Wallet, while paying 1 TADA in bridge fees. The Initial deposit of 3 TADA will be released

| | |
|---|---|
| Bridge fees | 1 TADA |
| You'll transfer | 50 RC |
| Deposit Release | 3 TADA |


