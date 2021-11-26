import React, { useState, useEffect } from "react";
import { Image, Grid, Icon, Segment, List } from "semantic-ui-react";
import "./SoldItem.scss";
import { getImageUrl } from "../../../Services/utils";
function SoldItem({ imgSrc, name, price, description, date }) {
  const [image, setImage] = useState("");

  const getImage = async () => {
    let imageLocation = await getImageUrl("itemimage", imgSrc);
    setImage(imageLocation);
  };
  useEffect(() => {
    async function call() {
      await getImage();
    }
    call();
  }, []);
  return (
    <div className="item_container">
      <Segment>
        <Grid className="item_segment">
          <Grid.Column width={4}>
            <Image src={image ? image : "/images/item.png"} />
          </Grid.Column>

          <Grid.Column width={8} className="item_desciption">
            <List>
              <List.Item as="h2" className="heading_desciption_item">
               Name: {name}
              </List.Item>
              <List.Item as="span" className="span_description_item">
               Product Price: {price}
              </List.Item>
              {/* <List.Item as="span" className="span_description_item">
               About: {description}
              </List.Item> */}
              <List.Item as="span" className="span_description_item">
                Date of purchasing: {date}
              </List.Item>
              <List.Item as="span" className="span_description_item">
                About Buyer: {date}
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

export default SoldItem;
