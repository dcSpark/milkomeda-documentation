"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[549],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6690:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Configuring Flint Wallet",sidebar_position:1},s="Configuring Flint Wallet",c={unversionedId:"getting-started/for-developers/configuring-flint-for-devs",id:"getting-started/for-developers/configuring-flint-for-devs",title:"Configuring Flint Wallet",description:'Flint Wallet is a Chrome extension that serves as a go-to light wallet for DeFi and NFTs. The current version of Flint allows users to create a Cardano Testnet wallet and enable "Milkomeda mode" to send transactions to the Milkomeda C1 sidechain.',source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/getting-started/for-developers/configuring-flint-for-devs.md",sourceDirName:"getting-started/for-developers",slug:"/getting-started/for-developers/configuring-flint-for-devs",permalink:"/milkomeda-documentation/ja/docs/getting-started/for-developers/configuring-flint-for-devs",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Configuring Flint Wallet",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"For Developers",permalink:"/milkomeda-documentation/ja/docs/getting-started/for-developers/"},next:{title:"Obtaining Test ADA",permalink:"/milkomeda-documentation/ja/docs/getting-started/for-developers/obtaining-test-ada"}},p={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-flint-wallet"},"Configuring Flint Wallet"),(0,a.kt)("p",null,'Flint Wallet is a Chrome extension that serves as a go-to light wallet for DeFi and NFTs. The current version of Flint allows users to create a Cardano Testnet wallet and enable "Milkomeda mode" to send transactions to the Milkomeda C1 sidechain.'),(0,a.kt)("p",null,"Install Flint Wallet by visiting the following link while using Chrome browser and clicking the \u201cAdd to Chrome\u201d button: ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/flint/hnhobjmcibchnmglfbldbfabcgaknlkj"},"Install Flint Wallet"),"\u200b"),(0,a.kt)("p",null,"After installing, click the Extensions icon"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2FRxW8fEe4NKUPSEPd9u9w%2Fimage.png?alt=media&token=444bd588-0cf2-4874-9c78-88451f4317f3",alt:null})),(0,a.kt)("p",null,"at the top right of the Chrome window and select ",(0,a.kt)("strong",{parentName:"p"},"Flint Wallet"),". Within the Flint window, proceed past the initial warning screen, click \u201c",(0,a.kt)("strong",{parentName:"p"},"Let\u2019s Begin"),"\u201d, choose your language, click \u201c",(0,a.kt)("strong",{parentName:"p"},"I agree"),"\u201d, and when you arrive at the screen shown below, click the \u201c",(0,a.kt)("strong",{parentName:"p"},"Testnet"),"\u201d button."),(0,a.kt)("p",null,'To use real ADA on the mainnet version of Milkomeda C1, click "Mainnet" to create a mainnet Cardano wallet instead.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2FLpSuY9HO931ZS5142L6B%2Fimage.png?alt=media&token=d52acc47-8804-4932-b4aa-8f35945af823",alt:null})),(0,a.kt)("p",null,"Next, click \u201c",(0,a.kt)("strong",{parentName:"p"},"Confirm"),"\u201d, \u201c",(0,a.kt)("strong",{parentName:"p"},"Create a new wallet"),"\u201d, and write down a copy of your recovery phrase. Confirm the recovery phrase at the next screen, set a wallet password, and click \u201c",(0,a.kt)("strong",{parentName:"p"},"Create my wallet"),"\u201d. For now you can select \u201c",(0,a.kt)("strong",{parentName:"p"},"Skip"),"\u201d at the App Passcode screen, and then click \u201c",(0,a.kt)("strong",{parentName:"p"},"Finish"),"\u201d. You should now have a Cardano Testnet wallet, as shown:"),(0,a.kt)("p",null,"\u200b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://219607439-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FiSJiJU03fzOYGsKJ0KBc%2Fuploads%2FzQgT1d9AKH19CCuOSyq7%2Fimage.png?alt=media&token=5d0e19b2-c12f-4847-8ccd-3ab0f2dd43d3",alt:null})),(0,a.kt)("p",null,"\u200b"),(0,a.kt)("p",null,"Next, we will access the Cardano Testnet faucet to obtain some test ADA."))}f.isMDXComponent=!0}}]);