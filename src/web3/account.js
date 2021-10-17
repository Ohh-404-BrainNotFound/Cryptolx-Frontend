import web3 from "./web3";
import AccountFactory from "../abis/Account.json";

let instance;

    instance = new web3.eth.Contract(
      AccountFactory.abi,
      // this is the address where you deployed your contract
      "0x2bE0cC59D8429De6D8173832D80255396B030b65"
    );

export default instance;