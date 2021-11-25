import React from 'react';
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import './Footer.scss';
function Footer() {
  return (
    <div className='footer'>
      <Segment className='footer_segment center aligned  '>
        <Container className='footer_container'>
          <Grid>
            <Grid.Column width={6} className='left aligned'>
              <Header as='h1' content='CRYPTOLX'></Header>
              <List className='animated'>
                <List.Item as='span'>2719 Bel Meadow Drive</List.Item>
                <List.Item as='span'>Los Angeles CA</List.Item>
                <List.Item as='span'>90017</List.Item>
                <List.Item as='span'>900-309-6214</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header className='hidden'>I am Hidden</Header>
              <List className='animated'>
                {/* <List.Item className='hidden'>I am Hidden</List.Item> */}
                <List.Item as='span'>Buy</List.Item>
                <List.Item as='span'>Sell</List.Item>
                <List.Item as='span'>About Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header className='hidden'>I am Hidden</Header>
              <List className='animated'>
                {/* <List.Item className='hidden'>I am Hidden</List.Item> */}
                <List.Item as='span'>
                  Privacy
                </List.Item>
                <List.Item as='span'>
                  Terms of Use
                </List.Item>
                <List.Item as='span'>Crypto</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header className='hidden'>I am Hidden</Header>
              <List className='animated'>
                {/* <List.Item className='hidden'>I am Hidden</List.Item> */}
                <List.Item as='span'>Facebook</List.Item>
                <List.Item as='span'>Twitter</List.Item>
                <List.Item as='span'>Instagram</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
