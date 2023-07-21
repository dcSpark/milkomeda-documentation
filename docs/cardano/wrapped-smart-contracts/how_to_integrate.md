---
sidebar_position: 4
---

# How to integrate

To provide users with a seamless and intuitive experience, we offer two alternatives for integrating the necessary steps and prompts. Additionally, we present a component library that facilitates their implementation.


### Option A - Wallet-like Interface

One straightforward approach is to present users with a wallet-like interface where they can easily view the balances of their assets/tokens on both Layer 1 and Layer 2. This interface includes buttons that enable effortless asset transfers in both directions.

Below is a screenshot demonstrating the user-friendly interface, allowing users to perform actions like selecting an asset and wrapping it into Milkomeda.

import img1 from "@site/static/img/wsc/option_a.png";

<img
  src={img1}
  className="img-full"
  alt="Option A"
/>


### Option B - Integrated DApp Frontend

Another effective method involves embedding the essential user prompts directly into the EVM DApp UI. When users interact with the protocol, such as performing a swap, a modal opens atop the UI, guiding them through four main steps: wrapping, executing the action, approving token spending, and finally unwrapping back to the mainchain.

Here's a preview of the first step within that would be integrated in the DApp frontend:


import img4 from "@site/static/img/wsc/djed_step1.png";

<img
  src={img4}
  className="img-full"
  alt="Step 1"
/>


For a detailed, comprehensive example of this implementation, please refer to the [For Users](/cardano/wrapped-smart-contracts/for_users) section.

To facilitate the implementation of this alternative, we have made a React component library available for your convenience.

With these two user-friendly integration options and the provided component library, users can seamlessly interact with your protocol while enjoying a smooth experience throughout.


## Milkomeda WSC UI

Milkomeda WSC UI is a robust React component library designed to facilitate Wrapped Smart Contract integration with your dApp. It offers an intuitive and user-friendly approach to quickly get started integrating it on your dapp, ensuring a smooth and visually appealing user experience.


### Getting Started

Get started with a Milkomeda WSC UI + WAGMI project by running one of the following in your terminal:

1. Installation

```bash
npm install milkomeda-wsc-ui wagmi@0.12.15
```


2. Peer dependencies

Please note that react, wagmi and ethers are peer dependencies:

```
"peerDependencies": {
  "react": "17.x || 18.x",
  "react-dom": "17.x || 18.x",
  "wagmi": "0.12.15",
  "ethers": "5.x"
 }
```



3. Webpack configuration

To enable top-level await and WebAssembly support in webpack, specific configuration is necessary. If you are utilizing webpack 5, you can achieve this by incorporating the following configuration settings. 



```javascript
// webpack.config.js
module.exports = {
  experiments: {
    topLevelAwait: true,
    asyncWebAssembly: true,
  },
}
```

```javascript
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.experiments = {
      asyncWebAssembly: true,
      topLevelAwait: true,
    };

    return config;
  },
};

module.exports = nextConfig;
```


### Usage

1. Quickstart

To begin, import both wagmi and milkomeda-wsc-ui into your project. Next, you can create a configuration using either wagmi's createConfig method or utilize the pre-configured getDefaultConfig provided by milkomeda-wsc-ui.

```javascript
import { WagmiConfig, createClient } from "wagmi";
import { ConnectWSCProvider, getDefaultConfig, TransactionConfigWSCProvider, ConnectWSCButton} from "milkomeda-wsc-ui";
import { ethers } from "ethers"
import djedABI from "../abi/djed.json";

const client = createClient(getDefaultConfig({}));
const DJED_ADDRESS = "0xc4c0669ea7bff70a6cfa5905a0ba487fc181dc37";
const reservecoinEVMAddress = "0x66c34c454f8089820c44e0785ee9635c425c9128";


const wscOptions = {
  defaultWrapToken: {
    unit: "lovelace", 
    amount: "10178117048345515637", // unscaled amount to wrap
  },
  defaultUnwrapToken: {
    unit: reservecoinEVMAddress,
    amount: "10000000", // unscaled amount to unwrap
  },
  titleModal: "Buy Reserve Coin",
  evmTokenAddress: reservecoinEVMAddress,
  evmContractRequest: {
    address: DJED_ADDRESS,
    abi: djedABI.abi,
    functionName: "buyReserveCoins",
    args: [account, "0000000000000000000000000", "0x0232556C83791b8291E9b23BfEa7d67405Bd9839"],
    overrides: {
      value: ethers.BigNumber.from("10178117048345515637"),
    },
  },
}

const App = () => {
  return (
    <WagmiConfig client={client}>
      <ConnectWSCProvider>
        /* Your App */
<TransactionConfigWSCProvider options={wscOptions}>
        <ConnectWSCButton />
      	</TransactionConfigWSCProvider>
      </ConnectWSCProvider>
    </WagmiConfig>
  );
}


export default MyApp;

```



Congratulations! You have now successfully completed the setup process for Milkomeda WSC UI.


2. Wagmi

In various scenarios, there might be a requirement to access the connected wallet in order to facilitate additional interactions or utilize other features offered by wagmi. You can seamlessly utilize all of these functionalities without any limitations as its one of our peer dependencies.

```javascript
import { useAccount } from "wagmi";

// Make sure that this component is wrapped with ConnectWSCProvider
const ExampleComponent = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) return <div>Connecting...</div>;
  if (isDisconnected) return <div>Disconnected</div>;
  return <div>Connected Wallet: {address}</div>;
};

```




### Components

#### `ConnectWSCProvider`

You need to set up the ConnectWSCProvider at the root of your application because it supplies all information about WSC Provider such as your balance in L1, origin tokens, evm tokens, etc. 
Learn more about it [here](https://github.com/dcSpark/wrapped-smartcontracts/tree/main/packages/milkomeda-wsc)

If you wish to access any of these values, you can utilize the custom hook useWSCProvider. This hook provides you with the necessary functionality to access the desired values conveniently.


**Example:**

```javascript
const Component = () => {
  const {
    wscProvider,
    pendingTxs,

    address,
    destinationBalance,
    originBalance,
    originTokens,
    tokens,
    originAddress
  } = useWSCProvider();

  return(...)
}
```



#### `TransactionConfigWSCProvider`

The React provider mentioned here is specifically designed to facilitate the configuration setup for using WSC (Wrapped Smart Contracts) in your dApp. Within this provider, you can conveniently define various aspects of the configuration, including the Cardano token you wish to wrap, the EVM contract request, and the EVM token you intend to unwrap at the end of the process. 

Feel free to use the WSC React provider multiple times and in any desired location within your application. However, it's important to note that when utilizing the provider, make sure to include the ConnectWSCButton as its child. This ensures that the action is correctly targeted and associated with the relevant functionality.



It's important to note that the process consists of four distinct steps: 
- Wrapping
- WSC Action Execution (EVM contract action)
- Token Allowance
- Unwrapping

By utilizing this React provider, you can easily configure and manage these steps to seamlessly integrate WSC functionality into your dApp.

***Example (djed implementation for buying):***

```javascript
const wscOptions = {
  /* 
   We need to specify which token you'll wrap
  */
  defaultWrapToken: {
    unit: "lovelace", // by default
    amount: "10178117048345515637", // unscaled amount to wrap
  },

  /* 
   We need to specify which token you'll unwrap
  */
  defaultUnwrapToken: {
    unit: reservecoinEVMAddress, // if its mADA, set it to an empty string
    amount: "10000000", // unscaled amount to unwrap
  },

  /* 
   Title of the modal
  */
  titleModal: "Buy Reserve Coin",

  /* 
   EVM Token address that we'll ask for token allowance
  */
  evmTokenAddress: reservecoinEVMAddress,

  /* 
   EVM contract information to execute this action after wrapping
  */
  evmContractRequest: {
    address: DJED_ADDRESS,
    abi: djedABI.abi,
    functionName: "buyReserveCoins",
    args: [account, "0000000000000000000000000", "0x0232556C83791b8291E9b23BfEa7d67405Bd9839"], // arguments that needs to be passed to the method
    overrides: {
      value: ethers.BigNumber.from("10178117048345515637"),
    },
  },
}

...
<TransactionConfigWSCProvider options={wscOptions}>
        <ConnectWSCButton />
      	</TransactionConfigWSCProvider>
...
```



#### `ConnectWSCButton` (optional)

The button component can be placed wherever you want the Connect WSC Wallet button to be displayed. We are actively working on providing theme customization options to enhance the visual styling of the button


