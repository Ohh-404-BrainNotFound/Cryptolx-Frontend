import web3 from "./web3";
import AccountFactory from "../abis/Account.json";

let instance;

instance = new web3.eth.Contract(
  AccountFactory.abi,
  // this is the address where you deployed your contract
  "0x48BFD726909a9e45E1059dc0cFB445c95b3030d4"
);

export default instance;
