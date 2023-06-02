"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[5154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=c(n),u=a,m=f["".concat(l,".").concat(u)]||f[u]||p[u]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Obtaining Test ADA",sidebar_position:2},i="Obtaining Test ADA",s={unversionedId:"cardano/for-developers/obtaining-test-ada",id:"cardano/for-developers/obtaining-test-ada",title:"Obtaining Test ADA",description:"Now we\u2019re ready to get some test ADA from the Cardano testnet faucet.",source:"@site/docs/cardano/for-developers/obtaining-test-ada.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/obtaining-test-ada",permalink:"/cardano/for-developers/obtaining-test-ada",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Obtaining Test ADA",sidebar_position:2},sidebar:"cardano",previous:{title:"Configuring Flint Wallet",permalink:"/cardano/for-developers/configuring-flint-for-devs"},next:{title:"Configuring MetaMask",permalink:"/cardano/for-developers/configuring-metamask-for-devs"}},l={},c=[],d={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"obtaining-test-ada"},"Obtaining Test ADA"),(0,a.kt)("p",null,"Now we\u2019re ready to get some test ADA from the Cardano testnet faucet."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you will be using real ADA on the mainnet version of Milkomeda C1, skip this step and proceed to the ",(0,a.kt)("a",{parentName:"p",href:"./configuring-metamask-for-devs"},"next page"))),(0,a.kt)("p",null,'Within the Flint Wallet window, click "',(0,a.kt)("strong",{parentName:"p"},"Receive"),'". At the Receive window, click "',(0,a.kt)("strong",{parentName:"p"},"Copy Address"),'" to copy your Cardano Testnet wallet address to the clipboard, and then click "',(0,a.kt)("strong",{parentName:"p"},"Testnet faucet (tADA)"),'" at the bottom of the screen, as shown.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7467).Z,width:"450",height:"675"}),"\u200b"),(0,a.kt)("p",null,"This will take you to the following link: ",(0,a.kt)("a",{parentName:"p",href:"https://testnets.cardano.org/en/testnets/cardano/tools/faucet/"},"Cardano Testnet Faucet"),"\u200b"),(0,a.kt)("p",null,'Here, select "tAda" from the dropdown menu and paste your Cardano testnet wallet address into the "Address" field. You can leave the "API Key" field blank.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5736).Z,width:"500",height:"480"})),(0,a.kt)("p",null,'Complete the Captcha and click "',(0,a.kt)("strong",{parentName:"p"},"Request funds"),'".'),(0,a.kt)("p",null,"After waiting a few minutes (usually 5 minutes or less), you should be able to see some tADA in your Cardano Testnet wallet."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8615).Z,width:"540",height:"840"})),(0,a.kt)("p",null,"Next we will set up MetaMask and get an address on the Milkomeda C1 sidechain."))}p.isMDXComponent=!0},5736:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cardano-testnet-faucet-911b2317702fbfb4cc40b5489c236241.png"},8615:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/flint-confirm-tada-balance-f86e5804b9af69a9558ca583f025dba5.png"},7467:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/flint-copy-tada-receive-address-4f00a8a47ce585f06d5ae6e6c5bc22f7.png"}}]);