"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[2530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7060:(e,t,n)=>{n.d(t,{u:()=>r});const a={c1:{chainId:`0x${Number(2001).toString(16)}`,chainName:"Milkomeda C1 Mainnet",nativeCurrency:{name:"milkADA",symbol:"mADA",decimals:18},rpcUrls:["https://rpc-mainnet-cardano-evm.c1.milkomeda.com"],blockExplorerUrls:["https://explorer-mainnet-cardano-evm.c1.milkomeda.com"]},c1_testnet:{chainId:`0x${Number(200101).toString(16)}`,chainName:"Milkomeda C1 Testnet",nativeCurrency:{name:"mTADA",symbol:"mTADA",decimals:18},rpcUrls:["https://rpc-devnet-cardano-evm.c1.milkomeda.com"],blockExplorerUrls:["https://explorer-devnet-cardano-evm.c1.milkomeda.com"]},a1:{chainId:`0x${Number(2002).toString(16)}`,chainName:"Milkomeda A1 Mainnet",nativeCurrency:{name:"mALGO",symbol:"mALGO",decimals:18},rpcUrls:["https://rpc-mainnet-algorand-rollup.a1.milkomeda.com"],blockExplorerUrls:["https://explorer-mainnet-algorand-rollup.a1.milkomeda.com"]},a1_testnet:{chainId:`0x${Number(200202).toString(16)}`,chainName:"Milkomeda A1 Testnet",nativeCurrency:{name:"mTALGO",symbol:"mTALGO",decimals:18},rpcUrls:["https://rpc-devnet-algorand-rollup.a1.milkomeda.com"],blockExplorerUrls:["https://testnet-algorand-rollup.a1.milkomeda.com"]}},r=async e=>{console.log(a[e]);try{if(!window.ethereum)throw new Error("No crypto wallet found");await window.ethereum.request({method:"wallet_addEthereumChain",params:[{...a[e]}]})}catch(t){console.log(t)}}},3034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(6783),l=n(7060);const i={sidebar_position:2},s="Configuring MetaMask",m={unversionedId:"algorand/for-end-users/configuring-metamask",id:"algorand/for-end-users/configuring-metamask",title:"Configuring MetaMask",description:"Milkomeda A1's validators will be shutting down at the end of May 2024. We urge anyone with funds on A1 to transfer them within the next six months to ensure their safety. Read more here",source:"@site/docs/algorand/for-end-users/configuring-metamask.mdx",sourceDirName:"algorand/for-end-users",slug:"/algorand/for-end-users/configuring-metamask",permalink:"/algorand/for-end-users/configuring-metamask",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"algorand",previous:{title:"Configuring Algorand Wallet",permalink:"/algorand/for-end-users/obtaining-test-algo"},next:{title:"Wrapping Assets",permalink:"/algorand/for-end-users/wrapping-assets"}},c={},p=[{value:"Mainnet",id:"mainnet",level:3}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-metamask"},"Configuring MetaMask"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Milkomeda A1's validators will be shutting down at the end of May 2024. We urge anyone with funds on A1 to transfer them within the next six months to ensure their safety. ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/milkomeda_com/status/1730385308355588553?s=61&t=xg8fF6YJdZy52Uq_UwTGjA"},"Read more here"))),(0,r.kt)("p",null,"Now that we have an Algorand wallet and some ALGOs, ",(0,r.kt)("strong",{parentName:"p"},"we need an address on the Milkomeda Algorand A1 Rollup Mainnet")," where we can receive our mALGO. We recommend using MetaMask for this step."),(0,r.kt)("p",null,"First, install ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"},"MetaMask for Chrome"),", then click the Chrome Extensions icon ",(0,r.kt)("img",{src:o.Z,alt:"",className:"img-icon"}),' and select MetaMask. Within the MetaMask window, click "',(0,r.kt)("strong",{parentName:"p"},"Get Started"),'" and then "',(0,r.kt)("strong",{parentName:"p"},"Create a Wallet"),"\". Set a wallet password and click through the rest of the setup screens. When you're finished, you will have a new, empty wallet, as shown below. Select the network dropdown in the top right corner of the MetaMask screen."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1035).Z,width:"716",height:"1048"})),(0,r.kt)("p",null,"From the dropdown list, select \u201c",(0,r.kt)("strong",{parentName:"p"},"Add Network"),"\u201d and enter the following:"),(0,r.kt)("h3",{id:"mainnet"},"Mainnet"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Network Name:")," Milkomeda Algorand (A1)"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"HTTPS RPC URL:")," ",(0,r.kt)("a",{parentName:"p",href:"https://rpc-mainnet-algorand-rollup.a1.milkomeda.com"},"https://rpc-mainnet-algorand-rollup.a1.milkomeda.com")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"WebSocket RPC URL:")," wss://rpc-mainnet-algorand-rollup.a1.milkomeda.com/ws"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Chain ID:")," 2002"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Currency Symbol:")," mALGO"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Block Explorer URL:")," ",(0,r.kt)("a",{parentName:"p",href:"https://explorer-mainnet-algorand-rollup.a1.milkomeda.com"},"https://explorer-mainnet-algorand-rollup.a1.milkomeda.com")),(0,r.kt)("button",{onClick:()=>(0,l.u)("a1"),className:"button button--secondary"},"Add A1 Mainnet to Metamask")),(0,r.kt)("p",null,"Click \u201c",(0,r.kt)("strong",{parentName:"p"},"Save"),"\u201d, and you will now see ",(0,r.kt)("strong",{parentName:"p"},"Milkomeda Algorand")," in the network dropdown list. Copy your Milkomeda Algorand Mainnet wallet address from MetaMask to the clipboard by clicking on the account name, as shown."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2804).Z,width:"712",height:"970"})),(0,r.kt)("p",null,"Next we will go to the Milkomeda A1 Bridge dApp and send our ALGO to the Bridge to be wrapped."))}u.isMDXComponent=!0},6783:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABM0lEQVRYCe2WzwrCMAzGfVMPXnbwIAo7+AcFRVFQFEUfTX2QnSvfIDA7s2RNhR0aGFlLm/z2pQ3ruQ5Zr0MsLsFw1UjKRFemKAp3uT1cf5CVHmOrBZdpuz+WIIDBc77erSzht4kgqt5KE6xMFYLe/w7zfL3dJJ99lYSSSx77sF9rojLjfBoEQqAA0poIQ0EtPsFw6kVTBv3E7ylcUm4+GgwFQoe1QqFjN3Vq8QATDDwCcV+vnW/q1K1gAGS96oDmrBVMZ5QByO5wMpUJJTKdGRzaxWpjguDK4s+LZZIOpuaG+Um5cTAMIEhy+CYoLrk/HwxDIBQQY05FWiN5ESYbjmpJoMIvmy/XtbVoBVoTYfA/4vcWDsYvFfZF/Z/RflWMdaIyMZJoYyQYTqmkTFKGU4Cb/wAg3RKRipGFkgAAAABJRU5ErkJggg=="},1035:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/algorand-eth-803116cf495d4c41186b3bb0401cd582.png"},2804:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/algorand-milk-ddc90e7bb96808e63eae16c1176d00da.png"}}]);