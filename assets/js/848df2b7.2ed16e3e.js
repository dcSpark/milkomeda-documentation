"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[4993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Prize Draw Smart-Contract Tutorial",sidebar_position:5},l="Prize Draw Smart-Contract Tutorial",i={unversionedId:"cardano/guides/winners_draw",id:"cardano/guides/winners_draw",title:"Prize Draw Smart-Contract Tutorial",description:"Milkomeda C1 Sidechain is fully operational on Mainnet, which means that it is currently deployed and connected to production version of the Cardano blockchain.",source:"@site/docs/cardano/guides/winners_draw.mdx",sourceDirName:"cardano/guides",slug:"/cardano/guides/winners_draw",permalink:"/milkomeda-documentation/cardano/guides/winners_draw",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Prize Draw Smart-Contract Tutorial",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Creating a Gnosis Safe on Milkomeda",permalink:"/milkomeda-documentation/cardano/guides/creating_safe_on_MilkomedaC1"},next:{title:"For End Users",permalink:"/milkomeda-documentation/cardano/for-end-users/"}},s={},c=[{value:"Random Numbers on EVM",id:"random-numbers-on-evm",level:2},{value:"Simple Smart Contract to draw winners",id:"simple-smart-contract-to-draw-winners",level:2},{value:"Deploy and Test Contract on Milkomeda C1 Testnet",id:"deploy-and-test-contract-on-milkomeda-c1-testnet",level:2},{value:"Hardhat",id:"hardhat",level:3},{value:"Foundry",id:"foundry",level:3},{value:"Apeworx",id:"apeworx",level:3},{value:"Brownie",id:"brownie",level:3},{value:"Calling the Smart Contract",id:"calling-the-smart-contract",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prize-draw-smart-contract-tutorial"},"Prize Draw Smart-Contract Tutorial"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Milkomeda C1 Sidechain is fully operational on Mainnet, which means that it is currently deployed and connected to production version of the Cardano blockchain.")),(0,r.kt)("p",null,"Random draws and giveaways are common events that many web3 organizations host, but ensuring the fairness and transparency of the selection process can be challenging. ",(0,r.kt)("strong",{parentName:"p"},"In this tutorial, we will walk through the process of developing a simple smart contract that can be used to conduct a random draw and store the results on a blockchain.")," Specifically, we will develop a smart contract that can be used to determine the winners of a prize draw and store the results where everyone can see and verify."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We will build this example in solidity and use it to show how to deploy a smart contract on a Milkomeda C1 chain.")),(0,r.kt)("p",null,"The smart contract will be built using Solidity and will include a boolean to verify if the draw has taken place or not, a fixed size array of 10 (winners), and a function that can only be called by the contract deployer to run the draw. This function will generate 10 random numbers between 1 and the total number of entries in the draw, and store them in the array. The 10 random numbers would define the winners from a pre-published ordered list of entries."),(0,r.kt)("p",null,"To help you follow along with this tutorial, we will briefly show you how to deploy the contract using popular blockchain development tools like Hardhat, Foundry, and Apeworx. By the end of this tutorial, you will have a functional smart contract that can be used for conducting a fair and transparent prize draw."),(0,r.kt)("h2",{id:"random-numbers-on-evm"},"Random Numbers on EVM"),(0,r.kt)("p",null,"Explaining random numbers is beyond the scope of the piece, but it\u2019s important to know that computers, being deterministic machines, cannot generate true random numbers. The can only generate pseudo random numbers, ie, numbers that when generated in sequence, appear to be statistically random, despite having been produced by a completely deterministic and repeatable process."),(0,r.kt)("p",null,"Our choice of random number generator will be the Linear Congruential Generator (LCG), which uses a linear equation to generate a sequence of numbers that appear to be random. The equation used by an LCG is of the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Xn+1 = (a.Xn + c) % m\n")),(0,r.kt)("p",null,"Where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Xn is the current number in the sequence, "),(0,r.kt)("li",{parentName:"ul"},"a is the multiplier, "),(0,r.kt)("li",{parentName:"ul"},"c is the increment,"),(0,r.kt)("li",{parentName:"ul"},"m is the modulus. ")),(0,r.kt)("p",null,"The seed value X0 is used as the initial value for the sequence. LCGs are one of the oldest and best-known pseudo random numbers generators and are often used in simulations and modeling. However, LCGs have a period that is determined by the modulus m, and if a and c are not chosen carefully, the sequence may not have enough randomness and can be predicted after a short period. "),(0,r.kt)("p",null,"In any case, for our simple smart contract the parameters a,c and m will actually be stored where everyone can see, so we will rely on the initial value (seed) to guarantee randomness of the sequence of 10 numbers. The chosen values will be the ones used in C language for the function rand:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a=1103515245, "),(0,r.kt)("li",{parentName:"ul"},"c=12345,"),(0,r.kt)("li",{parentName:"ul"},"m=2^31;")),(0,r.kt)("p",null,"Additionally, we will tweak our random generator somewhat to get numbers between two integers. Let\u2019s say we have 300 respondents to the survey, then we want to generate random numbers between 1 and 300. To achieve that we will scale the results in order of the desired min and max values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(((max - min + 1) + min)  * (( a * Xn + c) % m )) / m\n")),(0,r.kt)("p",null,"We don\u2019t need to overengineer the random number generator and for this particular use case, this algorithm will do. If we plot a histogram from a million draws, we will observe a uniform-like distribution which is what we intend. Each result has an close to equal probability of being drawn."),(0,r.kt)("h2",{id:"simple-smart-contract-to-draw-winners"},"Simple Smart Contract to draw winners"),(0,r.kt)("p",null,"The smart contract will be written in solidity, and although it could be optimized, hopefully, the different parts will be simple to understand. We will create a file called WinnerDraw.sol."),(0,r.kt)("p",null,"We start off by defining some constants and our constructor, which has the most basic of access controls. It saves the contract deployer in the owner variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract WinnerDraw {\n    bool drawFinalized;\n    address owner;\n    uint[10] public winners;\n\n    uint a = 1103515245;\n    uint c = 12345;\n    uint m = 2**31;\n\n    constructor () {\n        owner = msg.sender;\n    }\n")),(0,r.kt)("p",null,"Then, our function for the scaled Linear Congruential Generator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    function scaledLinearCongruentialGenerator(uint x, uint mn, uint mx) public view returns (uint) {\n        return ( ((mx - mn + 1) + mn)  * (( a * x + c) % m )) / m  ;\n    }\n")),(0,r.kt)("p",null,"We define a function to execute the draw, that checks if the caller is the contract owner and whether the draw has already been executed. If all the checks pass, the function will generate 10 random numbers between the supplied parameters min and max, and store them. Also the boolean drawFinalized will be set to true."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"One thing to note here is the seed used to start the sequence of 10 numbers is the integer of the hashed block timestamp and difficulty, scaled by the m parameters.  A word of caution here is that the inputs for the seed could be manipulated by a block producer (validator) who could determine at least one of the winners (because the seed influences the deterministic sequence), but for this simple example, we will choose to believe that all block producers are honest. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'    function executeDraw(uint min, uint max) public returns (uint[10] memory array) {\n      require(msg.sender == owner, "Only owner can execute draw");\n      require(!drawFinalized, "Draw already executed");\n      uint x = uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty))) % m;\n      for(uint i = 0; i< 10 ; i++){\n            array[i] = (i==0) \n             ? scaledLinearCongruentialGenerator(x, min, max) \n             : scaledLinearCongruentialGenerator(array[i-1], min, max);\n            winners[i] = array[i];\n      }        \n      drawFinalized = true;\n    }\n')),(0,r.kt)("p",null,"Finally, we provide a getter function to make it easier to retrieve the array of winners."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    function getWinners() public view returns (uint[10] memory result) {\n        for(uint i = 0; i<br 10 ; i++){        \n            result[i] = winners[i];\n        }\n    }\n")),(0,r.kt)("h2",{id:"deploy-and-test-contract-on-milkomeda-c1-testnet"},"Deploy and Test Contract on Milkomeda C1 Testnet"),(0,r.kt)("p",null,"Now that we have written our smart contract, let\u2019s see how we could use four different development tools, Hardhat, Foundry, Brownie and Apeworx, to deploy it on the Milkomeda C1 Testnet."),(0,r.kt)("p",null,"Installing and using these tools will not be the focus here, and what we want to highlight is how to set up these frameworks to work with the Milkomeda C1."),(0,r.kt)("p",null,"Also, the steps for deploying on C1, mainnet or testnet, are exactly the same, considering one is using a funded account, so we will use C1 Testnet for this example. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://dcspark.github.io/milkomeda-documentation/cardano/for-developers/obtaining-test-ada"},"milkomeda docs")," to get funds on testnet."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Network Name:")," Milkomeda Cardano Testnet",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"RPC URL:")," ",(0,r.kt)("a",{parentName:"p",href:"https://rpc-devnet-cardano-evm.c1.milkomeda.com"},"https://rpc-devnet-cardano-evm.c1.milkomeda.com"),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Chain ID:")," 200101",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Block Explorer URL:")," ",(0,r.kt)("a",{parentName:"p",href:"https://explorer-devnet-cardano-evm.c1.milkomeda.com"},"https://explorer-devnet-cardano-evm.c1.milkomeda.com"),(0,r.kt)("br",null))),(0,r.kt)("h3",{id:"hardhat"},"Hardhat"),(0,r.kt)("p",null,"Steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initialize a Hardhat project in an empty folder:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init\nyarn add --dev hardhat\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Copy the WinnerDraw.sol to the contracts folder"),(0,r.kt)("li",{parentName:"ol"},"Compile the contract:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat compile\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Edit hardhat.config.js to add the C1 testnet and your funded test account:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'require("@nomicfoundation/hardhat-toolbox");\n\nconst TESTNET_API_KEY = "<PRIVATE_KEY>";\n\n/** @type import(\'hardhat/config\').HardhatUserConfig */\nmodule.exports = {\n  solidity: "0.8.17",\n  networks: {\n    c1_testnet: {\n      url: `https://rpc-devnet-cardano-evm.c1.milkomeda.com`,\n      accounts: [TESTNET_API_KEY]\n    }\n  }  \n};\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Create a file named deploy.js in the scripts folder:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const hre = require("hardhat");\n\nasync function main() {\n    const WinnerDraw = await hre.ethers.getContractFactory("WinnerDraw");\n    const winnerDraw = await WinnerDraw.deploy();\n    await winnerDraw.deployed();\n    console.log(`WinnerDraw contract deployed to ${winnerDraw.address}`);\n}\n\nmain().catch((error) => {\n    console.error(error);\n    process.exitCode = 1;\n});\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Run the deployment script on C1 testnet:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat run scripts/deploy.js --network c1_testnet\n")),(0,r.kt)("h3",{id:"foundry"},"Foundry"),(0,r.kt)("p",null,"Steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initialize an ape project in an empty folder:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"forge init .\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("strong",{parentName:"li"},"WinnerDraw.sol")," to the contracts folder."),(0,r.kt)("li",{parentName:"ol"},"Compile the contract:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"forge build\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create a file named ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," with the private key of the funded account:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PRIVATE_KEY=<PRIVATE_KEY>\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Run the deployment script on C1 testnet:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source .env\nforge create --legacy --rpc-url  https://rpc-devnet-cardano-evm.c1.milkomeda.com --private-key $PRIVATE_KEY src/WinnerDraw.sol:WinnerDraw\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Notice the ",(0,r.kt)("inlineCode",{parentName:"p"},"--legacy")," is necessary since milkomeda chains have not yet implemented EIP-1559")),(0,r.kt)("h3",{id:"apeworx"},"Apeworx"),(0,r.kt)("p",null,"Plugins are core to ApeworX\u2019s architecture and to add a new network, it has to be bundled into a plugin. Luckily, dcspark has developed a plugin (ape-milkomeda)  to allow Apeworx to connect to C1, mainnet and testnet."),(0,r.kt)("p",null,"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the ape-milkomeda plugin to have the milkomeda chains available in the ApeworX network list.")),(0,r.kt)("p",null,"Either download the repo and install from source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git glone https://github.com/dcspark/ape-milkomeda\ncd ape-milkomeda\npip install .\n")),(0,r.kt)("p",null,"or install from the pypi repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install ape-milkomeda\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Initialize an ape project in an empty folder:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ape init\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("strong",{parentName:"li"},"WinnerDraw.sol")," to the contracts folder."),(0,r.kt)("li",{parentName:"ol"},"Compile the contract:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ape compile\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Import your account to ApeworX account list:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ape accounts import <ALIAS>\n")),(0,r.kt)("p",null,"(you will be prompted for the private key and a passphrase to encrypt it)"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Create a file names deploy.py in the scripts folder:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from ape import project, accounts\n\ndef main():\n    signer = accounts.load('test')\n    winnerDraw = signer.deploy(project.WinnerDraw)\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Run the deployment script on C1 testnet:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ape run deploy --network milkomeda:c1-testnet\n")),(0,r.kt)("h3",{id:"brownie"},"Brownie"),(0,r.kt)("p",null,"Brownie is currently in maintenance mode and ApeworX should be it\u2019s successor, but in any case we will lease here the steps to set it up."),(0,r.kt)("p",null,"Steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initialize a brownie project in an empty folder: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brownie init\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("strong",{parentName:"li"},"WinnerDraw.sol")," to the contracts folder."),(0,r.kt)("li",{parentName:"ol"},"Compile the contract:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brownie compile\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Add the Milkomeda C1 testnet list of networks in brownie:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'brownie networks add Milkomeda milkomeda-cardano-testnet chainid=200101 explorer=https://explorer-devnet-cardano-evm.c1.milkomeda.com host=https://rpc-devnet-cardano-evm.c1.milkomeda.com name="Milkomeda C1 Testnet"\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Create a file named brownie-config.yml in the root of the project with the following content:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dotenv: .env\nwallets:\n  - dummy: ${PRIVATE_KEY}\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Create a file named .env with the private key of the funded account:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PRIVATE_KEY=<PRIVATE_KEY>\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Create a file named deploy.py in the scripts folder:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from brownie import WinnerDraw, accounts, config\n\ndef main():\n    signer = accounts.add(config['wallets'][0]['dummy'])\n    WinnerDraw.deploy({\"from\": signer})\n")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Run the deployment script on C1 testnet:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brownie run scripts/deploy.py --network milkomeda-cardano-testnet\n")),(0,r.kt)("h2",{id:"calling-the-smart-contract"},"Calling the Smart Contract"),(0,r.kt)("p",null,"To call the deployed smart contract let\u2019s use Foundry and ApeworX, to have one example of each language, Javascript and Python, and since these two frameworks have the least verbose code for calls, it\u2019s easier to show the steps. Basically we will call the \u201cexecuteDraw\u201d function and the check the winners."),(0,r.kt)("p",null,"Foundry has an amazing command-line tool called cast for making Ethereum RPC calls. You can check the documentation ",(0,r.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/cast/cast-send"},"here"),"."),(0,r.kt)("p",null,"With cast, we can call the getWinners function with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cast call 0xf89fe1c87759b7E55Ca6d90666761e0b188A46F1 "getWinners()(uint[10])" --rpc-url https://rpc-devnet-cardano-evm.c1.milkomeda.com\n')),(0,r.kt)("p",null,"Which would return an array of zeros since the draw hasn\u2019t been executed yet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[0,0,0,0,0,0,0,0,0,0]\n")),(0,r.kt)("p",null,"Now we can call the executeDraw function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cast send --legacy --private-key $PRIVATE_KEY 0xf89fe1c87759b7E55Ca6d90666761e0b188A46F1 --rpc-url https://rpc-devnet-cardano-evm.c1.milkomeda.com "executeDraw(uint min, uint max)" 1 300\n')),(0,r.kt)("p",null,"If we check get the winners stored in the contract again, we now have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[292,14,58,242,106,141,136,266,207,111]\n")),(0,r.kt)("p",null,"Now, let\u2019s run the same steps in ApeworX. First, we will deploy the smart contract again, since the draw on the previous one was already executed in Foundry."),(0,r.kt)("p",null,"In our ApeworX project we created above, let\u2019s save a file named call.py with the following content (the contract address is hardcoded here):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from ape import project, accounts\n\ndef main():\n    winnerDraw = project.WinnerDraw.at('0x6469886bC2E5243d30333E06dAF0c1157ACc4d4D')\n    print(\"Stored Winners:\", winnerDraw.getWinners())\n")),(0,r.kt)("p",null,"This will show an array of zeros because the draw has not been executed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Stored Winners: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\n")),(0,r.kt)("p",null,"But after calling the executeDraw function (can only by run by contract deployer):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    signer = accounts.load('test')\n    winnerDraw.executeDraw(1, 300, sender=signer)\n    print(\"Stored Winners:\", winnerDraw.getWinners())\n")),(0,r.kt)("p",null,"We will get an array of (pseudo) random numbers between 1 and 300:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Stored Winners: [170, 107, 296, 31, 279, 110, 158, 57, 87, 212]\n")),(0,r.kt)("p",null,"Now, if we call the executeDraw function again it will revert:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    winnerDraw.executeDraw(1, 300, sender=signer)\n")),(0,r.kt)("p",null,"ERROR: (ContractLogicError) Draw already executed"),(0,r.kt)("p",null,"And if another account calls the executeDraw function, it will revert:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    winnerDraw.executeDraw(1, 300, sender=another_user)\n")),(0,r.kt)("p",null,"ERROR: (ContractLogicError) Only owner can execute draw"))}p.isMDXComponent=!0}}]);