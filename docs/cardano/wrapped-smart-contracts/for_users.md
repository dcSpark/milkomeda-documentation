---
sidebar_position: 2
---


# For Users

Until now, users that wanted to interact with Dapps on a Layer 2, had to move their assets from a Layer 1.

This migration process to a Layer 2 chain often involves bridging or wrapping assets from Layer 1 to facilitate interactions with smart contracts on Layer 2. However, this process can be complex, involving multiple steps across different interfaces and requiring more than one wallet. **Milkomeda's Wrapped Smart Contracts (WSC)** present an elegant solution that not only streamlines the user experience by eliminating the need for multiple wallets but also provides a unified interaction flow between Layer 1 and Layer 2.


### Understanding Wrapped Smart Contracts
When using WSC, a smart contract is deployed on Milkomeda's Layer 2, bound to the user's specific Layer 1 address. This smart contract serves as an account abstraction, possessing a balance, a nonce, and the ability to execute signed transactions on behalf of the user.

### How It Works
Users can connect to DApps that support WSC using their Cardano wallets, which will generate an EVM address for them. Unlike an Externally Owned Account (EOA), this address doesn't require users to manage private keys. Instead, users can create transactions on Layer 2 and sign them using their Layer 1 account.

### Example Usecase: Buying ReserveCoin from the Djed Protocol
To demonstrate the seamless interaction between Layer 1 and Layer 2, we'll walk through the steps of buying ReserveCoin from the Djed Protocol on Milkomeda's Layer 2 using WSC.


1. **Connecting a Wallet** - Users can click "Connect your wallet" and choose "Flint WSC" to create a new address with the Wrapped Smart Contract, eliminating the need for multiple wallets.

    ![Select Wallet](/img/wsc/connect_wallets.png)

    ![Connected](/img/wsc/connected.png)

2. **Initiating the Action** - By clicking on the wallet address in the top right corner, users can access the WSC interface, which displays information and buttons to interact with the contract. Users can see their Layer 1 wallet balance and trigger actions with their WSC Wallet.

    ![Wallet](/img/wsc/wallet.png)

    ![Buy](/img/wsc/buy_reservecoin.png)



3. **Confirming the Steps**  - The flow differs from using a traditional Layer 2 wallet since the WSC wallet initially has no funds on Layer 2. Users need to complete several interactions:
    1. Wrapping: Convert Layer 1 assets to Milkomeda assets to perform actions on Layer 2.
    1. Execute Action: Execute the desired action on Layer 2, in this case, buying Djed ReserveCoin.
    1. Token Allowance: Set an allowance for transferring ReserveCoin from WSC to the Layer 1 wallet.
    1. Unwrapping: Transfer assets back to Layer 1 using the Milkomeda Bridge.


<details><summary>A. Wrapping: Convert Layer 1 assets to Milkomeda assets to perform actions on Layer 2</summary>
<p>

The first step is to convert the Mainchain assets into Milkomeda assets, knowns as wrapping, for them to be available to perform the action on the Layer 2. In this example we will be need 50.9 TADA to buy the Reservecoin and we will need to wrap an additional 4.2 TADA to cover transaction costs.

Example:

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


A few minutes after signing the transaction, a confirmation will be presented and the user can move to the next step. A link to the bridge transaction for wrapping the assets is also presented.

![Buy](/img/wsc/djed_step1.png)

At this point, the assets are now in the WSC on the Layer 2.

</p>
</details>


<details><summary>B. Execute Action: Execute the desired action on Layer 2</summary>
<p>

The second step is to execute the action on the Layer 2. In this case we are buying Djed ReserveCoin, so we will be swapping TADA for Djed ReserveCoin (MOR).

After confirming the transaction, a confirmation is presented with a link to the transaction on the Layer 2 (Milkomeda C1 Sidechain).

![Buy](/img/wsc/djed_step2.png)

After this step, the WSC holds the ReserveCoin.


</p>
</details>










<details><summary>C. Token Allowance: Set an allowance for transferring ReserveCoin from WSC to the Layer 1 wallet.</summary>
<p>

Because the call to transfer the tokens (ReserveCoin) held in the WSC to the Mainchain wallet will triggered by another contract, the user must set an allowance for this transfer in step 3.

After confirming the allowance change, a confirmation is presented with a link to the transaction on the Layer 2 (Milkomeda C1 Sidechain).

![Buy](/img/wsc/djed_step3.png)

After this step, the WSC still holds the ReserveCoin.


</p>
</details>

<details><summary>D. Unwrapping: Transfer assets back to Layer 1 using the Milkomeda Bridge</summary>
<p>

The final step will transfer the asset (ReserveCoin in this example) to the Layer 1. WSC will seamlessly interact with the Milkomeda Bridge. Once bridge confirmations are complete, the assets will be securely returned to the mainchain wallet.

![Buy](/img/wsc/djed_step4.png)

Example:
Is this example, 50 ReserveCoin will be transferred to the Layer 1 Wallet, while paying 1 TADA in bridge fees. The Initial deposit of 3 TADA will be released

| | |
|---|---|
| Bridge fees | 1 TADA |
| You'll transfer | 50 RC |
| Deposit Release | 3 TADA |


</p>
</details>


Each step requires confirmation and, in some cases, may involve fees or waiting for bridge confirmations.

### Summary
Wrapped Smart Contracts on Milkomeda's Layer 2 provide a seamless user experience, enabling users to interact with DApps without the complexities of managing multiple wallets. The unified interaction flow between Layer 1 and Layer 2 enhances user convenience and encourages adoption, setting a new standard for smart contract-enabled blockchains and their ecosystems.
