import React from 'react';
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';
function Footer() {
  return (
    <div className='footer'>
      <Segment>
        <Container>
          <Grid>
            <Grid.Column width={6}>
              <Header as='h1' content='CRYPTOLX'></Header>
              <List>
                <List.Item as='span'>2719 Bel Meadow Drive</List.Item>
                <List.Item as='span'>Los Angeles CA</List.Item>
                <List.Item as='span'>90017</List.Item>
                <List.Item as='span'>900-309-6214</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <List>
                <List.Item as='span'>Buy</List.Item>
                <List.Item as='span'>Sell</List.Item>
                <List.Item as='span'>About Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <List>
                <List.Item as='span'>Privacy</List.Item>
                <List.Item as='span'>Terms of Use</List.Item>
                <List.Item as='span'>Crypto</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <List>
                <List.Item as='a'>Facebook</List.Item>
                <List.Item as='a'>Twitter</List.Item>
                <List.Item as='a'>Instagram</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
