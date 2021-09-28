import React from "react";
import { useState } from "react";
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
import { addItem } from "../../Services/userServices";
import { useEffect, useContext } from "react";
import { UserContext } from "../../Provider/userCheck";
import { Redirect } from "react-router-dom";

function AddItem() {
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [redirect, setredirect] = useState(null);
  const [save, setSave] = useState(false);

  useEffect(() => {
    console.log(user);
    if (user && !isLoading) {
      setredirect('/');
    } else {
      setredirect('/dashboard');
    }
  }, [user, isLoading]);

  const [itemName, setitemName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImageName] = useState("");
  const [images, setImages] = useState([]);

  const saveItem = async () => {
    try {
      setSave(true);
      await addItem(itemName, price, productDescription, user.uid, image);
      setSave(false);
    } catch (err) {
      console.log(err);
      throw new err();
    }
  };

  const handleImage = (e) => {
    if (e.target.files) {
      setImageName(e.target.files[0]);
    }
  };

  return (
    <Container>
      <Header style={{ marginLeft: "50px" }}> Add item </Header>
      <Form>
        <Form.Field>
          <label style={{ color: "grey", font: "Gill Sans-Light" }}>
            Product Name
          </label>
          <input
            type="text"
            name="product-name"
            value={itemName}
            onChange={(e) => {
              setitemName(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label style={{ color: "grey", font: "Gill Sans-Light" }}>
            Product Price Ξ
          </label>
          <input
            type="text"
            name="product-price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <label style={{ color: "grey", font: "Gill Sans-Light" }}>
            Product Description
          </label>
          <textarea
            type="text"
            name="product-description"
            value={productDescription}
            onChange={(e) => {
              setproductDescription(e.target.value);
            }}
          />
        </Form.Field>
        <input
          type="file"
          accept="image/*"
          id="upload-img"
          onChange={(e) => handleImage(e)}
        ></input>
        <Divider />
        <Button
          type="submit"
          style={{
            backgroundColor: "orange",
            color: "white",
            font: "Gill Sans - Light",
          }}
          loading = {save}
          onClick={() => saveItem()}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddItem;
