const networks = {
    c1: {
        chainId: `0x${Number(2001).toString(16)}`,
        chainName: "Milkomeda C1 Mainnet",
        nativeCurrency: {
            name: "milkADA",
            symbol: "mADA",
            decimals: 18
          },
          rpcUrls: ["https://rpc-mainnet-cardano-evm.c1.milkomeda.com"],
          blockExplorerUrls: ["https://explorer-mainnet-cardano-evm.c1.milkomeda.com"]
    },
    c1_testnet: {
        chainId: `0x${Number(200101).toString(16)}`,
        chainName: "Milkomeda C1 Testnet",
        nativeCurrency: {
            name: "mTADA",
            symbol: "mTADA",
            decimals: 18
          },
          rpcUrls: ["https://rpc-devnet-cardano-evm.c1.milkomeda.com"],
          blockExplorerUrls: ["https://explorer-devnet-cardano-evm.c1.milkomeda.com"]
    },
    a1: {
        chainId: `0x${Number(2002).toString(16)}`,
        chainName: "Milkomeda A1 Mainnet",
        nativeCurrency: {
            name: "mALGO",
            symbol: "mALGO",
            decimals: 18
          },
          rpcUrls: ["https://rpc-mainnet-algorand-rollup.a1.milkomeda.com"],
          blockExplorerUrls: ["https://explorer-mainnet-algorand-rollup.a1.milkomeda.com"]
    },
    a1_testnet: {
        chainId: `0x${Number(200202).toString(16)}`,
        chainName: "Milkomeda A1 Testnet",
        nativeCurrency: {
            name: "mTALGO",
            symbol: "mTALGO",
            decimals: 18
          },
          rpcUrls: ["https://rpc-devnet-algorand-rollup.a1.milkomeda.com"],
          blockExplorerUrls: ["https://testnet-algorand-rollup.a1.milkomeda.com"]
    }
  };
  

const changeNetwork = async (networkName) => {
    console.log(networks[networkName])
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName]
          }
        ]
      });
    } catch (err) {
        console.log(err)
    }
  };
  
export { changeNetwork }