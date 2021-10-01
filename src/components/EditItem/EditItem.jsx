import React, { useEffect, useState } from "react";
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
import { Redirect } from "react-router";
import "./EditItem.scss";
import { saveEditedItem } from "../../Services/userServices"
import toast, { Toaster } from "react-hot-toast";

const EditItem = (props) => {

  const [redirect, setRedirect] = useState("");
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({name: "", price: "", description: "", id: ""});

  useEffect(() => {

    if(props) {
      setItem({
        id: props.location.obj.id,
        name: props.location.obj.name,
        price: props.location.obj.price,
        description: props.location.obj.description,
      });
    } else {
      setRedirect("/dashboard");
    }
  },[])

  const saveEditedDetails = async () => {
    try {
      setLoading(true);
      await saveEditedItem(item, props.location.obj.userid);
      setLoading(false);
      toast.success('Successfully item updated !!')
    } catch(err) {
      console.log(err);
      toast.error('Some error occured check console ')
    }

  }

  const editItem = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value.trim(),
    });
  };

  useEffect(() => {
    if(redirect) {
      return <Redirect to={redirect} />
    }
  },[redirect])

  return (
    <Container>
       <Toaster />
      <Header style={{ marginLeft: "50px"}}>Edit Item</Header>
      <Form>
        <Form.Field>
          <label style={{ color: "grey", font: "Gill Sans-Light" }}>
            Product Name
          </label>
          <input type="text" name="name" value={item.name} onChange ={(e) => editItem(e)} />
        </Form.Field>
        <Form.Field>
          <label style={{ color: "grey", font: "Gill Sans-Light" }}>
            Product Price Ξ
          </label>
          <input type="text" name="price" value={item.price} onChange ={(e) => editItem(e)} />
        </Form.Field>
        <Form.Field>
          <label style={{ color: "grey", font: "Gill Sans - Light" }}>
            Product Detail
          </label>
          <textarea value={item.description} name="description" onChange ={(e) => editItem(e)} > </textarea>
        </Form.Field>
        {/* <Button
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
        </Button> */}
        <Divider />
        <Button
          class="ui button"
          type="submit"
          loading = {loading}
          style={{
            backgroundColor: "orange",
            color: "white",
            font: "Gill Sans - Light",
          }}
          onClick = {() => saveEditedDetails()}
        >
        Save Changes
        </Button>
      </Form>
    </Container>
  );
}

export default EditItem;
