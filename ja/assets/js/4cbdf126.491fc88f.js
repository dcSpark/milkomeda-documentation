"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[3829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Configuring your RPC"},i="Configuring your RPC",c={unversionedId:"cardano/for-developers/configuring-rpc",id:"cardano/for-developers/configuring-rpc",title:"Configuring your RPC",description:"Although the Milkomeda team runs its own public nodes that you can find:",source:"@site/docs/cardano/for-developers/configuring-rpc.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/configuring-rpc",permalink:"/ja/cardano/for-developers/configuring-rpc",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Configuring your RPC"},sidebar:"cardano",previous:{title:"\u30a6\u30a9\u30ec\u30c3\u30c8\u306e\u9023\u643a",permalink:"/ja/cardano/for-developers/wallet-integration"},next:{title:"Setting up a Project with The Graph",permalink:"/ja/cardano/for-developers/deploy_subgraph"}},l={},p=[{value:"Run your own node",id:"run-your-own-node",level:2},{value:"RPC service",id:"rpc-service",level:2},{value:"Connecting to Liquify From Web3.js (JavaScript):",id:"connecting-to-liquify-from-web3js-javascript",level:3},{value:"Connecting to Liquify From Ethers.js (JavaScript)",id:"connecting-to-liquify-from-ethersjs-javascript",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-your-rpc"},"Configuring your RPC"),(0,o.kt)("p",null,"Although the Milkomeda team runs its own public nodes that you can find:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mainnet: ",(0,o.kt)("a",{parentName:"li",href:"https://rpc-mainnet-cardano-evm.c1.milkomeda.com"},"https://rpc-mainnet-cardano-evm.c1.milkomeda.com")),(0,o.kt)("li",{parentName:"ul"},"Testnet: ",(0,o.kt)("a",{parentName:"li",href:"https://rpc-devnet-cardano-evm.c1.milkomeda.com"},"https://rpc-devnet-cardano-evm.c1.milkomeda.com"))),(0,o.kt)("p",null,"Public endpoints may not give you the performance or uptime required for your applications. To tackle this, you have two options:"),(0,o.kt)("h2",{id:"run-your-own-node"},"Run your own node"),(0,o.kt)("p",null,"We provide everything you need to run your own Milkomeda node in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dcSpark/milkomeda-evm-passive/"},"this repository")),(0,o.kt)("p",null,"Note that again, by running your own node you may end up synchronizing the node from the public relays we operate.\nIf you want to contribute to the health of the p2p network as you run a node, you can enable p2p discovery and have your nodes accessible so the p2p network doesn't rely only on bootstrap/static nodes."),(0,o.kt)("h2",{id:"rpc-service"},"RPC service"),(0,o.kt)("p",null,"It's possible to pay a company to operate a node on your behalf. These companies can often operate at a higher availability and faster performance."),(0,o.kt)("p",null,"One such provider that supports Milkomeda C1 is ",(0,o.kt)("a",{parentName:"p",href:"https://www.liquify.com/"},"Liquify"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setup a node with them and get your API key"),(0,o.kt)("li",{parentName:"ol"},"Connect to your node using ",(0,o.kt)("a",{parentName:"li",href:"https://milkomeda.liquify.com/api=API_KEY/milkomeda"},"https://milkomeda.liquify.com/api=API_KEY/milkomeda"))),(0,o.kt)("h3",{id:"connecting-to-liquify-from-web3js-javascript"},"Connecting to Liquify From Web3.js (JavaScript):"),(0,o.kt)("p",null,"If you're developing a web application or using JavaScript, you can use the web3.js library to connect to the RPC node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const API_KEY = ...; // note: do not hardcode this in the app in practice\n\nconst Web3 = require('web3');\n// Initialize web3 instance with the RPC URL and API key\nconst web3 = new Web3(new Web3.providers.HttpProvider(`https://milkomeda.liquify.com/api=${API_KEY}/milkomeda`, {\n  headers: [{ name: 'Authorization', value: `Bearer ${API_KEY}` }]\n}));\n// Test the connection\nweb3.eth.getBlockNumber()\n  .then(console.log)\n  .catch(console.error);\n")),(0,o.kt)("h3",{id:"connecting-to-liquify-from-ethersjs-javascript"},"Connecting to Liquify From Ethers.js (JavaScript)"),(0,o.kt)("p",null,"If you prefer using ethers.js, here's how you can connect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const API_KEY = ...; // note: do not hardcode this in the app in practice\n\nconst { providers } = require('ethers');\nconst customProvider = new providers.JsonRpcProvider(`https://milkomeda.liquify.com/api=${API_KEY}/milkomeda`, {\n  headers: { 'Authorization': `Bearer ${API_KEY}` }\n});\n// Test the connection\ncustomProvider.getBlockNumber()\n  .then(console.log)\n  .catch(console.error);\n")),(0,o.kt)("p",null,"Usage Tips:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Always Secure Your API Key: Always ensure your key is kept secure and not exposed unnecessarily. Avoid hardcoding it directly in client-side code."),(0,o.kt)("li",{parentName:"ol"},"Rate Limits: If you're making frequent requests, consider implementing caching or rate-limiting on your end. Currently there are no rate limits for the purposes of testing "),(0,o.kt)("li",{parentName:"ol"},"Error Handling: Always try implement error handling when making requests to the RPC node. This ensures your application can gracefully handle any issues that might arise.")))}u.isMDXComponent=!0}}]);