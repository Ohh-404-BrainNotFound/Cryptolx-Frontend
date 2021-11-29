import React, { useState, useEffect } from "react";
import {
  Image,
  Grid,
  Icon,
  Segment,
  List,
  Label,
  Modal,
  Button,
} from "semantic-ui-react";
import "./DashboardItem.scss";
import { deleteItem } from "../../../Services/userServices";
import { getImageUrl } from "../../../Services/utils";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { getEthPrice } from '../../../Services/generalServices'

function DashboardItem({
  imgSrc,
  name,
  price,
  location,
  data,
  itemid,
  fetchItems,
  userid,
  isLabel,
}) {
  const [image, setImage] = useState("");
  const [open, setOpen] = useState(false);
  const [ethPrice, setEthprice] = useState(0);

  const getImage = async () => {
    let imageLocation = await getImageUrl("itemimage", imgSrc);
    setImage(imageLocation);
  };

  const getPrice = async () => {
    let price = await getEthPrice();
    setEthprice(price)
  }

  useEffect(() => {
    getPrice()
  },[])

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  const deleteAddedItem = async () => {
    await deleteItem(userid, itemid);
    fetchItems();
  };

  async function handleDelete() {
    await deleteAddedItem();
    setOpen(false);
  }
  useEffect(() => {
    getImage();
  }, []);

  const LabelExampleCorner = () => (
    <Grid columns={2}>
      <Grid.Column>
        <Label as="a" color="red" ribbon>
          Sold Out!!
        </Label>
      </Grid.Column>
    </Grid>
  );

  return (
    <div className="item_container">
      <Segment>
        {isLabel && <LabelExampleCorner />}
        <Grid className="item_segment">
          <Grid.Column width={3}>
            <Image src={!!image ? image : "/images/item.png"} />
          </Grid.Column>

          <Grid.Column width={8} className="item_desciption">
            <List>
              <List.Item as="h2" className="heading_desciption_item">
                Product Name: {name}
              </List.Item>
              <List.Item as="span" className="span_description_item">
                Product Price: {parseFloat(price/ethPrice).toPrecision(6)} ethereum
              </List.Item>
              <List.Item as="span" className="span_description_item">
                About:
                <br /> <br />
                <div
                  className="preview"
                  dangerouslySetInnerHTML={createMarkup(data)}
                ></div>
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={4} className="right aligned item_icons">
            <Link
              to={{
                pathname: `dashboard/edit-item/${itemid}`,
                obj: {
                  id: itemid,
                  name: name,
                  price: price,
                  description: data,
                  userid: userid,
                  // title: obj.heading,
                  // date: obj.date,
                  // place: obj.place,
                  // text: obj.body,
                  // image: obj.img,
                  // author: obj.author,
                },
              }}
            >
              <Icon name="edit" size="big"></Icon>
            </Link>
            <Icon
              style={{ cursor: "pointer" }}
              name="trash alternate"
              onClick={() => setOpen(true)}
              size="big"
            ></Icon>
            <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
            >
              <Modal.Header>
                Are you sure, You want to delete this item?
              </Modal.Header>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                  Nope
                </Button>
                <Button
                  content="Yes, I am sure!"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={handleDelete}
                  positive
                />
              </Modal.Actions>
            </Modal>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

export default DashboardItem;
