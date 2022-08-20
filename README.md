
// create a next.js app by ( give the name to app)
$ npx create-next-app@latest _name_of_the_app_
$ npm install --global yarn
$ cd _name_of_the_app_
$ yarn add ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers web3modal @openzeppelin/contracts ipfs-http-client axios
$ yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
// create postcss.config.js by
$ npx tailwindcss init -p
// initialize the hardhat by
npx hardhat

**********
// to run hardhat environment 
$ npx hardhat node 

// to deploy the script on Polygon Mumbai testnet by
$ npx hardhat run --network mumbai scripts/deploy.js

// run the app by 
n
$ npm run dev
// now you are good to go with NFT marketplace
