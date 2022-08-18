require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString();
const projectId ="1660d50a58f74781bac77bd662f582c2"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks:{
    hardhat:{
      chainId: 1337
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/1660d50a58f74781bac77bd662f582c2',
      accounts:[privateKey]
    },
    mainnet: {
      url: 'https://polygon-mainnet.infura.io/v3/1660d50a58f74781bac77bd662f582c2',
      accounts:[privateKey]
    }, 
  },
  solidity: "0.8.4",
};
