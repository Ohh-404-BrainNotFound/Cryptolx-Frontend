import React from "react";
import { Card, Label, Header } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { getImageUrl } from "../../../Services/utils";

const ProductCard = (props) => {

  const [image, setImage] = useState("");

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
          {/* {props.data.description.length > 40
            ? props.data.description.slice(0, 30) + "..."
            : props.data.description} */}
           seller: 
            <p>
            {(props.data.info ? props.data.info : "no info")}
              </p> 
        </Card.Description>
        <Card.Description>
          <span>Ξ{props.data.price}</span>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
