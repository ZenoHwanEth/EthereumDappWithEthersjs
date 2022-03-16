const { ethers } = require("hardhat");

async function main() {
  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts, 
    So whitelistContract here is a factory for instances of our Whitelist contract
   */
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  // here we deploy the contract
  const deployedWhiteListContract = await whitelistContract.deploy(10);
  // 10 is the Maximum number of whitelisted address allowed

  // Wait for it to finish deploying
  await deployedWhiteListContract.deployed();

  // print the address of the deployed contract
  console.log("Whitelist Contract Address:", deployedWhiteListContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
