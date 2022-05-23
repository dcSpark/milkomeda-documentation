---
sidebar_label: 'Wrapping Assets'
sidebar_position: 4
---

# Wrapping Assets

Open the Flint Wallet window and click "**Send**". At the next screen, enable the "**Milkomeda mode**" toggle, paste your Milkomeda C1 wallet address into the "**Milkomeda Ethereum Address**" field, and enter the amount to send (300 Test ADA in this example). Click "**Continue**".


![](https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2FuDjEMOipqX9G0BppBmuh%2FWrapTestADA_Flint_v1_2_0.png?alt=media&token=ec8699e2-6f71-48d5-bb95-555aeac98d6e)

​

At the confirmation screen, enter your wallet password and click "**Send**".

![](https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2F8J5hkBHeurG8eQEshCm5%2FWrapTestADA_Send_Flint_v1_2_0.png?alt=media&token=dd15f57d-a526-4904-9154-f537f22a9e2f)

​

The transfer will require 10 confirmations, which should take approximately **5** minutes. Once the transaction is confirmed, the transferred MilkTADA should be visible in your Milkomeda Cardano Testnet wallet in MetaMask.

**A note on transaction fees**

For transactions that take place solely on the Milkomeda C1 sidechain, you only pay the standard Milkomeda network transaction fee set by the block producers.

However, transactions that involve wrapping, i.e., moving assets between Cardano and the Milkomeda C1 sidechain, require payment of transactions fees for both Cardano and Milkomeda since one transaction is required on each chain.

For example, sending assets from Cardano to Milkomeda C1 requires one transaction on Cardano to lock your assets and another transaction on Milkomeda C1 to issue the wrapped assets to you.

When sending a transaction of this type in Flint Wallet, you can expand the "Network Fee" item to see a "Base Fee" (i.e., the Cardano transaction fee) and a "Milkomeda Fee". Note that the "Milkomeda Fee" for these transactions will be slightly higher than the standard transaction fee on Milkomeda since you are also paying the block producers for their role in wrapping your assets.

Now that we have successfully wrapped Test ADA into MilkTADA for use on the Milkomeda Cardano Testnet sidechain, the next step is to deploy a sample smart contract.

**MilkTADA and Wrapped Test ADA**

As we have seen, MilkTADA is the base asset used for paying fees and gas on the Milkomeda Cardano Testnet sidechain. When you move Test ADA to Milkomeda, you receive MilkTADA.

"Wrapped Test ADA" (wTADA) is a separate ERC20 token that functions the same as WETH on Ethereum.

The contract address for wTADA can be found below. Note that although you can send milkTADA to this address to wrap it, you **shouldn't** send wTADA to this address to unwrap it but rather interact with it using the right method in the smart-contract. wTADA contract address: 0x65a51E52eCD17B641f8F0D1d56a6c9738951FDC9

If using the Cardano mainnet, find the wADA contract address below. **Do not directly** send wADA to this address. For now, you will need to use a DEX to unwrap wADA (or interact directly with the smart contract). wADA contract address: 0xAE83571000aF4499798d1e3b0fA0070EB3A3E3F9