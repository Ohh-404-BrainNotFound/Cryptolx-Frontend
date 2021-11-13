require("babel-register");
require("babel-polyfill");

module.exports = {
  networks: {
    development: {
      host: "0.0.0.0",
      port: 7545,
      network_id: "*",
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      version: "0.8.9",
    },
  },
};
