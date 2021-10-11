import React from 'react';
import { Container, Header, Button, Message } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../../components/Shared/Loader/Loader';
import { useContext } from 'react';
import { UserContext } from '../../Provider/userCheck';
// import { useHistory } from "react-router";
import {
  currentCartItems,
  deleteItemFromCart,
} from '../../Services/userServices';
import Table from './Table/Table';

const UserCart = () => {
  const [items, setItems] = useState([]);
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  // const history = useHistory();

  const fetchCartItems = async () => {
    let fetchedItem = await currentCartItems(user.uid);
    setItems(fetchedItem);
    console.log(fetchedItem);
  };

  const deleteItem = async (itemid) => {
    try {
      console.log(itemid);
      await deleteItemFromCart(user.uid, itemid);
      fetchCartItems();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user && !isLoading) {
      fetchCartItems();
    }
  }, [user, isLoading]);

  const marginTop = {
    marginTop: '10px',
  };

  return (
    <>
      {user && (
        <Container style={marginTop}>
          <Header as='h1'>All your added items are here 🤓 </Header>
          <Table info={items} userid={user.uid} deleteItem={deleteItem} />
          <Header as='h2'>Total: Rs</Header>
          <Button floated='right' color='green'>
            Proceed to checkout
          </Button>
        </Container>
      )}
    </>
  );
};

export default UserCart;
