import React from 'react';
import Web3 from 'web3';
import Transaction from '../abis/transaction.json'
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const  loadWeb3 = async () => {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert('Non-eth browser is detected you should try using metamask');
    }
  }
  const [myAddress, setMyAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [toAddress, setToAddress] = useState("");
  const [myBalance, setMyBalance] = useState(0);
  const [instance, setInstance] = useState(null);
  var transaction;
  const loadBlockChainData = async () => {
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      setMyAddress(accounts[0]);
      const networkId = await web3.eth.net.getId();
      const networkData = Transaction.networks[networkId];
      const abi = Transaction.abi;
      const address = networkData.address;
      transaction = new web3.eth.Contract(abi, address);
      setInstance(transaction);
      if(networkData) {
        let balanceOf = await transaction.methods.getBalance().call();
        // console.log(Number(balanceOf).toFixed());
        // console.log(balanceOf);
        setMyBalance(Number(balanceOf).toFixed())
        let balance = await web3.eth.getBalance(accounts[0]);
        // console.log(bala);
        setMyBalance(balance/1000000000000000000)
        // console.log(web3.eth.getBalance(myAddress))
        // 0x0DaB446174e81990AC4E6120383Bf56134e93990
        // let no = Number(balanceOf);
        // console.log(no.toLocaleString())
        // console.log(balanceOf);
        // console.log(Number(no));
        // console.log(web3.utils.toWei(no.toLocaleString().toString(),"ether"));
      } else {
        window.alert("Smart contract not deployed to network");
      }
  }

  const [hash, setHash] = useState("");

  const payToContract = async () => {
    console.log(toAddress+" "+ amount);
    console.log(instance);
    const web3 = window.web3;
    // web3.eth.sendTransaction({to:toAddress, from:myAddress, value: web3.utils.toWei(amount, "ether")})
    // .then(hash =>setHash(hash))
    // console.log(resp);
    // await instance.methods.payToUser(toAddress, web3.utils.toWei(amount, "ether")).send({ from: myAddress, gas: 100000000 });
    await instance.methods.payToContract().send({from: myAddress, value: web3.utils.toWei(amount, "ether"), gas: "1000000" });
  }

  const completeSending = async () => {
    console.log(toAddress+" "+ amount);
    console.log(instance);
    // const web3 = window.web3;
    // web3.eth.sendTransaction({to:toAddress, from:myAddress, value: web3.utils.toWei(amount, "ether")})
    // .then(hash =>setHash(hash))
    // console.log(resp);
    // await instance.methods.payToUser(toAddress, web3.utils.toWei(amount, "ether")).send({ from: myAddress, gas: 100000000 });
    await instance.methods.completetransaction(toAddress).send({from: myAddress, gas: "100000" });
  }

  useEffect(() => {
    loadWeb3();
    loadBlockChainData();
  }, [])

    return (
      <div>
        <div>
          {hash}
          my address: {myAddress} <br />
          my balance: {myBalance}
        </div>
        <label> To address </label> <br />
        <input placeholder="enter amount to add in smart contract" name="amout" onChange={(e) => setAmount(e.target.value)} />
        <button onClick={() => payToContract()} >  add to contract </button>
        <input placeholder="enter to address" type="text" name="address" onChange={(e) => setToAddress(e.target.value)} />
        <button onClick={() => completeSending()} >  transfer </button>
      </div>
    );
}

export default App;
