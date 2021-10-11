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
