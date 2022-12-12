// https://eth-goerli.g.alchemy.com/v2/yVYRks3W0FCDG7rBTYnQrQc7aVgXY46H

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.17",
  networks: {
  	goerli: {
  		url: 'https://eth-goerli.g.alchemy.com/v2/yVYRks3W0FCDG7rBTYnQrQc7aVgXY46H',
  		accounts: [ '3b678d52055ca6848eb02578ac5b7f3b9734e20c8376dbcc8fee9a7ab4a08dbf' ]
  	}
  }
};
