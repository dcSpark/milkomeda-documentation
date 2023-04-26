"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[9454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r=n.p+"assets/images/image1-fe6f569f7fd6b3d84e73e09ab7d608c0.png",i=n.p+"assets/images/image2-bd45bba98104ffa56acaaabaabcd3ddb.png";var l=n(5785);const c=n.p+"assets/images/image4-ca50ed1c3e1562e84579d55ff82f9019.png",s={sidebar_label:"Using WAGMI with Milkomeda",sidebar_position:1},d="Using WAGMI with Milkomeda",p={unversionedId:"cardano/guides/using_wagmi_with_milkomeda",id:"cardano/guides/using_wagmi_with_milkomeda",title:"Using WAGMI with Milkomeda",description:"Milkomeda C1 Sidechain is fully operational on Mainnet, which means that it is currently deployed and connected to production version of the Cardano blockchain.",source:"@site/docs/cardano/guides/using_wagmi_with_milkomeda.mdx",sourceDirName:"cardano/guides",slug:"/cardano/guides/using_wagmi_with_milkomeda",permalink:"/milkomeda-documentation/ja/cardano/guides/using_wagmi_with_milkomeda",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Using WAGMI with Milkomeda",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/milkomeda-documentation/ja/category/guides"},next:{title:"Building on Milkomeda with Thirdweb",permalink:"/milkomeda-documentation/ja/cardano/guides/thirdweb"}},m={},u=[{value:"Create and Deploy the Smart Contract",id:"create-and-deploy-the-smart-contract",level:2},{value:"Create Frontend",id:"create-frontend",level:2}],h={toc:u};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-wagmi-with-milkomeda"},"Using WAGMI with Milkomeda"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Milkomeda C1 Sidechain is fully operational on Mainnet, which means that it is currently deployed and connected to production version of the Cardano blockchain.")),(0,o.kt)("p",null,"Compared to a typical web2 application where the backend code is executed on centralized servers, a DApp (Decentralized Application) runs its backend code on a blockchain. The frontend code and user interfaces of a DApp can be written in any language and deployed on any server or servers to interact with the backend logic."),(0,o.kt)("p",null,"This article will guide you through the process of ",(0,o.kt)("strong",{parentName:"p"},"developing a simple Storage smart contract"),", deploying it on Milkomeda C1 testnet, and accessing it using a frontend built with React, Wagmi, and Rainbowkit."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can choose to follow allong completing the coding steps or download the full code for this tutorial by running:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx degit dcspark/milkomeda-guides#wagmi_c1 guide-wagmi-c1\n"))),(0,o.kt)("p",null,"Our first step is to write the Smart Contract in Solidity."),(0,o.kt)("h2",{id:"create-and-deploy-the-smart-contract"},"Create and Deploy the Smart Contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract Storage {\n    uint256 private value;\n    event ValueChanged(uint256 newValue);\n\n    constructor() {}\n\n    function retrieve() public view returns (uint256) {\n        return value;\n    }\n\n    function store(uint256 newValue) public {\n        value = newValue;\n        emit ValueChanged(newValue);\n    }\n\n}\n")),(0,o.kt)("p",null,"Our smart contract couldn\u2019t be more simple. We define a private variable of type uint256 named ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," and define its respective getter (",(0,o.kt)("inlineCode",{parentName:"p"},"retrieve"),") and setter (",(0,o.kt)("inlineCode",{parentName:"p"},"store"),") functions."),(0,o.kt)("p",null,"To compile and deploy our smart contract, we will use Hardhat by following the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Initialize a Hardhat project in an empty folder:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init\nyarn add --dev hardhat\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Bootstrap the project by running the following command and choosing javascript:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx hardhat\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create a file named ",(0,o.kt)("strong",{parentName:"li"},"SimpleStorage.sol")," in the contracts folder, containing the code above."),(0,o.kt)("li",{parentName:"ol"},"Compile the contract:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat compile\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Edit ",(0,o.kt)("strong",{parentName:"li"},"hardhat.config.js")," to add the C1 testnet and your funded test account. Refer to the ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:3000/milkomeda-documentation/cardano/for-developers/obtaining-test-ada"},"Milkomeda docs")," for information on how to get testnet funds.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'require("@nomicfoundation/hardhat-toolbox");\nrequire("dotenv").config();\n\n/** @type import(\'hardhat/config\').HardhatUserConfig */\nmodule.exports = {\n  solidity: "0.8.17",\n  networks: {\n    c1_testnet: {\n      url: `https://rpc-devnet-cardano-evm.c1.milkomeda.com`,\n      accounts: [`0x${process.env.PRIVATE_KEY}`]\n    }\n  }  \n};\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Replace the contents of deploy.js in the scripts folder:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const hre = require("hardhat");\n\nasync function main() {\n    const Storage = await hre.ethers.getContractFactory("Storage");\n    const storage = await Storage.deploy();\n    await storage.deployed();\n    console.log(`Storage contract deployed to ${storage.address}`);\n}\n\nmain().catch((error) => {\n    console.error(error);\n    process.exitCode = 1;\n});\n')),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Run the deployment script on C1 testnet:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat run scripts/deploy.js --network c1_testnet\n")),(0,o.kt)("p",null,"After a successful deployment, you should see an output containing the address of the deployed contract. With this completed, we can proceed to create a frontend interface to interact with the contract."),(0,o.kt)("h2",{id:"create-frontend"},"Create Frontend"),(0,o.kt)("p",null,"We will use the recommended create-wagmi command line interface to set up a new wagmi app using TypeScript and install the required dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create wagmi\n")),(0,o.kt)("p",null,"(Choose Vite (React), then Rainbowkit and Public RPC)"),(0,o.kt)("p",null,"Enter the created folder, run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn dev")," and you will get a link to open the development site in your browser. "),(0,o.kt)("p",null,"By default, only Ethereum mainnet will be available so let\u2019s change that to add Milkomeda C1 testnet. Create a file named ",(0,o.kt)("strong",{parentName:"p"},"milkomeda.ts")," in the folder, with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const milkomedaC1Testnet = {\n    id: 200_101,\n    name: 'Milkomeda C1 Testnet',\n    network: 'milkomedac1test',\n    iconUrl: 'https://dcspark.github.io/milkomeda-documentation/img/favicon.svg',\n    iconBackground: '#000',\n    nativeCurrency: {\n      decimals: 18,\n      name: 'milkTADA',\n      symbol: 'milkTADA',\n    },\n    rpcUrls: {\n      default: {\n        http: ['https://rpc-devnet-cardano-evm.c1.milkomeda.com'],\n      },\n    },\n    blockExplorers: {\n      default: { name: 'BlockScout', url: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com' },\n    },\n    testnet: true,\n};\n\n\nexport { milkomedaC1Testnet }\n")),(0,o.kt)("p",null,"Now let\u2019s add it to the file wagmi.ts by importing the new defined chain and changing the configureChains call to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { milkomedaC1Testnet } from './milkomeda'\n\nconst { chains, provider, webSocketProvider } = configureChains(\n  [mainnet, milkomedaC1Testnet, ],\n  [\n    publicProvider(),\n  ],\n)\n")),(0,o.kt)("p",null,"By connecting our account through Metamask, we should now be able to see a chain selector within the connect button."),(0,o.kt)("img",{src:r,className:"img-full",alt:"Chain Connector"}),(0,o.kt)("p",null,"By clicking on the chain, we will now be able to choose Milkomeda C1 Testnet."),(0,o.kt)("img",{src:i,className:"img-full",alt:"Switch Networks"}),(0,o.kt)("p",null,"Apart from Metamask, we can also connect through WalletConnect. By default, Rainbow and Coinbase wallet will also be available, but it is possible to disable or specify a custom list."),(0,o.kt)("img",{src:l.Z,className:"img-medium",alt:"Wallet Selector"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"While not necessary, we can edit the App.tsx file to remove the Account component as the ENS elements it contains are only relevant for the Ethereum mainnet.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now let\u2019s connect to the Smart Contract to read and write to the value variable.")," We\u2019ll create a new file named Storage.tsx in the components folder and add the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useContractRead } from 'wagmi'\nimport StorageInfo from '../../../artifacts/contracts/SimpleStorage.sol/Storage.json'\n\nfunction Storage() {\n    const CONTRACT_ADDRESS = \"0x32273C07E64a134D05b5Ec5e794c91bC7498Ff8f\"\n\n    const { data } = useContractRead({\n        address: CONTRACT_ADDRESS,\n        abi: StorageInfo.abi,\n        functionName: 'retrieve',\n        watch: true\n      })\n\n  return (\n    <>\n    <div>Storage Value: {data?.toString()}</div>\n    </>\n  )\n}\n\nexport default Storage\n")),(0,o.kt)("p",null,"In this section, we are referencing the JSON file that was generated by Hardhat during the Smart Contract compilation. This file contains the ABI, and you may need to enable esModuleInterop in your tsconfig.json file. Additionally, we have hard-coded the address of the deployed contract. The most important aspect is that we are using the useContractRead Wagmi hook to retrieve the value from the retrieve function within the contract."),(0,o.kt)("p",null,"Next, we will include hooks that allow us to modify the value in the Smart Contract. To accomplish this, we will use the usePrepareContractWrite and useContractWrite hooks, and create an input and button to send a new value to the setter function."),(0,o.kt)("p",null,"After adding to the imports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useContractRead, usePrepareContractWrite, useContractWrite } from 'wagmi'\nimport { useState } from \"react\";\n")),(0,o.kt)("p",null,"We will add the following to the Storage component function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    const [inputValue, setInputValue] = useState(\"0\")\n\n    const { config } = usePrepareContractWrite({\n        address: CONTRACT_ADDRESS,\n        abi: StorageInfo.abi,\n        args: [inputValue],\n        functionName: 'store',\n      })    \n\n    const { write } = useContractWrite(config)\n")),(0,o.kt)("p",null,"Then add the html elements:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"        <input value={inputValue} \n            onChange={(event) => {\n                setInputValue(event.target.value)\n            }}/>\n        <button disabled={!write} onClick={() => write?.()}>Store</button>\n")),(0,o.kt)("p",null,"Finally, add the newly created component to the App.tsx file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"(...)\nimport Storage from './components/Storage'\n(...)\n      <ConnectButton />\n      <Storage />\n(...)\n\n")),(0,o.kt)("p",null,"We can now modify the value in the input box, click the button, and will be prompted to sign the transaction to write the new value to the Smart Contract. As the watch option in the useContractRead hook is set to true, the value will automatically update."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"With that, we now have a fully functional dApp that connects to the Milkomeda C1 Testnet, can read from our Smart Contract, and is also capable of writing to it.")),(0,o.kt)("img",{src:c,className:"img-full",alt:"Full dApp"}),(0,o.kt)("p",null,"This guide provided a step-by-step explanation of how to develop a basic Storage Smart Contract and deploy it on the Milkomeda C1 Testnet using Hardhat. It also outlined how to create a frontend that interfaces with the contract, utilizing React, Wagmi, and Rainbowkit."))}g.isMDXComponent=!0},5785:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image3-21495b8cd6564d1d0cb834a43a8f4aca.png"}}]);