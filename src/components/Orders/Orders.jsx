import React, { useState, useEffect, useContext } from "react";
import { Container, Grid, Header, Button } from "semantic-ui-react";
import OrderItem from "./orderItem/orderItem";
import { UserContext } from "../../Provider/userCheck";
import Card from "./similarElement/similarElement";
import { Redirect } from "react-router";
import { getUserOrderItems } from "../../Services/userServices";
// const orderData = require('../../data/ordersData.json');
const similarItemData = require("../../data/similarItems.json");
function OrderPage() {
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [redirect, setredirect] = useState(null);

  const fetchUseritems = async () => {
    setLoading(true);
    let items = await getUserOrderItems(user.uid);
    setLoading(false);
    console.log(items);
    setOrderData(items);
    console.log(items);
    console.log(user);
  };

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        setredirect("/");
      } else {
        fetchUseritems();
      }
    }
  }, []);
  return (
    <div>
      <Container>
        <Header>
          <Grid>
            <Grid.Column width={8} className="left aligned" as="h1">
              Orders
            </Grid.Column>
          </Grid>
        </Header>

        <Grid>
          {orderData.map((data, index) => {
            return (
              <Grid.Row>
                <Container>
                  <OrderItem
                    imgSrc={data.imgSrc}
                    name={data.name}
                    price={data.price}
                    location={data.location}
                    date={data.date}
                  />
                </Container>
              </Grid.Row>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default OrderPage;
