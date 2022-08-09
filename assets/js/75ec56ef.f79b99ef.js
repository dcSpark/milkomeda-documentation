"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},l="Configuring MetaMask",i={unversionedId:"algorand/for-developers/configuring-metamask",id:"algorand/for-developers/configuring-metamask",title:"Configuring MetaMask",description:"Now that we have an Algorand testnet wallet and some Test ALGO, we need an address on the Milkomeda Algorand Testnet Rollup where we can receive our MilkTALGO. For now, we recommend using MetaMask for this step.",source:"@site/docs/algorand/for-developers/configuring-metamask.md",sourceDirName:"algorand/for-developers",slug:"/algorand/for-developers/configuring-metamask",permalink:"/milkomeda-documentation/algorand/for-developers/configuring-metamask",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Obtaining Test ALGO",permalink:"/milkomeda-documentation/algorand/for-developers/obtaining-test-algo"},next:{title:"Wrapping Assets",permalink:"/milkomeda-documentation/algorand/for-developers/wrapping-assets"}},s={},p=[],c={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-metamask"},"Configuring MetaMask"),(0,o.kt)("p",null,"Now that we have an Algorand testnet wallet and some Test ALGO, we need an address on the Milkomeda Algorand Testnet Rollup where we can receive our MilkTALGO. For now, we recommend using MetaMask for this step."),(0,o.kt)("p",null,"First, install ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"},"MetaMask for Chrome"),". Then, click the Chrome Extensions icon ",(0,o.kt)("img",{src:"/img/puzzle-icon",alt:"",className:"img-icon"}),' and select MetaMask. Within the MetaMask window, click "',(0,o.kt)("strong",{parentName:"p"},"Get Started"),'" and then "',(0,o.kt)("strong",{parentName:"p"},"Create a Wallet"),'". Set a wallet password and click through the rest of the setup screens. When finished, you should have a new empty wallet, as shown below. Select the network dropdown at the top right of the MetaMask screen.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1035).Z,width:"716",height:"1048"})),(0,o.kt)("p",null,"From the dropdown list, select \u201c",(0,o.kt)("strong",{parentName:"p"},"Add Network"),"\u201d and enter the following:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Network Name: Milkomeda Algorand Testnet"),(0,o.kt)("p",{parentName:"blockquote"},"New RPC URL: ",(0,o.kt)("a",{parentName:"p",href:"https://rpc-devnet-algorand-rollup.a1.milkomeda.com"},"https://rpc-devnet-algorand-rollup.a1.milkomeda.com")),(0,o.kt)("p",{parentName:"blockquote"},"Chain ID: 200202"),(0,o.kt)("p",{parentName:"blockquote"},"Currency Symbol (Optional): milkTALGO"),(0,o.kt)("p",{parentName:"blockquote"},"Block Explorer URL (Optional): ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-algorand-rollup.a1.milkomeda.com/"},"https://testnet-algorand-rollup.a1.milkomeda.com/"))),(0,o.kt)("p",null,"Click \u201c",(0,o.kt)("strong",{parentName:"p"},"Save"),'\u201d, and you should now see "',(0,o.kt)("strong",{parentName:"p"},"Milkomeda Algorand Testnet"),'" in the network dropdown. Copy your Milkomeda Algorand Testnet wallet address to the clipboard by clicking on the account name, as shown.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2804).Z,width:"712",height:"970"})),(0,o.kt)("p",null,"Next we will go back to Milkomeda A1 bridge and send our test ALGO to be wrapped."))}d.isMDXComponent=!0},1035:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-eth-803116cf495d4c41186b3bb0401cd582.png"},2804:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-milk-ddc90e7bb96808e63eae16c1176d00da.png"}}]);