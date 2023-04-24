"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[8690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,u=f["".concat(s,".").concat(m)]||f[m]||d[m]||a;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=n(6783);const i={sidebar_label:"Configuring Flint Wallet",sidebar_position:1},l="Configuring Flint Wallet",s={unversionedId:"cardano/for-developers/configuring-flint-for-devs",id:"cardano/for-developers/configuring-flint-for-devs",title:"Configuring Flint Wallet",description:'Flint Wallet is a Chrome extension that serves as a go-to light wallet for DeFi and NFTs. The current version of Flint allows users to create a Cardano Testnet wallet and enable "Milkomeda mode" to send transactions to the Milkomeda C1 sidechain.',source:"@site/docs/cardano/for-developers/configuring-flint-for-devs.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/configuring-flint-for-devs",permalink:"/milkomeda-documentation/cardano/for-developers/configuring-flint-for-devs",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Configuring Flint Wallet",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Milkomeda C1 Overview",permalink:"/milkomeda-documentation/cardano/for-developers/overview"},next:{title:"Obtaining Test ADA",permalink:"/milkomeda-documentation/cardano/for-developers/obtaining-test-ada"}},c={},p=[],d={toc:p};function f(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-flint-wallet"},"Configuring Flint Wallet"),(0,o.kt)("p",null,'Flint Wallet is a Chrome extension that serves as a go-to light wallet for DeFi and NFTs. The current version of Flint allows users to create a Cardano Testnet wallet and enable "Milkomeda mode" to send transactions to the Milkomeda C1 sidechain.'),(0,o.kt)("p",null,"Install Flint Wallet by visiting the following link while using Chrome browser and clicking the \u201cAdd to Chrome\u201d button: ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/flint/hnhobjmcibchnmglfbldbfabcgaknlkj"},"Install Flint Wallet"),"\u200b"),(0,o.kt)("p",null,"After installing, click the Extensions icon ",(0,o.kt)("img",{src:a.Z,className:"img-icon"})," at the top right of the Chrome window and select ",(0,o.kt)("strong",{parentName:"p"},"Flint Wallet"),". Within the Flint window, proceed past the initial warning screen, click \u201c",(0,o.kt)("strong",{parentName:"p"},"Let\u2019s Begin"),"\u201d, choose your language, click \u201c",(0,o.kt)("strong",{parentName:"p"},"I agree"),"\u201d, and when you arrive at the screen shown below, click the \u201c",(0,o.kt)("strong",{parentName:"p"},"Testnet"),"\u201d button."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'To use real ADA on the mainnet version of Milkomeda C1, click "Mainnet" to create a mainnet Cardano wallet instead.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select tesnet network",src:n(2971).Z,width:"450",height:"360"})),(0,o.kt)("p",null,"Next, click \u201c",(0,o.kt)("strong",{parentName:"p"},"Confirm"),"\u201d, \u201c",(0,o.kt)("strong",{parentName:"p"},"Create a new wallet"),"\u201d, and write down a copy of your recovery phrase."),(0,o.kt)("p",null,"Confirm the recovery phrase at the next screen, set a wallet password, and click \u201c",(0,o.kt)("strong",{parentName:"p"},"Create my wallet"),"\u201d. For now you can select \u201c",(0,o.kt)("strong",{parentName:"p"},"Skip"),"\u201d at the App Passcode screen, and then click \u201c",(0,o.kt)("strong",{parentName:"p"},"Finish"),"\u201d. You should now have a Cardano Testnet wallet, as shown:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flint home screen",src:n(7284).Z,width:"440",height:"400"})),(0,o.kt)("p",null,"Next, we will access the Cardano Testnet faucet to obtain some test ADA."))}f.isMDXComponent=!0},6783:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABM0lEQVRYCe2WzwrCMAzGfVMPXnbwIAo7+AcFRVFQFEUfTX2QnSvfIDA7s2RNhR0aGFlLm/z2pQ3ruQ5Zr0MsLsFw1UjKRFemKAp3uT1cf5CVHmOrBZdpuz+WIIDBc77erSzht4kgqt5KE6xMFYLe/w7zfL3dJJ99lYSSSx77sF9rojLjfBoEQqAA0poIQ0EtPsFw6kVTBv3E7ylcUm4+GgwFQoe1QqFjN3Vq8QATDDwCcV+vnW/q1K1gAGS96oDmrBVMZ5QByO5wMpUJJTKdGRzaxWpjguDK4s+LZZIOpuaG+Um5cTAMIEhy+CYoLrk/HwxDIBQQY05FWiN5ESYbjmpJoMIvmy/XtbVoBVoTYfA/4vcWDsYvFfZF/Z/RflWMdaIyMZJoYyQYTqmkTFKGU4Cb/wAg3RKRipGFkgAAAABJRU5ErkJggg=="},7284:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/flint-home-screen-f5e25d8ac0667843ae7b1570ba68103c.png"},2971:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/flint-select-testnet-0e3ffe8363f9ac6573dee6217ebeb544.png"}}]);