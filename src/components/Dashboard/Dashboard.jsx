import React from 'react';
import { Container, Grid, Header, Segment, Button } from 'semantic-ui-react';
import DashboardItem from './DashboardItem/DashboardItem';
function Dashboard() {
  return (
    <div>
      <Segment>
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
            <Grid.Row>
              <DashboardItem />
            </Grid.Row>
            <Grid.Row>
              <DashboardItem />
            </Grid.Row>
            <Grid.Row>
              <DashboardItem />
            </Grid.Row>
            <Grid.Row>
              <DashboardItem />
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Dashboard;
