import React, { useState, useEffect, useContext } from "react";
import { Container, Grid, Header, Button } from "semantic-ui-react";
import SoldItem from "./SoldItem/SoldItem";
import { UserContext } from "../../Provider/userCheck";
import { Redirect } from "react-router";
import Loader from "../Shared/Loader/Loader";
import { getSoldItems } from "../../Services/userServices";
// const orderData = require('../../data/ordersData.json');
function OrderPage() {
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [redirect, setredirect] = useState(null);

  const fetchUseritems = async () => {
    setLoading(true);
    let items = await getSoldItems(user.uid);
    setLoading(false);
    console.log("order items are ", items);
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
  }, [user, isLoading]);
  return !loading ? (
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
            const DATA = data.data;
            return (
              <Grid.Row>
                <Container>
                  <SoldItem
                    imgSrc={
                      DATA.image !== "" ? DATA.image : "/images/crypto.png"
                    }
                    name={DATA.name}
                    price={DATA.price}
                    description={DATA.description}
                    date={DATA.date}
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
