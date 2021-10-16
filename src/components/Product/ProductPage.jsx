// import React, { Component } from "react";
// // import "images/neonbrand.jpg" from '/images/neonbrand.jpg';
// import "./product.css";
// export default class Product extends Component {
//   render() {
//     return (
//       <div>
//         <div className="header_section">
//           <img src={"images/neonbrand.jpg"} className="productpicture"></img>

//           <div className=" productname">
//             <h2 className="product_name">SONY Taurus x829 Lens</h2>
//           </div>
//           <div className=" price">
//             <h3 className="product_price">40,000</h3>
//             <h4 className="location_text">Mumbai,India</h4>
//             <h5 className="date">10 Aug,2021</h5>
//           </div>
//         </div>
//         <div className="productdescription">
//           <h3>details</h3>
//         </div>
//         <div className="buynow">
//           <svg
//             className="handshake"
//             xmlns="http://www.w3.org/2000/svg"
//             width="50"
//             height="50"
//             viewBox="0 0 24 24"
//           >
//             <path d="M20.516 13.453l3.484-.891-1.932-7.562-3.526.891.196.753c-1.796.24-2.544-.226-4.459-1.226-.498-.257-.972-.418-1.408-.418-.592 0-1.108.268-1.503.714l-.491.552c-1.956-1.525-3.178-.405-4.505.084-.364.135-.793.185-1.087.202l.173-.662-3.526-.89-1.932 7.562 3.484.891.182-.695c.316.06 1.509.291 1.733.347-.649 1.055.01 2.357 1.199 2.495.226.545.741.932 1.34 1.003.225.544.736.928 1.332.997.33.815 1.305 1.267 2.232.863.352.354.841.537 1.356.537.703 0 1.349-.344 1.674-1.012.574-.12 1.052-.498 1.296-1.01.552-.115 1.031-.47 1.285-1.002.759-.154 1.378-.773 1.457-1.602.031-.312-.03-.624-.155-.91.289-.16 1.442-.647 1.886-.833l.215.822zm.686-6.996l1.338 5.24-1.165.298-1.366-5.237 1.193-.301zm-18.577 5.538l-1.165-.298 1.338-5.24 1.193.301-1.366 5.237zm3.766 2.484c-.294-.221-.331-.645-.08-.942l.61-.749c.249-.298.69-.363.986-.14.295.223.33.644.08.944l-.609.747c-.25.299-.693.361-.987.14zm1.336 1c-.296-.224-.337-.636-.086-.936l.616-.754c.25-.3.69-.363.984-.142.295.222.33.646.082.943l-.617.755c-.25.301-.682.356-.979.134zm1.336 1c-.295-.222-.333-.645-.082-.945l.609-.745c.251-.299.69-.364.986-.142.295.223.331.645.08.944l-.608.747c-.25.3-.691.361-.985.141zm2.93.108l-.61.75c-.251.302-.691.363-.986.142-.295-.222-.331-.645-.082-.943l.612-.751c.252-.298.693-.362.987-.139.296.221.332.644.079.941zm1.28 1.11c-.12.092-.266.138-.415.138-.16 0-.315-.069-.448-.176l.358-.441c.159-.187.269-.412.332-.65l.24.212c.251.285.218.694-.067.917zm3.873-3.017c-.289.222-.719.168-.967-.114l-1.944-1.669c-.16-.138-.37.107-.208.242l1.896 1.628c.248.285.217.696-.068.916-.276.218-.712.181-.969-.114l-1.491-1.308c-.161-.139-.37.102-.213.241l1.457 1.279c.249.285.211.686-.075.909-.28.218-.708.184-.96-.106l-.45-.402-.002-.225c-.089-.78-.711-1.352-1.449-1.434-.224-.547-.737-.93-1.335-.998-.218-.535-.726-.93-1.334-1-.397-.975-1.636-1.334-2.549-.679-.425-.133-1.852-.45-2.434-.564l.836-3.204c.783-.037 1.694-.132 2.902-.705.864-.411 1.278-.599 2.067-.013-.507.507-1.027.955-1.562 1.268-.48.28-.688.837-.531 1.419.181.668.856 1.343 1.96 1.343s2.924-1.014 3.279-1.502c1.472 1.391 2.902 2.684 4.143 3.796.35.39.285.776.001.996zm.526-2.537c-.837-.753-2.728-2.463-3.407-3.143-.289-.288-.691-.619-1.244-.619-.49 0-.878.267-1.128.468-.573.462-2.019 1.378-2.592.92 1.161-.754 2.208-1.943 3.192-3.063.24-.273.587-.219 1.1.044 2.153 1.125 3.007 1.666 5.538 1.394l.779 2.987c-.5.199-1.823.78-2.238 1.012z" />
//           </svg>
//           <h5 className="_text">Buy Now</h5>
//         </div>
//         <div className="makeanoffer">
//           <svg
//             className="handshake"
//             xmlns="http://www.w3.org/2000/svg"
//             width="50"
//             height="50"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 9c5.345 0 10-2.015 10-4.5s-4.655-4.5-10-4.5c-5.344 0-10 2.015-10 4.5s4.656 4.5 10 4.5zm.187-4.019c-.598-.18-2.428-.332-2.428-1.35 0-.568.668-1.074 1.917-1.187v-.444h.642v.422c.468.011.989.062 1.569.18l-.234.685c-.441-.101-.933-.199-1.416-.199l-.145.002c-.962.04-1.041.574-.373.799 1.092.337 2.532.585 2.532 1.479 0 .714-.867 1.097-1.934 1.192v.44h-.642v-.416c-.659-.006-1.353-.113-1.925-.304l.295-.686c.488.125 1.102.253 1.655.253.145 0 .284-.009.417-.028.737-.106.884-.602.07-.838zm-.187 16.019c3.783 0 7.708-.969 10-2.803v1.303c0 2.485-4.655 4.5-10 4.5-5.344 0-10-2.015-10-4.5v-1.304c2.292 1.835 6.217 2.804 10 2.804zm0-10c3.783 0 7.708-.969 10-2.803v1.303c0 2.485-4.655 4.5-10 4.5-5.344 0-10-2.015-10-4.5v-1.303c2.292 1.834 6.217 2.803 10 2.803zm0 5c3.783 0 7.708-.969 10-2.803v1.303c0 2.485-4.655 4.5-10 4.5-5.344 0-10-2.015-10-4.5v-1.304c2.292 1.835 6.217 2.804 10 2.804z" />
//           </svg>
//           <h5 className="_text">Make An Offer</h5>
//         </div>
//         <div className="getsellerinfo">
//           <svg
//             className="handshake"
//             xmlns="http://www.w3.org/2000/svg"
//             width="50"
//             height="50"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
//           </svg>
//           <h5 className="_text">Get Seller Info</h5>
//         </div>
//         <hr className="border"></hr>
//         <h3 className="similar">Similar Items</h3>
//         <div class=" product1">
//           <h3>product1</h3>
//         </div>
//         <div class="product2">
//           <h3>product2</h3>
//         </div>
//         <div class=" product3">
//           <h3>product3</h3>
//         </div>
//       </div>
//     );
//   }
// }

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
import Account from "../../web3/account"
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
  const buyCourse = async()=>{
    const address = creatorAddress;
    await Account.methods.buyCourse(address).call()
  }
  const addToCart = async () => {
    try {
      if (user && !isLoading) {
        let item = await currentCartItems(user.uid);
        let check = false;
        console.log(item);
        item.map((item) => {
          if (item.id === location.productid) { check = true; }
          console.log(item.id+" "+ location.productid);
          // console.log(item);
        });
        console.log(check);
        if (check === true) {
          toast.error(" Already in cart ");
        } else {
          setAdding(true);
          await addItemToCart(user.uid, location.productid, currentItem.name, currentItem.price);
          setAdding(false);
          toast.success("Added item to cart ");
          buyCourse();
        }
      } else {
        toast.error(" please login first ");
      }
    } catch (err) {
      console.log(err);
      toast.error("Fail to add item !! ");
    }
  };

  // const buyThisCourse = async (amt) => {
  //   const accounts = await web3.eth.getAccounts();
  //   setUserAddress(accounts[0]);
  //   await Account.methods.buyCourse(creatorAddress).send({ from: accounts[0], value: web3.utils.toWei(amt, "ether") })
  // }

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
                content={"Add to Cart at Rs " + currentItem.price}
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
