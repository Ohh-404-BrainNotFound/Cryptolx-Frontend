import React from "react";
import {
  Menu,
  Dropdown,
  Form,
  Button,
  Icon,
  Header,
  Divider,
  Container,
} from "semantic-ui-react";
import "./AddItem.scss";
function AddItem() {
  return (
    <Container>
      <Header style={{ marginLeft: "50px"}}> Add item </Header>
      <Form>
        <Form.Field>
          <label style={{ color: "grey", font: "Gill Sans-Light" }}>
            Product Name
          </label>
          <input type="text" name="product-name" />
        </Form.Field>
        <Form.Field>
          <label style={{ color: "grey", font: "Gill Sans-Light" }}>
            Product Price Ξ
          </label>
          <input type="text" name="product-price" />
        </Form.Field>
        <Button
          type="images"
          content="Upload Images"
          style={{
            backgroundColor: "maroon",
            color: "white",
            font: "Gill Sans - Light",
          }}
        />
        <Divider />
        <Button
          type="submit"
          style={{
            backgroundColor: "orange",
            color: "white",
            font: "Gill Sans - Light",
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddItem;
