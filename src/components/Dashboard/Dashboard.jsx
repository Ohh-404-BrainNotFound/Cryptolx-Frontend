import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Provider/userCheck";
import { Redirect } from "react-router";
import {
  Container,
  Grid,
  Header,
  Image,
  Button,
  Item,
} from "semantic-ui-react";
import DashboardItem from "./DashboardItem/DashboardItem";
import { getUserAddedItems, deleteItem } from "../../Services/userServices";
import Loader from "../Shared/Loader/Loader";
// import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import web3 from "../../web3/web3"
import Account from "../../web3/account"

const Dashboard = () => {
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [redirect, setredirect] = useState(null);
  const [userAddedItems, setUserAddedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);
  const [balance, setBalance] = useState(0);

  const fetchAccountBalance = async () => {
    const accounts = await web3.eth.getAccounts();
    let balanceOf = await Account.methods.userMoney(accounts[0]).call();
    setBalance(Number(balanceOf).toFixed()/1000000000000000000);
  }

  const redeemYourBalance = async () => {
    const accounts = await web3.eth.getAccounts();
    await Account.methods.redeemBalance().send({ from: accounts[0]});
    fetchAccountBalance()
  }

  const fetchUseritems = async () => {
    setLoading(true);
    let items = await getUserAddedItems(user.uid);
    setLoading(false);
    console.log(items);
    setUserAddedItems(items);
    console.log(items);
    console.log(user);
  };

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        setredirect("/");
      } else {
        fetchUseritems();
        fetchAccountBalance();
      }
    }
  }, [user, isLoading]);

  return !loading ? (
    <div>
      <Container>
        <Header>
          <Grid>
            <Grid.Column width={8} className="left aligned" as="h1">
              Dashboard
            </Grid.Column>
            <Grid.Column width={8} className="right aligned">
              <Link to="/dashboard/add-item">
              {/* <Link to="/success"> */}
              {/* <Link to="/failure"> */}
                <Button className="primary" icon="add" content="Add item" />
              </Link>
              <Header>Total Earning:  {balance} eth</Header>
              <Button primary content="Redeem All Money"  onClick={() => redeemYourBalance() }  />
            </Grid.Column>
          </Grid>
        </Header>
        {userAddedItems.length > 0 ? (
          <Grid>
            {userAddedItems.map((data, index) => {
              return (
                <Grid.Row>
                  <Container className="red">
                    <DashboardItem
                      imgSrc={data.data.image}
                      name={data.data.name}
                      price={data.data.price}
                      data={data.data.description}
                      itemid={data.id}
                      fetchItems={fetchUseritems}
                      userid={user.uid}
                    />
                  </Container>
                </Grid.Row>
              );
            })}
          </Grid>
        ) : (
          <Header>you haven't added any items till now !!</Header>
        )}
      </Container>
    </div>
  ) : (
    <Loader />
  );
};

export default Dashboard;
