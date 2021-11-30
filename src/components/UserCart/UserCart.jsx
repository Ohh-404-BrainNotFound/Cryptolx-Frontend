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
  TextArea,
} from "semantic-ui-react";
import "./UserCart.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Loader from "../../components/Shared/Loader/Loader";
import { useContext } from "react";
import { UserContext } from "../../Provider/userCheck";
import web3 from "../../web3/web3";
import Account from "../../web3/account";
import { Redirect } from "react-router-dom";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
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
import { getEthPrice } from "../../Services/generalServices";

const UserCart = () => {
  const [items, setItems] = useState([]);
  const [ethPrice, setEthPrice] = useState(0);
  //Info is basically just used to check in if the user is logged in or not.
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [open, setOpen] = useState(false);
  const [shipping, setShipping] = useState("");
  const [totalMoney, setTotalMoney] = useState(0);
  const [isLoader, setIsLoading] = useState(false);
  const [convertedContent, setConvertedContent] = useState(null);
  const myRef = useRef();
  // const history = useHistory();

  const sleep = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const fetchCartItems = async () => {
    let fetchedItem = await currentCartItems(user.uid);
    setItems(fetchedItem);
  };

  const deleteItem = async (itemid) => {
    try {
      await deleteItemFromCart(user.uid, itemid);
    } catch (err) {
      console.log(err);
    }
    fetchCartItems();
  };
  const getPrice = async () => {
    let price = await getEthPrice();
    setEthPrice(price)
  }

  useEffect(() => {
    getPrice()
  },[])

  const deleteSingleItem = async (itemid) => {
    try {
      await deleteItemFromCart(user.uid, itemid);
    } catch (e) {
      console.log("Got an error while deleting from cart", e);
    }
  };
  const sendMoney = async (address, price) => {
    const accounts = await web3.eth.getAccounts();

    await Account.methods
      .buyCourse(address)
      .send({ from: accounts[0], value: web3.utils.toWei(price, "ether") });
  };
  const handleCheckout = async () => {
    await items.map(async (item) => {
      if (item.userId !== undefined && item.userId !== "") {
        await addLabelToItem(item.userId, item.id);
      }

      // sellarId to get the sellar id
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      let fullDate = `${day}-${month}-${year}.`;
      await addItemToUserOrder(
        item.name,
        item.price,
        // item.userId,
        user.uid,
        item.address,
        item.description,
        item.image,
        // this is product id
        item.id,
        fullDate,
        // this is sellar information
        item.info
      );
      await addItemToSoldItems(
        item.name,
        item.price,
        item.sellarId,
        // item.ownerId,
        // item.userId,
        item.address,
        item.description,
        item.image,
        // this is user id
        user.uid,
        // this is product id
        item.id,
        fullDate,
        //this is buyer information
        `${user.displayName}(${user.email})`,
        convertedContent
        // item.info
      );
      await addLabelToItem(item.sellarId, item.id);
      await deleteItem(item.productDocId);
      let value =  parseFloat(item.price/ethPrice).toPrecision(6);
      await sendMoney(item.address, String(value));
      // await deleteSingleItem(item.productDocId);
    });
    setTotalMoney(0);
    fetchCartItems();
    setIsLoading(true);
    await sleep(20000);
    setIsLoading(false);
    if (myRef !== null && myRef.current !== null) myRef.current.click();
  };
  // const getMoney = async () => {
  //   await items.map(async (item) => {
  //     setTotalMoney((prev) => {
  //       return (prev + parseFloat(item.price/ethPrice)).toPrecision(6);
  //     });
  //   });
  // };
  useEffect(() => {
    if (user && !isLoading) {
      fetchCartItems();
    }
  }, [user, isLoading]);

  // useEffect(() => {
  //   getMoney();
  // }, [items]);

  const marginTop = {
    marginTop: "10px",
  };

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    const currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        user && (
          <Container style={marginTop}>
            <Link
              to={{
                pathname: "/success",
                obj: {
                  shippingAddress: convertedContent,
                },
              }}
              style={{ visibility: "hidden" }}
              ref={myRef}
              activeClassName="current"
            >
              Success
            </Link>
            {items.length > 0 ? (
              <>
                <Header as="h1">All your added items are here </Header>
                <Table info={items} userid={user.uid} deleteItem={deleteItem} />
                {/* <Header as="h2">Total-Ether: {totalMoney}</Header> */}
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
                      Your items will be deleted and you will have to perform
                      payment through Metamask!!
                    </p>
                  </Modal.Content>
                  <label>Provide your address: </label>
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class  wrapper-class-new"
                    // style={{ height: "50vh" }}
                    editorClassName="editor-class editor-class-new"
                    toolbarClassName="toolbar-class toolbar-class-new"
                  />
                  {/* <Input
              fluid
              placeholder="Add your shipping address!!"
              value={shipping}
              onChange={(e) => {
                setShipping(e.target.value);
              }}
            /> */}
                  <Modal.Actions>
                    <Button
                      basic
                      color="red"
                      inverted
                      onClick={() => setOpen(false)}
                    >
                      <Icon name="remove" /> No
                    </Button>
                    <Button
                      color="green"
                      inverted
                      onClick={() => {
                        if (convertedContent === "")
                          alert("Please enter shipping address first");
                        else {
                          setShippingAddress(user.uid, convertedContent);
                          setOpen(false);
                          handleCheckout();
                        }
                      }}
                    >
                      <Icon name="checkmark" /> Yes
                    </Button>
                  </Modal.Actions>
                </Modal>{" "}
              </>
            ) : (
              <Header> No items in your cart right now !!</Header>
            )}
          </Container>
        )
      )}
    </>
  );
};

export default UserCart;
