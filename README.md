# NFT Marketplace Project

This project demonstrates a basic Hardhat, nextjs, solidity use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
Stepa and command (dependencies) to create a NFT Marketplaces
```shell
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
```
[screen-capture.webm](https://user-images.githubusercontent.com/99669925/185392916-860ac535-0c93-4150-8757-168ab903722f.webm)

Images of The NFT Marketplace 
![Screenshot from 2022-07-25 21-18-17](https://user-images.githubusercontent.com/99669925/185393096-9f496cec-5148-446a-bf8b-2da911c03010.png)
![Screenshot from 2022-07-25 21-18-23](https://user-images.githubusercontent.com/99669925/185393136-45ffd4b0-a55a-4a7d-9123-df62a8f9660e.png)
![Screenshot from 2022-07-25 21-18-28](https://user-images.githubusercontent.com/99669925/185393154-6eb8c909-f619-493b-9755-59deeb0c15b5.png)
![Screenshot from 2022-07-25 21-18-40](https://user-images.githubusercontent.com/99669925/185393175-ce2d1c3b-f16f-4076-aa99-b46333353f56.png)
...
