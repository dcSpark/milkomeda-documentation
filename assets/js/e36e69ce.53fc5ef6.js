"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[2995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Integrate your Milkomeda C1 DApp with Flint Wallet",sidebar_position:9},r="Integrate your Milkomeda C1 DApp with Flint Wallet",l={unversionedId:"cardano/guides/integrate-flint-wallet-dapps",id:"cardano/guides/integrate-flint-wallet-dapps",title:"Integrate your Milkomeda C1 DApp with Flint Wallet",description:"Getting Started with Flint Wallet",source:"@site/docs/cardano/guides/integrate-flint-wallet-dapps.mdx",sourceDirName:"cardano/guides",slug:"/cardano/guides/integrate-flint-wallet-dapps",permalink:"/cardano/guides/integrate-flint-wallet-dapps",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"Integrate your Milkomeda C1 DApp with Flint Wallet",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Using Milkomeda's Asset Consolidation Contracts (MACC)",permalink:"/cardano/guides/Using-MACC"},next:{title:"For End Users",permalink:"/cardano/for-end-users/"}},s={},c=[{value:"Getting Started with Flint Wallet",id:"getting-started-with-flint-wallet",level:2},{value:"The following tutorial will cover:",id:"the-following-tutorial-will-cover",level:3},{value:"Detecting the provider",id:"detecting-the-provider",level:3},{value:"Establishing connection",id:"establishing-connection",level:3},{value:"Connecting",id:"connecting",level:4},{value:"Disconnecting",id:"disconnecting",level:4},{value:"Changing Accounts",id:"changing-accounts",level:3},{value:"Sending Transaction",id:"sending-transaction",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrate-your-milkomeda-c1-dapp-with-flint-wallet"},"Integrate your Milkomeda C1 DApp with Flint Wallet"),(0,a.kt)("h2",{id:"getting-started-with-flint-wallet"},"Getting Started with Flint Wallet"),(0,a.kt)("p",null,"Flint browser extension and mobile in-app browser allow seamless interaction with web applications.\nTo interact with Flint, developers can access the provider object that is injected into the browser by Flint. This provider object is globally available at ",(0,a.kt)("inlineCode",{parentName:"p"},"window.evmproviders.flint")," and provides access to the latest Flint functionality. This documentation provides comprehensive information on the provider and its functionalities."),(0,a.kt)("p",null,"To begin integrating Flint in your web3 DApp, you need to first install Flint on your development machine's browser of choice. You can download Flint ",(0,a.kt)("a",{parentName:"p",href:"https://flint-wallet.com/"},"here"),". "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It's important to note that this guide assumes an intermediate level of knowledge in HTML, CSS, and JavaScript.")),(0,a.kt)("p",null,"After installing and launching Flint, you'll notice that new browser tabs now have access to a ",(0,a.kt)("inlineCode",{parentName:"p"},"window.evmproviders.flint")," object in the developer console. This object is crucial for your website to interact with Flint.\nFor a comprehensive review of the API associated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.evmproviders")," object, please refer to its ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-5749"},"documentation"),"."),(0,a.kt)("h3",{id:"the-following-tutorial-will-cover"},"The following tutorial will cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Detecting the provider"),(0,a.kt)("li",{parentName:"ul"},"Establishing connection"),(0,a.kt)("li",{parentName:"ul"},"Sending Transaction")),(0,a.kt)("h3",{id:"detecting-the-provider"},"Detecting the provider"),(0,a.kt)("p",null,"In order to check whether a user has already installed Flint, a web application should search for the presence of a flint object. Both Flint\u2019s browser extension and mobile in-app browser will inject this object into the window of any web application the user visits.\nIf a flint object exists, Milkomeda C1 DApps can utilize the API available at ",(0,a.kt)("inlineCode",{parentName:"p"},"window.evmproviders.flint")," to interact with Flint.\nTo determine if Flint has been installed, an application should also look for the ",(0,a.kt)("inlineCode",{parentName:"p"},"isFlint")," flag.\nYou can also find more information about flint such as name, description and icon in ",(0,a.kt)("inlineCode",{parentName:"p"},"window.evmproviders.flint.info")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const isFlintInstalled = window.evmproviders?.flint\n//If Flint is not installed, we recommend you redirect your users to our website. Altogether, this may look like the following.\nconst getProvider = () => {\n    const provider = window?.evmproviders?.flint;\n    if (provider?.isFlint) {\n    return provider;\n    }\n    window.open('https://flint-wallet.com/', '_blank');\n};\n")),(0,a.kt)("h3",{id:"establishing-connection"},"Establishing connection"),(0,a.kt)("p",null,"After detecting the provider, an application can initiate a connection request to Flint. This request prompts the user for permission to share their public key as an indication of their willingness to continue interacting. Prior to making any further requests, such as signing a message or sending a transaction, users must approve the connection request.\nOnce permission has been granted for the first time, the web application's domain will be added to the whitelist for future connection requests. Following the establishment of a connection, it's possible to terminate it from both the application and user sides."),(0,a.kt)("h4",{id:"connecting"},"Connecting"),(0,a.kt)("p",null,"The default way to connect to Flint is by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"window.ethereum.request")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const provider = getProvider(); // see "Detecting the Provider"\ntry {\n    const accounts = await provider.request({ method: "eth_requestAccounts" });\n    console.log(accounts[0]);\n    // 0x52b4Cd305E1234584cd8cE0ac1af4Ae01Bi4f294d\n} catch (err) {\n    // { code: 4001, message: \'User rejected the request.\' }\n}\n')),(0,a.kt)("p",null,"The eth_requestAccounts method returns a Promise, which resolves to an array that contains the connected address in the 0th index. If the user declines the request or closes the pop-up, it will reject (throw when awaited)."),(0,a.kt)("h4",{id:"disconnecting"},"Disconnecting"),(0,a.kt)("p",null,'It\'s not possible to disconnect a user from their connection programmatically once they\'ve established it.\nAfter establishing a connection, Flint will add the website to a list of "connected apps." The user can manually revoke access through the UI at any time, which will require them to reconnect. Any application added to the user\'s "connected apps" will be automatically reconnected to by Flint.'),(0,a.kt)("h3",{id:"changing-accounts"},"Changing Accounts"),(0,a.kt)("p",null,"Flint provider allows to create a confirmation asking to user to switch to the chain with the specified chain ID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const provider = getProvider(); // see \"Detecting the Provider\"\ntry {\n    await provider.request({\n        method: 'wallet_switchEthereumChain',\n        params: [{ chainId: '0x7d1' }],\n    });\n} catch (err) {\n    // handle \"switch\" errors\n}\n")),(0,a.kt)("p",null,"You should only call this method in response to a direct user action, such as a button click."),(0,a.kt)("p",null,"Flint also emits ",(0,a.kt)("inlineCode",{parentName:"p"},"accountsChanged")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"chainChanged")," events when user accepts to switch to the chain so you can listen these events to update your UI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"window.ethereum.on('accountsChanged', handler: (accounts: Array<string>) => void);\nwindow.ethereum.on('chainChanged', handler: (chainId: string) => void);\n\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"At this moment, Flint does ",(0,a.kt)("strong",{parentName:"p"},"NOT")," emit ",(0,a.kt)("inlineCode",{parentName:"p"},"accountsChanged")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"chainChanged")," event when users switch between accounts/wallets within Flint wallet.\nThis is something that Flint team is currently working on and will be updated in the future."),(0,a.kt)("p",{parentName:"admonition"},"This means that if a user wants to connect to a different wallet or network, they will need to disconnect within Flint in the settings Connected dapps option, and then reload the DApp."),(0,a.kt)("p",{parentName:"admonition"},"To help users with this process, you could ask users to switch chain using ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet_switchEthereumChain"),"or set clear instructions on how to manage this in your DApp's user interface.")),(0,a.kt)("h3",{id:"sending-transaction"},"Sending Transaction"),(0,a.kt)("p",null,"After a web application establishes a connection with Flint, it can request the user's permission to send transactions on their behalf. To send a transaction, you must have a valid transaction object, which should resemble the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    from: "0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8",\n    to: "Oxaf645481cff54495568b1136539a6426c52d470f",\n    value: "100000",\n    gas: "0xbd93",\n    // \'data\' is optional. In case you\'re interacting with a deployed smart contract and \'to\' address would be the smart contract address.\n    data: "0x095ea7b3000000000000000000000000ced91cb4ce1a24b2117db780d91f654",\n}\n')),(0,a.kt)("p",null,"The transaction object must be signed with the sender's private key to ensure that only the person holding the private key can send transactions from the public address.\nTo request Flint to send a transaction to the network, you can use the following code snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const result = await provider.request({\n    method: 'eth_sendTransaction',\n    params: [\n        {\n            from: accounts[0],\n            to: 'Oxaf645481cff54495568b1136539a6426c52d470f',\n            value: '0x0',\n            gas: '0xbd93',\n        },\n    ],\n});\n")))}p.isMDXComponent=!0}}]);