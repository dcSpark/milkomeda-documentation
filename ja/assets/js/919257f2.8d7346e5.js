"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Configuring Flint Wallet",l={unversionedId:"cardano/for-end-users/configuring-flint-wallet",id:"cardano/for-end-users/configuring-flint-wallet",title:"Configuring Flint Wallet",description:"Flint Wallet is a Chrome extension that serves as a convenient go-to light wallet for DeFi and NFTs. The current",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cardano/for-end-users/configuring-flint-wallet.mdx",sourceDirName:"cardano/for-end-users",slug:"/cardano/for-end-users/configuring-flint-wallet",permalink:"/milkomeda-documentation/ja/cardano/for-end-users/configuring-flint-wallet",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"For End Users",permalink:"/milkomeda-documentation/ja/cardano/for-end-users/"},next:{title:"Configuring Metamask",permalink:"/milkomeda-documentation/ja/cardano/for-end-users/configuring-metamask"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-flint-wallet"},"Configuring Flint Wallet"),(0,o.kt)("p",null,'Flint Wallet is a Chrome extension that serves as a convenient go-to light wallet for DeFi and NFTs. The current\nversion of Flint allows users to enable "Milkomeda mode" to send transactions to the Milkomeda C1 sidechain. Install\nFlint Wallet by visiting the following link while using Chrome browser and clicking the \u201cAdd to Chrome\u201d button:\n',(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/flint/hnhobjmcibchnmglfbldbfabcgaknlkj"},"Install Flint Wallet")),(0,o.kt)("p",null,'After installing, click the "puzzle piece" icon ',(0,o.kt)("img",{src:"/img/puzzle-icon.png",className:"img-icon"}),"\nat the top right of the Chrome window to access your extensions. Select ",(0,o.kt)("strong",{parentName:"p"},"Flint"),". Within the Flint Wallet window, proceed past the initial warning screen, click \u201c",(0,o.kt)("strong",{parentName:"p"},"Let\u2019s Begin"),"\u201d, choose your language, click \u201c",(0,o.kt)("strong",{parentName:"p"},"I agree"),"\u201d, and when you arrive at the screen shown below, click the \u201c",(0,o.kt)("strong",{parentName:"p"},"Mainnet"),"\u201d button."),(0,o.kt)("img",{src:"/img/pick-a-network.png",alt:"Pick a network",className:"img-card"}),(0,o.kt)("p",null,"Next, click \u201c",(0,o.kt)("strong",{parentName:"p"},"Confirm"),"\u201d, \u201c",(0,o.kt)("strong",{parentName:"p"},"Create a new wallet"),"\u201d, and write down a copy of your recovery phrase."),(0,o.kt)("p",null,"Confirm the recovery phrase at the next screen, set a wallet password, and click \u201c",(0,o.kt)("strong",{parentName:"p"},"Create my wallet"),"\u201d. For now you can select \u201c",(0,o.kt)("strong",{parentName:"p"},"Skip"),"\u201d at the App Passcode screen, and then click \u201c",(0,o.kt)("strong",{parentName:"p"},"Finish"),"\u201d. You should now have a Cardano wallet, as shown:"),(0,o.kt)("img",{src:"/img/create-cardano-wallet.png",alt:"create flint wallet",className:"img-card"}),(0,o.kt)("p",null,'Note that to proceed further you will need to fund your wallet with some ADA. Refer to the "',(0,o.kt)("a",{parentName:"p",href:"../../get-help"},"Get Help"),'" section at the end of this document if you require assistance or encounter trouble at this stage.'),(0,o.kt)("p",null,"Next, we will configure MetaMask to connect to the Milkomeda C1 sidechain."))}p.isMDXComponent=!0}}]);