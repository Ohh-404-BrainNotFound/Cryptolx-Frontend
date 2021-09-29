import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "../../Provider/userCheck"
import { Redirect } from 'react-router';
import {
  Container,
  Grid,
  Header,
  Image,
  Button,
  Item,
} from 'semantic-ui-react';
import DashboardItem from './DashboardItem/DashboardItem';
import { getUserAddedItems, deleteItem } from "../../Services/userServices"
import Loader from "../Shared/Loader/Loader"
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Dashboard = ()  => {

  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [redirect, setredirect] = useState(null);
  const [userAddedItems, setUserAddedItems] = useState([]);
  const [loading , setLoading] = useState(false);

  const fetchUseritems = async () => {
    setLoading(true);
    let items = await getUserAddedItems(user.uid);
    setLoading(false);
    console.log(items);
    setUserAddedItems(items);
    console.log(items);
    console.log(user);
  }

  useEffect(() => {
    if (!isLoading) {
        if (!user) {
            setredirect("/");
        } else {
            fetchUseritems();
        }
    }
}, [user, isLoading]);

  return ( !loading ? (<div>
    <Container>
      <Header>
        <Grid>
          <Grid.Column width={8} className='left aligned' as='h1'>
            Dashboard
          </Grid.Column>
          <Grid.Column width={8} className='right aligned'>
          <Button warning floated="left">My Cart</Button>
          <Button basic floated="right" >My Orders</Button>
          <Button danger floated="right" >Your Orders</Button>
            <Link to="/dashboard/add-item">
            <Button className='primary'>Add Item</Button>
            </Link>
            <Header>
              Total Earning: 00 eth 
            </Header>
          </Grid.Column>
        </Grid>
      </Header>

      <Grid>
        {userAddedItems.map((data, index) => {
          return (
            <Grid.Row>
              <Container className='red'>
                <DashboardItem
                  imgSrc={data.data.image}
                  name={data.data.name}
                  price={data.data.price}
                  data={data.data.description}
                  itemid = {data.id}
                  fetchItems = {fetchUseritems}
                  userid = {user.uid}
                />
              </Container>
            </Grid.Row>
          );
        })}
      </Grid>
    </Container>
  </div>) :  <Loader />

  );
}

export default Dashboard;
