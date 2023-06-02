"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[7397],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),p=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(a),k=n,u=s["".concat(m,".").concat(k)]||s[k]||d[k]||o;return a?r.createElement(u,l(l({ref:t},c),{},{components:a})):r.createElement(u,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7060:(e,t,a)=>{a.d(t,{u:()=>n});const r={c1:{chainId:`0x${Number(2001).toString(16)}`,chainName:"Milkomeda C1 Mainnet",nativeCurrency:{name:"milkADA",symbol:"mADA",decimals:18},rpcUrls:["https://rpc-mainnet-cardano-evm.c1.milkomeda.com"],blockExplorerUrls:["https://explorer-mainnet-cardano-evm.c1.milkomeda.com"]},c1_testnet:{chainId:`0x${Number(200101).toString(16)}`,chainName:"Milkomeda C1 Testnet",nativeCurrency:{name:"mTADA",symbol:"mTADA",decimals:18},rpcUrls:["https://rpc-devnet-cardano-evm.c1.milkomeda.com"],blockExplorerUrls:["https://explorer-devnet-cardano-evm.c1.milkomeda.com"]},a1:{chainId:`0x${Number(2002).toString(16)}`,chainName:"Milkomeda A1 Mainnet",nativeCurrency:{name:"mALGO",symbol:"mALGO",decimals:18},rpcUrls:["https://rpc-mainnet-algorand-rollup.a1.milkomeda.com"],blockExplorerUrls:["https://explorer-mainnet-algorand-rollup.a1.milkomeda.com"]},a1_testnet:{chainId:`0x${Number(200202).toString(16)}`,chainName:"Milkomeda A1 Testnet",nativeCurrency:{name:"mTALGO",symbol:"mTALGO",decimals:18},rpcUrls:["https://rpc-devnet-algorand-rollup.a1.milkomeda.com"],blockExplorerUrls:["https://testnet-algorand-rollup.a1.milkomeda.com"]}},n=async e=>{console.log(r[e]);try{if(!window.ethereum)throw new Error("No crypto wallet found");await window.ethereum.request({method:"wallet_addEthereumChain",params:[{...r[e]}]})}catch(t){console.log(t)}}},842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),o=a(7060);const l={sidebar_position:0},i="Milkomeda C1 Overview",m={unversionedId:"cardano/for-developers/overview",id:"cardano/for-developers/overview",title:"Milkomeda C1 Overview",description:"Public Endpoints",source:"@site/docs/cardano/for-developers/overview.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/overview",permalink:"/cardano/for-developers/overview",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"cardano",previous:{title:"For Developers",permalink:"/cardano/for-developers/"},next:{title:"Configuring Flint Wallet",permalink:"/cardano/for-developers/configuring-flint-for-devs"}},p={},c=[{value:"Public Endpoints",id:"public-endpoints",level:2},{value:"Mainnet",id:"mainnet",level:3},{value:"Devnet",id:"devnet",level:3},{value:"Bridge &amp; Explorers",id:"bridge--explorers",level:2},{value:"Wallets that support C1",id:"wallets-that-support-c1",level:2},{value:"Token Addresses",id:"token-addresses",level:2}],d={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"milkomeda-c1-overview"},"Milkomeda C1 Overview"),(0,n.kt)("h2",{id:"public-endpoints"},"Public Endpoints"),(0,n.kt)("p",null,"Milkomeda C1 offers ",(0,n.kt)("strong",{parentName:"p"},"HTTPS")," and ",(0,n.kt)("strong",{parentName:"p"},"WebSocket")," endpoints for both Mainnet and Devnet, which are publicly accessible to users and developers."),(0,n.kt)("h3",{id:"mainnet"},"Mainnet"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Network Name:")," Milkomeda Cardano (C1)"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"HTTPS RPC URL:")," ",(0,n.kt)("a",{parentName:"p",href:"https://rpc-mainnet-cardano-evm.c1.milkomeda.com"},"https://rpc-mainnet-cardano-evm.c1.milkomeda.com")),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"WebSocket RPC URL:")," wss://rpc-mainnet-cardano-evm.c1.milkomeda.com"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Chain ID:")," 2001"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Currency Symbol:")," mADA"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Block Explorer URL:")," ",(0,n.kt)("a",{parentName:"p",href:"https://explorer-mainnet-cardano-evm.c1.milkomeda.com"},"https://explorer-mainnet-cardano-evm.c1.milkomeda.com")),(0,n.kt)("button",{onClick:()=>(0,o.u)("c1"),className:"button button--secondary"},"Add C1 Mainnet to Metamask")),(0,n.kt)("h3",{id:"devnet"},"Devnet"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Network Name:")," Milkomeda Cardano Devnet"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"HTTPS RPC URL:")," ",(0,n.kt)("a",{parentName:"p",href:"https://rpc-devnet-cardano-evm.c1.milkomeda.com"},"https://rpc-devnet-cardano-evm.c1.milkomeda.com")),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"WebSocket RPC URL:")," wss://rpc-devnet-cardano-evm.c1.milkomeda.com"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Chain ID:")," 200101"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Currency Symbol:")," mTADA"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Block Explorer URL:")," ",(0,n.kt)("a",{parentName:"p",href:"https://explorer-devnet-cardano-evm.c1.milkomeda.com"},"https://explorer-devnet-cardano-evm.c1.milkomeda.com")),(0,n.kt)("button",{onClick:()=>(0,o.u)("c1_testnet"),className:"button button--secondary"},"Add C1 Devnet to Metamask")),(0,n.kt)("h2",{id:"bridge--explorers"},"Bridge & Explorers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://explorer-mainnet-cardano-evm.c1.milkomeda.com/"},"Blockscout Explorer")," - Blockscout is a tool for inspecting and analyzing EVM based blockchains"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cardano-bridge.milkomeda.com/"},"Milkomeda Bridge")," - a UI to bridge from Milkomeda C1 (sidechain) to Cardano (mainchain)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bridge-explorer.milkomeda.com/cardano-mainnet"},"Milkomeda Bridge Explorer")," - a tool to analyze bridge transactions")),(0,n.kt)("h2",{id:"wallets-that-support-c1"},"Wallets that support C1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://flint-wallet.com/"},"Flint Wallet")," - Flint's lightweight and user-friendly design lets you manage your crypto assets and access the world of DeFi with ease."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nu.fi/"},"NuFi")," - Non-custodial wallet for several chains, including Cardano and Milkomeda C1 (+HW wallet support)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://metamask.io/"},"Metamask")," - MetaMask is a popular self-custodial wallet. A safe and simple way to access blockchain applications and web3")),(0,n.kt)("h2",{id:"token-addresses"},"Token Addresses"),(0,n.kt)("p",null,"Mainnet"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Address"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"wADA"),(0,n.kt)("td",{parentName:"tr",align:null},"Wrapped ADA"),(0,n.kt)("td",{parentName:"tr",align:null},"0xAE83571000aF4499798d1e3b0fA0070EB3A3E3F9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"WETH"),(0,n.kt)("td",{parentName:"tr",align:null},"Wrapped Ether"),(0,n.kt)("td",{parentName:"tr",align:null},"0xaF86E6c5Fd9dAf53e5100ed38BaB2572609fCA27")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"USDC"),(0,n.kt)("td",{parentName:"tr",align:null},"USD Coin"),(0,n.kt)("td",{parentName:"tr",align:null},"0xB44a9B6905aF7c801311e8F4E76932ee959c663C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"USDT"),(0,n.kt)("td",{parentName:"tr",align:null},"Tether USD"),(0,n.kt)("td",{parentName:"tr",align:null},"0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844")))),(0,n.kt)("p",null,"For a complete list of tokens that can be transferred between Milkomeda C1 and Cardano, please refer to the following links for both the mainnet and devnet:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bridge-explorer.milkomeda.com/cardano-mainnet/tokens"},"mainnet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://bridge-explorer.milkomeda.com/cardano-devnet/tokens"},"devnet"))))}s.isMDXComponent=!0}}]);