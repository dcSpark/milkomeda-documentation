"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="Deploying a Smart Contract",l={unversionedId:"algorand/for-developers/deploying-a-smart-contract",id:"algorand/for-developers/deploying-a-smart-contract",title:"Deploying a Smart Contract",description:"Here we will deploy a Solidity smart contract on the Milkomeda A1 rollup. In this example, we will use Remix to deploy the contract. You can access Remix by visiting the following link: Remix IDE",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/algorand/for-developers/deploying-a-smart-contract.md",sourceDirName:"algorand/for-developers",slug:"/algorand/for-developers/deploying-a-smart-contract",permalink:"/milkomeda-documentation/ja/algorand/for-developers/deploying-a-smart-contract",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Wrapping Assets",permalink:"/milkomeda-documentation/ja/algorand/for-developers/wrapping-assets"},next:{title:"Get Help",permalink:"/milkomeda-documentation/ja/get-help"}},s={},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-a-smart-contract"},"Deploying a Smart Contract"),(0,o.kt)("p",null,"Here we will deploy a Solidity smart contract on the Milkomeda A1 rollup. In this example, we will use Remix",(0,o.kt)("a",{parentName:"p",href:"http://remix.ethereum.org/"}," "),"to deploy the contract. You can access Remix by visiting the following link: ",(0,o.kt)("a",{parentName:"p",href:"http://remix.ethereum.org/"},"Remix IDE")),(0,o.kt)("p",null,'First, create the solidity smart contract file. Inside the Remix window, click the "',(0,o.kt)("strong",{parentName:"p"},"Contracts"),'" folder in the left panel, then click the "',(0,o.kt)("strong",{parentName:"p"},"New File"),'" button in the central panel.'),(0,o.kt)("img",{src:"/img/algorand-remix.png",alt:""}),(0,o.kt)("p",null,'Now you will be prompted to enter a filename for a new Solidity smart contract. The filename is arbitrary, but for the purposes of this example we will be deploying an ERC-20 smart contract so we will name the file "Test_ERC20.sol". Type the filename and press ',(0,o.kt)("strong",{parentName:"p"},"Enter"),". The cursor should move to the edit panel where you can input your Solidity code. Enter the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'pragma solidity ^0.7.0;\n\nimport "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0-solc-0.7/contracts/token/ERC20/ERC20.sol";\n\ncontract Token is ERC20 {\n\n    constructor () ERC20("Token", "TKN") {\n        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));\n    }\n}\n')),(0,o.kt)("p",null,'Next, click the "',(0,o.kt)("strong",{parentName:"p"},"Solidity compiler"),'" icon on the left side of the screen, choose a compiler version (for this example we will use ',(0,o.kt)("strong",{parentName:"p"},"0.7.6+commit.7338295f"),'), and then click "',(0,o.kt)("strong",{parentName:"p"},"Compile Test_ERC20.sol"),'", as shown.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(171).Z,width:"925",height:"706"})),(0,o.kt)("p",null,'Click the "',(0,o.kt)("strong",{parentName:"p"},"Deploy and run transactions"),'" icon on the left, and from the "',(0,o.kt)("strong",{parentName:"p"},"Environment"),'" pulldown select "',(0,o.kt)("strong",{parentName:"p"},"Injected Web3"),'", as shown. This will bring up the MetaMask screen where you will need to click "',(0,o.kt)("strong",{parentName:"p"},"Next"),'" and then "',(0,o.kt)("strong",{parentName:"p"},"Connect"),'" to connect your C1 wallet with Remix.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6778).Z,width:"360",height:"450"})),(0,o.kt)("p",null,'With your MetaMask wallet now connected, click the "',(0,o.kt)("strong",{parentName:"p"},"Deploy"),'" button to deploy the smart contract to the Milkomeda A1 Rollup.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8300).Z,width:"370",height:"480"})),(0,o.kt)("p",null,"Confirm the transaction in MetaMask."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4449).Z,width:"724",height:"1244"})),(0,o.kt)("p",null,'You should now see the following under "',(0,o.kt)("strong",{parentName:"p"},"Deployed Contracts"),'" on the left side of the Remix IDE screen.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(606).Z,width:"642",height:"1248"})),(0,o.kt)("p",null,"You can copy the address of the ERC20 smart contract and use it in Metamask to add your recently created tokens. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Import tokens")," and then paste the contract address."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8947).Z,width:"736",height:"538"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5804).Z,width:"716",height:"1200"})),(0,o.kt)("p",null,"Finally, click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Custom Token")," and you should be able to see your tokens! Now you are able to transfer them and interact with smart contracts."))}d.isMDXComponent=!0},8947:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-assets-7f72f9d39ab1437c0696cafca072501b.png"},606:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-deploy-run-231d5df0a1e9615a841e21e7c9f29ea4.png"},5804:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-import-83ac26fcfdb5dcb4e55368269a04b5ea.png"},4449:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-metamask-details-1c01a756d7fde76b53d2a8ed9ad866fc.png"},6778:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-solidity-compiler-2-9ccc397c8b443355180537a2db45268c.png"},8300:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-solidity-compiler-3-c41a02a593d4c3b3bbf8093bfa4e8826.png"},171:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-solidity-compiler-0227a3e401e2202947adbd13d8037a47.png"}}]);