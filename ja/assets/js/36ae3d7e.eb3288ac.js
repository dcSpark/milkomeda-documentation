"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,k=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Configuring Metamask",sidebar_position:2},i="Configuring MetaMask",s={unversionedId:"cardano/for-end-users/configuring-metamask",id:"cardano/for-end-users/configuring-metamask",title:"Configuring Metamask",description:"The next step is to obtain an address on the Milkomeda C1 sidechain where we can receive our MilkADA. For now, we recommend using MetaMask for this step.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cardano/for-end-users/configuring-metamask.mdx",sourceDirName:"cardano/for-end-users",slug:"/cardano/for-end-users/configuring-metamask",permalink:"/milkomeda-documentation/ja/cardano/for-end-users/configuring-metamask",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuring Metamask",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuring Flint Wallet",permalink:"/milkomeda-documentation/ja/cardano/for-end-users/configuring-flint-wallet"},next:{title:"Obtaining MilkADA",permalink:"/milkomeda-documentation/ja/cardano/for-end-users/obtaining-milkada"}},c={},l=[],m={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-metamask"},"Configuring MetaMask"),(0,a.kt)("p",null,"The next step is to obtain an address on the Milkomeda C1 sidechain where we can receive our MilkADA. For now, we recommend using MetaMask for this step."),(0,a.kt)("p",null,"First, install ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"},"MetaMask for Chrome"),". Then, click the Chrome Extensions icon ",(0,a.kt)("img",{src:"/img/puzzle-icon.png",className:"img-icon"}),' and select MetaMask. Within the MetaMask window, click "',(0,a.kt)("strong",{parentName:"p"},"Get Started"),'" and then "',(0,a.kt)("strong",{parentName:"p"},"Create a Wallet"),'". Set a wallet password and click through the rest of the setup screens. When finished, you should have a new empty wallet as shown below. Select the network dropdown at the top right of the MetaMask screen.'),(0,a.kt)("img",{src:"/img/metamask-wallet.png",alt:"MetaMask wallet",className:"img-card"}),(0,a.kt)("p",null,"From the dropdown list, select \u201c",(0,a.kt)("strong",{parentName:"p"},"Add Network"),"\u201d and enter the following:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Network Name: Milkomeda Cardano (C1)"),(0,a.kt)("p",{parentName:"blockquote"},"New RPC URL: ",(0,a.kt)("a",{parentName:"p",href:"https://rpc-mainnet-cardano-evm.c1.milkomeda.com"},"https://rpc-mainnet-cardano-evm.c1.milkomeda.com"),";"),(0,a.kt)("p",{parentName:"blockquote"},"Chain ID: 2001"),(0,a.kt)("p",{parentName:"blockquote"},"Currency Symbol (Optional): MilkADA"),(0,a.kt)("p",{parentName:"blockquote"},"Block Explorer URL (Optional): ",(0,a.kt)("a",{parentName:"p",href:"https://explorer-mainnet-cardano-evm.c1.milkomeda.com"},"https://explorer-mainnet-cardano-evm.c1.milkomeda.com"))),(0,a.kt)("p",null,"Click \u201c",(0,a.kt)("strong",{parentName:"p"},"Save"),'\u201d, and you should now see "',(0,a.kt)("strong",{parentName:"p"},"Milkomeda Cardano (C1)"),'" in the network dropdown. Copy your C1 wallet address to the clipboard by clicking on the account name, as shown.'),(0,a.kt)("img",{src:"/img/copy-address-metamask.png",alt:"Copy Address in MetaMask",className:"img-card"}),(0,a.kt)("p",null,"Now we are ready to return to Flint Wallet and send our ADA to be converted to MilkADA. "," "))}p.isMDXComponent=!0}}]);