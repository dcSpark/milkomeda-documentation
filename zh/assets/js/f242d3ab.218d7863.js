"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[2930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||a;return n?o.createElement(g,l(l({ref:t},m),{},{components:n})):o.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var o=n(7462),r=(n(7294),n(3905)),a=n(6783);const l={sidebar_position:2},i="\u8bbe\u7f6eMetaMask",s={unversionedId:"algorand/for-developers/configuring-metamask",id:"algorand/for-developers/configuring-metamask",title:"\u8bbe\u7f6eMetaMask",description:"In the previous step we showed you how to get the ALGO testnet to start interacting with Milkomeda A1 Rollup Testnet.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/algorand/for-developers/configuring-metamask.mdx",sourceDirName:"algorand/for-developers",slug:"/algorand/for-developers/configuring-metamask",permalink:"/zh/algorand/for-developers/configuring-metamask",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"algorand",previous:{title:"\u83b7\u53d6\u6d4b\u8bd5ALGO",permalink:"/zh/algorand/for-developers/obtaining-test-algo"},next:{title:"\u5305\u88c5\u8d44\u4ea7",permalink:"/zh/algorand/for-developers/wrapping-assets"}},p={},m=[],c={toc:m};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8bbe\u7f6emetamask"},"\u8bbe\u7f6eMetaMask"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In the previous step we showed you how to get the ALGO testnet to start interacting with Milkomeda A1 Rollup Testnet.\nFrom now on, documentation will be focused on mainnet settings. Nevertheless, we recommend that you first interact with Milkomeda A1 Rollup using testnet funds. For this purpose change the corresponding RPC settings to Testnet.\nPlease keep in mind, that all the steps described for mainnet settings are the same as the ones for testnet.")),(0,r.kt)("p",null,"Now that we have an Algorand wallet and some ALGOs, we need an address on the Milkomeda Algorand A1 Rollup where we can receive our MilkALGO. We recommend using MetaMask for this step. We recommend using MetaMask for this step."),(0,r.kt)("p",null,"First, install ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"},"MetaMask for Chrome"),", then click the Chrome Extensions icon ",(0,r.kt)("img",{src:a.Z,alt:"",className:"img-icon"})," and select MetaMask. \u5728MetaMask\u7a97\u53e3\uff0c\u70b9\u51fb\u300c",(0,r.kt)("strong",{parentName:"p"},"\u5f00\u59cb"),"\u300d\u7136\u540e,\u300c",(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa\u4e00\u4e2a\u94b1\u5305"),"\u300d\u3002 \u5728MetaMask\u7a97\u53e3\uff0c\u70b9\u51fb\u300c",(0,r.kt)("strong",{parentName:"p"},"\u5f00\u59cb"),"\u300d\u7136\u540e,\u300c",(0,r.kt)("strong",{parentName:"p"},"\u521b\u5efa\u4e00\u4e2a\u94b1\u5305"),"\u300d\u3002 \u8bbe\u7f6e\u94b1\u5305\u5bc6\u7801\uff0c\u5e76\u70b9\u51fb\u5b8c\u6210\u5176\u4f59\u7684\u8bbe\u7f6e\u5c4f\u5e55\u3002 When you're finished, you will have a new, empty wallet, as shown below. When you're finished, you will have a new, empty wallet, as shown below. Select the network dropdown in the top right corner of the MetaMask screen."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1035).Z,width:"716",height:"1048"})),(0,r.kt)("p",null,"\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\uff0c\u9009\u62e9\u300c",(0,r.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u7f51\u7edc"),"\u300d\uff0c\u5e76\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Network Name: Milkomeda Algorand mainnet"),(0,r.kt)("p",null," New RPC URL: https://rpc-mainnet-algorand-rollup.a1.milkomeda.com "),(0,r.kt)("p",{parentName:"blockquote"},"Chain ID: 2002"),(0,r.kt)("p",{parentName:"blockquote"},"Currency Symbol (Optional): milkAlgo"),(0,r.kt)("p",null," ","Block Explorer URL (Optional): https://explorer-mainnet-algorand-rollup.a1.milkomeda.com")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"To interact with Milkomeda A1 Testnet, use following network details:")),(0,r.kt)("p",{parentName:"admonition"},"\u7f51\u7edc\u540d\u79f0: Milkomeda Algorand Testnet"),(0,r.kt)("p",null," New RPC URL: https://rpc-devnet-algorand-rollup.a1.milkomeda.com "),(0,r.kt)("p",null,"Chain ID: 200202"),(0,r.kt)("p",null,"Currency Symbol (Optional): milkTALGO"),(0,r.kt)("p",null," ","Block Explorer URL (Optional): https://testnet-algorand-rollup.a1.milkomeda.com"," ")),(0,r.kt)("p",null,"Click \u201c",(0,r.kt)("strong",{parentName:"p"},"Save"),"\u201d, and you will now see ",(0,r.kt)("strong",{parentName:"p"},"Milkomeda Algorand")," in the network dropdown list. Copy your Milkomeda Algorand wallet address from MetaMask to the clipboard by clicking on the account name, as shown. Copy your Milkomeda Algorand wallet address from MetaMask to the clipboard by clicking on the account name, as shown."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2804).Z,width:"712",height:"970"})),(0,r.kt)("p",null,"Next we will go to the Milkomeda A1 Bridge dApp and send our ALGO to the Bridge to be wrapped."))}d.isMDXComponent=!0},6783:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABM0lEQVRYCe2WzwrCMAzGfVMPXnbwIAo7+AcFRVFQFEUfTX2QnSvfIDA7s2RNhR0aGFlLm/z2pQ3ruQ5Zr0MsLsFw1UjKRFemKAp3uT1cf5CVHmOrBZdpuz+WIIDBc77erSzht4kgqt5KE6xMFYLe/w7zfL3dJJ99lYSSSx77sF9rojLjfBoEQqAA0poIQ0EtPsFw6kVTBv3E7ylcUm4+GgwFQoe1QqFjN3Vq8QATDDwCcV+vnW/q1K1gAGS96oDmrBVMZ5QByO5wMpUJJTKdGRzaxWpjguDK4s+LZZIOpuaG+Um5cTAMIEhy+CYoLrk/HwxDIBQQY05FWiN5ESYbjmpJoMIvmy/XtbVoBVoTYfA/4vcWDsYvFfZF/Z/RflWMdaIyMZJoYyQYTqmkTFKGU4Cb/wAg3RKRipGFkgAAAABJRU5ErkJggg=="},1035:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/algorand-eth-803116cf495d4c41186b3bb0401cd582.png"},2804:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/algorand-milk-ddc90e7bb96808e63eae16c1176d00da.png"}}]);