"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[7659],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=c(a),u=o,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||s;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>T,contentTitle:()=>w,default:()=>M,frontMatter:()=>C,metadata:()=>A,toc:()=>N});var n=a(7462),o=(a(7294),a(3905));const s=a.p+"assets/images/macc1-621a88dde7b074d70c138f461197d8a3.png",i=a.p+"assets/images/macc2-dad05f65080767f05dbcbe3b7c797c88.png",r=a.p+"assets/images/macc3-f41614999ce6183c4270737291789456.png",l=a.p+"assets/images/macc4-be284e4a8ddd9dd212eaf7b07fdd98dd.png",c=a.p+"assets/images/macc5-8e2e6ae3e822ae882ced712eb2cd0df5.png",d=a.p+"assets/images/macc6-ee1204aff4cd3d244ed5e4147735888d.png",p=a.p+"assets/images/macc7-334d29b49867238d0f0a14863596a904.png",m=a.p+"assets/images/macc8-b93545fa68c6032078b8174a16dfa915.png",u=a.p+"assets/images/macc9-f556243fdd326928ae35e693384624ef.png",h=a.p+"assets/images/macc10-23fd734f35aebf7fefc1eb39fed4179c.png",g=a.p+"assets/images/macc11-2d366c0bc8e42d8bdf6b0d19f069792b.png",f=a.p+"assets/images/macc12-daa87f054a21459075f7ed78eb194284.png",k=a.p+"assets/images/macc13-05b5a7f85b7212da1176861cdd5dba2c.png",y=a.p+"assets/images/macc14-4c04ce96c5c4743079a5577b5674b9e0.png",b=a.p+"assets/images/macc15-715b4d49964758a1bb656f5638652dbf.png",v=a.p+"assets/images/infographic-7797bd9a11c6413cb4f888dec35dd000.png",C={sidebar_label:"Using Milkomeda's Asset Consolidation Contracts (MACC)",sidebar_position:6},w="Using Milkomeda's Asset Consolidation Contracts (MACC)",A={unversionedId:"cardano/guides/Using-MACC",id:"cardano/guides/Using-MACC",title:"Using Milkomeda's Asset Consolidation Contracts (MACC)",description:"Note: If you are already familiar with Milkomeda Assets Consolidation Contracts, you can skip ahead to the step-by-step guide to learn how to interact with the MACC DApp.",source:"@site/docs/cardano/guides/Using-MACC.mdx",sourceDirName:"cardano/guides",slug:"/cardano/guides/Using-MACC",permalink:"/cardano/guides/Using-MACC",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Using Milkomeda's Asset Consolidation Contracts (MACC)",sidebar_position:6},sidebar:"cardano",previous:{title:"Prize Draw Smart-Contract Tutorial",permalink:"/cardano/guides/winners_draw"},next:{title:"Integrate your Milkomeda C1 DApp with Flint Wallet",permalink:"/cardano/guides/integrate-flint-wallet-dapps"}},T={},N=[{value:"Context",id:"context",level:2},{value:"Milkomeda Assets Consolidation Contracts (MACC)",id:"milkomeda-assets-consolidation-contracts-macc",level:2},{value:"Treasury",id:"treasury",level:3},{value:"List of supported Fragmented tokens in MACC:",id:"list-of-supported-fragmented-tokens-in-macc",level:4},{value:"List of MACC Canonical tokens:",id:"list-of-macc-canonical-tokens",level:4},{value:"A Comprehensive Step-by-Step Guide to the MACC DApp",id:"step-by-step-guide",level:2},{value:"Step 1 : Connect your Wallet",id:"step-1--connect-your-wallet",level:4},{value:"Step 2 : Select the Fragmented asset you wish to convert",id:"step-2--select-the-fragmented-asset-you-wish-to-convert",level:4},{value:"Step 3 : Convert your Fragmented Assets",id:"step-3--convert-your-fragmented-assets",level:4},{value:"Success! You converted your Fragmented assets",id:"success-you-converted-your-fragmented-assets",level:2},{value:"MACC DApp Transaction History",id:"macc-dapp-transaction-history",level:2},{value:"Converting Canonical assets back Fragmented version",id:"converting-canonical-assets-back-fragmented-version",level:2},{value:"Step 1: To begin, select the &quot;Convert back to ERC20&quot; tab on the MACC DApp.",id:"step-1-to-begin-select-the-convert-back-to-erc20-tab-on-the-macc-dapp",level:4},{value:"Step 2: Select Canonical asset",id:"step-2-select-canonical-asset",level:4},{value:"Step 3: Select Fragmented asset",id:"step-3-select-fragmented-asset",level:4},{value:"Summary:",id:"summary",level:3}],D={toc:N};function M(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},D,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-milkomedas-asset-consolidation-contracts-macc"},"Using Milkomeda's Asset Consolidation Contracts (MACC)"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Note: If you are already familiar with Milkomeda Assets Consolidation Contracts, you can skip ahead to the ",(0,o.kt)("a",{parentName:"p",href:"#step-by-step-guide"},"step-by-step guide")," to learn how to interact with the MACC DApp.")),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Bridges are an essential part of the Milkomeda ecosystem, as they allow users to move different assets from Cardano to Milkomeda C1 so they can enjoy the benefits of the interoperability solutions. However, the existence of multiple bridges to bridge the same assets, results in the fragmentation of assets since each bridge will have its own version of the wrapped asset."),(0,o.kt)("p",null,"Taking USDC as an example, the ",(0,o.kt)("a",{parentName:"p",href:"https://cbridge.celer.network/"},"Celer Bridge")," will wrap the asset as ceUSDC while ",(0,o.kt)("a",{parentName:"p",href:"https://multichain.org/"},"Multichain")," will wrap the asset as multiUSDC, although both tokens represent the same asset."),(0,o.kt)("p",null,"This creates two perfectly identified but undesirable issues, which are liquidity fragmentation of each bridged asset and poor user experience, especially for new users who are less knowledgeable about the reason and meaning of the different variants of the wrapped tokens."),(0,o.kt)("p",null,"On the issue of liquidity fragmentation, this can refer to fragmentation across different DEXes, which is not necessarily undesirable nor avoidable, but more importantly, ",(0,o.kt)("strong",{parentName:"p"},"it can also refer to the fragmentation of liquidity between the different wrapped alternatives of the same asset.")),(0,o.kt)("p",null,"When a popular stablecoin, like USDC, is fragmented into multiple issued fragmented assets, the liquidity is also fragmented. This means that a user swapping ceUSDC/mADA on any given pool will experience higher slippage compared to the case if the liquidity was concentrated in a single pool of USDC/mADA."),(0,o.kt)("p",null,"For instance, if a user wants to swap mADA for USDC on any popular Milkomeda DEX, they will be presented with multiple versions of USDC to choose from, which can be confusing. This is not an issue with the UI&UX of that particular DEX, but rather a result of fragmented liquidity."),(0,o.kt)("p",null,"Another concern with blockchain bridges is the possibility of hacks. Users who hold wrapped assets on a certain bridge are exposed to that particular bridge, and choosing one bridge over another can turn out to be a bad decision in case of a hack. But what if users could be indifferent to the bridge they choose when bridging their assets?"),(0,o.kt)("h2",{id:"milkomeda-assets-consolidation-contracts-macc"},"Milkomeda Assets Consolidation Contracts (MACC)"),(0,o.kt)("p",null,"The aforementioned issues could be addressed by implementing a proposed solution called Milkomeda Assets Consolidation Contracts. These smart contracts enable merging different versions of a particular asset into a single canonical version. This would effectively consolidate the fragmented liquidity of a stablecoin like USDC, which can improve user experience and potentially mitigate the consequences of hacks associated with using multiple bridges.\nCanonical Smart Contracts for token merger are essentially two contracts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"TokenMerger implemented through an ERC1967Proxy and is ownable,"),(0,o.kt)("li",{parentName:"ol"},"CanonicalToken, an ERC20 that serves as the canonical version of fragmented ERC20 and that can only be minted by the TokenMerger contract (the proxy).")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To put it simply, the TokenMerger serves as a conversion contract between the various versions of a particular asset,")," referred to as Fragmented Tokens, and the Canonical version of the same asset. The TokenMerger is equipped with a whitelist for each Fragmented Token asset, which specifies the allowed assets that can be converted."),(0,o.kt)("p",null,"Through the use of Milkomeda Canonical Smart Contracts, it would be possible to consolidate the various versions of a particular asset into a single canonical version. This consolidation would address the issue of liquidity fragmentation among different tokens, resulting in a better user experience. Essentially, a single version of the asset would be used, solving the problem of fragmented liquidity and the poor user experience associated with it."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Suppose we establish a Asset Consolidation Contracts for mUSDC (Canonical asset). User A transfers 10ceUSDC to this contract and receives 10 mUSDC in exchange. Next, user B sends 20multiUSDC to the smart contract and receives 20mUSDC in return. Previously, users A and B would have been required to deposit their funds in separate liquidity pools, such as ceUSDC/mADA and multiUSDC/mADA. However, by canonizing their assets into mUSDC, they can now combine their liquidity in the same pool, mUSDC/mADA.")),(0,o.kt)("h3",{id:"treasury"},"Treasury"),(0,o.kt)("p",null,"The Milkomeda Assets Consolidation Contracts aim to mitigate the problem of user exposure to a specific bridge by diversifying the risk. The risk diversification is achieved by having each Canonical version of an asset backed by multiple bridges. In case of a hack or exploit on an individual bridge resulting in the depegging of a corresponding Fragmented Asset, MACC will pause the conversion to Canonical asset from that specific token to prevent further losses for users and to avoid off-ramping hacked assets. To protect users who converted their assets to the Canonical Token before a hack, our treasury will cover the potential depegging of the Canonical Token."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Following infographics aims to show how MACC and Treasury works:")),(0,o.kt)("img",{src:v,className:"img-full",alt:"Macc-info"}),(0,o.kt)("p",null,"Users can convert back to any Fragmented asset (e.g. ceUSDC) on a daily basis, provided that the specific token has achieved sufficient liquidity and has not been impacted by a hack on its corresponding bridge."),(0,o.kt)("p",null,"The amount of assets that can be converted to MACC from each bridge depends on the amount of assets in the treasury at each time. For instance, if there are three bridges, the maximum amount of assets that can be converted from each bridge will be determined by the Treasury cap."),(0,o.kt)("p",null,"If one of the bridges is hacked and suffers losses (up to one-third of the collateral), the treasury must have enough money to cover those losses completely."),(0,o.kt)("p",null,"The smart contracts have a limit on the amount of Fragmented tokens that can be converted to Canonical representation, which ensures that the exposure to any one Fragmented token is limited. This limit is determined by setting a cap on the amount of Canonical tokens."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Milkomeda Assets Consolidation Contracts limits the exposure to the fragmented token by setting a cap on the canonical token. The limit of fragmented token is then cap / (# of canonical token fragmentations).")),(0,o.kt)("p",null,"In addition, each conversion made through MACC incurs a small commission, which is collected and deposited into the Treasury. In the event of a hack on one of the whitelisted bridges, these funds are used to cover the value of the affected assets, helping to maintain the price of the canonical asset and preserving user trust."),(0,o.kt)("h4",{id:"list-of-supported-fragmented-tokens-in-macc"},"List of supported Fragmented tokens in MACC:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Token name"),(0,o.kt)("th",{parentName:"tr",align:null},"Token Ticker"),(0,o.kt)("th",{parentName:"tr",align:null},"Contract Address Details"),(0,o.kt)("th",{parentName:"tr",align:null},"Token Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Canonical Token Representation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://cbridge.celer.network/"},"ceUSDC")),(0,o.kt)("td",{parentName:"tr",align:null},"ceUSDC"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://explorer-mainnet-cardano-evm.c1.milkomeda.com/address/0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98/transactions"},"0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98")),(0,o.kt)("td",{parentName:"tr",align:null},"ERC-20"),(0,o.kt)("td",{parentName:"tr",align:null},"mUSDC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://multichain.org/"},"multiUSDC")),(0,o.kt)("td",{parentName:"tr",align:null},"multiUSDC"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://explorer-mainnet-cardano-evm.c1.milkomeda.com/address/0xB44a9B6905aF7c801311e8F4E76932ee959c663C/transactions"},"0xB44a9B6905aF7c801311e8F4E76932ee959c663C")),(0,o.kt)("td",{parentName:"tr",align:null},"ERC-20"),(0,o.kt)("td",{parentName:"tr",align:null},"mUSDC")))),(0,o.kt)("h4",{id:"list-of-macc-canonical-tokens"},"List of MACC Canonical tokens:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Token name"),(0,o.kt)("th",{parentName:"tr",align:null},"Token Ticker"),(0,o.kt)("th",{parentName:"tr",align:null},"Contract Address Details"),(0,o.kt)("th",{parentName:"tr",align:null},"Token Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Fragmented Tokens Allowed"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://macc.milkomeda.com/convert"},"mUSDC")),(0,o.kt)("td",{parentName:"tr",align:null},"mUSDC"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://explorer-mainnet-cardano-evm.c1.milkomeda.com/address/0x063139a927FE02B3a6A5E0d5B48c8BeDFA7de954/transactions"},"0x063139a927FE02B3a6A5E0d5B48c8BeDFA7de954")),(0,o.kt)("td",{parentName:"tr",align:null},"ERC-20"),(0,o.kt)("td",{parentName:"tr",align:null},"ceUSDC, multiUSDC")))),(0,o.kt)("h2",{id:"step-by-step-guide"},"A Comprehensive Step-by-Step Guide to the MACC DApp"),(0,o.kt)("p",null,"To begin using the MACC DApp, you will need an asset that is supported by the platform (currently only bridged USDC), as well as some mADA to cover the network transaction fee. To interact with MACC DApp you can use Metamask, Flint, NuFi or Wallet Connect."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following article presents a step-by-step guide for using MACC DApp on Milkomeda C1 devnet, where TKNA (devnet representation of ceUSDC) and TKNB (devnet representation of multiUSDC) represent the fragmented assets that are accepted by the whitelisted bridges, while MRGER is a Canonical Representation (on mainnet - mUSDC).")),(0,o.kt)("h4",{id:"step-1--connect-your-wallet"},"Step 1 : Connect your Wallet"),(0,o.kt)("p",null,"To get started with the MACC DApp, go to the ",(0,o.kt)("a",{parentName:"p",href:"https://milkomeda-macc.pages.dev"},"MACC homepage"),"."),(0,o.kt)("p",null,'Once you arrive there, you\'ll need to connect your wallet to proceed. To do this, you have two options. You can either click the "Connect Wallet" button located in the top right corner of the connect page, or you can go directly to the converting page.'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The hero section of the MACC now includes a data section that provides valuable information at a glance. This section allows you to quickly check which bridgers are currently supported by the MACC, as well as the number of assets that have been converted from each of them. In addition, you can easily review the available liquidity and cap for the Canonical Token, as well as the balance of the Treasury.")),(0,o.kt)("img",{src:s,className:"img-full",alt:"Macc-hero"}),(0,o.kt)("p",null,"Please be aware that in order to connect to the MACC DApp, you must use one of our currently supported wallets, such as Metamask, Wallet Connect, or Flint. Once you have selected your preferred wallet, you can proceed to the convert page and begin converting your assets."),(0,o.kt)("img",{src:i,className:"img-full",alt:"Choose your Wallet"}),(0,o.kt)("h4",{id:"step-2--select-the-fragmented-asset-you-wish-to-convert"},"Step 2 : Select the Fragmented asset you wish to convert"),(0,o.kt)("p",null,"To start converting your Fragmented asset use the Select ERC-20 drop-down and choose the asset you want to convert."),(0,o.kt)("img",{src:r,className:"img-full",alt:"Click asset dropdown"}),"To begin the conversion process, select the asset you wish to convert from the drop-down menu. For the purpose of this tutorial, we will be converting TKNA, which represents one of the fragmented assets of Bridge A.",(0,o.kt)("img",{src:l,className:"img-full",alt:"Select asset"}),(0,o.kt)("p",null,"Once you have selected the fragmented asset and entered the amount you wish to convert, the MACC DApp's user interface will calculate the amount of Canonical Token you will receive in return. As shown on the following screen, the Canonical Token (pre-populated as MRGER token) will be displayed after you have entered the required amount to be converted."),(0,o.kt)("img",{src:c,className:"img-full",alt:"Summary of conversion"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"On the mainnet deployment, you should see mUSDC, which represents the Canonical token of USDC-fragmented assets.")),(0,o.kt)("p",null,"Once you enter the desired amount for conversion, the UI will display supplementary information."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The top corner of the "Convert to Standard USD" tab conveniently displays your wallet\'s balance for the chosen fragmented asset.'),(0,o.kt)("li",{parentName:"ul"},"Below the chosen Canonical Token, you will see its available liquidity.\n",(0,o.kt)("em",{parentName:"li"},"If the amount you enter exceeds the available liquidity, you will receive a message informing you of this fact.")),(0,o.kt)("li",{parentName:"ul"},"You can also choose a custom receiver."),(0,o.kt)("li",{parentName:"ul"},"The DApp UI will display converting details such as the assets you are converting, the typed amount, contract addresses, conversion rate, commission percentage, and estimated network fee.")),(0,o.kt)("p",null,"Before proceeding with the conversion, please double-check all the information displayed on the DApp UI and make sure you are familiar with the Terms of Use. In the next step, you will need to accept the ToU to be able to convert your fragmented assets."),(0,o.kt)("img",{src:d,className:"img-full",alt:"Ready for conversion"}),(0,o.kt)("h4",{id:"step-3--convert-your-fragmented-assets"},"Step 3 : Convert your Fragmented Assets"),(0,o.kt)("p",null,"To initiate the conversion process, you will need to accept two transactions. The first transaction permits the DApp to access the tokens in your wallet, and once the network confirms this transaction, you will be prompted to accept the conversion transaction. This two-step process is standard to ensure that no DApp can empty a connected wallet without the user's approval."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"3.1. Set a spending cap for your Fragmented asset")),(0,o.kt)("img",{src:p,className:"img-full",alt:"Set spending cap"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"3.2 Confirm the conversion transaction in your Metamask wallet.")),(0,o.kt)("img",{src:m,className:"img-full",alt:"Confim the transaction"}),(0,o.kt)("h2",{id:"success-you-converted-your-fragmented-assets"},"Success! You converted your Fragmented assets"),(0,o.kt)("p",null,"After the conversion transaction has been confirmed on the network, you can view the summary of your conversion.\nAs a final step, and this only needs to be done the first time you convert to a particular canonical asset, you need to add the canonical asset to your wallet.\nTo add the Canonical Token to your MetaMask wallet, simply click ",(0,o.kt)("strong",{parentName:"p"},"+ Add token to wallet.")," MetaMask will prompt you to add a custom token to your wallet, and you'll be able to view its balance immediately."),(0,o.kt)("img",{src:u,className:"img-full",alt:"Add token"}),(0,o.kt)("h2",{id:"macc-dapp-transaction-history"},"MACC DApp Transaction History"),(0,o.kt)("p",null,'Once you have completed your first successful conversion, you can easily track it by visiting the MACC Transaction History Tab. To access this page, simply click on the "Transaction History" from the main navbar or click this ',(0,o.kt)("a",{parentName:"p",href:"https://milkomeda-macc.pages.dev/history."},"link"),", you will be able to view all Milkomeda's Assets Consolidation Contracts transactions."),(0,o.kt)("img",{src:h,className:"img-full",alt:"Transaction history"}),(0,o.kt)("h2",{id:"converting-canonical-assets-back-fragmented-version"},"Converting Canonical assets back Fragmented version"),(0,o.kt)("p",null,"To convert canonical assets back into a fragmented asset, follow a similar process as mentioned above, with the only difference being that you can convert to a different fragmented asset than the one you originally converted from."),(0,o.kt)("h4",{id:"step-1-to-begin-select-the-convert-back-to-erc20-tab-on-the-macc-dapp"},'Step 1: To begin, select the "Convert back to ERC20" tab on the MACC DApp.'),(0,o.kt)("img",{src:g,className:"img-full",alt:"Convert back tab"}),(0,o.kt)("h4",{id:"step-2-select-canonical-asset"},"Step 2: Select Canonical asset"),(0,o.kt)("p",null,"To begin, choose the canonical asset that you want to convert from the token selector located at the top. For the purposes of this tutorial, we will be using the MRGER token (canonical asset) that was received earlier. It is important to note that the MACC DApp will support multiple canonical assets in the future."),(0,o.kt)("img",{src:f,className:"img-full",alt:"Select canonical asset"}),(0,o.kt)("h4",{id:"step-3-select-fragmented-asset"},"Step 3: Select Fragmented asset"),(0,o.kt)("p",null,"Now you need to select which Fragmented asset you want to convert your Canonical asset back to."),(0,o.kt)("img",{src:k,className:"img-full",alt:"Select fragmented asset"}),(0,o.kt)("p",null,"When you open the Fragmented token drop-down, you'll see a list of supported Fragmented assets that you can convert your Canonical asset back to."),(0,o.kt)("p",null,"However, please keep in mind the following rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Fragmented token must have sufficient liquidity for the conversion to occur."),(0,o.kt)("li",{parentName:"ul"},"The Fragmented token must not have been compromised by any hacking or exploitation attempts.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:"),"\nIf you aim to convert 300 MRGER to Token A, but the current available liquidity for Token A is lower than the desired conversion amount, you will only be able to convert up to the maximum liquidity available. In case you try to convert more than the available liquidity, the DApp UI will display a warning message to alert you."),(0,o.kt)("img",{src:y,className:"img-full",alt:"Select fragmented asset"}),(0,o.kt)("p",null,"To convert your Canonical asset back to Fragmented tokens, follow the same process as converting Fragmented tokens to their Canonical representation."),(0,o.kt)("p",null,"In this example, we will convert 60 MRGER tokens back to Token A."),(0,o.kt)("p",null,"After the network has processed your transaction, you have successfully converted your Canonical asset back to a Fragmented token. If this is the first time you have held this Fragmented token in your wallet, you can add it to your MetaMask by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Add token to wallet")," button."),(0,o.kt)("img",{src:b,className:"img-full",alt:"Success"}),(0,o.kt)("p",null,'Once you have completed your conversion, you can easily track it by visiting the MACC Transaction History Tab. To access this page, simply click on the "Transaction History" from the main navbar or click this ',(0,o.kt)("a",{parentName:"p",href:"https://milkomeda-macc.pages.dev/history."},"link"),", you will be able to view all Milkomeda's Assets Consolidation Contracts transactions."),(0,o.kt)("h3",{id:"summary"},"Summary:"),(0,o.kt)("p",null,"Canonical smart contracts and the MACC DApp solve the persistent problem of fractionalized assets and improve the DeFi experience on Milkomeda for all involved while help protect your assets from potential bridge exploits!\nThis guide provides step-by-step instructions for converting fragmented tokens to their canonical representation and back, using the Milkomeda's Assets Canonicalization Contract (MACC) DApp."))}M.isMDXComponent=!0}}]);