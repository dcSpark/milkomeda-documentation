"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[4224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"\u30b9\u30de\u30fc\u30c8 \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",sidebar_position:6},i="\u30b9\u30de\u30fc\u30c8 \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",p={unversionedId:"cardano/for-developers/deploying-a-smart-contract",id:"cardano/for-developers/deploying-a-smart-contract",title:"\u30b9\u30de\u30fc\u30c8 \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",description:"Solidity\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3092Milkomeda C1\u30b5\u30a4\u30c9\u30c1\u30a7\u30fc\u30f3\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002 \u4eca\u56de\u306f\u4f8b\u3068\u3057\u3066\u3001\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4\u306bRemix\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 Remix\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001\u3053\u3061\u3089\u306e\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044: Remix IDE",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cardano/for-developers/deploying-a-smart-contract.mdx",sourceDirName:"cardano/for-developers",slug:"/cardano/for-developers/deploying-a-smart-contract",permalink:"/ja/cardano/for-developers/deploying-a-smart-contract",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"\u30b9\u30de\u30fc\u30c8 \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u8cc7\u7523\u306e\u30e9\u30c3\u30d4\u30f3\u30b0\u89e3\u9664",permalink:"/ja/cardano/for-developers/unwrapping-assets-for-devs"},next:{title:"\u30a6\u30a9\u30ec\u30c3\u30c8\u306e\u9023\u643a",permalink:"/ja/cardano/for-developers/wallet-integration"}},l={},s=[],c={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u30b9\u30de\u30fc\u30c8-\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4"},"\u30b9\u30de\u30fc\u30c8 \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4"),(0,a.kt)("p",null,"Solidity\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3092Milkomeda C1\u30b5\u30a4\u30c9\u30c1\u30a7\u30fc\u30f3\u306b\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002 \u4eca\u56de\u306f\u4f8b\u3068\u3057\u3066\u3001\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4\u306bRemix",(0,a.kt)("a",{parentName:"p",href:"http://remix.ethereum.org/"}),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 Remix\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001\u3053\u3061\u3089\u306e\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044: ",(0,a.kt)("a",{parentName:"p",href:"http://remix.ethereum.org/"},"Remix IDE")),(0,a.kt)("p",null,"\u307e\u305a\u3001Solidity\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002 Remix\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u5de6\u30d1\u30cd\u30eb\u3067\u300c",(0,a.kt)("strong",{parentName:"p"},"Contracts"),"\uff08\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\uff09\u300d\u30d5\u30a9\u30eb\u30c0\u30fc\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u6b21\u306b\u4e2d\u592e\u30d1\u30cd\u30eb\u306e\u300c",(0,a.kt)("strong",{parentName:"p"},"New File"),"\uff08\u65b0\u898f\u30d5\u30a1\u30a4\u30eb\uff09\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7359).Z,width:"969",height:"834"})),(0,a.kt)("p",null,"\u3059\u308b\u3068\u3001\u65b0\u3057\u3044Solidity\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u5165\u529b\u3059\u308b\u3088\u3046\u306b\u6c42\u3081\u3089\u308c\u307e\u3059\u3002 \u3053\u3053\u3067\u306f\u3001ERC-20\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4\u3092\u884c\u3046\u305f\u3081\u3001\u300cTest_ERC20.sol\u300d\u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u540d\u3092\u3064\u3051\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u3087\u3046\u3002 \u30d5\u30a1\u30a4\u30eb\u540d\u3092\u5165\u529b\u3057\u3066\u3001",(0,a.kt)("strong",{parentName:"p"},"Enter"),"\u3092\u62bc\u3057\u307e\u3059\u3002 \u30ab\u30fc\u30bd\u30eb\u304c\u7de8\u96c6\u30d1\u30cd\u30eb\u306b\u79fb\u52d5\u3059\u308b\u306e\u3067\u3001Solidity\u30b3\u30fc\u30c9\u3092\u5165\u529b\u3057\u307e\u3059\u3002 \u30b3\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pragma solidity ^0.7.0;\n\nimport "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0-solc-0.7/contracts/token/ERC20/ERC20.sol";\n\ncontract Token is ERC20 {\n\n    constructor () ERC20("Token", "TKN") {\n        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));\n    }\n}\n')),(0,a.kt)("p",null,"\u6b21\u306b\u753b\u9762\u306e\u5de6\u5074\u306b\u8868\u793a\u3055\u308c\u308b\u300c",(0,a.kt)("strong",{parentName:"p"},"Solidity compiler"),"\uff08Solidity\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc\uff09\u300d\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u9078\u629e\u3057\u307e\u3059\uff08\u3053\u306e\u4f8b\u3067\u306f",(0,a.kt)("strong",{parentName:"p"},"0.7.6+commit.7338295f"),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\uff09\u3002\u6b21\u306b\u3001\u4ee5\u4e0b\u306e\u901a\u308a\u300c",(0,a.kt)("strong",{parentName:"p"},"Compile Test_ERC20.sol"),"\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3549).Z,width:"925",height:"706"})),(0,a.kt)("p",null,"\u5de6\u5074\u306e\u300c",(0,a.kt)("strong",{parentName:"p"},"Deploy and run transactions"),"\uff08\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u30c7\u30d7\u30ed\u30a4\u3068\u5b9f\u884c\uff09\u300d\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u300c",(0,a.kt)("strong",{parentName:"p"},"Environment"),"\uff08\u74b0\u5883\uff09\u300d\u30d7\u30eb\u30c0\u30a6\u30f3\u304b\u3089\u300c",(0,a.kt)("strong",{parentName:"p"},"Injected Web3"),"\u300d\u3092\u9078\u629e\u3057\u307e\u3059\u3002 MetaMask\u306e\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u3001\u300c",(0,a.kt)("strong",{parentName:"p"},"Next"),"\uff08\u6b21\u3078\uff09\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u300c",(0,a.kt)("strong",{parentName:"p"},"Connect"),"\uff08\u63a5\u7d9a\uff09\u300d\u3092\u9078\u629e\u3057\u3001C1\u30a6\u30a9\u30ec\u30c3\u30c8\u3092Remix\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8712).Z,width:"360",height:"450"})),(0,a.kt)("p",null,"MetaMask\u30a6\u30a9\u30ec\u30c3\u30c8\u304c\u63a5\u7d9a\u3055\u308c\u305f\u3089\u300c",(0,a.kt)("strong",{parentName:"p"},"Deploy"),"\uff08\u30c7\u30d7\u30ed\u30a4\uff09\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001Milkomeda C1\u30b5\u30a4\u30c9\u30c1\u30a7\u30fc\u30f3\u306b\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3991).Z,width:"370",height:"480"})),(0,a.kt)("p",null,"MetaMask\u3067\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1367).Z,width:"340",height:"575"})),(0,a.kt)("p",null,"Remix IDE\u753b\u9762\u306e\u5de6\u5074\u306b\u3042\u308b\u300c",(0,a.kt)("strong",{parentName:"p"},"Deployed Contracts"),"\uff08\u30c7\u30d7\u30ed\u30a4\u6e08\u307f\u306e\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\uff09\u300d\u306b\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5856).Z,width:"556",height:"1205"})),(0,a.kt)("p",null,"\u6700\u5f8c\u306b\u3001Cardano Testnet\u3067milkTADA\u306e\u30e9\u30c3\u30d4\u30f3\u30b0\u3092\u89e3\u9664\u3057\u3066\u3001tADA\u306b\u623b\u3059\u65b9\u6cd5\u3092\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002"))}d.isMDXComponent=!0},3549:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remix-compile-0227a3e401e2202947adbd13d8037a47.png"},8712:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remix-connect-wallet-9ccc397c8b443355180537a2db45268c.png"},1367:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remix-deploy-confirm-b5b04a6dfd761806d53de3d0c3d632b7.png"},3991:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remix-deploy-c41a02a593d4c3b3bbf8093bfa4e8826.png"},7359:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remix-new-file-f6091d0d25dbb680167220374c63168c.png"},5856:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/remix-see-deployed-1de837596229ca746a64fa325847eff2.png"}}]);