import React, { useState, useEffect, useContext } from "react";
import { Container, Grid, Header, Button, Dropdown } from "semantic-ui-react";
import OrderItem from "./orderItem/orderItem";
import { UserContext } from "../../Provider/userCheck";
import Card from "./similarElement/similarElement";
import { Redirect } from "react-router";
import Loader from "../Shared/Loader/Loader";
import { getUserOrderItems } from "../../Services/userServices";
// const orderData = require('../../data/ordersData.json');
function OrderPage() {

  const statusOptions = [
    {key:1 , text: "dispatced", value: "dispatched"},
    {key:2 , text: "processing", value: "processing"},
    {key:3 , text: "delivered", value: "delivered"},
]

  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [redirect, setredirect] = useState(null);

  const fetchUseritems = async () => {
    setLoading(true);
    let items = await getUserOrderItems(user.uid);
    setLoading(false);
    setOrderData(items);
  };

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        setredirect("/");
      } else {
        fetchUseritems();
      }
    }
  }, [user, isLoading]);
  return !loading ? (
    <div>
      <Container>
        <Header>
          <Grid>
            <Grid.Column width={8} className="left aligned" as="h1">
              Items ordered by you:
            </Grid.Column>
          </Grid>
        </Header>

        <Grid>
          {orderData.map((data, index) => {
            const DATA = data.data;
            return (
              <Grid.Row>
                <Container>
                  <OrderItem
                    imgSrc={
                      DATA.image !== "" ? DATA.image : "/images/crypto.png"
                    }
                    name={DATA.name}
                    price={DATA.price}
                    description={DATA.description}
                    date = {DATA.date ? DATA.date : "no date"}                  
                    status = {DATA.status ? DATA.status :  "no status"}
                    info = {DATA.info ? DATA.info : "no info"}
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
