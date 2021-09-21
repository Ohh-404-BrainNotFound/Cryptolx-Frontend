import React from "react";
import { Card, Label } from "semantic-ui-react";

const ProductCard = () => {
  return (
    <Card>
      <img
        src={"/images/item.png"}
        style={{ height: "300px", width: "290px" }}
        alt="card"
      />
      <Card.Content>
        <Card.Header>Shit item </Card.Header>
        <Card.Description>This is shit description</Card.Description>
        <Card.Description>
          <span>Ξ150</span>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ProductCard;
