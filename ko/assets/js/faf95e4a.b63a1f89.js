"use strict";(self.webpackChunkmilkomeda_documentation=self.webpackChunkmilkomeda_documentation||[]).push([[9179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,A=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(A,l(l({ref:t},c),{},{components:n})):a.createElement(A,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>y,frontMatter:()=>A,metadata:()=>g,toc:()=>b});var a=n(7462),o=(n(7294),n(3905));const r=n.p+"assets/images/image1-cab92e08f14ccaadff18ad61cb85e100.png",l=n.p+"assets/images/image2-f2b2373453b94d220e3bd53ac430359b.png",i=n.p+"assets/images/image3-9a2b39d3732261b1af1f280dc381452c.png",s=n.p+"assets/images/image4-975ba5c35d8c61e4c87674b7f5bc0c30.png",d=n.p+"assets/images/image6-730bf35c88f91b62df1c00242f83286b.png",c=n.p+"assets/images/image7-65fdba487d9b82bdb5e4ef47614f10e9.png",p=n.p+"assets/images/image8-d4502531f859a2edf7bb6757254485c4.png",u=n.p+"assets/images/image9-f19f8fcfdc199b7f732b04903701ff4a.png",m=n.p+"assets/images/image10-c05ac75390617cd47366dd3bd2668760.png",A={sidebar_label:"EVM-Based dApp on Algorand",sidebar_position:2},h="EVM-Based dApp on Algorand",g={unversionedId:"algorand/guides/evm_based_dapp_algorand",id:"algorand/guides/evm_based_dapp_algorand",title:"EVM-Based dApp on Algorand",description:"Milkomeda A1 Rollup is fully operational on Mainnet, which means that it is currently deployed and connected to production version of the Algorand blockchain.",source:"@site/docs/algorand/guides/evm_based_dapp_algorand.mdx",sourceDirName:"algorand/guides",slug:"/algorand/guides/evm_based_dapp_algorand",permalink:"/ko/algorand/guides/evm_based_dapp_algorand",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"EVM-Based dApp on Algorand",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/ko/category/guides-1"},next:{title:"Adding a subgraph to A1",permalink:"/ko/algorand/guides/add_subgraph_to_milkomeda"}},k={},b=[{value:"Setup an Algorand Wallet",id:"setup-an-algorand-wallet",level:2},{value:"Get Some Testnet ALGO",id:"get-some-testnet-algo",level:2},{value:"Add the Milkomeda Algorand Devnet to Metamask",id:"add-the-milkomeda-algorand-devnet-to-metamask",level:2},{value:"Create a Dummy EVM Account To Test",id:"create-a-dummy-evm-account-to-test",level:2},{value:"Bridge Devnet ALGO to Milkomeda A1",id:"bridge-devnet-algo-to-milkomeda-a1",level:2},{value:"Compile and Deploy to Milkomeda A1 a SimpleStorage Contract Written in Solidity Using Brownie",id:"compile-and-deploy-to-milkomeda-a1-a-simplestorage-contract-written-in-solidity-using-brownie",level:2},{value:"Bonus - Compile the Same Contract Using Vyper and Deploy Using web3py",id:"bonus---compile-the-same-contract-using-vyper-and-deploy-using-web3py",level:2}],f={toc:b};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"evm-based-dapp-on-algorand"},"EVM-Based dApp on Algorand"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Milkomeda A1 Rollup is fully operational on Mainnet, which means that it is currently deployed and connected to production version of the Algorand blockchain.")),(0,o.kt)("p",null,"In this guide, we will show how simple it is to deploy an EVM-based DApp on Milkomeda Algorand Rollup using mostly Python."),(0,o.kt)("h2",{id:"setup-an-algorand-wallet"},"Setup an Algorand Wallet"),(0,o.kt)("p",null,"There are several wallets one can use in Algorand. For an almost complete list, we point readers to the discover > wallets section on the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.algorand.org/"},"Algorand Developer portal"),", but in this example, we will use ",(0,o.kt)("a",{parentName:"p",href:"https://perawallet.app/"},"Pera Wallet"),"."),(0,o.kt)("p",null,"Pera Wallet is a self-custodial wallet, giving you complete control of your crypto. All wallet information is kept securely on your devices. It helps users interact directly with the Algorand blockchain while handling their own private keys by either storing them securely and encrypted in their local browser or by using a Ledger hardware wallet."),(0,o.kt)("p",null,"To set up a wallet:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://web.perawallet.app/"},"https://web.perawallet.app/")," and select \u201cCreate an account\u201d")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose a passcode to encrypt your accounts locally, only on the device you are using")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose an account name")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You should now have an Algorand address like the following image:"),(0,o.kt)("img",{src:r,className:"img-full",alt:"Pera Wallet"}))),(0,o.kt)("h2",{id:"get-some-testnet-algo"},"Get Some Testnet ALGO"),(0,o.kt)("p",null,"Now, go to Settings and change to \u201cTestnet\u201d in Node Settings, and then visit the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.algoexplorer.io/dispenser"},"Algorand Testnet Dispenser")," and paste your newly created account address to get some testnet ALGOs."),(0,o.kt)("img",{src:l,className:"img-full",alt:"Algo Explorer"}),(0,o.kt)("p",null,"You should now be able to see ten testnet ALGOs in your Pera Wallet wallet."),(0,o.kt)("h2",{id:"add-the-milkomeda-algorand-devnet-to-metamask"},"Add the Milkomeda Algorand Devnet to Metamask"),(0,o.kt)("p",null,"In Metamask, go to Settings > Networks > Add Networks and fill in the following information:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Network Name:")," Milkomeda Algorand Devnet",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"New RPC URL:")," ",(0,o.kt)("a",{parentName:"p",href:"https://rpc-devnet-algorand-rollup.a1.milkomeda.com"},"https://rpc-devnet-algorand-rollup.a1.milkomeda.com"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Chain ID:")," 200202",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Currency Symbol (Optional):")," mTALGO",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Block Explorer URL (Optional):")," ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-algorand-rollup.a1.milkomeda.com"},"https://testnet-algorand-rollup.a1.milkomeda.com"))),(0,o.kt)("h2",{id:"create-a-dummy-evm-account-to-test"},"Create a Dummy EVM Account To Test"),(0,o.kt)("p",null,"To test the bridging of wrapped ALGOs to Milkomeda, let\u2019s create a dummy EVM account with a simple Python snippet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import secrets\nfrom sha3 import keccak_256\nfrom coincurve import PublicKey\n\nprivate_key = keccak_256(secrets.token_bytes(32)).digest()\npublic_key = PublicKey.from_valid_secret(private_key).format(compressed=False)[1:]\n\naddr = keccak_256(public_key).digest()[-20:]\n\nprint('private_key:', private_key.hex())\nprint('eth addr: 0x' + addr.hex())\n")),(0,o.kt)("p",null,"This will generate a private key which you can now use to import the account into Metamask."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Important:")," Please do not use an account generated like this for real funds. The randomness of the proposed process is insufficient to ensure the security of your funds.")),(0,o.kt)("h2",{id:"bridge-devnet-algo-to-milkomeda-a1"},"Bridge Devnet ALGO to Milkomeda A1"),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://algorand-bridge-dev.milkomeda.com/"},"Milkomeda A1 bridge DApp")," and follow these steps:"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"Select \u201cDevnet\u201d in top right select box"),(0,o.kt)("li",{parentName:"ol"},"On Network Origin, select \u201cAlgorand to Milkomeda\u201d"),(0,o.kt)("li",{parentName:"ol"},"On Token, select \u201cALGO\u201d and enter desired amount"),(0,o.kt)("li",{parentName:"ol"},"Click \u201cConnect Wallet\u201d Algorand, select Pera Wallet and enter your password"),(0,o.kt)("li",{parentName:"ol"},"Click \u201cConnect Wallet\u201d Metamask to connect to your EVM address on A1"),(0,o.kt)("li",{parentName:"ol"},"Click \u201cNext,\u201d then \u201cSign and Send\u201d"),(0,o.kt)("li",{parentName:"ol"},"Enter your \u201cPera Wallet\u201d password again to sign the transaction"))),(0,o.kt)("p",null,"Assuming the previous steps were executed successfully, you should now be able to see your bridged ALGOs in Metamask. Following the link will show the transaction on the ",(0,o.kt)("a",{parentName:"p",href:"https://bridge-explorer.milkomeda.com/algorand-devnet"},"A1 Bridge Explorer"),"."),(0,o.kt)("img",{src:i,className:"img-full",alt:"Confirmation"}),(0,o.kt)("h2",{id:"compile-and-deploy-to-milkomeda-a1-a-simplestorage-contract-written-in-solidity-using-brownie"},"Compile and Deploy to Milkomeda A1 a SimpleStorage Contract Written in Solidity Using Brownie"),(0,o.kt)("p",null,"Assuming one doesn\u2019t have Brownie installed, create a virtual environment and install Brownie by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python -m venv venv\nsource venv/bin/activate\npip install eth-brownie\n")),(0,o.kt)("p",null,"Initialize a brownie project in a new working directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brownie init milkomeda && cd milkomeda\n")),(0,o.kt)("p",null,"Now let\u2019s create a very simple Solidity contract. In the contracts folder, create a file called Storage.sol, and add the following solidity code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// SPDX-License-Identifier: GPL-3.0\npragma solidity ^0.8.0;\n\ncontract Storage {\n    uint256 number;\n\n    function store(uint256 num) public {\n        number = num;\n    }\n\n    function retrieve() public view returns (uint256){\n        return number;\n    }\n}\n")),(0,o.kt)("p",null,"Run the following command from the root of the created working directory to compile the contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brownie compile\n")),(0,o.kt)("p",null,"To check the available networks that are configured in your brownie installation, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brownie networks list\n")),(0,o.kt)("img",{src:s,className:"img-full",alt:"Network List"}),(0,o.kt)("p",null,"Milkomeda A1 will not be available by default, so we need to add it. To do that, either edit the file ~/.brownie/network-config.yaml and add the following lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- name: Milkomeda\n    networks:\n     - name: Algorand Devnet\n       id: milkomeda-algorand-testnet\n       host: https://rpc-devnet-algorand-rollup.a1.milkomeda.com\n       chainid: 200202\n       explorer: https://testnet-algorand-rollup.a1.milkomeda.com\n\n")),(0,o.kt)("p",null,"OR use the brownie CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'brownie networks add Milkomeda milkomeda-algorand-testnet chainid=200202 explorer=https://testnet-algorand-rollup.a1.milkomeda.com host=https://rpc-devnet-algorand-rollup.a1.milkomeda.com name="Milkomeda Testnet"\n')),(0,o.kt)("p",null,"If successful, one should now see it in the list, which can be queried with complete details by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brownie networks list true\n")),(0,o.kt)("img",{src:"data:image/png;base64,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",className:"img-full",alt:"Pera Wallet"}),(0,o.kt)("p",null,"We will add the private key to use the created (EVM) account. Create a file called brownie-config.yml in the root directory, and point to a private key from a .env file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dotenv: .env\nwallets:\n - dummy: ${PRIVATE_KEY}\n")),(0,o.kt)("p",null,"Now, we have everything ready to deploy our Storage smart contract on Milkomeda A1.** "),(0,o.kt)("p",null,"In the scripts folder, create a file named deploy.py, and add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from brownie import Storage, accounts, config\n\ndef main():\n    signer = accounts.add(config["wallets"]["dummy"])\n    Storage.deploy({"from": signer})\n')),(0,o.kt)("p",null,"From brownie, we are importing Storage to be able to use the compiled contract, accounts so we can add the account by private key and config to be able to access the key/value pairs stored in the brownie-config.yml file."),(0,o.kt)("p",null,"Then, we can create the signer account and deploy the contract in the main function."),(0,o.kt)("p",null,"We can now deploy the contract on Milkomeda A1 by running the script from the terminal and indicating the A1 network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brownie run scripts/deploy.py --network milkomeda-algorand-testnet\n")),(0,o.kt)("p",null,"The output should be:"),(0,o.kt)("img",{src:d,className:"img-full",alt:"Contract Deployment"}),(0,o.kt)("p",null,"The contract has been deployed, and you can check the transaction on the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer-devnet-algorand-rollup.a1.milkomeda.com/tx/0x881eaedcdbe6b965d77bf84383d5e4235bb46aeeaaedffddc385ed4ed1b59909"},"A1 Milkomeda Devnet EVM Explorer"),":"),(0,o.kt)("img",{src:c,className:"img-full",alt:"Explorer"}),(0,o.kt)("p",null,"To interact with the smart contract, let\u2019s create a separate file called ",(0,o.kt)("strong",{parentName:"p"},"call.py")," in the scripts directory and add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from brownie import Storage, Contract, accounts, config\n\nsigner = accounts.add(config["wallets"]["dummy"])\n\ndef main():\n    contract_address = "0xE389A7d21a98497d953a3fc3bf283BF5107fc621"\n    storage = Contract.from_abi("Storage", abi=Storage.abi, address=contract_address)\n\n    stored_value = storage.retrieve()\n    print("Current value is:", stored_value)\n\n    storage.store(stored_value + 1, {"from": signer})\n\n    stored_value = storage.retrieve()\n    print("Current value is:", stored_value)\n')),(0,o.kt)("p",null,"The only new import here is the ",(0,o.kt)("strong",{parentName:"p"},"Contract")," class to create the contract object by calling the ",(0,o.kt)("strong",{parentName:"p"},".from_abi")," method, which takes name, abi, and contract address as inputs. The contract address was copied from the deployment output and hard coded here."),(0,o.kt)("p",null,"We then call the retrieve method on our contract to read the stored value in the ",(0,o.kt)("strong",{parentName:"p"},"number")," variable. Then we store a new value and read it again. To call this script from the terminal, run the following in the terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brownie run scripts/call.py --network milkomeda-algorand-testnet\n")),(0,o.kt)("p",null,"The expected output will resemble the following format:"),(0,o.kt)("img",{src:p,className:"img-full",alt:"Call Contract"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations, the contract deployment and interaction on Milkomeda A1 have been completed successfully. This way, we have been able to utilize an EVM-based smart contract on the Algorand blockchain.")),(0,o.kt)("h2",{id:"bonus---compile-the-same-contract-using-vyper-and-deploy-using-web3py"},"Bonus - Compile the Same Contract Using Vyper and Deploy Using web3py"),(0,o.kt)("p",null,"We can now look at an example of deploying the same smart contract but written in Vyper, using only web3py."),(0,o.kt)("p",null,"First, we will need the abi and bytecode of the contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import vyper\n\nsource = \"\"\"\n# @version ^0.3.3\nval: public(uint256)  # 0 to 2 ** 256 - 1\n@external\ndef __init__():\n    self.val = 0\n@external\n@view\ndef retrieve() -> uint256:\n    return self.val\n@external\ndef store(_val: uint256) -> uint256:\n    self.val = _val\n    return self.val\n\"\"\"\n\ncompiled = vyper.compile_code(source, output_formats=['abi','bytecode'])\nabi = compiled.get('abi')\nbytecode = compiled.get('bytecode')\n")),(0,o.kt)("p",null,"Now let\u2019s connect to the Milkomeda A1 through the RPC URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from web3 import Web3\n\nrpc_url = "https://rpc-devnet-algorand-rollup.a1.milkomeda.com"\nchain_id = 200202\n\nweb3 = Web3(Web3.HTTPProvider(rpc_url))\nprint("Connected to Milkomeda:", web3.isConnected())\nSet up the account from the generated private key (assuming it\u2019s in the .env file)\n\n\nfrom eth_account import Account\nfrom eth_account.signers.local import LocalAccount\nfrom dotenv import dotenv_values\n\nconfig = dotenv_values(".env")\nprivate_key = config[\'PRIVATE_KEY\']\n\naccount: LocalAccount = Account.from_key(private_key)\nprint(f"Your wallet address is {account.address}")\n\nbalance = web3.eth.get_balance(account.address)\nprint(f"Balance: {web3.fromWei(balance, \'ether\'):,.5}")\n')),(0,o.kt)("p",null,"Create the contract instance from the abi and bytecode and call the constructor function to deploy the contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"contract = web3.eth.contract(abi=abi, bytecode=bytecode)\ntransaction = contract.constructor().build_transaction({\n    \"from\": account.address,\n    'nonce' : web3.eth.getTransactionCount(account.address),\n    'gas': 90000,\n    'gasPrice': web3.toWei(50, 'gwei'),\n    'chainId': chain_id\n    })\nsigned_tx = web3.eth.account.sign_transaction(transaction, private_key)\n\ntx_hash = web3.eth.send_raw_transaction(signed_tx.rawTransaction)\nprint(f\"Waiting for transaction {web3.toHex(tx_hash)} to be included in a block...\") \nresponse = web3.eth.wait_for_transaction_receipt(web3.toHex(tx_hash))\ncontract_address = response.get('contractAddress')\nprint(\"Contract deployed at:\", contract_address)\n")),(0,o.kt)("p",null,"Until this point, the code would produce the following output:"),(0,o.kt)("img",{src:u,className:"img-full",alt:"Deploy"}),(0,o.kt)("p",null,"and we can look up the transaction or the deployed contract on the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer-devnet-algorand-rollup.a1.milkomeda.com/address/0x39013492b1bC84D9dF64d79e67D99f71F71BDA8B"},"A1 Devnet EVM Explorer")),(0,o.kt)("p",null,"Now to interact with the contract, we can call the retrieve function to get the stored value, change the value with the store function and then retrieve the value again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"deployed_contract = web3.eth.contract(abi=abi, address=contract_address)\nstored_value = deployed_contract.functions.retrieve().call()\nprint(\"Stored value in contract:\", stored_value)\n\nnew_value = stored_value + 1\nprint(\"Calling contract to store the value\", new_value)\n\ntxn = deployed_contract.functions.store(new_value).build_transaction({\n    \"from\": account.address,\n    'nonce' : web3.eth.getTransactionCount(account.address),\n    'gas': 90000,\n    'gasPrice': web3.toWei(50, 'gwei'),\n    'chainId': chain_id\n    })\nsigned_tx = web3.eth.account.sign_transaction(txn, private_key)\ntx_hash = web3.eth.send_raw_transaction(signed_tx.rawTransaction)\nprint(f\"Waiting for transaction {web3.toHex(tx_hash)} to be included in a block...\") \nresponse = web3.eth.wait_for_transaction_receipt(web3.toHex(tx_hash))\n\nstored_value = deployed_contract.functions.retrieve().call()\nprint(\"New stored value in contract:\", stored_value)\n")),(0,o.kt)("p",null,"The expected output will resemble the following format:"),(0,o.kt)("img",{src:m,className:"img-full",alt:"Deploy Web3"}),(0,o.kt)("p",null,"In this guide, we learned how to deploy a Solidity smart contract on Milkomeda A1, an EVM-compatible rollup on Algorand. First, we set up an Algorand wallet, obtained testnet ALGO, and bridged them to Milkomeda A1. Then, we compiled and deployed a simple Solidity contract called Storage to Milkomeda A1 using the Python-based development framework Brownie."))}y.isMDXComponent=!0}}]);