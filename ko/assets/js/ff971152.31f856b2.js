"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[8835],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=i,k=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3230:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=a(8635);const o={sidebar_position:1},s="Overview",l={unversionedId:"cardano/liquid-staking/for_developers/protocol_overview",id:"cardano/liquid-staking/for_developers/protocol_overview",title:"Overview",description:"You can start staking today through the staking portal",source:"@site/docs/cardano/liquid-staking/for_developers/protocol_overview.md",sourceDirName:"cardano/liquid-staking/for_developers",slug:"/cardano/liquid-staking/for_developers/protocol_overview",permalink:"/ko/cardano/liquid-staking/for_developers/protocol_overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"cardano",previous:{title:"For Developers",permalink:"/ko/category/for-developers-1"},next:{title:"Protocol Components",permalink:"/ko/cardano/liquid-staking/for_developers/"}},d={},c=[{value:"Understanding Milkomeda Liquid Staking",id:"understanding-milkomeda-liquid-staking",level:2},{value:"Cardano Mainnet (Layer 1)",id:"cardano-mainnet-layer-1",level:3},{value:"Milkomeda Bridge",id:"milkomeda-bridge",level:2},{value:"Milkomeda C1",id:"milkomeda-c1",level:3},{value:"Summary",id:"summary",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can start staking today through the ",(0,i.kt)("a",{parentName:"p",href:"https://liquidstaking.milkomeda.com/"},"staking portal"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Milkomeda Liquid Staking")," is a solution that enables users to stake their ADA on the Milkomeda sidechain while simultaneously earning Cardano staking rewards. This is achieved by depositing mADA into a smart contract, which mints a liquid staking token (stMADA) representing the user's stake."),(0,i.kt)("p",null,"The basic premiss is that stMADA, a yield bearing representation of staked ADA, could become the base asset on Cardano's EVM Sidechain (Milkomeda C1) with the widespread usage in DeFi, Gaming and NFT Marketplaces. mADA allows the wrapping of ADA from Cardano to Milkomeda C1, but by staking mADA to obtain stMADA, users can continue receiving the staking rewards from the ADA they wrapped. "),(0,i.kt)("h2",{id:"understanding-milkomeda-liquid-staking"},"Understanding Milkomeda Liquid Staking"),(0,i.kt)("p",null,"The infographic below depicts the several steps and components of the Milkomeda Liquid Staking flow. The protocol consists of three essential components: the Layer 1 (Cardano), the bridge (Milkomeda Bridge), and the Sidechain (Milkomeda C1)."),(0,i.kt)("img",{src:r.Z,className:"img-full",alt:"Overview"}),(0,i.kt)("h3",{id:"cardano-mainnet-layer-1"},"Cardano Mainnet (Layer 1)"),(0,i.kt)("p",null,"In the Cardano ecosystem, ",(0,i.kt)("strong",{parentName:"p"},"Milkomeda Liquid Staking")," delegates all wrapped ADA through the Milkomeda C1 Bridge to a carefully ",(0,i.kt)("a",{parentName:"p",href:"https://cexplorer.io/pool/pool1gq07hfmull6etsr23l36cvwgfkym6jqn4q2dz5vz4y446yat70t"},"selected stake pool"),". "),(0,i.kt)("p",null,"Currently, all ADA is delegated to a dedicated Milkomeda pool. If the bridge's ADA holdings, i.e. the amount of ADA that was wrapped to Milkomeda C1, exceed what can be delegated to a single pool, delegation logic can be adjusted accordingly and split between more than one pool."),(0,i.kt)("p",null,"Staking rewards are proportionally shared with stmADA token holders, meaning users earn rewards equivalent to delegating their ADA to a stake pool on the Cardano mainnet, minus a commission fee."),(0,i.kt)("h2",{id:"milkomeda-bridge"},"Milkomeda Bridge"),(0,i.kt)("p",null,"The Milkomeda Bridge serves as a vital intermediary in the liquid staking process. It facilitates seamless communication between the Cardano mainnet (Layer 1) and the Milkomeda C1 Sidechain. The bridge enables the movement of ADA between the two layers, allowing users to stake and unstake while preserving their staking rewards."),(0,i.kt)("p",null,"The Milkomeda Bridge is responsible for depositing epoch-based rewards into the Milkomeda Liquid Staking smart contract. These rewards are then proportionally distributed among the addresses participating in staking"),(0,i.kt)("h3",{id:"milkomeda-c1"},"Milkomeda C1"),(0,i.kt)("p",null,"The Liquid Staking Smart Contract on the Milkomeda C1 serves as the protocol's core contract, tracking the total mADA deposited and keeping the track of the share of each address. "),(0,i.kt)("p",null,"Users deposit mADA into the Liquid Staking smart contract, receiving stmADA tokens representing their staked assets in return, and from the user's perspective, its primary functions are: staking, unstaking, and claiming rewards."),(0,i.kt)("p",null,"The stmADA tokens can then be used in DeFi protocols or traded on exchanges while continuing to earn staking rewards."),(0,i.kt)("p",null,"Milkomeda Liquid Staking unlocks the potential for users to leverage DeFi's earning possibilities while simultaneously accruing rewards from staked ADA on the Cardano mainnet."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"There are several benefits to using ",(0,i.kt)("strong",{parentName:"p"},"Milkomeda Liquid Staking"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dual Earning Potential: When you stake your ADA on Milkomeda, you receive stmADA tokens that continue to accrue Cardano staking rewards. This allows you to benefit from both the Milkomeda ecosystem and Cardano's staking system."),(0,i.kt)("li",{parentName:"ul"},"DeFi Integration: stMADA tokens can be utilized within various DeFi protocols on Milkomeda. This functionality enables you to amplify your earnings by participating in lending, borrowing, and other decentralized finance activities."),(0,i.kt)("li",{parentName:"ul"},"Trade Flexibility: StmADA tokens are tradable on exchanges, providing you with the convenience to easily convert them into other cryptocurrencies or fiat currencies as you see fit.")),(0,i.kt)("p",null,"Overall, ",(0,i.kt)("strong",{parentName:"p"},"Milkomeda Liquid Staking")," is a promising new solution that has the potential to make it easier for users to participate in the Cardano & Miilkomeda ecosystem and earn rewards."))}m.isMDXComponent=!0},8635:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/overview-ae660458fcb6e434dbf44a25ee6760ee.png"}}]);