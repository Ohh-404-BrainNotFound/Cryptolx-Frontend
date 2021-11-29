import React from "react";
import { Card, Label, Header } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { getImageUrl } from "../../../Services/utils";
import { getEthPrice } from "../../../Services/generalServices";

const ProductCard = (props) => {

  const [image, setImage] = useState("");
  const [ethPrice, setEthPrice] = useState(0)
  const getPrice = async () => {
    let price = await getEthPrice();
    setEthPrice(price)
  }

  useEffect(() => {
    getPrice()
  },[])

  const getImage = async () => {
    let imageLocation = await getImageUrl("itemimage", props.data.image);
    setImage(imageLocation);
  }

  useEffect(() => {
    getImage();
  }, [])



  return (
    <Card>
      {(props.data.label !== undefined) ?
        (props.data.label) ? <Label color="red" floating >
          Sold
        </Label> : null : null
      }

      <img
        src={!!image ? image : "/images/item.png"}
        style={{ height: "300px", width: "290px" }}
        alt="card"
      />
      <Card.Content>
        <Card.Header>{props.data.name} </Card.Header>
        <Card.Description>
           seller: 
            <p>
            {(props.data.info ? props.data.info : "no info")}
              </p> 
        </Card.Description>
        <Card.Description>
          <span>Ξ{parseFloat(props.data.price/ethPrice).toPrecision(6)}</span>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
