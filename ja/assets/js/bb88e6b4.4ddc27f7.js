"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[6536],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>y});var a=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(o),y=i,p=d["".concat(l,".").concat(y)]||d[y]||u[y]||r;return o?a.createElement(p,n(n({ref:t},c),{},{components:o})):a.createElement(p,n({ref:t},c))}));function y(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,n=new Array(r);n[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var h=2;h<r;h++)n[h]=o[h];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9119:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var a=o(7462),i=(o(7294),o(3905));const r={sidebar_label:"Sidechains and L2s",sidebar_position:1},n="Sidechains and L2s",s={unversionedId:"learn/sidechain-l2s",id:"learn/sidechain-l2s",title:"Sidechains and L2s",description:'Seba, one of the core contributors to Milkomeda goes over Sidechains and L2s in the video: "Sidechain? L2? Where to deploy your app? (feat. Midnight, Cardano, Polkadot, Cosmos)"',source:"@site/docs/learn/sidechain-l2s.mdx",sourceDirName:"learn",slug:"/learn/sidechain-l2s",permalink:"/ja/learn/sidechain-l2s",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Sidechains and L2s",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Learn Concepts",permalink:"/ja/learn/"}},l={},h=[{value:"Summary",id:"summary",level:2},{value:"Transcript",id:"transcript",level:2}],c={toc:h};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sidechains-and-l2s"},"Sidechains and L2s"),(0,i.kt)("p",null,'Seba, one of the core contributors to Milkomeda goes over Sidechains and L2s in the video: "Sidechain? L2? Where to deploy your app? (feat. Midnight, Cardano, Polkadot, Cosmos)"'),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/lO_RJepCwmE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this video, the speaker discusses various options for deploying decentralized applications (dapps) on blockchains such as Ethereum, Cardano, and Cosmos. The speaker covers the pros and cons of deploying on layer one, deploying on a sidechain, using a layer two solution, and deploying directly on the blockchain using smart contracts."),(0,i.kt)("p",null,"Deploying on layer one gives developers complete control and flexibility, but it comes at the cost of security, since there are no additional layers of protection. Deploying on a sidechain allows developers to leverage the security of the main chain while maintaining some flexibility, but it requires a significant number of validators to opt-in. Using a layer two solution provides more security than a sidechain but requires developers to make trade-offs in terms of flexibility, such as longer wait times to go from layer two to layer one."),(0,i.kt)("p",null,"Finally, the speaker discusses the option of deploying directly on the blockchain using smart contracts. This approach provides developers with the security of the main chain but limits their flexibility since they have to write their smart contracts using the blockchain's programming language and abide by its specific block times and probabilistic finality."),(0,i.kt)("p",null,"The speaker also covers the example of Twitter potentially moving to a blockchain and how different blockchain ecosystems might try to convince them to join by highlighting the benefits of their particular blockchain. Overall, the video provides a comprehensive overview of the different deployment options available to dapp developers and the trade-offs they must consider in terms of security and flexibility."),(0,i.kt)("h2",{id:"transcript"},"Transcript"),(0,i.kt)("p",null,"Hello, in this video, I'm going to talk about how you can deploy your application on a blockchain. This is a question that comes up quite often, and it's not always clear what the best approach is. So I'm going to talk about some of the different options that you have, and the trade-offs between security and flexibility that come with each approach."),(0,i.kt)("p",null,"First, let's talk about deploying your own layer one blockchain. This is the most flexible option, as you have complete control over the security model, consensus algorithm, and any other parameters that you might need for your application. However, it's also the most difficult option, as you need to build everything from scratch, including a community of validators to secure your network. This is not something that most projects can or should attempt."),(0,i.kt)("p",null,"The second option is to deploy a sidechain that leverages the security of an existing ecosystem, such as Ethereum or Cardano. This is a more practical option, as you can build your own blockchain using the same consensus algorithm and validator community as the parent chain. However, you still need to convince validators to join your network, and you may be limited in terms of flexibility, as you need to follow the same rules as the parent chain."),(0,i.kt)("p",null,"The third option is to deploy a Dapp-specific sidechain, which is essentially a sidechain that is customized for your specific application. This gives you the most flexibility, as you can design the consensus algorithm, validator community, and other parameters specifically for your application. However, it also requires the most effort, as you need to build everything from scratch."),(0,i.kt)("p",null,"Now let's talk about some of the specifics of deploying on different blockchains. Let's start with Cosmos, which is a proof-of-stake blockchain that allows for the deployment of sidechains. The way it works is that validators on the parent chain can opt-in to validate a specific sidechain, which allows for the secure transfer of assets and data between the two chains. This is a fairly flexible approach, as any project can spin up their own sidechain and try to attract validators to join their network. However, it also requires a certain level of effort to convince validators to join your network, and there may be security risks if your sidechain doesn't have enough validators or if the validators are not reliable."),(0,i.kt)("p",null,"Cardano takes a slightly different approach with its proof-of-stake implementation, called Ouroboros. It also allows for the deployment of sidechains, but with a more automated process that leverages the Cardano Sidechain SDK. This makes it easier for projects to spin up their own sidechains and attract validators to join their network. However, it also requires a certain percentage of the parent chain's validators to opt-in to validating the sidechain, which can be a high barrier to entry."),(0,i.kt)("p",null,"Polkadot takes a different approach altogether with its parachain auction system. Projects can bid for a slot on the Polkadot network and be allowed to deploy their own blockchain as a parachain. This allows for a more flexible approach, as any project can bid for a slot and try to attract validators to join their network. However, there are a limited number of slots available, and there may be competition for those slots."),(0,i.kt)("p",null,"Let's now talk about some of the other trade-offs that come with deploying on different blockchains. If you deploy directly on a layer one blockchain, such as Cardano, you get the most security, as you're leveraging the entire validator community of the parent chain. However, you also have limited flexibility, as you need to write your application using the parent chain's programming language and follow the parent chain's rules."),(0,i.kt)("p",null,"If you deploy on a layer two solution, such as Optimism or Arbitrum, you get more flexibility, as you can have a layer two that is specifically customized for your specific use case. You are still able to leverage some security, because at the end of the day, you're taking the security from either the Cardano network or the Ethereum network or wherever your network plans to be deployed to."),(0,i.kt)("p",null,"So this means that running a dApp, although you get a lot of security, you're also paying a lot of money to the Cardano network to leverage the security which might not be exactly what you want. Another option you have is to use a known layer 2 solution. Cardano doesn't currently have any layer 2 solutions that are in production at the moment. There are people working on this solution in a variety of ways from Hydra, Milkomeda, and another projects as well. But you can imagine this is the Ethereum ecosystem, where they already have Optimism, they already have Arbitrum, they already have ZKSync, and many other existing layer 2 solutions, and so your DApp can leverage a known layer 2. With this, you get a little less flexibility because now you're bound by whatever trade-offs the layer 2 made. For example, Optimism is known for having a fairly long period to get off the L2, so if you want to go from layer 2 to layer 1, you usually have to wait like a week or so. You lose some flexibility because this might not be the user experience that you need for your specific application, but you get some benefit of using security not just from Cardano or Ethereum in this case because the way layer 2 works is that they eventually settle on the layer 1 blockchain, but you also leverage security from the Optimism team compared to building your own solution."),(0,i.kt)("p",null,"So if you're deploying to Optimism, once they decentralize their sequencer and they have a whole system for this, you're leveraging the security model that they've put in place and you don't have to spin up your system, but more and more, we see projects talking about option three, which is a dApp-specific L2s. So you may look at Optimism, Arbitrum, ZK-Sync, and you may not like the trade-offs they made. So, you can make your own dApp-specific L2 and then your dApp lives over there, and now you get more flexibility again because you can have a layer 2 specifically customized for your specific use case, but still leverage some security because at the end of the day, you're taking the security from either the Cardano Network or the Ethereum Network or wherever your network plans to be deployed to. You may not know of any projects thinking about these dApp-specific rollups, but I know there are a few of them that are maybe under the radar at the moment, but one of them I definitely do know is Prima Studios, which is deploying a layer 2 solution as a game engine. So that's an example of this (although it's not a dApp-specific rollup, but rather a tool to create dApp-specific rollups)"),(0,i.kt)("p",null,"So through this video, hopefully, you've got an idea of the different options for how you can deploy a project on a blockchain and the different trade-offs in security and flexibility you get from these. You can think about some examples like in the past when Elon Musk announced he was buying Twitter, people talking about, oh, he should move Twitter to the blockchain, have Twitter run on the blockchain, and you saw a lot of blockchain ecosystems say like oh Twitter should run on Ethereum, Twitter should run on Cosmos, Twitter should run on Polkadot, Twitter should run on Cardano, and you've seen different proposals by different projects trying to convince Twitter to come over, and these projects, as you've seen in this video, have fairly different ways for how projects can come over, fairly different ways for how they leverage security."),(0,i.kt)("p",null,"So if you think of Twitter, for example, they have a very big following, they have a lot of known users, they have a lot of people who will be interested in validating any kind of layer network. So most likely, Twitter would focus on flexibility because they have enough network effect to leverage their own security network and not have to pay off Cosmos validators or Cardano validators or Ethereum validators. They probably have enough network effect to build their own ecosystem and attract people there."),(0,i.kt)("p",null,"So hopefully, you found this interesting. We have more videos on similar topics, on the dcSpark YouTube, so if you like those, definitely check them out, and follow us on YouTube and Twitter for more informational videos in the future. Thank you."))}u.isMDXComponent=!0}}]);