"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[8907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Milkomeda Open Oracle"},i="Milkomeda Open Oracle Developer guide",c={unversionedId:"cardano/for-developers/milkomeda_open_oracle",id:"cardano/for-developers/milkomeda_open_oracle",title:"Milkomeda Open Oracle Developer guide",description:"Milkomeda C1 Sidechain is fully operational on Mainnet, which means that it is currently deployed and connected to production version of the Cardano blockchain.",source:"@site/docs/cardano/for-developers/milkomeda_open_oracle.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/milkomeda_open_oracle",permalink:"/cardano/for-developers/milkomeda_open_oracle",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Milkomeda Open Oracle"},sidebar:"cardano",previous:{title:"Setting up a Project with The Graph",permalink:"/cardano/for-developers/deploy_subgraph"},next:{title:"Guides",permalink:"/category/guides"}},l={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Calling the Price Feed",id:"calling-the-price-feed",level:2},{value:"Price Feed using Javascript",id:"price-feed-using-javascript",level:3},{value:"Price Feed Using Python",id:"price-feed-using-python",level:3},{value:"Integrate Milkomeda Open Oracle into your Smart Contracts using Hardhat",id:"integrate-milkomeda-open-oracle-into-your-smart-contracts-using-hardhat",level:2},{value:"Summary",id:"summary",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"milkomeda-open-oracle-developer-guide"},"Milkomeda Open Oracle Developer guide"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Milkomeda C1 Sidechain is fully operational on Mainnet, which means that it is currently deployed and connected to production version of the Cardano blockchain.")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Milkomeda Open Oracle (MOO) is a decentralized oracle service for a USD/ADA pricefeed with a minimal governance system. It permits multiple owners to post data, and the majority of the current owners can add or remove owners. "),(0,r.kt)("p",null,"Sources are checked every ~10 seconds, outliers are removed if the prices they provide differ from the mean by more than 2 standard deviations and the mean of the remaining prices is calculated as the final value. If the new mean price differs from the last price posted on the blockchain by more than 1%, the new mean price is posted and the price is updated on the blockchain."),(0,r.kt)("p",null,"Developers have several options to fetch prices from the oracle contract. They can integrate the oracle interface into their smart contracts, allowing them to access on-chain data updated at regular intervals as input to any logic that the smart contract might have. Alternatively, developers can call the oracle contract directly with languages like Javascript/Typescript to use the price feed on a DApp frontend."),(0,r.kt)("p",null,"Those interested in going through the Smart Contract, can check out the in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DjedAlliance/Oracle-Solidity"},"public repo"),"."),(0,r.kt)("p",null,"The latest version of the oracle is the ",(0,r.kt)("strong",{parentName:"p"},"Aggregator 3 Oracle (A3O)")," contract, that offers the security of not relying on a single price feed for the output, but rather reports the median of the latest 3 data points written by distinct owners."),(0,r.kt)("p",null,"In this guide, we will provide an example using Javascript, Python and inside a Smart Contract, requiring the Milkomeda Open Oracle's ABI which is accessible ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/DjedAlliance/Oracle-Solidity/main/abi/Aggr3Oracle.json"},"here"),", and the contract's deployment address, found in the following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Milkomeda C1"),(0,r.kt)("th",{parentName:"tr",align:null},"Open Oracle Deployment address"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"0x49484Ae8646C12A8A68DfE2c978E9d4Fa5b01D16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"0x...")))),(0,r.kt)("p",null,"It is crucial to note that to leverage the capabilities of the Milkomeda Open Oracle, the caller of the read function must agree to the terms of service, which are accessible ",(0,r.kt)("a",{parentName:"p",href:"https://ext-oracle-disclaimer.milkomeda.com/disclaimer.pdf"},"here"),".  This is a one-time requirement (per address), and we will provide guidance on how to accomplish that in this guide."),(0,r.kt)("p",null,"For the purposes of this tutorial, we will be utilizing the Milkomeda C1 Testnet. However, the implementation process is identical on the C1 Mainnet, and the only adjustment necessary would be the deployment address."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can choose to follow allong completing the coding steps or download the full code for this tutorial by running:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"npx degit dcspark/milkomeda-guides#open_oracle oracle_guide\n"))),(0,r.kt)("h2",{id:"calling-the-price-feed"},"Calling the Price Feed"),(0,r.kt)("h3",{id:"price-feed-using-javascript"},"Price Feed using Javascript"),(0,r.kt)("p",null,"To call the price feed using Javascript, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethers")," (^6) package, under the assumption that the Terms of Service have not yet been accepted, indicating that the contract is being called for the first time from our address."),(0,r.kt)("p",null,"Let\u2019s create a new javascript project with a script that can be called from the command line. This can easily be adapted to be used for a frontend in a browser.\nNavigate to a new folder where you want to create your project. In a new folder, create an empty project and add the ethers and dotenv packages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init -y\nyarn add ethers dotenv\n")),(0,r.kt)("p",null,"Navigate to the root directory of your project. Create a .env file with the private key for the account you intend to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PRIVATE_KEY=<PRIVATE_KEY>\n")),(0,r.kt)("p",null,"NOTE: Remember to keep your private key safe from prying eyes. It is recommended to use a new separate account just for testing purposes."),(0,r.kt)("p",null,"Now let\u2019s create a file named \u201ccallPriceFeed.js\u201d and add the imports and initial setup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const ethers = require("ethers");\nrequire("dotenv").config();\nconst abi = require(\'./Oracle.json\').abi\n\nconst rpcURL = "https://rpc-devnet-cardano-evm.c1.milkomeda.com"\nconst provider = new ethers.JsonRpcProvider(rpcURL)\nconst signer = new ethers.Wallet( `0x${process.env.PRIVATE_KEY}`, provider )\nconst oracle = new ethers.Contract("0x49484Ae8646C12A8A68DfE2c978E9d4Fa5b01D16", abi, signer)\n')),(0,r.kt)("p",null,"After importing the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dotenv")," package, we\u2019re importing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Oracle.json")," that contains the ABI and setting up a provider, signer and an instance of the oracle contract. Notice we are using the rpc URL and deployment address for Milkomeda C1 Testnet."),(0,r.kt)("p",null,"To get the price feed for USD from the oracle we need to call the readData() function, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const getPriceFeed = async () => {\n    const price = await oracle.readData()\n    console.log("Price:", ethers.formatEther(price))\n}\n\ngetPriceFeed()\n')),(0,r.kt)("p",null,"However, if you are running the readData function for the first time, the transaction will fail because, although it is a read function, it requires the caller of the function to have accepted the Term of Service. That acceptance is stored in the smart contract as a mapping and can be queried by calling the acceptedTermsOfService function and providing an address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'oracle.acceptedTermsOfService(signer.address)\n.then(resp => console.log("Accepted Terms of Service:", resp))\n')),(0,r.kt)("p",null,"Making this call should output \u201cAccepted Terms of Service: false\u201d which means that calling the readData() function will fail."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"getPriceFeed")," function of our script, we can add a test to check if the terms of service have been accepted and call the accept function if needed. Let\u2019s add that to the ",(0,r.kt)("inlineCode",{parentName:"p"},"getPriceFeed")," function."),(0,r.kt)("p",null,"We will also add a function call to retrieve the description of the price feed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'oracle.description().then(resp => console.log("Description:", resp))\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"See the final script"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const ethers = require("ethers");\nrequire("dotenv").config();\nconst abi = require(\'./Oracle.json\').abi\n\nconst rpcURL = "https://rpc-devnet-cardano-evm.c1.milkomeda.com"\nconst provider = new ethers.JsonRpcProvider(rpcURL)\nconst signer = new ethers.Wallet( `0x${process.env.PRIVATE_KEY}`, provider )\nconst oracle = new ethers.Contract("0x49484Ae8646C12A8A68DfE2c978E9d4Fa5b01D16", abi, signer)\n\n\n// oracle.acceptedTermsOfService(signer.address)\n// .then(resp => console.log("Accepted Terms of Service:", resp))\n\noracle.description()\n.then(resp => console.log("Description:", resp))\n\n\nconst getPriceFeed = async () => {\n    const accepted = await oracle.acceptedTermsOfService(signer.address)\n    if (!accepted) {\n        console.log("Accepting ToS...")\n        const tx = await oracle.acceptTermsOfService();\n        await tx.wait();    \n    }\n    const price = await oracle.readData()\n    console.log("Price:", ethers.formatEther(price))\n}\n\ngetPriceFeed()\n')))),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"node callPriceFeed.js")," for the first time will output the following lines (the price will probably be different):"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\nDescription: ADA/USD",(0,r.kt)("br",null),"\nAccepting ToS...",(0,r.kt)("br",null),"\nPrice: 2.8398199554148265\n")),(0,r.kt)("p",null,"Subsequent calls to the function, from the same address, will only show the description and the price since the call to ",(0,r.kt)("inlineCode",{parentName:"p"},"acceptedTermsOfService(address)")," will return true."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The result from the price feed,  approx 2.84 (formatted from 18 decimals), is the amount of USD in ADA. Readers are probably used to seeing the price of ADA in USD, which would be the inverse of the result."),(0,r.kt)("p",{parentName:"admonition"},"USD/ADA = 2.8398199554148265"),(0,r.kt)("p",{parentName:"admonition"},"ADA/USD = 1 / (USD/ADA) = 1 / 2.8398199554148265 = 0.352135")),(0,r.kt)("h3",{id:"price-feed-using-python"},"Price Feed Using Python"),(0,r.kt)("p",null,"To call the price feed using Python, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"web3py")," package, under the assumption that the Terms of Service have not yet been accepted, indicating that the contract is being called for the first time from our address."),(0,r.kt)("p",null,"Let\u2019s create a new python script that can be called from the command line. "),(0,r.kt)("p",null,"First, create a new virtual environment and activate it: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python -m venv venv\nsource venv/bin/activate\n")),(0,r.kt)("p",null,"Then, install the required packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install web3py python-dotenv\n")),(0,r.kt)("p",null,"Create a .env file with the private key for the account you intend to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PRIVATE_KEY=<PRIVATE_KEY>\n")),(0,r.kt)("p",null,"NOTE: Remember to keep your private key safe from prying eyes. It is recommended to use a new separate account just for testing purposes."),(0,r.kt)("p",null,"Create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"call_price_feed.py")," and write to it the following sections of code.\nWe start with some imports and loading the values in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," into a ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import requests\nfrom dotenv import dotenv_values\nfrom eth_account import Account\nfrom web3 import Web3\n\nconfig = dotenv_values(".env") \n')),(0,r.kt)("p",null,"We load an account from the private key in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," and create a connection to Milkomeda."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'signer = Account.from_key(config[\'PRIVATE_KEY\'])\n\nrpc_url = "https://rpc-mainnet-cardano-evm.c1.milkomeda.com"\n\n\nweb3 = Web3(Web3.HTTPProvider(rpc_url))\nprint("Connected to Milkomeda C1 Mainnet:", web3.is_connected())\n')),(0,r.kt)("p",null,"The contract address will be hardcoded and we'll read the ABI from the repo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'oracle_address = "0x49484Ae8646C12A8A68DfE2c978E9d4Fa5b01D16" # Mainnet\n\nres = requests.get("https://raw.githubusercontent.com/DjedAlliance/Oracle-Solidity/main/abi/Aggr3Oracle.json")\nabi = res.json().get(\'abi\')\n\noracle = web3.eth.contract(address=oracle_address, abi=abi)\n')),(0,r.kt)("p",null,"We will write a helper function to sign the transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def sign_and_send(txn, account):\n    signed_txn = web3.eth.account.sign_transaction(txn, private_key=account._private_key)\n    tx_hash = web3.eth.send_raw_transaction(signed_txn.rawTransaction)\n    receipt = web3.eth.wait_for_transaction_receipt(tx_hash)\n    return receipt\n\n")),(0,r.kt)("p",null,"Then, a call will be made to the smart contract to check if the sender has accapted the terms of service,\nand if not, a call will be made to accept."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(\"Description:\", oracle.functions.description().call())\n\nhas_accepted = oracle.functions.acceptedTermsOfService(signer.address).call()\nif not has_accepted:\n    print(\"Accepting ToS...\")\n    txn = oracle.functions.acceptTermsOfService().build_transaction({\n            'gas': 700000,\n            'gasPrice': Web3.to_wei('500', 'gwei'),\n            'nonce': web3.eth.get_transaction_count(signer.address),\n        })\n    res = sign_and_send(txn, signer)\n\ntxn = oracle.functions.readData().call({'from': signer.address})\nprint(\"USD/ADA:\", txn / 1e18)\n")),(0,r.kt)("p",null,"Finally, there is call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"readData()"),' to retrive the latest price from the oracle. Note the the "from" key in the call is required.'),(0,r.kt)("details",null,(0,r.kt)("summary",null,"See the final script"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nfrom dotenv import dotenv_values\nfrom eth_account import Account\nfrom web3 import Web3\n\nconfig = dotenv_values(\".env\") \n\nsigner = Account.from_key(config['PRIVATE_KEY'])\n\nrpc_url = \"https://rpc-mainnet-cardano-evm.c1.milkomeda.com\"\n\nweb3 = Web3(Web3.HTTPProvider(rpc_url))\nprint(\"Connected to Milkomeda C1 Mainnet:\", web3.is_connected())\n\n\noracle_address = \"0x49484Ae8646C12A8A68DfE2c978E9d4Fa5b01D16\" # Mainnet\n\nres = requests.get(\"https://raw.githubusercontent.com/DjedAlliance/Oracle-Solidity/main/abi/Aggr3Oracle.json\")\nabi = res.json().get('abi')\n\n\noracle = web3.eth.contract(address=oracle_address, abi=abi)\n\ndef sign_and_send(txn, account):\n    signed_txn = web3.eth.account.sign_transaction(txn, private_key=account._private_key)\n    tx_hash = web3.eth.send_raw_transaction(signed_txn.rawTransaction)\n    receipt = web3.eth.wait_for_transaction_receipt(tx_hash)\n    return receipt\n\n\nprint(\"Description:\", oracle.functions.description().call())\n\nhas_accepted = oracle.functions.acceptedTermsOfService(signer.address).call()\nif not has_accepted:\n    print(\"Accepting ToS...\")\n    txn = oracle.functions.acceptTermsOfService().build_transaction({\n            'gas': 700000,\n            'gasPrice': Web3.to_wei('500', 'gwei'),\n            'nonce': web3.eth.get_transaction_count(signer.address),\n        })\n    res = sign_and_send(txn, signer)\n\ntxn = oracle.functions.readData().call({'from': signer.address})\nprint(\"Price:\", txn / 1e18)\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\nConnected to Milkomeda C1 Mainnet: True",(0,r.kt)("br",null),"\nDescription: ADA/USD",(0,r.kt)("br",null),"\nAccepting ToS...",(0,r.kt)("br",null),"\nPrice: 2.4746778588097293\n")),(0,r.kt)("h2",{id:"integrate-milkomeda-open-oracle-into-your-smart-contracts-using-hardhat"},"Integrate Milkomeda Open Oracle into your Smart Contracts using Hardhat"),(0,r.kt)("p",null,"To use the oracle in our smart contract, we need to interact with the oracle contract on the relevant chain while ensuring that our smart contract accepts the terms of service."),(0,r.kt)("p",null,"For testing purposes, we can use Hardhat, a development environment that enables us to compile, deploy, and test smart contracts in a local environment."),(0,r.kt)("p",null,"To set up Hardhat, create a new folder, initialize a JavaScript project, and install Hardhat by executing the following commands in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init -y\nyarn add -D hardhat\n")),(0,r.kt)("p",null,"Once Hardhat is installed, we need to initialize a new Hardhat project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat init\n")),(0,r.kt)("p",null,"This will create a new Hardhat project with a basic directory structure and some example files."),(0,r.kt)("p",null,"Next, we need to create a new smart contract that will use the Milkomeda Open Oracle. Let's call it PriceFeedConsumer.sol."),(0,r.kt)("p",null,"Create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"PriceFeedConsumer.sol")," in the contracts directory of your project. Then, add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ninterface IOracle {\n    function readData() external view returns (uint256);\n    function acceptTermsOfService() external;\n}\n\ncontract PriceFeedConsumer {\n    IOracle public oracle;\n \n    constructor() {\n        oracle = IOracle(0x49484Ae8646C12A8A68DfE2c978E9d4Fa5b01D16);\n        oracle.acceptTermsOfService();\n    }\n\n    function getPrice() public view returns (uint256 data) {\n        data = oracle.readData();\n        // Contract logic...\n    }\n}\n")),(0,r.kt)("p",null,"This smart contract uses a hardcoded deployment address for the oracle on Milkomeda C1 Mainnet. When the contract is deployed, the acceptTermsOfService function is called for the contract address in the constructor."),(0,r.kt)("p",null,"The contract has one function, ",(0,r.kt)("inlineCode",{parentName:"p"},"getPrice"),", which retrieves the latest price data and returns it as an integer. Here we only return the value of the price feed, but any desired logic that depends on that feed can obvisouly be implemented."),(0,r.kt)("p",null,"To interact with the oracle, we added the interface for the two required functions."),(0,r.kt)("p",null,"Now that we have our smart contract, we need to deploy it to the Milkomeda C1 Mainnet. To do this, we will use Hardhat's deployment script. "),(0,r.kt)("p",null,"In the scripts directory of your project, create a new file called deploy.js. Then, add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const hre = require("hardhat");\n\nasync function main() {\n  const Feed = await hre.ethers.getContractFactory("PriceFeedConsumer");\n  const feed = await Feed.deploy();\n\n  await feed.deployed();\n  console.log(\n    `PriceFeedConsumer deployed to ${feed.address}`\n  );\n}\n\nmain().catch((error) => {\n  console.error(error);\n  process.exitCode = 1;\n});\n')),(0,r.kt)("p",null,"This code uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethers.js")," library to deploy our ",(0,r.kt)("inlineCode",{parentName:"p"},"PriceFeedConsumer")," and logs the address of the deployed contract to the console."),(0,r.kt)("p",null,"To deploy the contract on C1, we will create a .env file with the private key of our deployment address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PRIVATE_KEY=<PRIVATE_KEY>\n")),(0,r.kt)("p",null,"And we will change the hardhat.config.js by import our account and adding the C1 Testnet to the networks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'require("@nomicfoundation/hardhat-toolbox");\nrequire("dotenv").config();\n\n/** @type import(\'hardhat/config\').HardhatUserConfig */\nmodule.exports = {\n  solidity: "0.8.18",\n  networks: {\n    c1: {\n      url: `https://rpc-mainnet-cardano-evm.c1.milkomeda.com`,\n      accounts: [`0x${process.env.PRIVATE_KEY}`]\n    }\n  }\n};\n')),(0,r.kt)("p",null,"Now we can deploy our contract. Run the following command in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat run scripts/deploy.js --network c1\n")),(0,r.kt)("p",null,"Now that we have deployed our contract, we can call it from another smart contract or from a web3-enabled application.\nTo call the ",(0,r.kt)("inlineCode",{parentName:"p"},"getPrice\xb4 function from another smart contract, you can simply import the "),"PriceFeedConsumer\xb4 and call the ",(0,r.kt)("inlineCode",{parentName:"p"},"getPrice")," function, but let\u2019s see an example of how to call it from a Hardhat script."),(0,r.kt)("p",null,"Create a file in the scripts folder called \u201ccallPriceFeed.js\u201d and add the code below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const hre = require("hardhat");\n\nconst getPrice = async () => {\n    const address = \'0xd7a246726355961197c0E32d7914aDDa3dB3f4E4\'\n    const feed = await hre.ethers.getContractAt("PriceFeedConsumer", address);\n\n    const price = await feed.getPrice()\n    console.log(`USD/ADA: ${hre.ethers.utils.formatEther(price)}`)\n}\n  \ngetPrice()\n')),(0,r.kt)("p",null,"Now run it by running the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat run scripts/call.js --network c1\n")),(0,r.kt)("p",null,'The result in the terminal look similar to this (although with a different price)"'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"USD/ADA: 2.8398199554148265")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this guide, we explored the Milkomeda Open Oracle, a decentralized oracle service that provides a price feed. We demonstrated two methods for fetching the data: (i) querying price data from the oracle contract using calls Javascript/Typescript and Python, and (ii) implementing the oracle interface to call the price feed for our own smart contract."),(0,r.kt)("p",null,"It's crucial to note that acceptance of the terms of service is mandatory for the calling address; otherwise, the call will fail."))}p.isMDXComponent=!0}}]);