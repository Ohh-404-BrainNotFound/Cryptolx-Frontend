import React from "react";
import {
  Menu,
  Header,
  Dropdown,
  Form,
  Button,
  Icon,
  Container,
  Divider,
} from "semantic-ui-react";
import "./EditItem.scss";
function EditItem() {
  return (
    <Container>
      <Header style={{ marginLeft: "50px"}}>Edit Item</Header>
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
        <Form.Field>
          <label style={{ color: "grey", font: "Gill Sans - Light" }}>
            Product Detail
          </label>
          <textarea></textarea>
        </Form.Field>
        <Button
          class="ui button"
          type="images"
          content="upload images"
          style={{
            backgroundColor: "maroon",
            color: "white",
            font: "Gill Sans - Light",
          }}
        >
          Upload Images
        </Button>
        <Divider />
        <Button
          class="ui button"
          type="submit"
          style={{
            backgroundColor: "orange",
            color: "white",
            font: "Gill Sans - Light",
          }}
        >
        Save Changes
        </Button>
      </Form>
    </Container>
  );
}

export default EditItem;
