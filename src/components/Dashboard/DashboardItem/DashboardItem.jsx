import React, { useState, useEffect } from 'react';
import { Image, Grid, Icon, Segment, List } from 'semantic-ui-react';
import './DashboardItem.scss';
import { deleteItem } from "../../../Services/userServices"
import { getImageUrl } from "../../../Services/utils"
import { Link } from "react-router-dom"

function DashboardItem({ imgSrc, name, price, location, data, itemid, fetchItems, userid }) {

  const [image, setImage] = useState("");

  const getImage = async () => {
    let imageLocation = await getImageUrl("itemimage", imgSrc);
    setImage(imageLocation);
  }

  const deleteAddedItem = async () => {
    await deleteItem(userid, itemid);
    fetchItems();
  }

  useEffect(() => {
    getImage();
  },[])

  return (
    <div className='item_container'>
      <Segment>
        <Grid className='item_segment'>
          <Grid.Column width={4}>
            <Image
            src={!!image ? image : "/images/item.png" } 
            />
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
                {data}
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={4} className='right aligned item_icons'>
          <Link to={{pathname: `dashboard/edit-item/${itemid}`, obj: {
                id: itemid,
                name: name,
                price: price,
                description: data,
                userid: userid
                // title: obj.heading,
                // date: obj.date,
                // place: obj.place,
                // text: obj.body,
                // image: obj.img,
                // author: obj.author,
              }}}>
            <Icon name='edit' size='big' ></Icon>
              </Link>
            <Icon name='trash alternate' onClick={() => deleteAddedItem()} size='big'></Icon>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

export default DashboardItem;
