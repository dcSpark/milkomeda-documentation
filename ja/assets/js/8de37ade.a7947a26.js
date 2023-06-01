"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[3335],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,u=h["".concat(l,".").concat(d)]||h[d]||c[d]||s;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7330:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_label:"Rollup Research Model",sidebar_position:2},o="Rollup Research Model",i={unversionedId:"algorand/how-it-works/rollup-research-model",id:"algorand/how-it-works/rollup-research-model",title:"Rollup Research Model",description:"The complete research paper is available here.",source:"@site/docs/algorand/how-it-works/rollup-research-model.mdx",sourceDirName:"algorand/how-it-works",slug:"/algorand/how-it-works/rollup-research-model",permalink:"/ja/algorand/how-it-works/rollup-research-model",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Rollup Research Model",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Data Availability (v1)",permalink:"/ja/algorand/how-it-works/data-availability"},next:{title:"Validators Election",permalink:"/ja/algorand/how-it-works/validators-election"}},l={},p=[{value:"Assumptions",id:"assumptions",level:2},{value:"System model",id:"system-model",level:3},{value:"Network model",id:"network-model",level:3},{value:"Cryptographic assumptions",id:"cryptographic-assumptions",level:3},{value:"Threat model",id:"threat-model",level:3},{value:"Incentives",id:"incentives",level:3},{value:"Desired properties",id:"desired-properties",level:2},{value:"Our approach",id:"our-approach",level:3}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rollup-research-model"},"Rollup Research Model"),(0,r.kt)("p",null,"The complete research paper is available ",(0,r.kt)("a",{parentName:"p",href:"https://milkomeda.com/Milkomeda%20Rollup.pdf"},"here"),"."),(0,r.kt)("h2",{id:"assumptions"},"Assumptions"),(0,r.kt)("h3",{id:"system-model"},"System model"),(0,r.kt)("p",null,"Parties can lock their money in the Milkomeda rollup to continue the execution off-chain, referred to as clients. For the secure operation of the rollup, parties can participate as validators by locking stake in the rollup contract, responsible for the correct protocol execution, and enabling clients to exit the rollup in the correct state. The protocol proceeds in rounds determined by the underlying blockchain."),(0,r.kt)("h3",{id:"network-model"},"Network model"),(0,r.kt)("p",null,"Assuming a partially synchronous communication model, with a fixed upper bound on the communication delay, and arbitrarily long periods of asynchrony followed by long enough periods of synchrony."),(0,r.kt)("h3",{id:"cryptographic-assumptions"},"Cryptographic assumptions"),(0,r.kt)("p",null,"Making the usual cryptographic assumptions, that secure communication channels, digital signatures, and PKI exist."),(0,r.kt)("h3",{id:"threat-model"},"Threat model"),(0,r.kt)("p",null,"Assuming the adversary respects the cryptographic and network assumptions, cannot break cryptography, can reorder messages but cannot drop them, and may control up to 1/3 of the validators and any client. The adversary is slowly adaptive with respect to the validators."),(0,r.kt)("h3",{id:"incentives"},"Incentives"),(0,r.kt)("p",null,"Designing protocols secure under rational participants, where clients and validators are allowed to collude with each other."),(0,r.kt)("h2",{id:"desired-properties"},"Desired properties"),(0,r.kt)("p",null,"Determining what security means for the Milkomeda rollup under the aforementioned model:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Liveness:")," Any transaction submitted on the rollup becomes stable, i.e., is executed on the rollup by an honest client, within ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"u")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"u")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u")))))," blocks, where ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"u")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"u")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u")))))," is the liveness security parameter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bridging:")," Any participant of the L1 can enter or exit the rollup upon request within ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"w")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"w")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w")))))," blocks, where ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"w")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"w")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w")))))," is a security parameter, according to the state that an honest rollup client reports.")),(0,r.kt)("p",null,"Bridging encompasses the safety of the rollup. It expresses that no party loses money, i.e., any transaction that is executed on the rollup will remain confirmed at any future time. Bridging also implies that any party that wishes to exit the rollup will leave it in the state that corresponds to the sequence of relevant transactions, meaning the rollup parties will not gain or lose money when bridging to the blockchain. "),(0,r.kt)("p",null,"Bridging, in addition, encompasses a liveness notion, as for the rollup to be functional and make meaningful progress, parties must be able to join and leave on demand. Liveness, on the other hand, expresses that the rollup ledger will make progress, thus transactions submitted in the rollup will be eventually executed. Note that both liveness and bridging security parameters can be expressed in time units when the network is synchronous. However, the L1 may be operating in partial synchrony (e.g., Algorand), in which case we have no liveness guarantees. For this reason, we express the liveness and bridging security parameters for the rollup in blocks."),(0,r.kt)("h3",{id:"our-approach"},"Our approach"),(0,r.kt)("p",null,"To show the desired properties, we will first determine the individual protocols and their corresponding desiderata, and subsequently, we will prove the three desired properties:  liveness and bridging for the composition of the protocols.\nIn particular, the proposed design enables a clear separation of liveness and bridging hence we will first show that during an epoch the rollup remains live ",(0,r.kt)("a",{parentName:"p",href:"/ja/algorand/how-it-works/validators-election"},"Validators Election")," and later we will show that at the end/beginning of each epoch bridging is satisfied ",(0,r.kt)("a",{parentName:"p",href:"/ja/algorand/how-it-works/research-safe-exit-alternatives"},"Safe Exit Alternatives"),".\nWe will show the desiderata hold under an honest supermajority of stake, and then examine under which conditions or assumptions we can relax the honesty assumption and prove the desiderata under rational parties."))}c.isMDXComponent=!0}}]);