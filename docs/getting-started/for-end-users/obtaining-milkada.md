---
sidebar_label: 'Obtaining MilkADA'
sidebar_position: 3
---

# Obtaining MilkADA

Open the Flint Wallet window and click "**Send**". At the next screen, enable the "**Milkomeda mode**" toggle, paste the Milkomeda C1 wallet address currently in the clipboard into the "**Milkomeda Ethereum Address**" field, and enter the amount to send (1 ADA in this example). Then click "**Continue**".

![](/img/flint-wrap-ada.png)

At the confirmation screen, enter your wallet password and click "**Send**".

![](/img/flint-wrap-ada-confirm.png)

The transfer will require 10 confirmations, which should take approximately **5** minutes. Once the transaction is confirmed, the transferred MilkADA should be visible in your C1 wallet in MetaMask.

**A note on transaction fees**

For transactions that take place solely on the Milkomeda C1 sidechain, you only pay the standard Milkomeda network transaction fee set by the block producers.

However, transactions that involve wrapping, i.e., moving assets between Cardano and the Milkomeda C1 sidechain, require payment of transactions fees for both Cardano and Milkomeda since one transaction is required on each chain.

For example, sending assets from Cardano to Milkomeda C1 requires one transaction on Cardano to lock your assets and another transaction on Milkomeda C1 to issue the wrapped assets to you.

When sending a transaction of this type in Flint Wallet, you can expand the "Network Fee" item to see a "Base Fee" (i.e., the Cardano transaction fee) and a "Milkomeda Fee". Note that the "Milkomeda Fee" for these transactions will be slightly higher than the standard transaction fee on Milkomeda since you are also paying the block producers for their role in wrapping your assets.

Now you have successfully wrapped your ADA into MilkADA for use on the Milkomeda C1 sidechain.

**About "MilkADA" vs. "Wrapped ADA"**

MilkADA is the base asset on the Milkomeda C1 sidechain. When you move ADA to Milkomeda, you receive MilkADA.

Apart from MilkADA, there is another token called "Wrapped ADA" or WADA. Wrapped ADA is an ERC20 token that functions the same as WETH on Ethereum. Be careful not to get these confused!