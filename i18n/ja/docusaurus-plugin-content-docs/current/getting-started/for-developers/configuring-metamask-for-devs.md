---
sidebar_label: 'Configuring MetaMask'
sidebar_position: 3
---

# Configuring MetaMask

Now that we have a Cardano testnet wallet and some Test ADA, we need an address on the Milkomeda Cardano Testnet sidechain where we can receive our MilkTADA. For now, we recommend using MetaMask for this step.

First, install [MetaMask for Chrome](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn). Then, click the Chrome Extensions icon

![](https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2Fd1zLIO5TYQ7tbyZCRwiQ%2Fimage.png?alt=media&token=d3c5d99f-08ee-409b-9457-f2394b00d45e)

and select MetaMask. Within the MetaMask window, click "**Get Started**" and then "**Create a Wallet**". Set a wallet password and click through the rest of the setup screens. When finished, you should have a new empty wallet, as shown below. Select the network dropdown at the top right of the MetaMask screen.

​

![](https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2F8BW8dqDEDUWCgdJOpg92%2Fimage.png?alt=media&token=38c1444f-6000-48de-bf18-80d7923adc37)

​

From the dropdown list, select “**Add Network**” and enter the following:

> Network Name: Milkomeda Cardano Testnet
> 
> New RPC URL: https://rpc-devnet-cardano-evm.c1.milkomeda.com
> 
> Chain ID: 200101
> 
> Currency Symbol (Optional): milkTADA
> 
> Block Explorer URL (Optional): https://explorer-devnet-cardano-evm.c1.milkomeda.com

If you need a WebSocket endpoint, use the following: wss://rpc-devnet-cardano-evm.c1.milkomeda.com

To use the mainnet version of Milkomeda C1, enter the following parameters instead: Network Name: Milkomeda Cardano (C1) New RPC URL: https://rpc-mainnet-cardano-evm.c1.milkomeda.com Chain ID: 2001 Currency Symbol: milkADA Block Explorer URL: https://explorer-mainnet-cardano-evm.c1.milkomeda.com If you need a WebSocket endpoint, use the following: wss://rpc-mainnet-cardano-evm.c1.milkomeda.com

Click “**Save**”, and you should now see "**Milkomeda Cardano Testnet**" in the network dropdown. Copy your Milkomeda Cardano Testnet wallet address to the clipboard by clicking on the account name, as shown.

​

![](https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2FBF1aYwLhUxBVEMwiTTw9%2Fimage.png?alt=media&token=9c6615dd-1038-4ef7-9370-c756a921985e)

​

Next we will go back to Flint Wallet and send our test ADA to be wrapped.