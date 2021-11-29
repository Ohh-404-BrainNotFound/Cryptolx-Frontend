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
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { addItem } from "../../Services/userServices";
import { useEffect, useContext } from "react";
import { UserContext } from "../../Provider/userCheck";
import { Redirect } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router";

function AddItem() {
  const info = useContext(UserContext);
  const history = useHistory();
  const { user, isLoading } = info;
  const [redirect, setredirect] = useState(null);
  const [save, setSave] = useState(false);

  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty()
);

const [convertedContent, setConvertedContent] = useState(null);

const handleEditorChange = (state) => {
  setEditorState(state);
  convertContentToHTML();
};

const convertContentToHTML = () => {
  const currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
  setConvertedContent(currentContentAsHTML);
};


  useEffect(() => {
    if (user && !isLoading) {
      setredirect("/");
    } else {
      setredirect("/dashboard");
    }
  }, [user, isLoading]);

  const [itemName, setitemName] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImageName] = useState("");
  const [address, setAddress] = useState("");
  const [images, setImages] = useState([]);

  const saveItem = async () => {
    try {
      setSave(true);
      await addItem(
        itemName,
        price,
        convertedContent,
        user.uid,
        image,
        address,
        `${user.displayName}(${user.email})`        
      );
      setSave(false);
      toast.success("Successfully item added !!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add !!");
      throw new err();
    }
  };

  const handleImage = (e) => {
    if (e.target.files) {
      setImageName(e.target.files[0]);
    }
  };

  const buttonConfig = {
    backgroundColor: "orange",
    color: "white",
    font: "Gill Sans - Light",
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <Toaster />
      <Header style={{ marginLeft: "50px" }} textAlign="center">
        {" "}
        Add item{" "}
      </Header>
      <Form>
        <Button
          icon="backward"
          style={buttonConfig}
          onClick={() => goBack()}
          floated="right"
        />
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
            Product Price (INR)
          </label>
          <input
            type="text"
            name="product-price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          {/* <label style={{ color: "grey", font: "Gill Sans-Light" }}>
            Product Description
          </label>
          <textarea
            type="text"
            name="product-description"
            value={productDescription}
            onChange={(e) => {
              setproductDescription(e.target.value);
            }}
          /> */}
          <Form.Field>
              <label>Describe your Product </label>
              <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                // style={{ height: "50vh" }}
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />
            </Form.Field>
        </Form.Field>
        <Form.Field>
          <label style={{ color: "grey", font: "Gill Sans-Light" }}>
            Enter your account address
          </label>
          <input
            type="text"
            name="account-address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
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
          style={buttonConfig}
          loading={save}
          onClick={() => saveItem()}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddItem;