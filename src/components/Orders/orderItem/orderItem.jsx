import React, { useState, useEffect } from "react";
import { Image, Grid, Icon, Segment, List, Dropdown } from "semantic-ui-react";
import "./orderItem.scss";
import { getImageUrl } from "../../../Services/utils";
function orderItem({ imgSrc, name, price, description, date }) {

  const statusOptions = [
    {key:1 , text: "dispatced", value: "dispatched"},
    {key:2 , text: "processing", value: "processing"},
    {key:3 , text: "delivered", value: "delivered"},
]

  const [image, setImage] = useState("");

  const getImage = async () => {
    let imageLocation = await getImageUrl("itemimage", imgSrc);
    console.log("INSIDE getimage function");
    setImage(imageLocation);
  };
  useEffect(() => {
    getImage();
  }, []);
  return (
    <div className="item_container">
      <h3> Update Order Status:</h3>
      <Dropdown 
        clearable
        options = {statusOptions}
        disabled
    // placeholder={data.status}
        selection
    // onChange ={(e, info) => handleStatus(e, info, data.id, data.userid)}
    // onChange={(e, dat) => updateStatus( dat.name, data.id, data.userid)}
     />
          <Segment>
        <Grid className="item_segment">
          <Grid.Column width={4}>
            <Image src={!!image ? image : "/images/item.png"} />
          </Grid.Column>

          <Grid.Column width={8} className="item_desciption">
            <List>
              <List.Item as="h2" className="heading_desciption_item">
                Product Name: {name}
              </List.Item>
              <List.Item as="span" className="span_description_item">
               Product Price: {price}
              </List.Item>
              <List.Item as="span" className="span_description_item">
               About: {description}
              </List.Item>
              <List.Item as="span" className="span_description_item">
               Date of ordering: 
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

export default orderItem;
