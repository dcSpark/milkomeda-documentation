"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[8981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=i,m=p["".concat(d,".").concat(u)]||p[u]||c[u]||r;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_label:"The C1 Sidechain",sidebar_position:1},o="The Milkomeda C1 (Cardano EVM Sidechain)",s={unversionedId:"cardano/how-it-works/c1-sidechain",id:"cardano/how-it-works/c1-sidechain",title:"The Milkomeda C1 (Cardano EVM Sidechain)",description:"After weighing out many of the positives and negatives of various approaches we settled on an ideal solution that will maximize both attracting new developers and improving the value proposition of the Layer 1 blockchain overall. We will be deploying the first Cardano sidechain, named C1, which will be an EVM-based sidechain that uses mADA (wrapped ADA which is transferred from the Cardano mainnet to the sidechain) as its base asset for fees and gas.",source:"@site/docs/cardano/how-it-works/c1-sidechain.md",sourceDirName:"cardano/how-it-works",slug:"/cardano/how-it-works/c1-sidechain",permalink:"/milkomeda-documentation/ja/cardano/how-it-works/c1-sidechain",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"The C1 Sidechain",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How It Works",permalink:"/milkomeda-documentation/ja/cardano/how-it-works/"},next:{title:"Advantages",permalink:"/milkomeda-documentation/ja/cardano/how-it-works/advantages"}},d={},l=[],h={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-milkomeda-c1-cardano-evm-sidechain"},"The Milkomeda C1 (Cardano EVM Sidechain)"),(0,i.kt)("p",null,"After weighing out many of the positives and negatives of various approaches we settled on an ideal solution that will maximize both attracting new developers and improving the value proposition of the Layer 1 blockchain overall. We will be deploying the first Cardano sidechain, named C1, which will be an EVM-based sidechain that uses mADA (wrapped ADA which is transferred from the Cardano mainnet to the sidechain) as its base asset for fees and gas."),(0,i.kt)("p",null,"This provides both developers and users a simplified on-boarding experience, while improving the value of ADA as it becomes the coordinating base asset on multiple chains. Furthermore, thanks to Cardano being PoS, when users transfer ADA to the sidechain it can be auto-delegated to stake pools which passively earns returns unlike using a new token as the base asset. This allows the sidechain to work synergistically with the Cardano mainnet in a manner where they build off of each other and the benefits of both bleed over to all users. Additionally, the relationship is strengthened by the fact that all of the fees users will be charged when interacting with the Milkomeda protocol (no matter on which chain) will be in ADA/mADA."),(0,i.kt)("p",null,"By building this solid foundation between mainnet and the sidechain we also provide users a seriously improved UX, wherein by submitting a single transaction everything is dealt with automatically behind the scenes. For example, this translates into a smooth experience where users send their tokens to the sidechain bridge on Cardano mainnet, and the inner bridge machinery takes care of the series of subsequent transactions with no further user input. After a short period of time the tokens simply arrive on the sidechain in the user\u2019s wallet from their perspective. Not only does this synergy provide a great experience for moving between mainnet and the sidechain, it also unlocks an opportunity that was never considered before."),(0,i.kt)("p",null,"Thanks to our new innovation called wrapped smart contracts, it will be possible for users on the Cardano mainnet to call and use contracts on the sidechain without having to leave mainnet at all. Users will submit a single Cardano transaction with the data and assets required to interact with the sidechain dApp and the sidechain bridge layer takes care of the rest. The assets/data are transferred over to the sidechain, the requested action is executed on the target dApp, and the results are deposited back to the user\u2019s wallet in the end."),(0,i.kt)("p",null,"This is the kind of power that is possible by removing all of the excess features/tokens that get in the way of interoperability between mainnet and the sidechain."),(0,i.kt)("p",null,"The C1 sidechain was officially launched on April 2022 and it became the first sidechain to launch for Cardano powered by the Milkomeda Sidechain protocol. Multiple improvements have been made to the protocol since then, and the C1 sidechain is now the premier EVM-based sidechain in the Cardano ecosystem."))}c.isMDXComponent=!0}}]);