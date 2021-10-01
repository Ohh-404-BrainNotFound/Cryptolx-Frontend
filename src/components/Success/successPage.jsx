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
import "./successPage.scss";
// import { addItem } from "../../Services/userServices";
import { useEffect, useContext } from "react";
import { UserContext } from "../../Provider/userCheck";
import { Redirect } from "react-router-dom";

function successPage() {
console.log("Here we are")
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [redirect, setredirect] = useState(null);
  const [save, setSave] = useState(false);

  useEffect(() => {
    console.log(user);
    if (user && !isLoading) {
      setredirect('/');
    } else {
      setredirect('/success');
    }
  }, [user, isLoading]);


  return (
    <h1>Hello</h1>
  );
}

export default successPage;
