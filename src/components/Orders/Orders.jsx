import React from 'react';
import { Container, Grid, Header, Button } from 'semantic-ui-react';
import OrderItem from './orderItem/orderItem';
import Card from './similarElement/similarElement';
const orderData = require('../../data/ordersData.json');
const similarItemData = require('../../data/similarItems.json');
function OrderPage() {
  return (
    <div>
      <Container>
        <Header>
          <Grid>
            <Grid.Column width={8} className='left aligned' as='h1'>
              Orders
            </Grid.Column>
            <Grid.Column width={8} className='right aligned'>
              <Button className='primary'>Add Item</Button>
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

      <Container>
        <Header as='h1' style={{ marginTop: '50px' }}>
          <h1 className='listing-heading'> Featured </h1>
        </Header>
        <Grid stackable columns={3}>
          {similarItemData.map((data) => {
            return (
              <Grid.Column>
                <Container fluid textAlign='center'>
                  <Card imgSrc={data.imgSrc} />
                </Container>
              </Grid.Column>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default OrderPage;
