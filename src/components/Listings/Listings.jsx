import React, { useState, useEffect } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Card from '../Shared/ProductCard/ProductCard';
import { getItems } from '../../Provider/getItems';
import './Listings.scss';

// let items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const ListingPage = () => {
  let [items, setItems] = useState([]);
  useEffect(() => {
    const getDocuments = async () => {
      const documents = await getItems();
      console.log('In doc', documents);
      if (typeof documents !== 'string') setItems(documents);
    };
    getDocuments();
    return () => {
      console.log('Just a cleanup function');
    };
  }, []);
  return (
    <Container>
      <Header as='h1' style={{ marginTop: '50px' }}>
        <h1 className='listing-heading'> Featured </h1>
      </Header>
      <Grid stackable columns={3}>
        {items.map((item) => {
          return (
            <Grid.Column>
              <Container fluid textAlign='center'>
                {/* <NavLink
                      activeClassName="current"
                    //   to={path}
                    > */}
                <Card />
                {/* </NavLink> */}
              </Container>
            </Grid.Column>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ListingPage;
