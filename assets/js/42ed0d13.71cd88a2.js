"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[592],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),u=o,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>v,default:()=>M,frontMatter:()=>f,metadata:()=>w,toc:()=>b});var n=a(7462),o=a(7294),r=a(3905),l=a(6010),i=a(2389),s=a(7392),d=a(7094),p=a(2466);const m="tabList__CuJ",c="tabItem_LNqP";function u(e){var t,a;const{lazy:r,block:i,defaultValue:u,values:k,groupId:g,className:h}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),w=(0,s.l)(v,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===u?u:null!=(t=null!=u?u:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:y}=(0,d.U)(),[M,E]=(0,o.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=g){const e=b[g];null!=e&&e!==M&&v.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,a=x.indexOf(t),n=v[a].value;n!==M&&(j(t),E(n),null!=g&&y(g,String(n)))},A=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var o;const t=x.indexOf(e.currentTarget)-1;a=null!=(o=x[t])?o:x[x.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},h)},v.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:M===t?0:-1,"aria-selected":M===t,key:t,ref:e=>x.push(e),onKeyDown:A,onFocus:T,onClick:T},r,{className:(0,l.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":M===t})}),null!=a?a:t)}))),r?(0,o.cloneElement)(f.filter((e=>e.props.value===M))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==M})))))}function k(e){const t=(0,i.Z)();return o.createElement(u,(0,n.Z)({key:String(t)},e))}const g="tabItem_Ymn6";function h(e){let{children:t,hidden:a,className:n}=e;return o.createElement("div",{role:"tabpanel",className:(0,l.Z)(g,n),hidden:a},t)}const f={sidebar_label:"Wallet Integration",sidebar_position:7},v="Wallet integration",w={unversionedId:"cardano/for-developers/wallet-integration",id:"cardano/for-developers/wallet-integration",title:"Wallet integration",description:"Learn how to integrate your web3 wallet or other dApp with Milkomeda",source:"@site/docs/cardano/for-developers/wallet-integration.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/wallet-integration",permalink:"/milkomeda-documentation/cardano/for-developers/wallet-integration",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Wallet Integration",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Deploying a Smart Contract",permalink:"/milkomeda-documentation/cardano/for-developers/deploying-a-smart-contract"},next:{title:"For End Users",permalink:"/milkomeda-documentation/cardano/for-end-users/"}},N={},b=[{value:"Start building the future of decentralized finances",id:"start-building-the-future-of-decentralized-finances",level:2},{value:"Integrate Wallet with Milkomeda protocol",id:"integrate-wallet-with-milkomeda-protocol",level:2},{value:"Learn more about <em>milkomeda-js-sdk</em> package",id:"learn-more-about-milkomeda-js-sdk-package",level:2},{value:"Example of the exposed payload",id:"example-of-the-exposed-payload",level:4},{value:"Example of generating Milkomeda metadata for transaction",id:"example-of-generating-milkomeda-metadata-for-transaction",level:4},{value:"Milkomeda REST API",id:"milkomeda-rest-api",level:3},{value:"If you have any additional questions regarding this article and Milkomeda integration go to https://www.milkomeda.com/support or visit our discord server and don\u2019t hesitate to ask us.",id:"if-you-have-any-additional-questions-regarding-this-article-and-milkomeda-integration-go-to-httpswwwmilkomedacomsupport-or-visit-our-discord-server-and-dont-hesitate-to-ask-us",level:4}],y={toc:b};function M(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wallet-integration"},"Wallet integration"),(0,r.kt)("p",null,"Learn how to integrate your web3 wallet or other dApp with Milkomeda"),(0,r.kt)("h2",{id:"start-building-the-future-of-decentralized-finances"},"Start building the future of decentralized finances"),(0,r.kt)("p",null,"The following article helps to get to know the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"milkomeda-js-sdk package"))," allowing developers to integrate web3 wallet on Milkomeda Sidechain."),(0,r.kt)("h2",{id:"integrate-wallet-with-milkomeda-protocol"},"Integrate Wallet with Milkomeda protocol"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Download ",(0,r.kt)("em",{parentName:"strong"},"milkomeda-js-sdk package"))),(0,r.kt)("p",null,"Here you can find the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@dcspark/milkomeda-js-sdk"},"milkomeda-js-sdk package"),". This is a package that hosts static configurations of Milkomeda deployments."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is useful to avoid having each project integrate Milkomeda hard-coding static configurations.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Install ",(0,r.kt)("em",{parentName:"strong"},"milkomeda-js-sdk")," package")),(0,r.kt)("p",null,"To install the package using ",(0,r.kt)("strong",{parentName:"p"},"npm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @dcspark/milkomeda-js-sdk\n")),(0,r.kt)("p",null,"To install the package using ",(0,r.kt)("strong",{parentName:"p"},"yarn"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @dcspark/milkomeda-js-sdk\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Import the package into your project")),(0,r.kt)("p",null,"Using ",(0,r.kt)("strong",{parentName:"p"},"import:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { generateMilkomedaMetadata, milkomedaNetworks } from "@dcspark/milkomeda-js-sdk";\n')),(0,r.kt)("p",null,"Using ",(0,r.kt)("strong",{parentName:"p"},"require:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const milkomedaJsSdk = require("@dcspark/milkomeda-js-sdk");\n')),(0,r.kt)("h2",{id:"learn-more-about-milkomeda-js-sdk-package"},"Learn more about ",(0,r.kt)("em",{parentName:"h2"},"milkomeda-js-sdk")," package"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Milkomeda-js-sdk")," is a package that hosts static configurations of Milkomeda deployments. This is useful to avoid having each project integrate Milkomeda hard-coding static configurations."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"isMainnet")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean informing if the specific network configuration is mainnet (e.g. Cardano) or not,")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"mainchain")),(0,r.kt)("td",{parentName:"tr",align:null},"consists of mainchain information such as protocol and its id,")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"sidechain")),(0,r.kt)("td",{parentName:"tr",align:null},"consists of sidechain information such as protocol name (e.g. MilkomedaC1) and sidechain id,")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"backendEndpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"provides URL value for the service, which exposes additional information about a specific version of the sidechain,")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"protocolMagic")),(0,r.kt)("td",{parentName:"tr",align:null},"introduces protocol magic compatible with appropriate Milkomeda network,")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"timeIntervalForAddressMs")),(0,r.kt)("td",{parentName:"tr",align:null},"a time interval of a possible address change defined in milliseconds,")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"sidechainContract")),(0,r.kt)("td",{parentName:"tr",align:null},"address of the sidechain contract to which any client can connect.")))),(0,r.kt)("h4",{id:"example-of-the-exposed-payload"},"Example of the exposed payload"),(0,r.kt)("p",null,"Below you can find an example of the exposed payload of one of the Milkomeda Networks (devnet)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    [NETWORK_NAME]: {\n        isMainnet: false,\n        name: NETWORK_NAME,\n        mainchain: {\n            protocol: ProtocolNames.cardanoProtocol,\n            id: toChainId({\n                networkId: registry.Testnet.NetworkId,\n                networkMagic: registry.Testnet.NetworkMagic\n            })\n        },\n        sidechain: { protocol: ProtocolNames.evmProtocol, id: 200101 },\n        backendEndpoint: BackendEndpoints.devnet,\n        protocolMagic: ProtocolMagic.devnet,\n        timeIntervalForAddressMs: 86400000,\n        sidechainContract: "0x000000000000000000000000000000000000BbBB"\n    },\n}\n')),(0,r.kt)("p",null,"Additionally, the package introduces helper types and a function that helps to create proper metadata for Milkomeda transactions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Milkomeda metadata generator\ngenerateMilkomedaMetadata(\n    address, # address is EVM address\n    protocolMagic # protocol magic for specific network\n)\n")),(0,r.kt)("p",null,"The metadata of a transaction consists of two parameters - ",(0,r.kt)("strong",{parentName:"p"},"protocol magic & EVM address"),". Exemplary metadata for ",(0,r.kt)("strong",{parentName:"p"},"testnet")," transaction is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    87: "devnet.cardano-evm.c1"\n    88: "0xEVM_TESTNET_ADDRESS"\n}\n')),(0,r.kt)("h4",{id:"example-of-generating-milkomeda-metadata-for-transaction"},"Example of generating Milkomeda metadata for transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'generateMilkomedaMetadata("0x000\u2026", milkomedaNetworks["c1-devnet"].protocolMagic);\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'Remember to replace "0x000..." with your EVM address')),(0,r.kt)("h3",{id:"milkomeda-rest-api"},"Milkomeda REST API"),(0,r.kt)("p",null,"Except for the ",(0,r.kt)("em",{parentName:"p"},"Milkomeda-js-sdk")," package, we have introduced a REST API that allows to fetch more data regarding the Milkomeda Sidechain itself."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In this example, we use the Flint Wallet integration example for a better explanation")),(0,r.kt)("p",null,"Base url for REST API is given as the ",(0,r.kt)("strong",{parentName:"p"},"backendEndpoint")," parameter using ",(0,r.kt)("em",{parentName:"p"},"milkomeda-js-sdk"),". You can take it out from the package using the following code:"),(0,r.kt)(k,{defaultValue:"devnet",values:[{label:"Devnet",value:"devnet"},{label:"Mainnet",value:"mainnet"}],className:"border-[1px] border-gray-300",mdxType:"Tabs"},(0,r.kt)(h,{value:"devnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'milkomedaNetworks["c1-devnet"].backendEndpoint\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Result: ",(0,r.kt)("a",{parentName:"p",href:"https://allowlist.flint-wallet.com"},"https://allowlist.flint-wallet.com"))),(0,r.kt)("p",null,"When you have the base URL included in your code, you can use one of the following endpoint:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stargate address")," (",(0,r.kt)("a",{parentName:"li",href:"https://allowlist.flint-wallet.com/v1/stargate"},"V1/stargate"),")"))),(0,r.kt)(h,{value:"mainnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'milkomedaNetworks["c1-mainnet"].backendEndpoint\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Result: ",(0,r.kt)("a",{parentName:"p",href:"https://allowlist-mainnet.flint-wallet.com"},"https://allowlist-mainnet.flint-wallet.com")),(0,r.kt)("p",{parentName:"admonition"},"If you want to integrate your Wallet with Milkomeda Mainnet, you need to use another 2 endpoints, to get EVM addresses allowed on the network. The purpose of this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dcSpark/allowedlist-service/"},"microservice")," is to provide a list of addresses that are allowed to use the bridge in Milkomeda.")),(0,r.kt)("p",null,"When you have the base URL included in your code, you can use one of the following endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stargate address")," (",(0,r.kt)("a",{parentName:"li",href:"https://allowlist-mainnet.flint-wallet.com/v1/stargate"},"/V1/stargate"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fullAllowedList")," (",(0,r.kt)("a",{parentName:"li",href:"https://allowlist-mainnet.flint-wallet.com/v1/fullAllowedList"},"/v1/fullAllowedList"),")")),(0,r.kt)("p",null,"Returns array of EVM addresses allowed in the mainnet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "allowList": ["0x...", "0x..."]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"isAddress=0x")," (",(0,r.kt)("a",{parentName:"li",href:"https://allowlist-mainnet.flint-wallet.com/v1/isAddressAllowed?address=0x"},"/v1/isAddressAllowed?address=0x"),")")),(0,r.kt)("p",null,"Returns a boolean value, which informs if the ","*","*","*","*"," provided address is allowed on the restricted mainnet or not."))),(0,r.kt)("p",null,"Using Milkomeda REST API stargate endpoint you can get the same properties of the payload for both devnet and mainnet. Below you can find an example payload for devnet:"," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "current_address": "addr_test1wz6lvjg3anml96vl22mls5vae3x2cgaqwy2ewp5gj3fcxdcw652wz",\n    "ttl_expiry": 1646438400000,\n    "ada": {\n        "minLovelace": "3000000",\n        "fromADAFeeLovelace": "500000",\n        "toADAFeeGWei": "500000"\n    },\n    "assets": [\n        {\n            "idCardano": "b4004c2f3edfdd2016d0fead9b927064f345534b000000000000000000000000",\n            "idMilkomeda": "9c223e1dAf6184672E982d9AA560D9FD1d09A01B",\n            "minCNTInt": "1",\n            "minGWei": "1000000000"\n        }\n    \u2026\n    ]\n}\n')),(0,r.kt)("h4",{id:"if-you-have-any-additional-questions-regarding-this-article-and-milkomeda-integration-go-to-httpswwwmilkomedacomsupport-or-visit-our-discord-server-and-dont-hesitate-to-ask-us"},"If you have any additional questions regarding this article and Milkomeda integration go to ",(0,r.kt)("a",{parentName:"h4",href:"https://www.milkomeda.com/support"},"https://www.milkomeda.com/support")," or visit our ",(0,r.kt)("a",{parentName:"h4",href:"https://discord.gg/4GSwPJpF"},"discord server")," and don\u2019t hesitate to ask us."))}M.isMDXComponent=!0}}]);