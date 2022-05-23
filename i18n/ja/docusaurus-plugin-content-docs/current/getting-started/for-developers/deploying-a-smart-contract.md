---
sidebar_label: 'Deploying a Smart Contract'
sidebar_position: 7
---

# Deploying a Smart Contract


Deploying a Smart Contract

Here we will deploy a Solidity smart contract on the Milkomeda C1 sidechain. In this example, we will use Remix [](http://remix.ethereum.org/) to deploy the contract. You can access Remix by visiting the following link: [Remix IDE](http://remix.ethereum.org/)​

First, create the solidity smart contract file. Inside the Remix window, click the "**Contracts**" folder in the left panel, then click the "**New File**" button in the central panel.

​

![](https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2FNKiJ9DdYuM1NJ2L0dh7n%2Fimage.png?alt=media&token=35d74172-b754-4d48-be95-ef073d01f284)

​

Now you will be prompted to enter a filename for a new Solidity smart contract. The filename is arbitrary, but for the purposes of this example we will be deploying an ERC-20 smart contract so we will name the file "Test_ERC20.sol". Type the filename and press **Enter**. The cursor should move to the edit panel where you can input your Solidity code. Enter the following:

1

pragma solidity ^0.7.0;

2

​

3

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0-solc-0.7/contracts/token/ERC20/ERC20.sol";

4

​

5

contract Token is ERC20 {

6

​

7

constructor () ERC20("Token", "TKN") {

8

_mint(msg.sender, 1000000 * (10 ** uint256(decimals())));

9

}

10

}

Copied!

Next, click the "**Solidity compiler**" icon on the left side of the screen, choose a compiler version (for this example we will use **0.7.6+commit.7338295f**), and then click "**Compile Test_ERC20.sol**", as shown.

​

![](https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2FIoiWRjFvQezMi9FQ3q6W%2Fimage.png?alt=media&token=af57900d-42fc-45d3-853b-24c086bf637a)

​

Click the "**Deploy and run transactions**" icon on the left, and from the "**Environment**" pulldown select "**Injected Web3**", as shown. This will bring up the MetaMask screen where you will need to click "**Next**" and then "**Connect**" to connect your C1 wallet with Remix.

​

![](https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2FubVYYZwoaKEQWQbTxanB%2Fimage.png?alt=media&token=93a2a266-7340-48ae-971a-4078472bd5b9)

​

With your MetaMask wallet now connected, click the "**Deploy**" button to deploy the smart contract to the Milkomeda C1 sidechain.

​

![](https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2Fx2kpyoDP2jQG2cJIsk2Y%2Fimage.png?alt=media&token=cafd4bb6-299f-4dbf-81e5-14c3526a34ce)

​

Confirm the transaction in MetaMask.

​

![](https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2F4mx8zUc6Uyfqlsp9r4xr%2Fimage.png?alt=media&token=28313a50-494f-4793-a458-9493ff0e109c)

​

You should now see the following under "**Deployed Contracts**" on the left side of the Remix IDE screen.

​

![](https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2FPgeJrKznRFL8K8ydPYvu%2Fimage.png?alt=media&token=2141353b-734b-40c8-b2e4-7e841d60e2a7)

​

Finally, let's look at how to unwrap our milkTADA back into tADA on the Cardano Testnet.