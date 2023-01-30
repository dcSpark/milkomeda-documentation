"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||a;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(7462),r=(n(7294),n(3905)),a=n(6783);const i={sidebar_position:2},l="\uba54\ud0c0\ub9c8\uc2a4\ud06c \uc124\uce58",s={unversionedId:"algorand/for-end-users/configuring-metamask",id:"algorand/for-end-users/configuring-metamask",title:"\uba54\ud0c0\ub9c8\uc2a4\ud06c \uc124\uce58",description:"In the previous step we showed you how to get the ALGO testnet to start interacting with Milkomeda A1 Rollup Testnet. From now on, documentation will be focused on mainnet settings. Nevertheless, we recommend that you first interact with Milkomeda A1 Rollup using testnet funds. For this purpose change the corresponding RPC settings to Testnet. Please keep in mind, that all the steps described for mainnet settings are the same as the ones for testnet.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/algorand/for-end-users/configuring-metamask.mdx",sourceDirName:"algorand/for-end-users",slug:"/algorand/for-end-users/configuring-metamask",permalink:"/milkomeda-documentation/ko/algorand/for-end-users/configuring-metamask",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuring Algorand Wallet and obtaining Test ALGO",permalink:"/milkomeda-documentation/ko/algorand/for-end-users/obtaining-test-algo"},next:{title:"\uc790\uc0b0 \ub7a9\ud551",permalink:"/milkomeda-documentation/ko/algorand/for-end-users/wrapping-assets"}},p={},d=[],m={toc:d};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uba54\ud0c0\ub9c8\uc2a4\ud06c-\uc124\uce58"},"\uba54\ud0c0\ub9c8\uc2a4\ud06c \uc124\uce58"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In the previous step we showed you how to get the ALGO testnet to start interacting with Milkomeda A1 Rollup Testnet. From now on, documentation will be focused on mainnet settings. Nevertheless, we recommend that you first interact with Milkomeda A1 Rollup using testnet funds. For this purpose change the corresponding RPC settings to Testnet. Please keep in mind, that all the steps described for mainnet settings are the same as the ones for testnet.")),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,"Now that we have an Algorand wallet and some ALGOs, we need an address on the Milkomeda Algorand A1 Rollup where we can receive our MilkALGO. We recommend using MetaMask for this step."),(0,r.kt)("p",null,"First, install ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"},"MetaMask for Chrome"),", then click the Chrome Extensions icon ",(0,r.kt)("img",{src:a.Z,alt:"",className:"img-icon"})," and select MetaMask. MetaMask \ucc3d\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"Get Started"),"(\uc2dc\uc791)\ub97c \ud074\ub9ad\ud55c \ud6c4 ",(0,r.kt)("strong",{parentName:"p"},"Create a Wallet"),"(\uc6d4\ub81b \ub9cc\ub4e4\uae30)\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4. \uc6d4\ub81b \ube44\ubc00\ubc88\ud638\ub97c \uc124\uc815\ud569\ub2c8\ub2e4. \uc774 \ud6c4\uc5d0 \uc124\uc815 \ud654\uba74\uc774 \ud45c\uc2dc\ub418\ubbc0\ub85c \ud074\ub9ad\ud558\uc5ec \uacc4\uc18d \uc9c4\ud589\ud569\ub2c8\ub2e4. When you're finished, you will have a new, empty wallet, as shown below. Select the network dropdown in the top right corner of the MetaMask screen."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1035).Z,width:"716",height:"1048"})),(0,r.kt)("p",null,"\ub4dc\ub86d\ub2e4\uc6b4 \ubaa9\ub85d\uc5d0\uc11c ",(0,r.kt)("strong",{parentName:"p"},"Add Network"),"(\ub124\ud2b8\uc6cc\ud06c \ucd94\uac00)\ub97c \uc120\ud0dd\ud558\uace0 \ub2e4\uc74c \ub0b4\uc6a9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Network Name: Milkomeda Algorand mainnet"),(0,r.kt)("p",null," New RPC URL: https://rpc-mainnet-algorand-rollup.a1.milkomeda.com "),(0,r.kt)("p",{parentName:"blockquote"},"Chain ID: 2002"),(0,r.kt)("p",{parentName:"blockquote"},"Currency Symbol (Optional): milkAlgo"),(0,r.kt)("p",null," ","Block Explorer URL (Optional): https://explorer-mainnet-algorand-rollup.a1.milkomeda.com")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"To interact with Milkomeda A1 Testnet, use following network details:")),(0,r.kt)("p",{parentName:"admonition"},"Network Name: Milkomeda Algorand Testnet"),(0,r.kt)("p",null," New RPC URL: https://rpc-devnet-algorand-rollup.a1.milkomeda.com "),(0,r.kt)("p",null,"Chain ID: 200202"),(0,r.kt)("p",null,"Currency Symbol (Optional): milkTALGO"),(0,r.kt)("p",null," ","Block Explorer URL (Optional): https://testnet-algorand-rollup.a1.milkomeda.com"," ")),(0,r.kt)("p",null,"Click \u201c",(0,r.kt)("strong",{parentName:"p"},"Save"),"\u201d, and you will now see ",(0,r.kt)("strong",{parentName:"p"},"Milkomeda Algorand")," in the network dropdown list. Copy your Milkomeda Algorand wallet address from MetaMask to the clipboard by clicking on the account name, as shown."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2804).Z,width:"712",height:"970"})),(0,r.kt)("p",null,"Next we will go to the Milkomeda A1 Bridge dApp and send our ALGO to the Bridge to be wrapped."))}c.isMDXComponent=!0},6783:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABM0lEQVRYCe2WzwrCMAzGfVMPXnbwIAo7+AcFRVFQFEUfTX2QnSvfIDA7s2RNhR0aGFlLm/z2pQ3ruQ5Zr0MsLsFw1UjKRFemKAp3uT1cf5CVHmOrBZdpuz+WIIDBc77erSzht4kgqt5KE6xMFYLe/w7zfL3dJJ99lYSSSx77sF9rojLjfBoEQqAA0poIQ0EtPsFw6kVTBv3E7ylcUm4+GgwFQoe1QqFjN3Vq8QATDDwCcV+vnW/q1K1gAGS96oDmrBVMZ5QByO5wMpUJJTKdGRzaxWpjguDK4s+LZZIOpuaG+Um5cTAMIEhy+CYoLrk/HwxDIBQQY05FWiN5ESYbjmpJoMIvmy/XtbVoBVoTYfA/4vcWDsYvFfZF/Z/RflWMdaIyMZJoYyQYTqmkTFKGU4Cb/wAg3RKRipGFkgAAAABJRU5ErkJggg=="},1035:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/algorand-eth-803116cf495d4c41186b3bb0401cd582.png"},2804:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/algorand-milk-ddc90e7bb96808e63eae16c1176d00da.png"}}]);