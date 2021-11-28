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
import { stateFromHTML } from 'draft-js-import-html'
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import { convertToHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { saveEditedItem } from "../../Services/userServices";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const EditItem = (props) => {
  const [redirect, setRedirect] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [item, setItem] = useState({
    name: "",
    price: "",
    description: "",
    id: "",
  });

  const goBack = () => {
    history.goBack();
  }

  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty()
);  

    // useEffect(() => {

    // },[])

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
    if (props) {
      setItem({
        id: props.location.obj.id,
        name: props.location.obj.name,
        price: props.location.obj.price,
        description: props.location.obj.description,
      });
      // let  EditorState.createWithContent(contentState)
      let contentState = stateFromHTML(item.description);
      // EditorState.createWithContent(contentState)
      setEditorState(EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(props.location.obj.description)
        )
      ))
    } else {
      setRedirect("/dashboard");
    }
  }, []);

  const saveEditedDetails = async () => {
    try {
      setLoading(true);
      await saveEditedItem(item, props.location.obj.userid, convertedContent);
      setLoading(false);
      toast.success("Successfully item updated !!");
    } catch (err) {
      console.log(err);
      toast.error("Some error occured check console ");
    }
  };

  const editItem = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value.trim(),
    });
  };

  useEffect(() => {
    if (redirect) {
      return <Redirect to={redirect} />;
    }
  }, [redirect]);

  const buttonConfig = {
    backgroundColor: "orange",
    color: "white",
    font: "Gill Sans - Light",
  };

  return (
    <Container>
      <Toaster />
      <Header style={{ marginLeft: "50px" }}>Edit Item</Header>
      <Form>
          <Button onClick={() =>goBack()} icon="backward" style={buttonConfig} floated="right" />
        <Form.Field>
          <label style={{ color: "grey", font: "Gill Sans-Light" }}>
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={(e) => editItem(e)}
          />
        </Form.Field>
        <Form.Field>
          <label style={{ color: "grey", font: "Gill Sans-Light" }}>
            Product Price Ξ
          </label>
          <input
            type="text"
            name="price"
            value={item.price}
            onChange={(e) => editItem(e)}
          />
        </Form.Field>
        {/* <Form.Field>
          <label style={{ color: "grey", font: "Gill Sans - Light" }}>
            Product Detail
          </label>
          <textarea
            value={item.description}
            name="description"
            onChange={(e) => editItem(e)}
          >
          </textarea> */}
        {/* </Form.Field> */}
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

        <Divider />
        <Button
          class="ui button"
          type="submit"
          loading={loading}
          style={buttonConfig}
          onClick={() => saveEditedDetails()}
        >
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default EditItem;
