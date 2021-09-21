import React from 'react';
import { Image, Grid, Icon, Segment, List } from 'semantic-ui-react';
import './orderItem.scss';
function orderItem({ imgSrc, name, price, location, date }) {
  return (
    <div className='item_container'>
      <Segment>
        <Grid className='item_segment'>
          <Grid.Column width={4}>
            <Image src={imgSrc} />
          </Grid.Column>

          <Grid.Column width={8} className='item_desciption'>
            <List>
              <List.Item as='h2' className='heading_desciption_item'>
                {name}
              </List.Item>
              <List.Item as='span' className='span_description_item'>
                {price}
              </List.Item>
              <List.Item as='span' className='span_description_item'>
                {location}
              </List.Item>
              <List.Item as='span' className='span_description_item'>
                {date}
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={4} className='right aligned item_icons'>
            <Icon name='edit' size='big'></Icon>
            <Icon name='trash alternate' size='big'></Icon>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

export default orderItem;
