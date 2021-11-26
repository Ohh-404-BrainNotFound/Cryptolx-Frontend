require("babel-register");
require("babel-polyfill");

module.exports = {
  networks: {
    development: {
      host: "172.21.96.1",
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
