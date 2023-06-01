"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[1367],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=m(a),c=l,u=k["".concat(d,".").concat(c)]||k[c]||p[c]||r;return a?n.createElement(u,o(o({ref:t},s),{},{components:a})):n.createElement(u,o({ref:t},s))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=k;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5621:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>M,frontMatter:()=>f,metadata:()=>b,toc:()=>w});var n=a(7462),l=a(7294),r=a(3905),o=a(6010),i=a(2389),d=a(7392),m=a(7094),s=a(2466);const p="tabList__CuJ",k="tabItem_LNqP";function c(e){var t;const{lazy:a,block:r,defaultValue:i,values:c,groupId:u,className:N}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,d.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:w}=(0,m.U)(),[y,M]=(0,l.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=u){const e=h[u];null!=e&&e!==y&&f.some((t=>t.value===e))&&M(e)}const T=e=>{const t=e.currentTarget,a=E.indexOf(t),n=f[a].value;n!==y&&(j(t),M(n),null!=u&&w(u,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},N)},f.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>E.push(e),onKeyDown:O,onFocus:T,onClick:T},r,{className:(0,o.Z)("tabs__item",k,null==r?void 0:r.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,l.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function u(e){const t=(0,i.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}const N="tabItem_Ymn6";function g(e){let{children:t,hidden:a,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,o.Z)(N,n),hidden:a},t)}const f={sidebar_label:"\uc9c0\uac11 \uc5f0\uacc4",sidebar_position:7},v="\uc9c0\uac11 \uc5f0\uacc4",b={unversionedId:"cardano/for-developers/wallet-integration",id:"cardano/for-developers/wallet-integration",title:"\uc9c0\uac11 \uc5f0\uacc4",description:"Web3 \uc9c0\uac11 \ubc0f \uae30\ud0c0 dApp\uc744 Milkomeda\uc640 \uc5f0\uacb0\ud558\ub294 \ubc29\ubc95",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/cardano/for-developers/wallet-integration.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/wallet-integration",permalink:"/ko/cardano/for-developers/wallet-integration",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"\uc9c0\uac11 \uc5f0\uacc4",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",permalink:"/ko/cardano/for-developers/deploying-a-smart-contract"},next:{title:"Milkomeda Open Oracle",permalink:"/ko/cardano/for-developers/milkomeda_open_oracle"}},h={},w=[{value:"\ubd84\uc0b0\ud615 \uae08\uc735\uc758 \ubbf8\ub798 \uad6c\ucd95",id:"\ubd84\uc0b0\ud615-\uae08\uc735\uc758-\ubbf8\ub798-\uad6c\ucd95",level:2},{value:"\uc9c0\uac11\uacfc Milkomeda \ud504\ub85c\ud1a0\ucf5c\uc758 \uc5f0\uacc4",id:"\uc9c0\uac11\uacfc-milkomeda-\ud504\ub85c\ud1a0\ucf5c\uc758-\uc5f0\uacc4",level:2},{value:"<em>milkomeda-js-sdk</em> \ud328\ud0a4\uc9c0 \uc138\ubd80\uc815\ubcf4",id:"milkomeda-js-sdk-\ud328\ud0a4\uc9c0-\uc138\ubd80\uc815\ubcf4",level:2},{value:"\uac8c\uc2dc\ub41c \ud398\uc774\ub85c\ub4dc\uc758 \uc608",id:"\uac8c\uc2dc\ub41c-\ud398\uc774\ub85c\ub4dc\uc758-\uc608",level:4},{value:"\ud2b8\ub79c\uc7ad\uc158\uc758 Milkomeda \uba54\ud0c0\ub370\uc774\ud130\ub97c \uc0dd\uc131\ud55c \uc608",id:"\ud2b8\ub79c\uc7ad\uc158\uc758-milkomeda-\uba54\ud0c0\ub370\uc774\ud130\ub97c-\uc0dd\uc131\ud55c-\uc608",level:4},{value:"Milkomeda REST API",id:"milkomeda-rest-api",level:3},{value:"\uc774 \uae30\uc0ac\uc640 Milkomeda\uc758 \uc9c0\uc6d0\uc5d0 \ub300\ud574 \uad81\uae08\ud55c \uc810\uc774 \uc788\uc73c\uba74 https://www.milkomeda.com/support \ub610\ub294 Discord \uc11c\ubc84\uc5d0 \ubb38\uc758\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",id:"\uc774-\uae30\uc0ac\uc640-milkomeda\uc758-\uc9c0\uc6d0\uc5d0-\ub300\ud574-\uad81\uae08\ud55c-\uc810\uc774-\uc788\uc73c\uba74-httpswwwmilkomedacomsupport-\ub610\ub294-discord-\uc11c\ubc84\uc5d0-\ubb38\uc758\ud558\uc2dc\uae30-\ubc14\ub78d\ub2c8\ub2e4",level:4}],y={toc:w};function M(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc9c0\uac11-\uc5f0\uacc4"},"\uc9c0\uac11 \uc5f0\uacc4"),(0,r.kt)("p",null,"Web3 \uc9c0\uac11 \ubc0f \uae30\ud0c0 dApp\uc744 Milkomeda\uc640 \uc5f0\uacb0\ud558\ub294 \ubc29\ubc95"),(0,r.kt)("h2",{id:"\ubd84\uc0b0\ud615-\uae08\uc735\uc758-\ubbf8\ub798-\uad6c\ucd95"},"\ubd84\uc0b0\ud615 \uae08\uc735\uc758 \ubbf8\ub798 \uad6c\ucd95"),(0,r.kt)("p",null,"\uc544\ub798\uc5d0\uc11c\ub294 ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"milkomeda-js-sdk \ud328\ud0a4\uc9c0")),"\ub97c \uc0ac\uc6a9\ud558\uc5ec Milkomeda\uc5d0\uc11c web3 \uc9c0\uac11\uc744 \uc5f0\uacb0\ud558\ub294 \ubc29\ubc95 \uc124\uba85\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc9c0\uac11\uacfc-milkomeda-\ud504\ub85c\ud1a0\ucf5c\uc758-\uc5f0\uacc4"},"\uc9c0\uac11\uacfc Milkomeda \ud504\ub85c\ud1a0\ucf5c\uc758 \uc5f0\uacc4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. ",(0,r.kt)("em",{parentName:"strong"},"milkomeda-js-sdk \ud328\ud0a4\uc9c0")," \ub2e4\uc6b4\ub85c\ub4dc")),(0,r.kt)("p",null,"Milkomeda-js-sdk \ud328\ud0a4\uc9c0\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@dcspark/milkomeda-js-sdk"},"\uc5ec\uae30"),"\uc5d0\uc11c \uc561\uc138\uc2a4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud328\ud0a4\uc9c0\ub294 Milkomeda \ubc30\ud3ec\uc758 \uc815\uc801 \uc124\uc815\uc744 \ud638\uc2a4\ud305\ud569\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\uc774\ub97c \uc0ac\uc6a9\ud558\uba74 \uac01 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c Milkomeda \ud558\ub4dc \ucf54\ub529\uc758 \uc815\uc801 \uc124\uc815\uc744 \ud568\uaed8 \uc0ac\uc6a9\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. ",(0,r.kt)("em",{parentName:"strong"},"milkomeda-js-sdk")," \ud328\ud0a4\uc9c0 \uc124\uce58")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"npm"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud558\ub294 \uacbd\uc6b0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @dcspark/milkomeda-js-sdk\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"yarn"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud558\ub294 \uacbd\uc6b0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @dcspark/milkomeda-js-sdk\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. \ud328\ud0a4\uc9c0\ub97c \ud504\ub85c\uc81d\ud2b8\ub85c \uac00\uc838\uc624\uae30")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"import")," \uc0ac\uc6a9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { generateMilkomedaMetadata, milkomedaNetworks } from "@dcspark/milkomeda-js-sdk";\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"require")," \uc0ac\uc6a9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const milkomedaJsSdk = require("@dcspark/milkomeda-js-sdk");\n')),(0,r.kt)("h2",{id:"milkomeda-js-sdk-\ud328\ud0a4\uc9c0-\uc138\ubd80\uc815\ubcf4"},(0,r.kt)("em",{parentName:"h2"},"milkomeda-js-sdk")," \ud328\ud0a4\uc9c0 \uc138\ubd80\uc815\ubcf4"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Milkomeda-js-sdk"),"\ub294 Milkomeda \ubc30\ud3ec\uc758 \uc815\uc801 \uc124\uc815\uc744 \ud638\uc2a4\ud305\ud558\ub294 \ud328\ud0a4\uc9c0\uc785\ub2c8\ub2e4. \uc774\ub97c \uc0ac\uc6a9\ud558\uba74 \uac01 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c Milkomeda \ud558\ub4dc \ucf54\ub529\uc758 \uc815\uc801 \uc124\uc815\uc744 \ud568\uaed8 \uc0ac\uc6a9\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\ub9e4\uac1c \ubcc0\uc218"),(0,r.kt)("th",{parentName:"tr",align:null},"\uc124\uba85"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"isMainnet")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud2b9\uc815 \ub124\ud2b8\uc6cc\ud06c\uc758 \uad6c\uc131\uc774 \uba54\uc778\ub137 (Cardano \ub4f1)\uc778\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0b4\ub294 \ubd80\ub9ac\uc5b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"mainchain")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud504\ub85c\ud1a0\ucf5c\uba85(MilkomedaC1 \ub4f1) \uc774\ub098 \uc0ac\uc774\ub4dc \uccb4\uc778 Id \ub4f1, \uc0ac\uc774\ub4dc \uccb4\uc778\uc758 \uc815\ubcf4\ub85c \uad6c\uc131\ub41c\ub2e4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"sidechain")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud504\ub85c\ud1a0\ucf5c\uba85(MilkomedaC1 \ub4f1)\uc774\ub098 \uc0ac\uc774\ub4dc \uccb4\uc778 Id \ub4f1, \uc0ac\uc774\ub4dc \uccb4\uc778\uc758 \uc815\ubcf4\ub85c \uad6c\uc131\ub41c\ub2e4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"backendEndpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc774\ub4dc \uccb4\uc778\uc758 \ud2b9\uc815 \ubc84\uc804\uc5d0 \ub300\ud55c \ucd94\uac00 \uc815\ubcf4\ub97c \ub098\ud0c0\ub0b4\ub294 \uc11c\ube44\uc2a4 URL \uac12 \uc81c\uacf5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"protocolMagic")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc801\uc808\ud55c Milkomeda \ub124\ud2b8\uc6cc\ud06c\uc640 \ud638\ud658\ub418\ub294 \ud504\ub85c\ud1a0\ucf5c \ub9e4\uc9c1 \ub3c4\uc785")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"timeIntervalForAddressMs")),(0,r.kt)("td",{parentName:"tr",align:null},"\ubc00\ub9ac\ucd08 \ub2e8\uc704\ub85c \uc815\uc758\ub41c \uc8fc\uc18c\ub97c \ubcc0\uacbd\ud558\ub294 \ub370 \ud544\uc694\ud55c \uc2dc\uac04 \uac04\uaca9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"sidechainContract")),(0,r.kt)("td",{parentName:"tr",align:null},"\ubaa8\ub4e0 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc5f0\uacb0\ud560 \uc218 \uc788\ub294 \uc0ac\uc774\ub4dc\uccb4\uc778 \uacc4\uc57d\uc758 \uc8fc\uc18c")))),(0,r.kt)("h4",{id:"\uac8c\uc2dc\ub41c-\ud398\uc774\ub85c\ub4dc\uc758-\uc608"},"\uac8c\uc2dc\ub41c \ud398\uc774\ub85c\ub4dc\uc758 \uc608"),(0,r.kt)("p",null,"\ub2e4\uc74c\uc740 Milkomeda \ub124\ud2b8\uc6cc\ud06c(Devnet) \ud398\uc774\ub85c\ub4dc\ub97c \uacf5\uac1c\ud55c \uc608\uc785\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    [NETWORK_NAME]: {\n        isMainnet: false,\n        name: NETWORK_NAME,\n        mainchain: {\n            protocol: ProtocolNames.cardanoProtocol,\n            id: toChainId({\n                networkId: registry.Testnet.NetworkId,\n                networkMagic: registry.Testnet.NetworkMagic\n            })\n        },\n        sidechain: { protocol: ProtocolNames.evmProtocol, id: 200101 },\n        backendEndpoint: BackendEndpoints.devnet,\n        protocolMagic: ProtocolMagic.devnet,\n        timeIntervalForAddressMs: 86400000,\n        sidechainContract: "0x000000000000000000000000000000000000BbBB"\n    },\n}\n')),(0,r.kt)("p",null,"\ub610\ud55c \ud328\ud0a4\uc9c0\ub294 Milkomeda \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc801\ud569\ud55c \uba54\ud0c0\ub370\uc774\ud130\ub97c \ub9cc\ub4dc\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \ub3c4\uc6b0\ubbf8 \uc720\ud615\uacfc \ud568\uc218\ub97c \ud65c\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Milkomeda metadata generator\ngenerateMilkomedaMetadata(\n    address, # address is EVM address\n    protocolMagic # protocol magic for specific network\n)\n")),(0,r.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \uba54\ud0c0\ub370\uc774\ud130\ub294 \ub450 \uac1c\uc758 \ub9e4\uac1c\ubcc0\uc218\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"\ud504\ub85c\ud1a0\ucf5c \ub9e4\uc9c1 & EVM \uc8fc\uc18c"),"\uc785\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"\ud14c\uc2a4\ud2b8\ub137")," \ud2b8\ub79c\uc7ad\uc158\uc758 \uc77c\ubc18\uc801\uc778 \uba54\ud0c0\ub370\uc774\ud130\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    87: "devnet.cardano-evm.c1"\n    88: "0xEVM_TESTNET_ADDRESS"\n}\n')),(0,r.kt)("h4",{id:"\ud2b8\ub79c\uc7ad\uc158\uc758-milkomeda-\uba54\ud0c0\ub370\uc774\ud130\ub97c-\uc0dd\uc131\ud55c-\uc608"},"\ud2b8\ub79c\uc7ad\uc158\uc758 Milkomeda \uba54\ud0c0\ub370\uc774\ud130\ub97c \uc0dd\uc131\ud55c \uc608"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'generateMilkomedaMetadata("0x000\u2026", milkomedaNetworks["c1-devnet"].protocolMagic);\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"'0x000...'\uc744 EVM \uc8fc\uc18c\ub85c \ubc14\uafb8\uc138\uc694. ")),(0,r.kt)("h3",{id:"milkomeda-rest-api"},"Milkomeda REST API"),(0,r.kt)("p",null,"Milkomeda \uc0ac\uc774\ub4dc \uccb4\uc778\uc5d0 \ub300\ud55c \ub370\uc774\ud130\ub97c \uac80\uc0c9\ud558\ub294 REST API\uc5d0 \ub300\ud574 ",(0,r.kt)("em",{parentName:"p"},"Milkomeda-js-sdk")," \ud328\ud0a4\uc9c0 \uc774\uc678\uc758 \uac83\uc744 \ub3c4\uc785\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\uc774 \uc608\uc5d0\uc11c\ub294 \uc54c\uae30 \uc27d\uac8c \uc124\uba85\ud558\uae30 \uc704\ud574 Flint \uc6d4\ub81b \uc5f0\uacc4\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. ")),(0,r.kt)("p",null,"REST API\uc758 \uae30\ubcf8 URL\uc740 ",(0,r.kt)("em",{parentName:"p"},"milkomeda-js-sdk"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,r.kt)("strong",{parentName:"p"},"backendEndpoint")," \ub9e4\uac1c\ubcc0\uc218\ub85c \uc81c\uacf5\ub429\ub2c8\ub2e4. \ub2e4\uc74c \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud328\ud0a4\uc9c0\uc5d0\uc11c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(u,{defaultValue:"devnet",values:[{label:"Devnet",value:"devnet"},{label:"Mainnet",value:"mainnet"}],className:"border-[1px] border-gray-300",mdxType:"Tabs"},(0,r.kt)(g,{value:"devnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'milkomedaNetworks["c1-devnet"].backendEndpoint\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\uacb0\uacfc: ",(0,r.kt)("a",{parentName:"p",href:"https://allowlist.flint-wallet.com"},"https://allowlist.flint-wallet.com"))),(0,r.kt)("p",null,"\uae30\ubcf8 URL\uc774 \ucf54\ub4dc\uc5d0 \ud3ec\ud568\ub41c \uacbd\uc6b0 \ub2e4\uc74c \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. - ",(0,r.kt)("strong",{parentName:"p"},"Stargate address")," (",(0,r.kt)("a",{parentName:"p",href:"https://allowlist.flint-wallet.com/v1/stargate"},"V1/stargate"),")")),(0,r.kt)(g,{value:"mainnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'milkomedaNetworks["c1-mainnet"].backendEndpoint\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\uacb0\uacfc: ",(0,r.kt)("a",{parentName:"p",href:"https://allowlist-mainnet.flint-wallet.com"},"https://allowlist-mainnet.flint-wallet.com")),(0,r.kt)("p",{parentName:"admonition"},"\uc6d4\ub81b\uc744 Milkomeda \uba54\uc778 \ub137\uc5d0 \uc5f0\uacb0\ud558\ub824\uba74 \ub450 \uac1c\uc758 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \ud5c8\uc6a9\ub41c EVM \uc8fc\uc18c\ub97c \uac00\uc838\uc640\uc57c \ud569\ub2c8\ub2e4. \uc774 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dcSpark/allowedlist-service/"},"microservice"),"\uc758 \ubaa9\uc801\uc740 Milkomeda \ube0c\ub9ac\uc9c0\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc8fc\uc18c \ubaa9\ub85d\uc744 \uc81c\uacf5\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.")),(0,r.kt)("p",null,"\uae30\ubcf8 URL\uc774 \ucf54\ub4dc\uc5d0 \ud3ec\ud568\ub41c \uacbd\uc6b0 \ub2e4\uc74c \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc911 \ud558\ub098\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. - ",(0,r.kt)("strong",{parentName:"p"},"Stargate address")," (",(0,r.kt)("a",{parentName:"p",href:"https://allowlist-mainnet.flint-wallet.com/v1/stargate"},"/V1/stargate"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fullAllowedList")," (",(0,r.kt)("a",{parentName:"li",href:"https://allowlist-mainnet.flint-wallet.com/v1/fullAllowedList"},"/v1/fullAllowedList"),")")),(0,r.kt)("p",null,"\uba54\uc778\ub137\uc5d0\uc11c \ud5c8\uc6a9\ub41c EVM \uc8fc\uc18c\uc758 \ubc30\uc5f4\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "allowList": ["0x...", "0x..."]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"isAddress=0x")," (",(0,r.kt)("a",{parentName:"li",href:"https://allowlist-mainnet.flint-wallet.com/v1/isAddressAllowed?address=0x"},"/v1/isAddressAllowed?address=0x"),")")),(0,r.kt)("p",null,"\uc81c\uacf5\ub41c \uc8fc\uc18c\uac00 \uc81c\ud55c\ub41c \uba54\uc778\ub137\uc5d0\uc11c \ud5c8\uc6a9\ub418\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0b4\ub294 \ubd80\uc6b8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."))),(0,r.kt)("p",null,"Milkomeda REST API \uc2a4\ud0c0 \uac8c\uc774\ud2b8 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \uc0ac\uc6a9\ud558\uba74 Devnet\uacfc \uba54\uc778\ub137\uc5d0\uc11c \ub3d9\uc77c\ud55c \ud398\uc774\ub85c\ub4dc\uc758 \uc18d\uc131\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc740 Devnet \ud398\uc774\ub85c\ub4dc\uc758 \uc608\uc785\ub2c8\ub2e4. "," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "current_address": "addr_test1wz6lvjg3anml96vl22mls5vae3x2cgaqwy2ewp5gj3fcxdcw652wz",\n    "ttl_expiry": 1646438400000,\n    "ada": {\n        "minLovelace": "3000000",\n        "fromADAFeeLovelace": "500000",\n        "toADAFeeGWei": "500000"\n    },\n    "assets": [\n        {\n            "idCardano": "b4004c2f3edfdd2016d0fead9b927064f345534b000000000000000000000000",\n            "idMilkomeda": "9c223e1dAf6184672E982d9AA560D9FD1d09A01B",\n            "minCNTInt": "1",\n            "minGWei": "1000000000"\n        }\n    \u2026\n    ]\n}\n')),(0,r.kt)("h4",{id:"\uc774-\uae30\uc0ac\uc640-milkomeda\uc758-\uc9c0\uc6d0\uc5d0-\ub300\ud574-\uad81\uae08\ud55c-\uc810\uc774-\uc788\uc73c\uba74-httpswwwmilkomedacomsupport-\ub610\ub294-discord-\uc11c\ubc84\uc5d0-\ubb38\uc758\ud558\uc2dc\uae30-\ubc14\ub78d\ub2c8\ub2e4"},"\uc774 \uae30\uc0ac\uc640 Milkomeda\uc758 \uc9c0\uc6d0\uc5d0 \ub300\ud574 \uad81\uae08\ud55c \uc810\uc774 \uc788\uc73c\uba74 ",(0,r.kt)("a",{parentName:"h4",href:"https://www.milkomeda.com/support"},"https://www.milkomeda.com/support")," \ub610\ub294 ",(0,r.kt)("a",{parentName:"h4",href:"https://discord.gg/4GSwPJpF"},"Discord \uc11c\ubc84"),"\uc5d0 \ubb38\uc758\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."))}M.isMDXComponent=!0}}]);