"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[4477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=i(n),u=r,m=h["".concat(p,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={},l="Setting up a Project with The Graph",s={unversionedId:"cardano/for-developers/deploy_subgraph",id:"cardano/for-developers/deploy_subgraph",title:"Setting up a Project with The Graph",description:"This guide will walk you through the process of deploying a subgraph for smart contracts on Milkomeda C1 using TheGraph.",source:"@site/docs/cardano/for-developers/deploy_subgraph.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/deploy_subgraph",permalink:"/zh/cardano/for-developers/deploy_subgraph",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"cardano",previous:{title:"Configuring your RPC",permalink:"/zh/cardano/for-developers/configuring-rpc"},next:{title:"Milkomeda Open Oracle",permalink:"/zh/cardano/for-developers/milkomeda_open_oracle"}},p={},i=[{value:"Creating a Smart Contract to be indexed",id:"creating-a-smart-contract-to-be-indexed",level:2},{value:"Local Subgraph environment",id:"local-subgraph-environment",level:2},{value:"Configure Subgraph",id:"configure-subgraph",level:2},{value:"Deploying a Subgraph for Milkomeda C1 Devnet",id:"deploying-a-subgraph-for-milkomeda-c1-devnet",level:2},{value:"IPFS Node",id:"ipfs-node",level:4},{value:"TheGraph node",id:"thegraph-node",level:4}],c={toc:i};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-project-with-the-graph"},"Setting up a Project with The Graph"),(0,r.kt)("p",null,"This guide will walk you through the process of deploying a subgraph for smart contracts on Milkomeda C1 using ",(0,r.kt)("a",{parentName:"p",href:"https://thegraph.com/en/"},"TheGraph"),"."),(0,r.kt)("p",null,"While Milkomeda chains are not currently supported on TheGraph's decentralized network, Milkomeda runs it's own Graph Node to index the Milkomeda C1 chains."),(0,r.kt)("p",null,"To start, we will guide you through the steps of creating a subgraph in a local environment so you can test and develop your smart contract. Once you are satisfied with the result, we will show you how to deploy it on a Milkomeda C1 Devnet."),(0,r.kt)("h2",{id:"creating-a-smart-contract-to-be-indexed"},"Creating a Smart Contract to be indexed"),(0,r.kt)("p",null,"For our smart contract we will use a simple example of a Simple Storage contract with one single event that gets emitted every time the number is changed.\nLet's create a Hardhat dev environment to create and deploy our contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn init -y\nyarn add hardhat\nnpx hardhat\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," folder, we'll create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage.sol")," with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// SPDX-License-Identifier: GPL-3.0\npragma solidity ^0.8.0;\n\ncontract Storage {\n    uint256 number;\n\n    event ChangeNumber(\n        uint256 timestamp,\n        uint256 oldValue,\n        uint256 newValue,\n        address caller\n    );     \n\n    function store(uint256 num) public {\n        uint prevNumber = number;\n        number = num;\n        emit ChangeNumber(block.timestamp, prevNumber, number, msg.sender);\n    }\n\n    function retrieve() public view returns (uint256){\n        return number;\n    }\n}\n")),(0,r.kt)("p",null,"The parameters of the event is what will be indexed by the subgraph. The event will simple record the timestamp, the previous number, the new number and the contract caller."),(0,r.kt)("p",null,"To compile the contract run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat compile\n")),(0,r.kt)("h2",{id:"local-subgraph-environment"},"Local Subgraph environment"),(0,r.kt)("p",null,"To run a graph node locally, we'll use Docker to run a ganache, IPFS, postgres and a graph-node containers.\nHere is the necessary ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"version: '3'\nservices:\n  ganache:\n    image: trufflesuite/ganache:v7.5.0\n    command: -m \"test test test test test test test test test test test junk\" \n              -a 5\n              --wallet.hdPath \"m/44'/60'/0'\"\n    ports:\n      - 127.0.0.1:8545:8545\n  ipfs:\n    image: ipfs/go-ipfs:v0.10.0\n    ports:\n      - '5001:5001'\n    volumes:\n      - ./data/ipfs:/data/ipfs\n  postgres:\n    image: postgres\n    ports:\n      - '5432:5432'\n    command:\n      [\n        \"postgres\",\n        \"-cshared_preload_libraries=pg_stat_statements\"\n      ]\n    environment:\n      POSTGRES_USER: graph-node\n      POSTGRES_PASSWORD: let-me-in\n      POSTGRES_DB: graph-node\n      PGDATA: \"/var/lib/postgresql/data\"\n      POSTGRES_INITDB_ARGS: \"-E UTF8 --locale=C\"\n    volumes:\n      - ./data/postgres:/var/lib/postgresql/data\n  graph-node:\n    image: graphprotocol/graph-node\n    ports:\n      - '8000:8000'\n      - '8001:8001'\n      - '8020:8020'\n      - '8030:8030'\n      - '8040:8040'\n    depends_on:\n      - ipfs\n      - postgres\n    extra_hosts:\n      - 192.168.80.1:host-gateway\n    environment:\n      postgres_host: postgres\n      postgres_user: graph-node\n      postgres_pass: let-me-in\n      postgres_db: graph-node\n      ipfs: 'ipfs:5001'\n      ethereum: 'ganache:http://ganache:8545'\n      GRAPH_LOG: info\n")),(0,r.kt)("p",null,"Start the containers by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker compose up\n")),(0,r.kt)("p",null,"To be able to deploy to the local ganahache chain in docker container, we'll have to add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.ts"),". We will also already add the Milkomeda C1 Devnet.\nThe private key for Ganache is for one of the funded accounts in the ganache chain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { HardhatUserConfig } from "hardhat/config";\nimport "@nomicfoundation/hardhat-toolbox";\nrequire("dotenv").config();\n\nconst config: HardhatUserConfig = {\n  solidity: "0.8.18",\n  networks: {\n    c1_testnet: {\n      url: `https://rpc-devnet-cardano-evm.c1.milkomeda.com`,\n      accounts: [`0x${process.env.PRIVATE_KEY}`]\n    },\n    ganache: {\n      url: \'http://localhost:8545\',\n      chainId: 1337,\n      accounts: [\'0xdd23ca549a97cb330b011aebb674730df8b14acaee42d211ab45692699ab8ba5\']\n    }\n  }  \n};\n\nexport default config;\n')),(0,r.kt)("p",null,"Now we'll create a deployment script (",(0,r.kt)("inlineCode",{parentName:"p"},"deploy.ts"),") in the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { ethers } from "hardhat";\n\nasync function main() {\n    const Storage = await hre.ethers.getContractFactory("Storage");\n    const storage = await Storage.deploy();\n    await storage.deployed();\n    console.log(`Storage contract deployed to ${storage.address}`);\n}\n\nmain().catch((error) => {\n    console.error(error);\n    process.exitCode = 1;\n});\n')),(0,r.kt)("p",null,"To deploy the contract to the ganache chain, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat run scripts/deploy.ts --network ganache\n")),(0,r.kt)("h2",{id:"configure-subgraph"},"Configure Subgraph"),(0,r.kt)("p",null,"First, we will need the Graph CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add @graphprotocol/graph-cli @graphprotocol/graph-ts\n")),(0,r.kt)("p",null,"To deploy a subgraph to our local graph-node we will need three files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subgraph.yaml")," - for the subgraph parameters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schema.graphql")," - to define the subgraph entities"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mappings.ts")," - AssemblyScript code to define the indexing logic. Basically how the blockchain events get mapped to the entities")),(0,r.kt)("p",null,"There are several ways to store these files, but we will create ",(0,r.kt)("inlineCode",{parentName:"p"},"subgraph.yaml")," in the root folder of our project and then create a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"subgraph")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.graphql")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mappings.ts")),(0,r.kt)("p",null,"First, create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"subgraph.yaml")," with the required config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"specVersion: 0.0.5\ndescription: Milkomeda Subgraph Tutorial\nschema:\n  file: ./subgraph/schema.graphql\ndataSources:\n  - kind: ethereum/contract\n    name: Storage\n    network: ganache\n    source:\n      address: ''\n      abi: Storage\n      startBlock: 1\n    mapping:\n      kind: ethereum/events\n      apiVersion: 0.0.7\n      language: wasm/assemblyscript\n      file: ./subgraph/mapping.ts\n      entities:\n        - Values\n        - User\n      abis:\n        - name: Storage\n          file: ./artifacts/contracts/Storage.sol/Storage.json\n      eventHandlers:\n        - event: 'ChangeNumber(uint256,uint256,uint256,address)'\n          handler: handleChangeNumber\n")),(0,r.kt)("p",null,"The important parts to take notice are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GraphQL schema, which we will be creating next"),(0,r.kt)("li",{parentName:"ul"},'Network name that we define in the environment variables of the graph-node container, in this case "ganache"'),(0,r.kt)("li",{parentName:"ul"},"Source/address of the deployed smart contract"),(0,r.kt)("li",{parentName:"ul"},"ABI for the smart contract"),(0,r.kt)("li",{parentName:"ul"},"Mapping file, which we will create"),(0,r.kt)("li",{parentName:"ul"},"Entities"),(0,r.kt)("li",{parentName:"ul"},"Event handlers")),(0,r.kt)("p",null,"First let's tweak our deployment script so that the contract address gets updated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"subgraph.yaml")," for each deployment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { ethers } from \"hardhat\";\nconst fs = require('fs');\nconst yaml = require('js-yaml');\n\nconst FILENAME = 'subgraph.yaml'\nconst changeAddress = (address) => {\n   let doc = yaml.load(fs.readFileSync(FILENAME, 'utf-8'));\n   doc.dataSources[0].source.address = address\n   fs.writeFileSync(FILENAME, yaml.dump(doc));\n}\n\nasync function main() {\n    const Storage = await hre.ethers.getContractFactory(\"Storage\");\n    const storage = await Storage.deploy();\n    await storage.deployed();\n    console.log(`Storage contract deployed to ${storage.address}`);\n    changeAddress(storage.address)\n}\n\nmain().catch((error) => {\n    console.error(error);\n    process.exitCode = 1;\n});\n")),(0,r.kt)("p",null,"Now let's create our ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.graphql")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"subgraph")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'type StoredValue @entity {\n  id: ID!\n  oldValue: BigInt!\n  newValue: BigInt!\n  caller: User!\n}\n\ntype User @entity {\n  id: ID!\n  values: [StoredValue!]! @derivedFrom(field: "caller")\n}\n')),(0,r.kt)("p",null,"We are creating two entities, the StoredValue and the User."),(0,r.kt)("p",null,"We'll also create a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"mappings.ts")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"subgraph")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import {  ChangeNumber } from "./types/Storage/Storage";\nimport { User, StoredValue } from "./types/schema";\n\nexport function handleChangeNumber(event: ChangeNumber): void {\n\n  // USER\n  let userId = event.params.caller.toHex()\n  let user = User.load(userId)\n\n  if (!user) {\n    user = new User(userId)\n    user.save()\n  } \n\n  // VALUE\n  let token = new StoredValue(event.params.timestamp.toString())\n  token.oldValue = event.params.oldValue\n  token.newValue = event.params.newValue\n  token.caller = userId\n  token.save()  \n}\n')),(0,r.kt)("p",null,"In order to make it easy and type-safe to work with smart contracts, events and entities, the Graph CLI can generate AssemblyScript types from the subgraph's GraphQL schema and the contract ABIs included in the data sources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"graph codegen --output-dir subgraph/types/\n")),(0,r.kt)("p",null,"Now we can create an deploy the subgraph."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"graph create milkomeda/subgraph_tutorial --node http://127.0.0.1:8020\n\ngraph deploy milkomeda/subgraph_tutorial --ipfs http://localhost:5001  --node http://localhost:8020 --output-dir artifacts/subgraph -l 0.1\n")),(0,r.kt)("p",null,"After successfully creation and deployment of the subgraph, a link will be shown in the terminal to access the GraphQL frontend interface."),(0,r.kt)("p",null,"At the moment, if you query all records of the entity User and StoredValue, the results will be empty, because there have been to transactions to be indexed."),(0,r.kt)("p",null,"The query to get all results would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n  users {\n    id\n  }\n  storedValues {\n    id\n    oldValue\n    newValue\n    caller {\n      id\n    }\n  }\n}\n")),(0,r.kt)("p",null,"And the results would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "data": {\n    "users": [],\n    "storedValues": []\n  }\n}\n')),(0,r.kt)("p",null,"But now let's call the contract to store a new value. Create a file names ",(0,r.kt)("inlineCode",{parentName:"p"},"callContract.ts")," in the scripts folder with the following. We can read the contract address from the ",(0,r.kt)("inlineCode",{parentName:"p"},"subgraph.yaml")," file just to be sure we are using the same contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const hre = require(\"hardhat\");\nconst yaml = require('js-yaml');\nconst fs = require('fs');\n\nasync function main() {\n    const FILENAME = 'subgraph.yaml'\n    let doc = yaml.load(fs.readFileSync(FILENAME, 'utf-8'));\n    const contractAddress = doc.dataSources[0].source.address;\n\n    const storage = await hre.ethers.getContractAt(\"Storage\", contractAddress);\n    const res = await storage.store(5);\n    console.log(\"Trx hash:\", res.hash);\n}\n\nmain()\n    .then(() => process.exit(0))\n    .catch((error) => {\n        console.error(error);\n        process.exit(1);\n    });\n")),(0,r.kt)("p",null,"Then, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat run scripts/callContract.ts --network ganache\n")),(0,r.kt)("p",null,"If we run the query again, the event emitted from the contract call should have been indexed. And here is the result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "data": {\n    "users": [\n      {\n        "id": "0x1e59ce931b4cfea3fe4b875411e280e173cb7a9c"\n      }\n    ],\n    "storedValues": [\n      {\n        "id": "1679441122",\n        "oldValue": "0",\n        "newValue": "5",\n        "caller": {\n          "id": "0x1e59ce931b4cfea3fe4b875411e280e173cb7a9c"\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"deploying-a-subgraph-for-milkomeda-c1-devnet"},"Deploying a Subgraph for Milkomeda C1 Devnet"),(0,r.kt)("p",null,"After testing that our contract and subgraph are working well together, we can deploy the smart contract to the devnet and the subgraph to Milkomeda's TheGraph and IPFS nodes."),(0,r.kt)("h4",{id:"ipfs-node"},"IPFS Node"),(0,r.kt)("p",null,"Node with enough public access that can be used by us and users that want to deploy their own thegraph deployments, but don\u2019t want to keep a local IPFS node. that url can be used also for any public subgraph deployment (it\u2019s network agnostic since ipfs network is just one, so there is not separate url for devnet/mainnet)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"URL: ",(0,r.kt)("a",{parentName:"li",href:"https://ipfs.milkomeda.com"},"https://ipfs.milkomeda.com"))),(0,r.kt)("h4",{id:"thegraph-node"},"TheGraph node"),(0,r.kt)("p",null,"JSON-RPC (for managing deployments) -  is the specific network to be used by scripts to deploy subgraphs (it is fully public) "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"URL (mainnet): ",(0,r.kt)("a",{parentName:"li",href:"https://c1-mainnet-thegraph.milkomeda.com"},"https://c1-mainnet-thegraph.milkomeda.com")),(0,r.kt)("li",{parentName:"ul"},"URL (devnet): ",(0,r.kt)("a",{parentName:"li",href:"https://c1-devnet-thegraph.milkomeda.com"},"https://c1-devnet-thegraph.milkomeda.com"))),(0,r.kt)("p",null,"The changes required are very simple. From the current setup, we only need to change three things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We no longer need the docker containers, since the smart contract will be deployed to ",(0,r.kt)("strong",{parentName:"p"},"Milkomeda C1 Devnet")," and the subgraph will be deployed to Milkomeda's Thegraph and IPFS nodes. We can therefore delete or ignore the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The network name for the contract in the dataSources in the ",(0,r.kt)("inlineCode",{parentName:"p"},"subgraph.yaml"),' file should be changed to "Milkomeda-C1-Devnet".'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'dataSources:\n  - kind: ethereum/contract\n    name: Storage\n    network: "Milkomeda-C1-Devnet"\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"The commands for the creation and deployment of the subgraph should now point to the IPFS and TheGraph (Milkomeda) nodes.")),(0,r.kt)("p",null,"Now we can deploy our smart contract to Milkomeda A1 Devnet (we had already added the chain to ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.ts"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat run scripts/deploy.ts --network c1_testnet\n")),(0,r.kt)("p",null,"And create and deploy the subgraph to the new containers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"graph create milkomeda/subgraph_tutorial_c1 --node https://c1-devnet-thegraph.milkomeda.com\n\ngraph deploy milkomeda/subgraph_tutorial_c1 --ipfs https://ipfs.milkomeda.com  --node https://c1-devnet-thegraph.milkomeda.com --output-dir artifacts/subgraph -l 0.1\n\n")),(0,r.kt)("p",null,"Executing there commands should show an output similar to the one below, containing the GraphQL endpoint and a link to a GraphQL queyr frontend:\n",(0,r.kt)("a",{parentName:"p",href:"https://c1-devnet-thegraph.milkomeda.com:443/subgraphs/name/milkomeda/subgraph_tutorial_c1"},"https://c1-devnet-thegraph.milkomeda.com:443/subgraphs/name/milkomeda/subgraph_tutorial_c1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2714 Upload subgraph to IPFS\n\nBuild completed: QmS1iG3oaBQuYhAxCtTV1jJApjC6MTjTNzKSYAL5SJUzcc\n\nDeployed to https://c1-devnet-thegraph.milkomeda.com:443/subgraphs/name/milkomeda/subgraph_tutorial_c1/graphql\n\nSubgraph endpoints:\nQueries (HTTP):     https://c1-devnet-thegraph.milkomeda.com:443/subgraphs/name/milkomeda/subgraph_tutorial_c1\n")),(0,r.kt)("p",null,"In order to see indexed events, call the contract to store a value. It might take a few minutes until the event gets indexed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat run scripts/callContract.ts --network c1_testnet\n")),(0,r.kt)("p",null,"We can now query our subgraph and it will have indexed the events from our contract on Milkomeda C1 Devnet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "data": {\n    "users": [\n      {\n        "id": "0xcd9e29b0b51ac983b59bf7c8ecf57bcc430e8dd3"\n      }\n    ],\n    "storedValues": [\n      {\n        "id": "1679443522",\n        "oldValue": "0",\n        "newValue": "5",\n        "caller": {\n          "id": "0xcd9e29b0b51ac983b59bf7c8ecf57bcc430e8dd3"\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"This guide explained how to ",(0,r.kt)("strong",{parentName:"p"},"deploy a subgraph")," for smart contracts on ",(0,r.kt)("strong",{parentName:"p"},"Milkomeda C1")," using TheGraph. "),(0,r.kt)("p",null,"After creating a smart contract for testing and development, we set up a local subgraph environment using Docker to run a ganache, IPFS, postgres, and a graph-node containers.\nThen, we created a deployment script to deploy the contract to the ganache chain and we explained how to configure subgraph using The Graph CLI."),(0,r.kt)("p",null,"Finally, we ajusted to setup to deploy the Smart Contract on the Milkomeda C1 chain and index it from a subgraph deployed on Milkomeda's IPFS and th"))}d.isMDXComponent=!0}}]);