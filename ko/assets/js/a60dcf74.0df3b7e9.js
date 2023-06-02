"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[8964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o=n.p+"assets/images/image1-9bb2c79a58080c84e51d7b38b1762a4a.png",s={sidebar_label:"Quantum Random Numbers from API3",sidebar_position:3},i="Quantum Random Numbers from API3",l={unversionedId:"cardano/guides/qrng",id:"cardano/guides/qrng",title:"Quantum Random Numbers from API3",description:"If you're here solely for the purpose of generating QRNGs on Milkomeda C1 using API3, skip the introduction and head straight to the next section, that covers this topic.",source:"@site/docs/cardano/guides/qrng.mdx",sourceDirName:"cardano/guides",slug:"/cardano/guides/qrng",permalink:"/ko/cardano/guides/qrng",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Quantum Random Numbers from API3",sidebar_position:3},sidebar:"cardano",previous:{title:"Building on Milkomeda with Thirdweb",permalink:"/ko/cardano/guides/thirdweb"},next:{title:"Creating a Gnosis Safe on Milkomeda",permalink:"/ko/cardano/guides/creating_safe_on_MilkomedaC1"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Creating the Smart Contract",id:"creating-the-smart-contract",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Setting the Parameters",id:"setting-the-parameters",level:2},{value:"Make a Request",id:"make-a-request",level:2},{value:"Summary",id:"summary",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quantum-random-numbers-from-api3"},"Quantum Random Numbers from API3"),(0,r.kt)("p",null,"If you're here solely for the purpose of generating QRNGs on Milkomeda C1 using API3, skip the introduction and head straight to the next section, that covers this topic."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Milkomeda C1 Sidechain is fully operational on Mainnet, which means that it is currently deployed and connected to production version of the Cardano blockchain.")),(0,r.kt)("p",null,"Smart contracts normally rely on an external oracle service for random number generation because their deterministic virtual machine cannot generate truly random numbers. Regular computers are also unable to generate truly random numbers and typically use pseudorandom number generation methods to generate random-looking numbers. However, ",(0,r.kt)("strong",{parentName:"p"},"quantum random number generation (QRNG)")," is a method that can generate truly random numbers based on quantum phenomena and is considered ",(0,r.kt)("strong",{parentName:"p"},"the gold standard for randomness"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Australian National University (ANU)")," is one of the leading research universities in Australia, and also the provider of the well-known and widely used Quantum Random Numbers API, which is powered by novel research done by the ANU quantum optics group."),(0,r.kt)("p",null,"API3 and The Australian National University Quantum Optics Group bring truly random numbers based on quantum mechanics to smart contracts at no charge with ",(0,r.kt)("strong",{parentName:"p"},"API3 QRNG"),"."),(0,r.kt)("p",null,"API3 QRNG is built on Airnode RRP, and as a result is provider-agnostic, with the ANU Quantum Random Numbers being just one of the available providers. Visit this ",(0,r.kt)("a",{parentName:"p",href:"https://docs.api3.org/qrng/reference/providers.html#airnode-2"},"link")," for a list of the providers available for the API3 QRNG."),(0,r.kt)("p",null,"In this guide we ",(0,r.kt)("strong",{parentName:"p"},"will show how to use the API3 QRNG")," to request a random number in a smart contract on ",(0,r.kt)("strong",{parentName:"p"},"Milkomeda C1 Devnet"),", however, the ",(0,r.kt)("strong",{parentName:"p"},"ANU Quantum Random Numbers")," is only available on mainnets, so we will use another provider from the list that is available on Testnets, the ",(0,r.kt)("strong",{parentName:"p"},"Nodary Random Numbers"),". "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Nodary")," is an independent group within the API3 ecosystem that builds high-impact oracle services. The ",(0,r.kt)("strong",{parentName:"p"},"Nodary Random Numbers")," emulates the QRNG service on testnets using pseudorandom number generation.")),(0,r.kt)("p",null,"The implementation on the mainnet would remain consistent, with the only variation being the request parameters stored in the smart contract, which direct to the provider within the smart contract."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The API3 QRNG service is implemented using the Airnode request\u2013response protocol contract, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/AirnodeRrpV0.sol"},"AirnodeRrpV0"),", to acquire a random number."),(0,r.kt)("p",null,"Upon request, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.api3.org/airnode/v0.9/"},"Airnode")," calls a designated API operation and acquires a random number, and then delivers it on-chain, via the ",(0,r.kt)("inlineCode",{parentName:"p"},"AirnodeRrpV0")," protocol contract, to a requester."),(0,r.kt)("p",null,"In the diagram below a requester (smart contract) submits a request for a random number to",(0,r.kt)("inlineCode",{parentName:"p"}," AirnodeRrpV0"),". Airnode gathers the request from the ",(0,r.kt)("inlineCode",{parentName:"p"},"AirnodeRrpV0")," protocol contract, gets the random number from an API operation, and sends it back to AirnodeRrpV0. Once received, ",(0,r.kt)("inlineCode",{parentName:"p"},"AirnodeRrpV0")," performs a callback to the requester with the random number."),(0,r.kt)("div",{className:"image-center"},(0,r.kt)("img",{style:{width:"400px"},src:o,className:"img-full",alt:"API QRNG"})),(0,r.kt)("admonition",{title:"Gas Costs",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Using the QRNG service is free, meaning there is no subscription fee. There is a gas cost incurred on-chain when Airnode places the random number on-chain in response to a request, which the requester needs to pay for.")),(0,r.kt)("h2",{id:"creating-the-smart-contract"},"Creating the Smart Contract"),(0,r.kt)("p",null,"To make requests for random numbers, we will create a requester smart contract, that calls the QRNG service using the request\u2013response protocol (RRP) implemented by the on-chain ",(0,r.kt)("inlineCode",{parentName:"p"},"AirnodeRrpV0")," contract.\nOur contract will inherit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol"},"RrpRequesterV0.sol")," which is part of the NPM ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@api3/airnode-protocol"},"@api3/airnode-protocol")," package."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can choose to follow allong completing the coding steps or download the full code for this tutorial by running:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"npx degit dcspark/milkomeda-guides#qrng guide-qrng\n"))),(0,r.kt)("p",null,"Here is the smart contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'//SPDX-License-Identifier: MIT\npragma solidity 0.8.9;\nimport "@api3/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol";\n\ncontract QrngExample is RrpRequesterV0 {\n    event RequestedUint256(bytes32 indexed requestId);\n    event ReceivedUint256(bytes32 indexed requestId, uint256 response);\n\n    address public airnode;\n    bytes32 public endpointIdUint256;\n    address public sponsorWallet;\n    mapping(bytes32 => bool) public waitingFulfillment;\n\n    struct LatestRequest { \n      bytes32 requestId;\n      uint256 randomNumber;\n    }\n    LatestRequest public latestRequest;\n\n    constructor(address _airnodeRrp) RrpRequesterV0(_airnodeRrp) {}\n\n    function setRequestParameters(\n        address _airnode,\n        bytes32 _endpointIdUint256,\n        address _sponsorWallet\n    ) external {\n        airnode = _airnode;\n        endpointIdUint256 = _endpointIdUint256;\n        sponsorWallet = _sponsorWallet;\n    }\n\n    function makeRequestUint256() external {\n        bytes32 requestId = airnodeRrp.makeFullRequest(\n            airnode,\n            endpointIdUint256,\n            address(this),\n            sponsorWallet,\n            address(this),\n            this.fulfillUint256.selector,\n            ""\n        );\n        waitingFulfillment[requestId] = true;\n        latestRequest.requestId = requestId;\n        latestRequest.randomNumber = 0;\n        emit RequestedUint256(requestId);\n    }\n\n    function fulfillUint256(bytes32 requestId, bytes calldata data)\n        external\n        onlyAirnodeRrp\n    {\n        require(\n            waitingFulfillment[requestId],\n            "Request ID not known"\n        );\n        waitingFulfillment[requestId] = false;\n        uint256 qrngUint256 = abi.decode(data, (uint256));\n        // Do what you want with `qrngUint256` here...\n        latestRequest.randomNumber = qrngUint256;\n        emit ReceivedUint256(requestId, qrngUint256);\n    }\n}\n\n')),(0,r.kt)("p",null,"The two most important functions are specific to requesting and receiving a random number from the QRNG service:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"makeRequestUint256()")," calls ",(0,r.kt)("inlineCode",{parentName:"li"},"airnodeRrp.makeFullRequest()")," to request a random number, which in turn returns a requestId. The requestId is stored in the mapping ",(0,r.kt)("inlineCode",{parentName:"li"},"waitingFulfillment")," for reference in the callback function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fulfillUint256")," is the callback to receive the random number from the QRNG service. The callback contains the requestId returned by the initial request and the data, which contains the random number. The requestId is verified and removed from the mapping ",(0,r.kt)("inlineCode",{parentName:"li"},"waitingFulfillment"),".")),(0,r.kt)("p",null,"The additional function ",(0,r.kt)("inlineCode",{parentName:"p"},"setRequestParameters")," is used to set the provider parameters for the requests."),(0,r.kt)("p",null,"For testing purposes, we will use Hardhat, a development environment that enables us to compile, deploy, and test smart contracts in a local environment."),(0,r.kt)("p",null,"To set up Hardhat, create a new folder, initialize a JavaScript project, and install Hardhat by executing the following commands in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn init -y\nyarn add -D hardhat\n")),(0,r.kt)("p",null,"Once Hardhat is installed, we need to initialize a new Hardhat project.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx hardhat init\n")),(0,r.kt)("p",null,"This will create a new Hardhat project with a basic directory structure and some example files."),(0,r.kt)("p",null,"Because our smart contract will inherit from ",(0,r.kt)("inlineCode",{parentName:"p"},"RrpRequesterV0"),", we will need to import the ",(0,r.kt)("inlineCode",{parentName:"p"},"@api3/airnode-protocol")," npm package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add @api3/airnode-protocol\n")),(0,r.kt)("p",null,"Let's edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," file to change the solidity compiler version and add the ",(0,r.kt)("strong",{parentName:"p"},"Milkomeda C1 Devnet")," chain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'require("@nomicfoundation/hardhat-toolbox");\nrequire("dotenv").config();\n\n/** @type import(\'hardhat/config\').HardhatUserConfig */\nmodule.exports = {\n  solidity: "0.8.9",\n  networks: {\n    c1_testnet: {\n      url: `https://rpc-devnet-cardano-evm.c1.milkomeda.com`,\n      accounts: [`0x${process.env.PRIVATE_KEY}`]\n    }\n  }  \n};\n')),(0,r.kt)("p",null,"This config includes the account we will use to sign transactions, which will be imported from a private key in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PRIVATE_KEY=<PRIVATE_KEY>\n")),(0,r.kt)("p",null,"Now create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"QrngExample.sol")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," folder and compile the smart contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat compile\n")),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("admonition",{title:"Deploy to a devnet only",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Do not use the ",(0,r.kt)("inlineCode",{parentName:"p"},"QrngExample.sol")," contract in production. It lacks adequate security features. You can deploy on a devnet to get random numbers from the ",(0,r.kt)("strong",{parentName:"p"},"Nodary RNG API"),", which has equivalent usage as ",(0,r.kt)("strong",{parentName:"p"},"ANU Quantum Random Numbers")," available on mainnets.")),(0,r.kt)("p",null,"To deploy our example smart contract, we will need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"_airnodeRrp")," address as parameter. "),(0,r.kt)("p",null,"Use the following address for ",(0,r.kt)("strong",{parentName:"p"},"Milkomeda C1 Devnet"),", but the full list of addresses for mainnets and devnets if available ",(0,r.kt)("a",{parentName:"p",href:"https://docs.api3.org/qrng/reference/chains.html"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd\n")),(0,r.kt)("p",null,"Use the following a script, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"_airnodeRrp")," value hardcoded for ",(0,r.kt)("strong",{parentName:"p"},"Milkomeda C1 Devnet"),", to deploy the contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const hre = require("hardhat");\n\nconst AIRNODE_RRP = "0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd"\n\nasync function main() {\n    const QrngExample = await hre.ethers.getContractFactory("QrngExample");\n    const qrng = await QrngExample.deploy(AIRNODE_RRP);\n    await qrng.deployed();\n    console.log(`QrngExample contract deployed to ${qrng.address}`);\n}\n\nmain().catch((error) => {\n    console.error(error);\n    process.exitCode = 1;\n});\n')),(0,r.kt)("p",null,"Run the script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat run scripts/deploy.js --network c1_testnet\n")),(0,r.kt)("h2",{id:"setting-the-parameters"},"Setting the Parameters"),(0,r.kt)("p",null,"Before making a request, there are a few parameters that must be set in the smart contract, as they determine which Airnode endpoint will be called and define the wallet that will pay the gas costs for the response."),(0,r.kt)("p",null,"Let's recall the ",(0,r.kt)("inlineCode",{parentName:"p"},"setRequestParameters")," function in our ",(0,r.kt)("inlineCode",{parentName:"p"},"QrngExample")," smart contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    function setRequestParameters(\n        address _airnode,\n        bytes32 _endpointIdUint256,\n        address _sponsorWallet\n    ) external {\n        airnode = _airnode;\n        endpointIdUint256 = _endpointIdUint256;\n        sponsorWallet = _sponsorWallet;\n    }\n")),(0,r.kt)("p",null,"We will have to call this function with the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airnode")," - The address that belongs to the Airnode that will be called to get the QRNG data via its endpoints"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_endpointIdUint256")," - The Airnode endpoint ID that returns one random number of type uint256"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_sponsorWallet")," - A wallet derived from the requester's contract address, the Airnode address, and the Airnode xpub. ",(0,r.kt)("strong",{parentName:"li"},"The wallet is used to pay gas costs to acquire a random number."))),(0,r.kt)("p",null,"The values for the first two parameters that refer to ",(0,r.kt)("strong",{parentName:"p"},"Nodary Random Numbers"),", shown in the table below, are available ",(0,r.kt)("a",{parentName:"p",href:"https://docs.api3.org/qrng/reference/providers.html#airnode-2"},"here"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"airnode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x6238772544f029ecaBfDED4300f13A3c4FE84E1D"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpointIdUint256"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78"))))),(0,r.kt)("p",null,"The sponsor wallet must be derived using the command derive-sponsor-wallet-address from the Admin CLI. Use the value of the sponsor wallet address that the command outputs."),(0,r.kt)("p",null,"To derive this wallet, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx @api3/airnode-admin derive-sponsor-wallet-address \\\n  --airnode-xpub xpub6CuDdF9zdWTRuGybJPuZUGnU4suZowMmgu15bjFZT2o6PUtk4Lo78KGJUGBobz3pPKRaN9sLxzj21CMe6StP3zUsd8tWEJPgZBesYBMY7Wo \\\n  --airnode-address 0x6238772544f029ecaBfDED4300f13A3c4FE84E1D \\\n  --sponsor-address <DEPLOYMENT_ADDRESS_OF_QrngExample.sol>\n")),(0,r.kt)("p",null,"which would output something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Sponsor wallet address: 0xd517a7117B354f5FE24d73B465aECf05B6E2D177\n")),(0,r.kt)("p",null,"To set the parameters, we can create a task in ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," file. We will also hardcode the deployment address of our contract, since we will be using it for several additional tasks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'\nconst DEPLOYMENT_ADDRESS = "0x4BdD38D514600835202fE75958058DE687666855"\n\ntask("setParams", "Sets the parameters for testnets")\n.addParam("account", "The sponsor account\'s address")\n.setAction(async (taskArgs) => {\n\n  const AIRNODE = "0x6238772544f029ecaBfDED4300f13A3c4FE84E1D"\n  const ENDPOINT_ID = "0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78"\n  \n  const qrng = await hre.ethers.getContractAt("QrngExample", DEPLOYMENT_ADDRESS);\n  const res = await qrng.setRequestParameters(AIRNODE, ENDPOINT_ID, taskArgs.account);\n  console.log("Trx hash:", res.hash);\n});\n')),(0,r.kt)("p",null,"We have hardcoded the ",(0,r.kt)("inlineCode",{parentName:"p"},"_airnode")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_endpointIdUint256")," parameters for the ",(0,r.kt)("strong",{parentName:"p"},"Nodary Random Numbers")," provider, and we will pass the ",(0,r.kt)("strong",{parentName:"p"},"sponsor wallet")," as a parameter.\nTo execute this task, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat setParams --account <SPONSOR_WALLET_ADDRESS> --network c1_testnet\n")),(0,r.kt)("p",null,"Next, be sure to fund the public address of the ",(0,r.kt)("strong",{parentName:"p"},"sponsor wallet")," that the command outputs with enough devnet currency. The funds are used to pay gas costs for the Airnode's response."),(0,r.kt)("p",null,"To fund the wallet, let's add the following task to ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'task("fundSponsor", "Sends 0.1 to sponsor wallet")\n.addParam("account", "The sponsor account\'s address")\n.setAction(async (taskArgs) => {\n  console.log(`Funding sponsor wallet: ${taskArgs.account}`)\n  const [owner] = await ethers.getSigners();\n  const tx = await owner.sendTransaction({\n      to: taskArgs.account,\n      value: ethers.utils.parseEther("0.1"), \n    });\n  tx.wait()\n  const balance = await hre.ethers.provider.getBalance(taskArgs.account);\n  console.log("Balance:", ethers.utils.formatEther(balance))\n});\n')),(0,r.kt)("p",null,"Now run it with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat fundSponsor --account <SPONSOR_WALLET_ADDRESS> --network c1_testnet\n")),(0,r.kt)("admonition",{title:"Designated Sponsor Wallets",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Sponsors should not fund a sponsor wallet with more than they can trust the Airnode with, as the Airnode controls the private key to the sponsor wallet. The deployer of such Airnode undertakes no custody obligations, and the risk of loss or misuse of any excess funds sent to the sponsorWallet remains with the sponsor.")),(0,r.kt)("h2",{id:"make-a-request"},"Make a Request"),(0,r.kt)("p",null,"Each request made will use the parameters that were set by the ",(0,r.kt)("inlineCode",{parentName:"p"},"setRequestParameters")," function. These parameters can be changed at any time and subsequent requests will use the newer parameter set."),(0,r.kt)("p",null,"To make a request, we will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"makeRequestUint256")," function, which doesn't take any parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    function makeRequestUint256() external {\n        bytes32 requestId = airnodeRrp.makeFullRequest(\n            airnode,\n            endpointIdUint256,\n            address(this),\n            sponsorWallet,\n            address(this),\n            this.fulfillUint256.selector,\n            ""\n        );\n        waitingFulfillment[requestId] = true;\n        latestRequest.requestId = requestId;\n        latestRequest.randomNumber = 0;\n        emit RequestedUint256(requestId);\n    }\n')),(0,r.kt)("p",null,"We will create two hardhat tasks, one to call this function and one to return it's status. Add the following to ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'task("makeRequest", "Request a random number")\n.setAction(async () => {\n  const qrng = await hre.ethers.getContractAt("QrngExample", DEPLOYMENT_ADDRESS);\n  const tx = await qrng.makeRequestUint256();\n  tx.wait()\n});\n\ntask("latestRequest", "Get latest Request")\n.setAction(async () => {\n  const qrng = await hre.ethers.getContractAt("QrngExample", DEPLOYMENT_ADDRESS);\n  const latestRequest = await qrng.latestRequest()\n  console.log("Latest Request:", latestRequest);\n});\n')),(0,r.kt)("p",null,"Let's run both of the tasks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat makeRequest --network c1_testnet\nnpx hardhat latestRequest --network c1_testnet\n")),(0,r.kt)("p",null,"The first task makes the request and the second one checks the result of the latest request. The output should look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Latest Request: [\n  '0x2bf606d9c8f63731682b3ce40d407e1e2b432c61bfe1a6d0e3ba24d73ccc38ef',\n  BigNumber { value: \"0\" },\n  requestId: '0x2bf606d9c8f63731682b3ce40d407e1e2b432c61bfe1a6d0e3ba24d73ccc38ef',\n  randomNumber: BigNumber { value: \"0\" }\n]\n")),(0,r.kt)("p",null,"There is a ",(0,r.kt)("inlineCode",{parentName:"p"},"requestId")," but the ",(0,r.kt)("inlineCode",{parentName:"p"},"randomNumber")," is zero. That's because the callback has still not been made with the result. Let's add another task to check the status of the latest request."),(0,r.kt)("p",null,"Knowing the ",(0,r.kt)("inlineCode",{parentName:"p"},"requestId")," we can query the hashmap ",(0,r.kt)("inlineCode",{parentName:"p"},"waitingFulfillment")," which will store a boolean if the contract is waiting for the fulfillment of a certain request."),(0,r.kt)("p",null,"Add another task to ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'task("fulfillStatus", "Check request status")\n.addParam("request", "ID of the request")\n.setAction(async (taskArgs) => {  \n  const qrng = await hre.ethers.getContractAt("QrngExample", process.env.DEPLOYMENT_ADDRESS);\n  const status = await qrng.waitingFulfillment(taskArgs.request)\n  console.log("Waiting for fulfillment:", status);\n});\n')),(0,r.kt)("p",null,"and we can check if a request is pending by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat fulfillStatus \\\n  --request 0x2bf606d9c8f63731682b3ce40d407e1e2b432c61bfe1a6d0e3ba24d73ccc38ef  \\\n  --network c1_testnet\n")),(0,r.kt)("p",null,"which would output the status of the request with ",(0,r.kt)("inlineCode",{parentName:"p"},"requestId")," provided as a parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Waiting for fulfillment: true\n")),(0,r.kt)("p",null,"If the result is ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", you will have to wait a bit more for the callback to be made and check again after a few seconds. If the result is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the callback was made to the smart contract and you can check the latest request again by running that task again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat latestRequest --network c1_testnet\n")),(0,r.kt)("p",null,"The result should now contain a random number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Latest Request: [\n  '0x2bf606d9c8f63731682b3ce40d407e1e2b432c61bfe1a6d0e3ba24d73ccc38ef',\n  BigNumber { value: \"30026336249748184315323488636922905478731033197723847904867675146980257848180\" },\n  requestId: '0x2bf606d9c8f63731682b3ce40d407e1e2b432c61bfe1a6d0e3ba24d73ccc38ef',\n  randomNumber: BigNumber { value: \"30026336249748184315323488636922905478731033197723847904867675146980257848180\" }\n]\n")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This was a lot of code, so let's review the steps that were performed."),(0,r.kt)("p",null,"Using Hardhat, we created and deployed a requester smart contract, that inherited from ",(0,r.kt)("inlineCode",{parentName:"p"},"RrpRequesterV0")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@api3/airnode-protocol")," package, on Milkomeda C1 Devnet, passing the address of the ",(0,r.kt)("inlineCode",{parentName:"p"},"_airnodeRrp")," for that particular chain.\nThis smart contract has two important functions, one to make the request and one to receive the callback with the response. We wrote some hardhat tasks to make the requests and check for response and the status of the response. After the callback is made to our smart contract, in reponse to our request, we will have received a ",(0,r.kt)("strong",{parentName:"p"},"random number"),"."),(0,r.kt)("p",null,"It is important to underline that we used a devnet (Milkomeda C1 Devnet) and the ",(0,r.kt)("strong",{parentName:"p"},"ANU Quantum Random Numbers")," are only available on mainnets, but the only changes required in the steps above would be the passing of the ",(0,r.kt)("inlineCode",{parentName:"p"},"_airnodeRrp")," address relevant for Milkomeda C1 Mainnet in the contract deployment and then settings the appropriate parameters for the ",(0,r.kt)("strong",{parentName:"p"},"ANU Quantum Random Numbers")," provider when setting the parameters inside the contract with the ",(0,r.kt)("inlineCode",{parentName:"p"},"setRequestParameters")," function."),(0,r.kt)("p",null,"If you're interested in learning more about QRNG from API3, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://api3.org/QRNG"},"official documentation")," for additional information"))}c.isMDXComponent=!0}}]);