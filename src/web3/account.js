import web3 from "./web3";
import AccountFactory from "../abis/Account.json";

let instance;

instance = new web3.eth.Contract(
  AccountFactory.abi,
  // this is the address where you deployed your contract
  "0xD97ea22c3895c44023A4319877f2119501375252"
  // "0x081686d559031cBd7816986442b5Be7cE5066b3F"
  //"0x732499237a58937A9E46556384ed287Bc502EFcc"
);

export default instance;
