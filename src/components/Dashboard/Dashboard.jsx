import React from 'react';
import {
  Container,
  Grid,
  Header,
  Image,
  Button,
  Item,
} from 'semantic-ui-react';
import DashboardItem from './DashboardItem/DashboardItem';
const dashboardData = require('../../data/dashboardItems.json');
function Dashboard() {
  return (
    <div>
      <Container>
        <Header>
          <Grid>
            <Grid.Column width={8} className='left aligned' as='h1'>
              Dashboard
            </Grid.Column>
            <Grid.Column width={8} className='right aligned'>
              <Button className='primary'>Add Item</Button>
            </Grid.Column>
          </Grid>
        </Header>

        <Grid>
          {dashboardData.map((data, index) => {
            return (
              <Grid.Row>
                <Container>
                  <DashboardItem
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

export default Dashboard;
