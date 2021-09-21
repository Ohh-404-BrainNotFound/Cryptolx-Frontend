import React from 'react';
import { Image, Grid, Icon, Segment } from 'semantic-ui-react';
import './DashboardItem.scss';
function DashboardItem({ imgSrc, name, price, location, date }) {
  return (
    <div>
      <Segment>
        <Grid className='item_segment'>
          <Grid.Column width={4}>
            <Image src={imgSrc} />
          </Grid.Column>

          <Grid.Column width={8} className='item_desciption'>
            <Grid>
              <Grid.Row as='h2'>{name} </Grid.Row>
              <Grid.Row as='span'>{price}</Grid.Row>
              <Grid.Row as='span'>{location}</Grid.Row>
              <Grid.Row as='span'>{date}</Grid.Row>
            </Grid>
          </Grid.Column>

          <Grid.Column width={2} className='right aligned item_icons'>
            <Icon name='edit' size='big'></Icon>
            <Icon name='trash alternate' size='big'></Icon>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

export default DashboardItem;
