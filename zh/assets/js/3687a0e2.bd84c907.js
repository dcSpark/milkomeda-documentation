"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[951],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=m(a),c=l,u=k["".concat(d,".").concat(c)]||k[c]||p[c]||r;return a?n.createElement(u,o(o({ref:t},s),{},{components:a})):n.createElement(u,o({ref:t},s))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8791:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>E,frontMatter:()=>f,metadata:()=>b,toc:()=>w});var n=a(7462),l=a(7294),r=a(3905),o=a(6010),i=a(2389),d=a(7392),m=a(7094),s=a(2466);const p="tabList__CuJ",k="tabItem_LNqP";function c(e){var t,a;const{lazy:r,block:i,defaultValue:c,values:u,groupId:N,className:g}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,d.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===c?c:null!=(t=null!=c?c:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:y}=(0,m.U)(),[E,M]=(0,l.useState)(h),A=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=N){const e=w[N];null!=e&&e!==E&&v.some((t=>t.value===e))&&M(e)}const T=e=>{const t=e.currentTarget,a=A.indexOf(t),n=v[a].value;n!==E&&(j(t),M(n),null!=N&&y(N,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=A.indexOf(e.currentTarget)+1;a=null!=(n=A[t])?n:A[0];break}case"ArrowLeft":{var l;const t=A.indexOf(e.currentTarget)-1;a=null!=(l=A[t])?l:A[A.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},v.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>A.push(e),onKeyDown:x,onFocus:T,onClick:T},r,{className:(0,o.Z)("tabs__item",k,null==r?void 0:r.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),r?(0,l.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function u(e){const t=(0,i.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}const N="tabItem_Ymn6";function g(e){let{children:t,hidden:a,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,o.Z)(N,n),hidden:a},t)}const f={sidebar_label:"\u94b1\u5305\u6574\u5408",sidebar_position:7},v="\u94b1\u5305\u6574\u5408",b={unversionedId:"cardano/for-developers/wallet-integration",id:"cardano/for-developers/wallet-integration",title:"\u94b1\u5305\u6574\u5408",description:"\u4e86\u89e3\u5982\u4f55\u5c06\u60a8\u7684web3\u94b1\u5305\u6216\u5176\u4ed6dApp\u4e0eMilkomeda\u6574\u5408\u8d77\u6765",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cardano/for-developers/wallet-integration.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/wallet-integration",permalink:"/milkomeda-documentation/zh/cardano/for-developers/wallet-integration",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"\u94b1\u5305\u6574\u5408",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6",permalink:"/milkomeda-documentation/zh/cardano/for-developers/deploying-a-smart-contract"},next:{title:"\u7ed9\u7ec8\u7aef\u7528\u6237",permalink:"/milkomeda-documentation/zh/cardano/for-end-users/"}},h={},w=[{value:"\u5f00\u59cb\u6784\u5efa\u5206\u6563\u8d22\u52a1\u7684\u672a\u6765",id:"\u5f00\u59cb\u6784\u5efa\u5206\u6563\u8d22\u52a1\u7684\u672a\u6765",level:2},{value:"\u6574\u5408\u94b1\u5305\u4e0e Milkomeda \u534f\u8bae",id:"\u6574\u5408\u94b1\u5305\u4e0e-milkomeda-\u534f\u8bae",level:2},{value:"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e <em>milkomeda-js-sdk</em> \u8f6f\u4ef6\u5305",id:"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e-milkomeda-js-sdk-\u8f6f\u4ef6\u5305",level:2},{value:"\u66b4\u9732\u6709\u6548\u8f7d\u8377\u7684\u4f8b\u5b50",id:"\u66b4\u9732\u6709\u6548\u8f7d\u8377\u7684\u4f8b\u5b50",level:4},{value:"\u4e3a\u4ea4\u6613\u751f\u6210Milkomeda\u5143\u6570\u636e\u7684\u4f8b\u5b50",id:"\u4e3a\u4ea4\u6613\u751f\u6210milkomeda\u5143\u6570\u636e\u7684\u4f8b\u5b50",level:4},{value:"Milkomeda REST API",id:"milkomeda-rest-api",level:3},{value:"\u5982\u679c\u60a8\u5bf9\u672c\u6587\u548cMilkomeda\u6574\u5408\u6709\u4efb\u4f55\u5176\u4ed6\u95ee\u9898\uff0c\u8bf7\u8bbf\u95eehttps://www.milkomeda.com/support\u6216\u8bbf\u95ee\u6211\u4eec\u7684discord\u670d\u52a1\u5668\uff0c\u8bf7\u4e0d\u8981\u72b9\u8c6b\uff0c\u4e0e\u6211\u4eec\u8054\u7cfb\u3002",id:"\u5982\u679c\u60a8\u5bf9\u672c\u6587\u548cmilkomeda\u6574\u5408\u6709\u4efb\u4f55\u5176\u4ed6\u95ee\u9898\u8bf7\u8bbf\u95eehttpswwwmilkomedacomsupport\u6216\u8bbf\u95ee\u6211\u4eec\u7684discord\u670d\u52a1\u5668\u8bf7\u4e0d\u8981\u72b9\u8c6b\u4e0e\u6211\u4eec\u8054\u7cfb",level:4}],y={toc:w};function E(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u94b1\u5305\u6574\u5408"},"\u94b1\u5305\u6574\u5408"),(0,r.kt)("p",null,"\u4e86\u89e3\u5982\u4f55\u5c06\u60a8\u7684web3\u94b1\u5305\u6216\u5176\u4ed6dApp\u4e0eMilkomeda\u6574\u5408\u8d77\u6765"),(0,r.kt)("h2",{id:"\u5f00\u59cb\u6784\u5efa\u5206\u6563\u8d22\u52a1\u7684\u672a\u6765"},"\u5f00\u59cb\u6784\u5efa\u5206\u6563\u8d22\u52a1\u7684\u672a\u6765"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u6587\u7ae0\u6709\u52a9\u4e8e\u4e86\u89e3",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"milkomeda-js-sdk\u5305")),"\uff0c\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u5728Milkomeda\u4fa7\u94fe\u4e0a\u6574\u5408web3\u94b1\u5305\u3002"),(0,r.kt)("h2",{id:"\u6574\u5408\u94b1\u5305\u4e0e-milkomeda-\u534f\u8bae"},"\u6574\u5408\u94b1\u5305\u4e0e Milkomeda \u534f\u8bae"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. 1. \u4e0b\u8f7d ",(0,r.kt)("em",{parentName:"strong"},"milkomeda-js-sdk \u5305"))),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@dcspark/milkomeda-js-sdk"},"milkomeda-js-sdk \u5305"),"\u3002 \u8fd9\u662f\u4e00\u4e2a\u627f\u8f7dMilkomeda\u90e8\u7f72\u7684\u9759\u6001\u914d\u7f6e\u7684\u5305\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u5bf9\u4e8e\u907f\u514d\u6bcf\u4e2a\u9879\u76ee\u6574\u5408Milkomeda\u786c\u7f16\u7801\u9759\u6001\u914d\u7f6e\u662f\u5f88\u6709\u7528\u7684\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. 2. \u5b89\u88c5 ",(0,r.kt)("em",{parentName:"strong"},"milkomeda-js-sdk")," \u8f6f\u4ef6\u5305")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"npm")," \u5b89\u88c5\u5305\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @dcspark/milkomeda-js-sdk\n")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"yarn")," \u5b89\u88c5\u5305\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @dcspark/milkomeda-js-sdk\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. 3. \u5c06\u8be5\u8f6f\u4ef6\u5305\u5bfc\u5165\u4f60\u7684\u9879\u76ee\u4e2d")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"import"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { generateMilkomedaMetadata, milkomedaNetworks } from "@dcspark/milkomeda-js-sdk";\n')),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"require\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const milkomedaJsSdk = require("@dcspark/milkomeda-js-sdk");\n')),(0,r.kt)("h2",{id:"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e-milkomeda-js-sdk-\u8f6f\u4ef6\u5305"},"\u4e86\u89e3\u66f4\u591a\u5173\u4e8e ",(0,r.kt)("em",{parentName:"h2"},"milkomeda-js-sdk")," \u8f6f\u4ef6\u5305"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Milkomeda-js-sdk"),"\u662f\u4e00\u4e2a\u627f\u8f7dMilkomeda\u90e8\u7f72\u7684\u9759\u6001\u914d\u7f6e\u7684\u5305\u3002 \u8fd9\u5bf9\u4e8e\u907f\u514d\u6bcf\u4e2a\u9879\u76ee\u6574\u5408Milkomeda\u786c\u7f16\u7801\u9759\u6001\u914d\u7f6e\u662f\u5f88\u6709\u7528\u7684\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"isMainnet")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean\u544a\u77e5\u7279\u5b9a\u7684\u7f51\u7edc\u914d\u7f6e\u662f\u5426\u662f\u4e3b\u7f51(\u5982Cardano)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"mainchain")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531\u4e3b\u94fe\u4fe1\u606f\u7ec4\u6210\uff0c\u5982\u534f\u8bae\u548c\u5b83\u7684id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"sidechain")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531\u4fa7\u94fe\u4fe1\u606f\u7ec4\u6210\uff0c\u5982\u534f\u8bae\u540d\u79f0(\u5982MilkomedaC1)\u548c\u4fa7\u94feid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"backendEndpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e86\u670d\u52a1\u7684URL\u503c\uff0c\u5b83\u66b4\u9732\u4e86\u5173\u4e8e\u4fa7\u94fe\u7279\u5b9a\u7248\u672c\u7684\u989d\u5916\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"protocolMagic")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ecb\u7ecd\u4e86\u4e0e\u9002\u5f53\u7684Milkomeda\u7f51\u7edc\u517c\u5bb9\u7684\u534f\u8bae\u9b54\u6cd5(protocol magic)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"timeIntervalForAddressMs")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u5b9a\u4e49\u7684\u53ef\u80fd\u7684\u5730\u5740\u53d8\u5316\u7684\u65f6\u95f4\u95f4\u9694")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"sidechainContract")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fa7\u94fe\u5408\u7ea6\u7684\u5730\u5740\uff0c\u4efb\u4f55\u5ba2\u6237\u7aef\u90fd\u53ef\u4ee5\u8fde\u63a5\u5230\u8be5\u5730\u5740")))),(0,r.kt)("h4",{id:"\u66b4\u9732\u6709\u6548\u8f7d\u8377\u7684\u4f8b\u5b50"},"\u66b4\u9732\u6709\u6548\u8f7d\u8377\u7684\u4f8b\u5b50"),(0,r.kt)("p",null,"\u4e0b\u9762\u4f60\u53ef\u4ee5\u627e\u5230\u4e00\u4e2a\u66b4\u9732\u7684Milkomeda\u7f51\u7edc(devnet)\u7684\u6709\u6548\u8f7d\u8377\u7684\u4f8b\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    [NETWORK_NAME]: {\n        isMainnet: false,\n        name: NETWORK_NAME,\n        mainchain: {\n            protocol: ProtocolNames.cardanoProtocol,\n            id: toChainId({\n                networkId: registry.Testnet.NetworkId,\n                networkMagic: registry.Testnet.NetworkMagic\n            })\n        },\n        sidechain: { protocol: ProtocolNames.evmProtocol, id: 200101 },\n        backendEndpoint: BackendEndpoints.devnet,\n        protocolMagic: ProtocolMagic.devnet,\n        timeIntervalForAddressMs: 86400000,\n        sidechainContract: "0x000000000000000000000000000000000000BbBB"\n    },\n}\n')),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u8be5\u5305\u8fd8\u5f15\u5165\u4e86\u8f85\u52a9\u7c7b\u578b\u548c\u4e00\u4e2a\u6709\u52a9\u4e8e\u4e3aMilkomeda\u4ea4\u6613\u521b\u5efa\u9002\u5f53\u5143\u6570\u636e\u7684\u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Milkomeda metadata generator\ngenerateMilkomedaMetadata(\n    address, # address is EVM address\n    protocolMagic # protocol magic for specific network\n)\n")),(0,r.kt)("p",null,"\u4ea4\u6613\u7684\u5143\u6570\u636e\u7531\u4e24\u4e2a\u53c2\u6570\u7ec4\u6210 - ",(0,r.kt)("strong",{parentName:"p"},"\u534f\u8bae\u9b54\u6cd5& EVM\u5730\u5740")," ",(0,r.kt)("strong",{parentName:"p"},"Testnet"),"\u4ea4\u6613\u7684\u793a\u8303\u6027\u5143\u6570\u636e\u5982\u4e0b\u3002 ",(0,r.kt)("strong",{parentName:"p"},"Testnet"),"\u4ea4\u6613\u7684\u793a\u8303\u6027\u5143\u6570\u636e\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    87: "devnet.cardano-evm.c1"\n    88: "0xEVM_TESTNET_ADDRESS"\n}\n')),(0,r.kt)("h4",{id:"\u4e3a\u4ea4\u6613\u751f\u6210milkomeda\u5143\u6570\u636e\u7684\u4f8b\u5b50"},"\u4e3a\u4ea4\u6613\u751f\u6210Milkomeda\u5143\u6570\u636e\u7684\u4f8b\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'generateMilkomedaMetadata("0x000\u2026", milkomedaNetworks["c1-devnet"].protocolMagic);\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8bb0\u4f4f\u7528\u4f60\u7684EVM\u5730\u5740\u66ff\u6362\u300c0x000...\u300d")),(0,r.kt)("h3",{id:"milkomeda-rest-api"},"Milkomeda REST API"),(0,r.kt)("p",null,"\u9664\u4e86",(0,r.kt)("em",{parentName:"p"},"Milkomeda-js-sdk"),"\u5305\uff0c\u6211\u4eec\u5df2\u7ecf\u5f15\u5165\u4e86\u4e00\u4e2aREST API\uff0c\u53ef\u4ee5\u83b7\u53d6\u66f4\u591a\u5173\u4e8eMilkomeda\u4fa7\u94fe\u672c\u8eab\u7684\u6570\u636e\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4e3a\u4e86\u66f4\u597d\u5730\u89e3\u91ca\uff0c\u6211\u4eec\u4f7f\u7528\u4e86Flint\u94b1\u5305\u7684\u6574\u5408\u6848\u4f8b")),(0,r.kt)("p",null,"REST API\u7684\u57fa\u672c\u7f51\u5740\u4f5c\u4e3a",(0,r.kt)("strong",{parentName:"p"},"backendEndpoint"),"\u53c2\u6570\u4f7f\u7528",(0,r.kt)("em",{parentName:"p"},"milkomeda-js-sdk"),"\u3002 \u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u628a\u5b83\u4ece\u5305\u91cc\u53d6\u51fa\u6765:"),(0,r.kt)(u,{defaultValue:"devnet",values:[{label:"Devnet",value:"devnet"},{label:"Mainnet",value:"mainnet"}],className:"border-[1px] border-gray-300",mdxType:"Tabs"},(0,r.kt)(g,{value:"devnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'milkomedaNetworks["c1-devnet"].backendEndpoint\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed3\u679c: ",(0,r.kt)("a",{parentName:"p",href:"https://allowlist.flint-wallet.com"},"https://allowlist.flint-wallet.com"))),(0,r.kt)("p",null,"\u5f53\u4f60\u7684\u4ee3\u7801\u4e2d\u5305\u542b\u4e86\u57fa\u672c\u7684URL\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7684\u4e00\u4e2a\u7aef\u70b9:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stargate address")," (",(0,r.kt)("a",{parentName:"li",href:"https://allowlist.flint-wallet.com/v1/stargate"},"V1/stargate"),")"))),(0,r.kt)(g,{value:"mainnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'milkomedaNetworks["c1-mainnet"].backendEndpoint\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed3\u679c: ",(0,r.kt)("a",{parentName:"p",href:"https://allowlist-mainnet.flint-wallet.com"},"https://allowlist-mainnet.flint-wallet.com")),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u60f3\u5c06\u60a8\u7684\u94b1\u5305\u4e0eMilkomeda\u4e3b\u7f51\u6574\u5408\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u53e6\u5916\u4e24\u4e2a\u7ec8\u7aef\uff0c\u4ee5\u83b7\u5f97\u7f51\u7edc\u4e0a\u5141\u8bb8\u7684EVM\u5730\u5740\u3002 The purpose of this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dcSpark/allowedlist-service/"},"microservice")," is to provide a list of addresses that are allowed to use the bridge in Milkomeda."),(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a","[microservice]"," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dcSpark/allowedlist-service/)%E7%9A%84%E7%9B%AE%E7%9A%84%E6%98%AF%E6%8F%90%E4%BE%9B%E4%B8%80%E4%B8%AA%E5%85%81%E8%AE%B8%E4%BD%BF%E7%94%A8Milkomeda%E6%A1%A5%E7%9A%84%E5%9C%B0%E5%9D%80%E5%88%97%E8%A1%A8%E3%80%82"},"https://github.com/dcSpark/allowedlist-service/)\u7684\u76ee\u7684\u662f\u63d0\u4f9b\u4e00\u4e2a\u5141\u8bb8\u4f7f\u7528Milkomeda\u6865\u7684\u5730\u5740\u5217\u8868\u3002"))),(0,r.kt)("p",null,"\u5f53\u4f60\u7684\u4ee3\u7801\u4e2d\u5305\u542b\u57fa\u672c\u7684URL\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7684\u4e00\u4e2a\u7aef\u70b9:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stargate address")," (",(0,r.kt)("a",{parentName:"li",href:"https://allowlist-mainnet.flint-wallet.com/v1/stargate"},"/V1/stargate"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fullAllowedList")," (",(0,r.kt)("a",{parentName:"li",href:"https://allowlist-mainnet.flint-wallet.com/v1/fullAllowedList"},"/v1/fullAllowedList"),")")),(0,r.kt)("p",null,"\u8fd4\u56de\u4e3b\u7f51\u4e2d\u5141\u8bb8\u7684EVM\u5730\u5740\u6570\u7ec4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "allowList": ["0x...", "0x..."] \n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"isAddress=0x")," (",(0,r.kt)("a",{parentName:"li",href:"https://allowlist-mainnet.flint-wallet.com/v1/isAddressAllowed?address=0x"},"/v1/isAddressAllowed?address=0x"),")")),(0,r.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2aboolean\u503c\uff0c\u544a\u77e5\u6240\u63d0\u4f9b\u7684\u5730\u5740\u662f\u5426\u88ab\u5141\u8bb8\u8fdb\u5165\u53d7\u9650\u7684\u4e3b\u7f51\u3002"))),(0,r.kt)("p",null,"\u4f7f\u7528Milkomeda REST API stargate \u7aef\u70b9\uff0c\u4f60\u53ef\u4ee5\u83b7\u5f97devnet\u548cmainnet\u7684\u76f8\u540c\u5c5e\u6027\u7684\u6709\u6548\u8f7d\u8377\u3002 \u5728\u4e0b\u65b9\u4f60\u53ef\u4ee5\u770b\u5230devnet\u7684\u4e00\u4e2a\u6709\u6548\u8f7d\u8377\u7684\u4f8b\u5b50\uff1a"," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "current_address": "addr_test1wz6lvjg3anml96vl22mls5vae3x2cgaqwy2ewp5gj3fcxdcw652wz",\n    "ttl_expiry": 1646438400000,\n    "ada": {\n        "minLovelace": "3000000",\n        "fromADAFeeLovelace": "500000",\n        "toADAFeeGWei": "500000"\n    },\n    "assets": [\n        {\n            "idCardano": "b4004c2f3edfdd2016d0fead9b927064f345534b000000000000000000000000",\n            "idMilkomeda": "9c223e1dAf6184672E982d9AA560D9FD1d09A01B",\n            "minCNTInt": "1",\n            "minGWei": "1000000000"\n        }\n    \u2026 \n    ]\n}\n')),(0,r.kt)("h4",{id:"\u5982\u679c\u60a8\u5bf9\u672c\u6587\u548cmilkomeda\u6574\u5408\u6709\u4efb\u4f55\u5176\u4ed6\u95ee\u9898\u8bf7\u8bbf\u95eehttpswwwmilkomedacomsupport\u6216\u8bbf\u95ee\u6211\u4eec\u7684discord\u670d\u52a1\u5668\u8bf7\u4e0d\u8981\u72b9\u8c6b\u4e0e\u6211\u4eec\u8054\u7cfb"},"\u5982\u679c\u60a8\u5bf9\u672c\u6587\u548cMilkomeda\u6574\u5408\u6709\u4efb\u4f55\u5176\u4ed6\u95ee\u9898\uff0c\u8bf7\u8bbf\u95ee",(0,r.kt)("a",{parentName:"h4",href:"https://www.milkomeda.com/support"},"https://www.milkomeda.com/support"),"\u6216\u8bbf\u95ee\u6211\u4eec\u7684",(0,r.kt)("a",{parentName:"h4",href:"https://discord.gg/4GSwPJpF"},"discord\u670d\u52a1\u5668"),"\uff0c\u8bf7\u4e0d\u8981\u72b9\u8c6b\uff0c\u4e0e\u6211\u4eec\u8054\u7cfb\u3002"))}E.isMDXComponent=!0}}]);