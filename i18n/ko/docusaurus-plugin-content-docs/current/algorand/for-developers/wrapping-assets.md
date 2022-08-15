---
sidebar_position: 3
---

# Wrapping Assets

Go to the Milkomeda A1 bridge page [https://algorand-bridge-dev.milkomeda.com/](https://algorand-bridge-dev.milkomeda.com/) and select the token that you would like to move (only tALGO for launch). Then connect your MyAlgo wallet and then your Metamask. Last input the amount of tokens that you would like to move to the Rollup. Click "**Continue**".

<img src="/img/algorand-wrapping-assets.png" className="img-full" alt="" />

At the confirmation screen, click `Sign and Send` enter your wallet password and confirm. The process should take around 20 seconds to confirm.

<img src="/img/algorand-wrapping-confirmation.png" className="img-full" alt="" />

> Remember that transactions from the Rollup are written to the Algorand Testnet blockchain itself. One confirmation is for sending the funds from the wallet to the bridge address and the second confirmation is for the rollup batch transaction on Algorand.

The transfer only requires a total of 2 confirmations, which should take approximately 20 seconds (4.5 seconds for Algorand and around 14 seconds for the batch of the Rollup). Once the transaction is confirmed, the transferred MilkTALGO should be visible in your Milkomeda Algorand Testnet wallet in MetaMask.

<img src="/img/algorand-blockchain-confirmation.png" className="img-full" alt="" />

Now that we have successfully wrapped Test ALGO into MilkTALGO for use on the Milkomeda A1 Algorand Rollup Testnet, the next step is to deploy a sample smart contract.