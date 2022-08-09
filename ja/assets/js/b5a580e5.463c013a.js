"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Configuring Flint Wallet",l={unversionedId:"cardano/for-end-users/configuring-flint-wallet",id:"cardano/for-end-users/configuring-flint-wallet",title:"Configuring Flint Wallet",description:"Flint Wallet is a Chrome extension that serves as a convenient go-to light wallet for DeFi and NFTs. The current",source:"@site/docs/cardano/for-end-users/configuring-flint-wallet.mdx",sourceDirName:"cardano/for-end-users",slug:"/cardano/for-end-users/configuring-flint-wallet",permalink:"/ja/cardano/for-end-users/configuring-flint-wallet",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"For End Users",permalink:"/ja/cardano/for-end-users/"},next:{title:"Configuring Metamask",permalink:"/ja/cardano/for-end-users/configuring-metamask"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-flint-wallet"},"Configuring Flint Wallet"),(0,a.kt)("p",null,'Flint Wallet is a Chrome extension that serves as a convenient go-to light wallet for DeFi and NFTs. The current\nversion of Flint allows users to enable "Milkomeda mode" to send transactions to the Milkomeda C1 sidechain. Install\nFlint Wallet by visiting the following link while using Chrome browser and clicking the \u201cAdd to Chrome\u201d button:\n',(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/flint/hnhobjmcibchnmglfbldbfabcgaknlkj"},"Install Flint Wallet")),(0,a.kt)("p",null,'After installing, click the "puzzle piece" icon ',(0,a.kt)("img",{src:"/img/puzzle-icon.png",className:"img-icon"}),"\nat the top right of the Chrome window to access your extensions. Select ",(0,a.kt)("strong",{parentName:"p"},"Flint"),". Within the Flint Wallet window, proceed past the initial warning screen, click \u201c",(0,a.kt)("strong",{parentName:"p"},"Let\u2019s Begin"),"\u201d, choose your language, click \u201c",(0,a.kt)("strong",{parentName:"p"},"I agree"),"\u201d, and when you arrive at the screen shown below, click the \u201c",(0,a.kt)("strong",{parentName:"p"},"Mainnet"),"\u201d button."),(0,a.kt)("img",{src:"/img/pick-a-network.png",alt:"Pick a network",className:"img-card"}),(0,a.kt)("p",null,"Next, click \u201c",(0,a.kt)("strong",{parentName:"p"},"Confirm"),"\u201d, \u201c",(0,a.kt)("strong",{parentName:"p"},"Create a new wallet"),"\u201d, and write down a copy of your recovery phrase."),(0,a.kt)("p",null,"Confirm the recovery phrase at the next screen, set a wallet password, and click \u201c",(0,a.kt)("strong",{parentName:"p"},"Create my wallet"),"\u201d. For now you can select \u201c",(0,a.kt)("strong",{parentName:"p"},"Skip"),"\u201d at the App Passcode screen, and then click \u201c",(0,a.kt)("strong",{parentName:"p"},"Finish"),"\u201d. You should now have a Cardano wallet, as shown:"),(0,a.kt)("img",{src:"/img/create-cardano-wallet.png",alt:"create flint wallet",className:"img-card"}),(0,a.kt)("p",null,'Note that to proceed further you will need to fund your wallet with some ADA. Refer to the "',(0,a.kt)("a",{parentName:"p",href:"../../get-help"},"Get Help"),'" section at the end of this document if you require assistance or encounter trouble at this stage.'),(0,a.kt)("p",null,"Next, we will configure MetaMask to connect to the Milkomeda C1 sidechain."))}u.isMDXComponent=!0}}]);