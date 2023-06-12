"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[6247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,u=m["".concat(p,".").concat(g)]||m[g]||d[g]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));n.p;const o={sidebar_position:4},i="\u90e8\u7f72\u667a\u80fd\u5408\u7ea6",l={unversionedId:"algorand/for-developers/deploying-a-smart-contract",id:"algorand/for-developers/deploying-a-smart-contract",title:"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6",description:"\u8fd9\u91cc\u6211\u4eec\u5c06\u5728Milkomeda A1 rollup\uff0c\u90e8\u7f72\u4e00\u4e2aSolidity\u667a\u80fd\u5408\u7ea6\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528Remix \u6765\u90e8\u7f72\u5408\u540c\u3002 \u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee\u4ee5\u4e0b\u94fe\u63a5\u8bbf\u95eeRemix\uff1aRemix IDE",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/algorand/for-developers/deploying-a-smart-contract.mdx",sourceDirName:"algorand/for-developers",slug:"/algorand/for-developers/deploying-a-smart-contract",permalink:"/zh/algorand/for-developers/deploying-a-smart-contract",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"algorand",previous:{title:"\u5305\u88c5\u8d44\u4ea7",permalink:"/zh/algorand/for-developers/wrapping-assets"},next:{title:"For End-users",permalink:"/zh/algorand/for-end-users/"}},p={},s=[],c={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6"},"\u90e8\u7f72\u667a\u80fd\u5408\u7ea6"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u5c06\u5728Milkomeda A1 rollup\uff0c\u90e8\u7f72\u4e00\u4e2aSolidity\u667a\u80fd\u5408\u7ea6\u3002 \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528Remix",(0,a.kt)("a",{parentName:"p",href:"http://remix.ethereum.org/"}," "),"\u6765\u90e8\u7f72\u5408\u540c\u3002 \u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee\u4ee5\u4e0b\u94fe\u63a5\u8bbf\u95eeRemix\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://remix.ethereum.org/"},"Remix IDE")),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u521b\u5efasolidity\u667a\u80fd\u5408\u7ea6\u6587\u4ef6\u3002 \u5728Remix\u7a97\u53e3\u5185\uff0c\u70b9\u51fb\u5de6\u4fa7\u9762\u677f\u7684\u300c",(0,a.kt)("strong",{parentName:"p"},"\u5408\u7ea6"),"\u300d\u6587\u4ef6\u5939\uff0c\u7136\u540e\u70b9\u51fb\u4e2d\u592e\u9762\u677f\u7684 \u300c",(0,a.kt)("strong",{parentName:"p"},"\u65b0\u6587\u4ef6 "),"\u300d\u6309\u94ae\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Algorand remix",src:n(8966).Z,width:"969",height:"834"})),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u5c06\u88ab\u63d0\u793a\uff0c\u4e3a\u65b0\u7684 Solidity \u667a\u80fd\u5408\u7ea6\u8f93\u5165\u4e00\u4e2a\u6587\u4ef6\u540d\u3002 \u6587\u4ef6\u540d\u662f\u4efb\u610f\u7684\uff0c\u4f46\u4e3a\u4e86\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u5c06\u90e8\u7f72\u4e00\u4e2aERC-20\u667a\u80fd\u5408\u7ea6\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u6587\u4ef6\u547d\u540d\u4e3a \u300cTest_ERC20.sol\u300d\u3002 \u8f93\u5165\u6587\u4ef6\u540d\u5e76\u6309",(0,a.kt)("strong",{parentName:"p"},"\u8f93\u5165"),". \u5149\u6807\u5e94\u79fb\u81f3\u7f16\u8f91\u9762\u677f\uff0c\u60a8\u53ef\u5728\u6b64\u8f93\u5165\u60a8\u7684 Solidity \u4ee3\u7801\u3002 \u5149\u6807\u5e94\u79fb\u81f3\u7f16\u8f91\u9762\u677f\uff0c\u60a8\u53ef\u5728\u6b64\u8f93\u5165\u60a8\u7684 Solidity \u4ee3\u7801\u3002 \u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pragma solidity ^0.7.0;\n\nimport "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0-solc-0.7/contracts/token/ERC20/ERC20.sol";\n\ncontract Token is ERC20 {\n\n    constructor () ERC20("Token", "TKN") {\n        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));\n    }\n}\n')),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u70b9\u51fb\u5c4f\u5e55\u5de6\u4fa7\u7684\u300c",(0,a.kt)("strong",{parentName:"p"},"Solidity\u7f16\u8bd1\u5668"),"\u300d \u56fe\u6807\uff0c\u9009\u62e9\u4e00\u4e2a\u7f16\u8bd1\u5668\u7248\u672c(\u5bf9\u4e8e\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"0.7.6+commit.7338295f"),"), \u7136\u540e\u70b9\u51fb\u300c",(0,a.kt)("strong",{parentName:"p"},"\u7f16\u8bd1Test_ERC20.sol"),"\u300d\uff0c\u5982\u56fe\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Solidity \u7f16\u8bd1\u5668",src:n(171).Z,width:"925",height:"706"})),(0,a.kt)("p",null,"\u70b9\u51fb\u5de6\u8fb9\u7684\u300c",(0,a.kt)("strong",{parentName:"p"},"\u90e8\u7f72\u548c\u8fd0\u884c\u4ea4\u6613"),"\u300d\u56fe\u6807\uff0c\u4ece \u300c",(0,a.kt)("strong",{parentName:"p"},"\u73af\u5883"),"\u300d\u4e0b\u62c9\u9009\u62e9 \u300c",(0,a.kt)("strong",{parentName:"p"},"Injected Web3"),'\u300d\u5982\u56fe\u6240\u793a\u3002 This will bring up the MetaMask screen where you will need to click "',(0,a.kt)("strong",{parentName:"p"},"Next"),'" and then "',(0,a.kt)("strong",{parentName:"p"},"Connect"),'" to connect your A1 wallet with Remix.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6778).Z,width:"360",height:"450"})),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u7684MetaMask\u94b1\u5305\u5df2\u7ecf\u8fde\u63a5\u597d\u4e86\uff0c\u70b9\u51fb\u300c",(0,a.kt)("strong",{parentName:"p"},"\u90e8\u7f72"),"\u300d\u6309\u94ae\uff0c\u5c06\u667a\u80fd\u5408\u7ea6\u90e8\u7f72\u5230Milkomeda A1 Rollup\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8300).Z,width:"370",height:"480"})),(0,a.kt)("p",null,"\u5728MetaMask\u4e2d\u786e\u8ba4\u8be5\u4ea4\u6613\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4449).Z,width:"724",height:"1244"})),(0,a.kt)("p",null,"\u73b0\u5728\u60a8\u5e94\u8be5\u5728Remix IDE\u5c4f\u5e55\u5de6\u4fa7\u7684\u300c",(0,a.kt)("strong",{parentName:"p"},"\u5df2\u90e8\u7f72\u7684\u5408\u540c"),"\u300d \u4e0b\u770b\u5230\u4ee5\u4e0b\u5185\u5bb9\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(606).Z,width:"642",height:"1248"})),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u590d\u5236ERC20\u667a\u80fd\u5408\u7ea6\u7684\u5730\u5740\uff0c\u5e76\u5728Metamask\u4e2d\u4f7f\u7528\u5b83\u6765\u6dfb\u52a0\u4f60\u6700\u8fd1\u521b\u5efa\u7684\u4ee3\u5e01\u3002 \u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u5bfc\u5165\u4ee3\u5e01"),"\uff0c\u7136\u540e\u8d34\u4e0a\u5408\u540c\u5730\u5740\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8947).Z,width:"736",height:"538"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5804).Z,width:"716",height:"1200"})),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u6dfb\u52a0\u81ea\u5b9a\u4ee3\u5e01"),"\uff0c\u4f60\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u4f60\u7684\u4ee3\u5e01\u4e86\uff01 \u73b0\u5728\u4f60\u80fd\u591f\u8f6c\u8ba9\u5b83\u4eec\uff0c\u5e76\u4e0e\u667a\u80fd\u5408\u7ea6\u4e92\u52a8\u3002"))}d.isMDXComponent=!0},8947:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-assets-7f72f9d39ab1437c0696cafca072501b.png"},606:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-deploy-run-231d5df0a1e9615a841e21e7c9f29ea4.png"},5804:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-import-83ac26fcfdb5dcb4e55368269a04b5ea.png"},4449:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-metamask-details-1c01a756d7fde76b53d2a8ed9ad866fc.png"},8966:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-remix-f6091d0d25dbb680167220374c63168c.png"},6778:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-solidity-compiler-2-9ccc397c8b443355180537a2db45268c.png"},8300:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-solidity-compiler-3-c41a02a593d4c3b3bbf8093bfa4e8826.png"},171:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/algorand-solidity-compiler-0227a3e401e2202947adbd13d8037a47.png"}}]);