import React, { useState, useEffect } from "react";
import { Image, Grid, Icon, Segment, List, Dropdown } from "semantic-ui-react";
import "./SoldItem.scss";
import { getImageUrl } from "../../../Services/utils";
import DOMPurify from "dompurify";
import { getEthPrice } from '../../../Services/generalServices'
function SoldItem({ imgSrc, soldProductId, name, price, description, date, productId, userId, updateOrderStatus, status, info, index, address }) {
  const statusOptions = [
    {key:1 , text: "dispatced", value: "dispatched"},
    {key:2 , text: "processing", value: "processing"},
    {key:3 , text: "delivered", value: "delivered"},
]
  const [image, setImage] = useState("");
  const [ethPrice, setEthPrice] = useState(0);
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  
  const getPrice = async () => {
    let price = await getEthPrice();
    setEthPrice(price)
  }

  useEffect(() => {
    getPrice()
  },[])

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
  const handleStatus = async (e, info, productId, userId) => {
    await updateOrderStatus(productId, userId, info.value, soldProductId)
  }
  return (
    <div className="item_container">
      <h3> Update Order {index} Status:</h3>
      <Dropdown 
        clearable
        options = {statusOptions}
        placeholder={status}
        selection
        onChange ={(e, info) => handleStatus(e, info, productId, userId)}
    // onChange={(e, dat) => updateStatus( dat.name, data.id, data.userid)}
     />
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
               Product Price: {parseFloat(price/ethPrice).toPrecision(6)}
              </List.Item>
              {/* <List.Item as="span" className="span_description_item">
               About: {description}
              </List.Item> */}
              <List.Item as="span" className="span_description_item">
                Date of purchasing: {date}
              </List.Item>
              <List.Item as="span" className="span_description_item">
                About Buyer: {info}
              </List.Item>
              <List.Item as="span" className="span_description_item">
                Address:
                <br />
                <br />
                <div
            className="preview"
            dangerouslySetInnerHTML={createMarkup(address)}
          ></div>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

export default SoldItem;
