/**
  * @type import('hardhat/config').HardhatUserConfig
  */
  module.exports = {
    solidity: "0.8.3",
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/<key>"
      }
    }
  };
