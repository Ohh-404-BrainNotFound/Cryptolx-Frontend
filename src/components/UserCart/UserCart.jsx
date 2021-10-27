import React from "react";
import { Container, Header, Button, Message } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader/Loader";
import { useContext } from "react";
import { UserContext } from "../../Provider/userCheck";
import web3 from "../../web3/web3";
import Account from "../../web3/account";

// import { useHistory } from "react-router";
import {
  currentCartItems,
  deleteItemFromCart,
  addLabelToItem,
} from "../../Services/userServices";
import Table from "./Table/Table";

const UserCart = () => {
  const [items, setItems] = useState([]);
  //Info is basically just used to check in if the user is logged in or not.
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  // const history = useHistory();

  const fetchCartItems = async () => {
    let fetchedItem = await currentCartItems(user.uid);
    setItems(fetchedItem);
    console.log("fetchedItem is", fetchedItem);
  };

  const deleteItem = async (itemid) => {
    try {
      console.log(itemid);
      await deleteItemFromCart(user.uid, itemid);
      fetchCartItems();
    } catch (err) {
      console.log(err);
    }
  };

  const sendMoney = async (address) => {
    const accounts = await web3.eth.getAccounts();
    await Account.methods.buyCourse(address).send({ from: accounts[0] });
  };
  const handleCheckout = async () => {
    await items.map(async (item) => {
      console.log(item);
      if (item.userId !== undefined) {
        await addLabelToItem(item.userId, item.id);
        await sendMoney(item.address);
      }
    });
  };

  useEffect(() => {
    if (user && !isLoading) {
      fetchCartItems();
    }
  }, [user, isLoading]);

  const marginTop = {
    marginTop: "10px",
  };

  return (
    <>
      {user && (
        <Container style={marginTop}>
          <Header as="h1">All your added items are here </Header>
          <Table info={items} userid={user.uid} deleteItem={deleteItem} />
          <Header as="h2">Total: Rs</Header>
          <Button
            floated="right"
            color="green"
            icon="forward"
            content="Proceed to Checkout"
            onClick={handleCheckout}
          />
        </Container>
      )}
    </>
  );
};

export default UserCart;
