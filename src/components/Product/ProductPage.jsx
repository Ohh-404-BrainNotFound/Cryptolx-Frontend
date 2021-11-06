import React from "react";
import {
  Container,
  Header,
  Segment,
  Divider,
  Form,
  Button,
} from "semantic-ui-react";
// import "./CoursePage.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getAllItems } from "../../Services/generalServices";
import toast, { Toaster } from "react-hot-toast";
import web3 from "../../web3/web3";
import Account from "../../web3/account";
import { addItemToCart, currentCartItems } from "../../Services/userServices";
import "./ProductPage.scss";
import { getImageUrl } from "../../Services/utils";
import Loader from "../Shared/Loader/Loader";
import { useContext } from "react";
import { UserContext } from "../../Provider/userCheck";
import { useHistory } from "react-router";

const ProductPage = () => {
  const [currentItem, setCurrentItem] = useState();
  const { productid } = useParams();
  const info = useContext(UserContext);
  const location = useParams();
  const { user, isLoading } = info;
  const history = useHistory();
  const [adding, setAdding] = useState(false);

  const [image, setImage] = useState("");

  const getImage = async (imageName) => {
    let imageLocation = await getImageUrl("itemimage", imageName);
    setImage(imageLocation);
  };

  // const [userAddress, setUserAddress] = useState("");
  // const [currentCourse, setCurrentCourse] = useState();
  const creatorAddress = "0xc8CAa6a432f301Ca9E96BD396C5A51d1defDB2A1";

  const fetchItemData = async () => {
    let items = await getAllItems();
    let item = items.filter((data) => data.id === productid);
    setCurrentItem(item[0].data);
    getImage(item[0].data.image);
    // console.log(item[0].data);
  };

  const addToCart = async () => {
    try {
      if (user && !isLoading) {
        let item = await currentCartItems(user.uid);
        let check = false;
        console.log(item);
        item.map((item) => {
          if (item.id === location.productid) {
            check = true;
          }
          console.log(item.id + " " + location.productid);
          // console.log(item);
        });
        console.log(check);
        if (check === true) {
          toast.error(" Already in cart ");
        } else {
          setAdding(true);
          await addItemToCart(
            user.uid,
            location.productid,
            currentItem.name,
            currentItem.price,
            currentItem.address,
            currentItem.description,
            image
          );
          setAdding(false);
          toast.success("Added item to cart ");
        }
      } else {
        toast.error(" please login first ");
      }
    } catch (err) {
      console.log(err);
      toast.error("Fail to add item !! ");
    }
  };

  const buyThisProduct = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      // setUserAddress(accounts[0]);
      await Account.methods.buyCourse(currentItem.address).send({
        from: accounts[0],
        value: web3.utils.toWei(currentItem.price, "ether"),
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  // itemPurchased: false,
  useEffect(() => {
    fetchItemData();
  }, []);

  return (
    <>
      {currentItem ? (
        <Container style={{ marginTop: "20px" }}>
          <Toaster />
          <Segment>
            <img
              src={!!image ? image : "/images/item.png"}
              style={{ height: "300px", width: "290px" }}
              className="course-image"
              alt="card"
            />
            <Header as="h1">
              {currentItem.name}
              <Button
                floated="right"
                icon="money"
                loading={adding}
                disabled={currentItem.isPurchased}
                content={"Add to cart Price: " + currentItem.price}
                color="red"
                onClick={() => addToCart()}
              />
            </Header>
            <Divider />
            <Header as="h2">About the Item</Header>
            <p>{currentItem.description}</p>
            <Divider />
          </Segment>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProductPage;
