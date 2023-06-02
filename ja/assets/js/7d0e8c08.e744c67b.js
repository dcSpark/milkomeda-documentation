"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[2968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),k=a,u=d["".concat(p,".").concat(k)]||d[k]||c[k]||o;return n?r.createElement(u,l(l({ref:t},s),{},{components:n})):r.createElement(u,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905)),o=n(6783);const l={sidebar_position:2},i="MetaMask\u306e\u8a2d\u5b9a",p={unversionedId:"algorand/for-developers/configuring-metamask",id:"algorand/for-developers/configuring-metamask",title:"MetaMask\u306e\u8a2d\u5b9a",description:"\u524d\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001ALGO\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u304cMilkomeda A1\u30ed\u30fc\u30eb\u30a2\u30c3\u30d7\u30fb\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u3068\u76f8\u4e92\u4f5c\u7528\u3092\u958b\u59cb\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3057\u305f\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/algorand/for-developers/configuring-metamask.mdx",sourceDirName:"algorand/for-developers",slug:"/algorand/for-developers/configuring-metamask",permalink:"/ja/algorand/for-developers/configuring-metamask",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"algorand",previous:{title:"\u30c6\u30b9\u30c8ALGO\u306e\u53d6\u5f97",permalink:"/ja/algorand/for-developers/obtaining-test-algo"},next:{title:"\u8cc7\u7523\u306e\u30e9\u30c3\u30d4\u30f3\u30b0",permalink:"/ja/algorand/for-developers/wrapping-assets"}},m={},s=[],c={toc:s};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metamask\u306e\u8a2d\u5b9a"},"MetaMask\u306e\u8a2d\u5b9a"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u524d\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001ALGO\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u304cMilkomeda A1\u30ed\u30fc\u30eb\u30a2\u30c3\u30d7\u30fb\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u3068\u76f8\u4e92\u4f5c\u7528\u3092\u958b\u59cb\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3057\u307e\u3057\u305f\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u3053\u308c\u4ee5\u964d\u3001\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u30e1\u30a4\u30f3\u30cd\u30c3\u30c8\u306e\u8a2d\u5b9a\u306b\u7126\u70b9\u3092\u5f53\u3066\u307e\u3059\u3002 \u3057\u304b\u3057\u306a\u304c\u3089\u3001\u307e\u305a\u6700\u521d\u306f\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u8cc7\u7523\u3092\u4f7f\u7528\u3057\u3066Milkomeda A1\u30ed\u30fc\u30eb\u30a2\u30c3\u30d7\u3068\u76f8\u4e92\u4f5c\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 \u3053\u306e\u76ee\u7684\u306e\u305f\u3081\u306b\u3001\u5bfe\u5fdc\u3059\u308bRPC\u8a2d\u5b9a\u3092\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u306b\u5909\u66f4\u3057\u307e\u3059\u3002\n\u30e1\u30a4\u30f3\u30cd\u30c3\u30c8\u306e\u8a2d\u5b9a\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u305f\u3059\u3079\u3066\u306e\u30b9\u30c6\u30c3\u30d7\u306f\u3001\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u306e\u8a2d\u5b9a\u3068\u540c\u3058\u3067\u3042\u308b\u3053\u3068\u306b\u7559\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("p",null,"\u3055\u3066\u3001Algorand\u30a6\u30a9\u30ec\u30c3\u30c8\u3068\u3044\u304f\u3064\u304b\u306eALGO\u3092\u624b\u306b\u5165\u308c\u305f\u306e\u3067\u3001MilkALGO\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308bMilkomeda Algorand A1\u30ed\u30fc\u30eb\u30a2\u30c3\u30d7\u306e\u30a2\u30c9\u30ec\u30b9\u304c\u5fc5\u8981\u3067\u3059\u3002 \u3053\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001MetaMask\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u307e\u305a\u3001",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"},"Metamask for Chrome"),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001Chrome\u306e\u62e1\u5f35\u6a5f\u80fd\u30a2\u30a4\u30b3\u30f3",(0,a.kt)("img",{src:o.Z,alt:"",className:"img-icon"})," \u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001MetaMask\u3092\u9078\u629e\u3057\u307e\u3059\u3002 MetaMask\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u5185\u306e\u300c",(0,a.kt)("strong",{parentName:"p"},"Get Started"),"\uff08\u958b\u59cb\u3059\u308b\uff09\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u6b21\u306b\u300c",(0,a.kt)("strong",{parentName:"p"},"Create a Wallet"),"\uff08\u30a6\u30a9\u30ec\u30c3\u30c8\u3092\u4f5c\u6210\uff09\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002 \u30a6\u30a9\u30ec\u30c3\u30c8\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002 \u3053\u306e\u5f8c\u306b\u8a2d\u5b9a\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u30af\u30ea\u30c3\u30af\u3057\u3066\u5148\u306b\u9032\u307f\u307e\u3059\u3002 \u7d42\u4e86\u3059\u308b\u3068\u3001\u4e0b\u56f3\u306e\u3088\u3046\u306b\u65b0\u3057\u3044\u7a7a\u306e\u30a6\u30a9\u30ec\u30c3\u30c8\u304c\u3067\u304d\u307e\u3059\u3002 MetaMask\u306e\u753b\u9762\u53f3\u4e0a\u306b\u3042\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1035).Z,width:"716",height:"1048"})),(0,a.kt)("p",null,"\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u304b\u3089\u300c",(0,a.kt)("strong",{parentName:"p"},"Add Network"),"\uff08\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u8ffd\u52a0\uff09\u300d\u3092\u9078\u629e\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u540d: Milkomeda Algorand mainnet"),(0,a.kt)("p",null," \u65b0\u3057\u3044 RPC URL: https://rpc-mainnet-algorand-rollup.a1.milkomeda.com "),(0,a.kt)("p",{parentName:"blockquote"},"Chain ID: 2002"),(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8ca8\u8a18\u53f7 (\u30aa\u30d7\u30b7\u30e7\u30f3): milkAlgo"),(0,a.kt)("p",null," ","Block Explorer URL (Optional): https://explorer-mainnet-algorand-rollup.a1.milkomeda.com> ")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"To interact with Milkomeda A1 Testnet, use following network details:")),(0,a.kt)("p",{parentName:"admonition"},"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u540d: Milkomeda Algorand mainnet"),(0,a.kt)("p",null," \u65b0\u3057\u3044 RPC URL: https://rpc-devnet-algorand-rollup.a1.milkomeda.com "),(0,a.kt)("p",null,"Chain ID: 200202"),(0,a.kt)("p",null,"\u901a\u8ca8\u8a18\u53f7 (\u30aa\u30d7\u30b7\u30e7\u30f3): milkAlgo"),(0,a.kt)("p",null," ","Block Explorer URL (\u30aa\u30d7\u30b7\u30e7\u30f3): https://testnet-algorand-rollup.a1.mikomeda.com"," ")),(0,a.kt)("p",null,"\u300c",(0,a.kt)("strong",{parentName:"p"},"Save\uff08\u4fdd\u5b58\uff09"),"\u300d\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30fb\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30fb\u30ea\u30b9\u30c8\u306b",(0,a.kt)("strong",{parentName:"p"},"Milkomeda Algorand"),"\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u753b\u50cf\u306e\u3088\u3046\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u540d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001Milkomeda Algorand\u306e\u30a6\u30a9\u30ec\u30c3\u30c8\u30a2\u30c9\u30ec\u30b9\u3092MetaMask\u304b\u3089\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2804).Z,width:"712",height:"970"})),(0,a.kt)("p",null,"\u6b21\u306b\u3001Milkomeda A1\u30d6\u30ea\u30c3\u30b8dApp\u306b\u884c\u304d\u3001ALGO\u3092\u30d6\u30ea\u30c3\u30b8\u306b\u9001\u3063\u3066\u30e9\u30c3\u30d4\u30f3\u30b0\u3057\u3066\u3082\u3089\u3046\u3053\u3068\u306b\u3057\u307e\u3059\u3002"))}d.isMDXComponent=!0},6783:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAABM0lEQVRYCe2WzwrCMAzGfVMPXnbwIAo7+AcFRVFQFEUfTX2QnSvfIDA7s2RNhR0aGFlLm/z2pQ3ruQ5Zr0MsLsFw1UjKRFemKAp3uT1cf5CVHmOrBZdpuz+WIIDBc77erSzht4kgqt5KE6xMFYLe/w7zfL3dJJ99lYSSSx77sF9rojLjfBoEQqAA0poIQ0EtPsFw6kVTBv3E7ylcUm4+GgwFQoe1QqFjN3Vq8QATDDwCcV+vnW/q1K1gAGS96oDmrBVMZ5QByO5wMpUJJTKdGRzaxWpjguDK4s+LZZIOpuaG+Um5cTAMIEhy+CYoLrk/HwxDIBQQY05FWiN5ESYbjmpJoMIvmy/XtbVoBVoTYfA/4vcWDsYvFfZF/Z/RflWMdaIyMZJoYyQYTqmkTFKGU4Cb/wAg3RKRipGFkgAAAABJRU5ErkJggg=="},1035:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-eth-803116cf495d4c41186b3bb0401cd582.png"},2804:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-milk-ddc90e7bb96808e63eae16c1176d00da.png"}}]);