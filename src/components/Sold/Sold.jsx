import React, { useState, useEffect, useContext } from "react";
import { Container, Grid, Header, Button } from "semantic-ui-react";
import SoldItem from "./SoldItem/SoldItem";
import { UserContext } from "../../Provider/userCheck";
import { Redirect } from "react-router";
import Loader from "../Shared/Loader/Loader";
import { getSoldItems, updateOrderTrack } from "../../Services/userServices";
import toast, { Toaster } from "react-hot-toast";
import { getEthPrice } from '../../Services/generalServices'
// const orderData = require('../../data/ordersData.json');
function OrderPage() {
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [redirect, setredirect] = useState(null);
  const [ethPrice, setEthPrice] = useState(0)

  const fetchUseritems = async () => {
    setLoading(true);
    let items = await getSoldItems(user.uid);
    setLoading(false);
   
    setOrderData(items);
   
  };
  const getPrice = async () => {
    let price = await getEthPrice();
    setEthPrice(price)
  }

  useEffect(() => {
    getPrice()
  },[])

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        setredirect("/");
      } else {
        fetchUseritems();
      }
    }
  }, [user, isLoading]);

  const updateOrderStatus = async (productId, userId, status, soldProductId) => {
    try {
      
      await updateOrderTrack(productId, userId, status, soldProductId, user.uid);
      console.log(productId, userId, status, soldProductId, user.uid)
      toast.success("Updated Order Status")
    } catch(err) {
      toast.error("failed to update");
      console.log(err.message)
    }
  }

  // const getTotalPrice = (orders) => {
  //   let value = 0
  //   orders.map((order, index) => {
  //     value += parseFloat(order.data.price/ethPrice).toPrecision(6)
  //   })
    
  //   return value
  // }

  return !loading ? (
    <div>
      <Container>
        <Header>
          <Toaster />
          <Grid>
            <Grid.Column width={8} className="left aligned" as="h1">
              Orders you received:
            </Grid.Column>
            {/* <Grid.Column width={8} className="right aligned" as="h1">
              Total value:
              {getTotalPrice(orderData)} eth
            </Grid.Column> */}
          </Grid>
        </Header>

        <Grid>
          {orderData.map((data, index) => {
            const DATA = data.data;
           
            return (
              <Grid.Row>
                <Container>
                  <SoldItem
                    imgSrc={
                      DATA.image !== "" ? DATA.image : "/images/crypto.png"
                    }
                    soldProductId  = {data.id}
                    name={DATA.name}
                    price={DATA.price}
                    description={DATA.description}
                    date = {DATA.date ? DATA.date : "no date"}
                    productId = { DATA.productId}
                    userId = {DATA.buyerId}
                    updateOrderStatus = {updateOrderStatus}
                    status = {(DATA.status) ? DATA.status : "no status"}
                    info = {DATA.info ? DATA.info : "no info"}
                    index = {index}
                    address = {DATA.deliver ? DATA.deliver : "no address provided"}
                  />
                </Container>
              </Grid.Row>
            );
          })}
        </Grid>
      </Container>
    </div>
  ) : (
    <Loader />
  );
}

export default OrderPage;
