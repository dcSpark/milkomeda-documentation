"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[2951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=d(n),p=o,m=g["".concat(s,".").concat(p)]||g[p]||u[p]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a=n.p+"assets/images/myalgowallet-7220db4a828f3c112bd044a1c337e431.png",l=n.p+"assets/images/mnemonicphrase-957edb74d24853c6d5d359a47d0ff2f3.png";var i=n(5014),s=n(6559);const d={sidebar_position:1},c="Configuring Algorand Wallet and obtaining Test ALGO",u={unversionedId:"algorand/for-end-users/obtaining-test-algo",id:"algorand/for-end-users/obtaining-test-algo",title:"Configuring Algorand Wallet and obtaining Test ALGO",description:"In order to interact with the Milkomeda Algorand Rollup Bridge, you need to configure a native Algorand wallet. We recommend using MyAlgo wallet to setup a testnet wallet compatible with the Milkomeda A1 Bridge.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/algorand/for-end-users/obtaining-test-algo.mdx",sourceDirName:"algorand/for-end-users",slug:"/algorand/for-end-users/obtaining-test-algo",permalink:"/ko/algorand/for-end-users/obtaining-test-algo",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"algorand",previous:{title:"For End-users",permalink:"/ko/algorand/for-end-users/"},next:{title:"\uba54\ud0c0\ub9c8\uc2a4\ud06c \uc124\uce58",permalink:"/ko/algorand/for-end-users/configuring-metamask"}},g={},p=[{value:"Configuring Your MyAlgo Wallet",id:"configuring-your-myalgo-wallet",level:3},{value:"Obtaining Test ALGO",id:"obtaining-test-algo",level:3}],m={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-algorand-wallet-and-obtaining-test-algo"},"Configuring Algorand Wallet and obtaining Test ALGO"),(0,o.kt)("p",null,"In order to interact with the ",(0,o.kt)("strong",{parentName:"p"},"Milkomeda Algorand Rollup Bridge"),", you need to configure a native Algorand wallet. We recommend using MyAlgo wallet to setup a testnet wallet compatible with the Milkomeda A1 Bridge."),(0,o.kt)("h3",{id:"configuring-your-myalgo-wallet"},"Configuring Your MyAlgo Wallet"),(0,o.kt)("p",null,"First, go to ",(0,o.kt)("a",{parentName:"p",href:"https://wallet.myalgo.com/new-account"},"https://wallet.myalgo.com/new-account"),". After accepting the ",(0,o.kt)("em",{parentName:"p"},"Terms of Service")," click ",(0,o.kt)("em",{parentName:"p"},"Continue")," to start configuring your wallet. In the next step you will be asked to create a password. Then you should ",(0,o.kt)("strong",{parentName:"p"},"create a new randomly generated account"),"."),(0,o.kt)("img",{src:a,className:"img-full",alt:""}),(0,o.kt)("p",null,"In the next step you will be asked to save the Mnemonic Phrase."),(0,o.kt)("img",{src:l,className:"img-full",alt:""}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Remember to take note of the following Mnemonic Phrase words in the correct order. They are the recovery phrase for your new account.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Do not share these words with anyone! These words can be used to steal all your funds.")),(0,o.kt)("p",null,"Once you've successfully verified the Mnemonic Phrase your MyAlgo wallet has been configured and all that's left to do is to give your wallet a name of your choosing."),(0,o.kt)("h3",{id:"obtaining-test-algo"},"Obtaining Test ALGO"),(0,o.kt)("p",null,"To interact with the Bridge dApp you need to have the testnet ALGO token, ALGO. To start we recommend getting some testnet ALGO from the official testnet dispenser ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.algoexplorer.io/dispenser"},"https://testnet.algoexplorer.io/dispenser"),"."),(0,o.kt)("img",{src:i.Z,className:"img-full",alt:""}),(0,o.kt)("p",null,"Enter your newly created Algorand address and after waiting a few minutes (usually 2 minutes or less), you should be able to see some tALGO in your Algorand Testnet wallet."),(0,o.kt)("img",{src:s.Z,className:"img-full",alt:""}),(0,o.kt)("p",null,"Next we will set up ",(0,o.kt)("strong",{parentName:"p"},"MetaMask Wallet")," and get an address on the ",(0,o.kt)("strong",{parentName:"p"},"Milkomeda A1 Algorand Rollup.")))}f.isMDXComponent=!0},5014:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-dispenser-78b7f519ad79c1444ad3744c4121add2.png"},6559:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-wallet-dashboard-94941b682b3ff2f12cf1dc329759897d.png"}}]);