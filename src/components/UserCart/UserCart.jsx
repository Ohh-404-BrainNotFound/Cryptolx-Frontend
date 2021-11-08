import React from "react";
import {
  Container,
  Header,
  Button,
  Message,
  Modal,
  Icon,
  Input,
  Grid,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader/Loader";
import { useContext } from "react";
import { UserContext } from "../../Provider/userCheck";
import web3 from "../../web3/web3";
import Account from "../../web3/account";
import { Redirect } from "react-router-dom";

// import { useHistory } from "react-router";
import {
  currentCartItems,
  deleteItemFromCart,
  addLabelToItem,
  addItemToUserOrder,
  addItemToSoldItems,
  setShippingAddress,
} from "../../Services/userServices";
import Table from "./Table/Table";

const UserCart = () => {
  const [items, setItems] = useState([]);
  //Info is basically just used to check in if the user is logged in or not.
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [open, setOpen] = useState(false);
  const [shipping, setShipping] = useState("");
  const [totalMoney, setTotalMoney] = useState(0);
  // const history = useHistory();

  const fetchCartItems = async () => {
    let fetchedItem = await currentCartItems(user.uid);
    setItems(fetchedItem);
    console.log("fetchedItem is", fetchedItem);
  };

  const deleteItem = async (itemid) => {
    try {
      console.log("this is", itemid + "and this is", user.uid);
      await deleteItemFromCart(user.uid, itemid);
    } catch (err) {
      console.log(err);
    }
    fetchCartItems();
  };

  const deleteSingleItem = async (itemid) => {
    try {
      console.log("Inside deleteSingleItem", itemid);
      await deleteItemFromCart(user.uid, itemid);
    } catch (e) {
      console.log("Got an error while deleting from cart", e);
    }
  };
  const sendMoney = async (address, price) => {
    const accounts = await web3.eth.getAccounts();
    console.log("this is address", address + " and this is acc" + accounts[0]);
    // also specify how much value need to be paid and to whom need to be paid
    await Account.methods
      .buyCourse(address)
      .send({ from: accounts[0], value: web3.utils.toWei(price, "ether") });
  };
  const handleCheckout = async () => {
    await items.map(async (item) => {
      console.log("INSIDE MAP", item);
      if (item.userId !== undefined && item.userId !== "") {
        await addLabelToItem(item.userId, item.id);
      }
      console.log("this is adding item");
      await addItemToUserOrder(
        item.name,
        item.price,
        item.userId,
        item.address,
        item.description,
        item.image
      );
      await addItemToSoldItems(
        item.name,
        item.price,
        item.userId,
        item.address,
        item.description,
        item.image
      );
      await deleteItem(item.productDocId);
      await sendMoney(item.address, item.price);
      // await deleteSingleItem(item.productDocId);
    });
    fetchCartItems();
    window.location.href = "/success";
  };
  const getMoney = async () => {
    // console.log("Items in getMOney", items);
    await items.map(async (item) => {
      // console.log("TYPEOFPRICE", typeof parseInt(item.price));
      setTotalMoney((prev) => {
        return prev + parseInt(item.price);
      });
    });
  };
  useEffect(() => {
    if (user && !isLoading) {
      fetchCartItems();
    }
  }, [user, isLoading]);

  useEffect(() => {
    getMoney();
  }, [items]);

  const marginTop = {
    marginTop: "10px",
  };

  return (
    <>
      {user && (
        <Container style={marginTop}>
          <Header as="h1">All your added items are here </Header>
          <Table info={items} userid={user.uid} deleteItem={deleteItem} />
          <Header as="h2">Total-Ether: {totalMoney}</Header>

          <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
            trigger={
              <Button
                floated="right"
                color="green"
                icon="forward"
                content="Proceed to Checkout"
              />
            }
          >
            <Header icon>
              <Icon name="archive" />
              Do you want to checkout your cart?
            </Header>
            <Modal.Content>
              <p>
                Your items will be deleted and you will have to perform payment
                through Metamask!!
              </p>
            </Modal.Content>
            <Input
              fluid
              placeholder="Add your shipping address!!"
              value={shipping}
              onChange={(e) => {
                setShipping(e.target.value);
              }}
            />

            <Modal.Actions>
              <Button basic color="red" inverted onClick={() => setOpen(false)}>
                <Icon name="remove" /> No
              </Button>
              <Button
                color="green"
                inverted
                onClick={() => {
                  if (shipping === "")
                    alert("Please enter shipping address first");
                  else {
                    console.log("SHipping in cart", shipping);
                    setShippingAddress(user.uid, shipping);
                    setOpen(false);
                    handleCheckout();
                  }
                }}
              >
                <Icon name="checkmark" /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </Container>
      )}
    </>
  );
};

export default UserCart;
