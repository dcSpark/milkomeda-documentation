const networks = {
  mainnet: "0x7c5A3248632Ba3A3e5C5d5A2CA11a9CD628Cb42F",
  devnet: "0xE42f60abfC51c9620706b69aEEEf838D25120150",
};

const addTokenToMM = async (networkName) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    const { ethereum } = window;
    await ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: networks[networkName],
          symbol: `stMADA`,
          decimals: 18,
          //   image: "https://...",
        },
      },
    });
  } catch (ex) {
    console.error(ex);
  }
};

export { addTokenToMM };
