require("@nomiclabs/hardhat-waffle");

/**
  * @type import('hardhat/config').HardhatUserConfig
  */
  module.exports = {
    defaultNetwork: "hardhat",
    solidity: "0.8.3",
    networks: {
      ropsten: {
        url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
        accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
      }
    },
  };
