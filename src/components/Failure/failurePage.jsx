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
import "./failurePage.scss";
// import { addItem } from "../../Services/userServices";
import { useEffect, useContext } from "react";
import { UserContext } from "../../Provider/userCheck";
import { Redirect } from "react-router-dom";

function failurePage() {
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [redirect, setredirect] = useState(null);
  const [save, setSave] = useState(false);

  useEffect(() => {
    if (user && !isLoading) {
      setredirect('/');
    } else {
      setredirect('/failure');
    }
  }, [user, isLoading]);


  return (
    <Container>
    <h1 style={{ marginLeft: "50px", color: "grey", font: "Gill Sans-Regular", marginTop: "20px" }}> Failure ></h1>

    <div className="overall">
      <div className="image">
        <img
          style={{marginTop: "100px", marginLeft: "100px"}}
            src={ "/images/ellipse1.png" }
            style={{ height: "240px", width: "230px" }}
            className="cross-image"
            alt="card"/>
        </div>

      <div className="info">
        <h1 style={{ marginLeft: "100px", color: "Black", font: "Gill Sans-Regular", marginTop: "20px" }}>Generic Product name</h1>
        <h4 style={{ marginLeft: "100px", color: "grey", font: "Gill Sans-Regular", marginTop: "10px" }}>Generic Product info will be presented here</h4>

        {/* Divider */}
        {/* <h1 style={{ width: "2px", height:"2px"}}></h1> */}

        {/* User Information */}

        <h3 style={{ marginLeft: "100px", color: "Black", font: "Gill Sans-Light" }}> Divyam Solanki</h3>
        <h5 style={{ marginLeft: "100px", color: "grey", font: "Gill Sans-Light", marginTop:"0px"}}> 143, C Block, Hawa Magri, Sector 12, Udaipur Rajasthan </h5>

        {/* Divider */}
        {/* <h1 style={{ width: "2px", height:"2px"}}></h1> */}

        {/* Payment Info */}
        <h1 style={{ marginLeft: "100px", color: "Orange", fontStyle: "Italic", font: "Gill Sans-Regular", marginTop: "20px" }}>Payment Failed!!</h1>
        <p style={{ marginLeft: "100px", color: "Orange", fontStyle: "Italic", font: "Gill Sans-Regular" }}> We don’t know what went wrong..</p>

        {/* Buttons  */}

        <Button style={{ backgroundColor: "Maroon", color: "white", font: "Gill Sans - Light", marginLeft: "100px", marginTop:"15px" }}>Try Again</Button>
        <Button style={{ backgroundColor: "Maroon", color: "white", font: "Gill Sans - Light", marginLeft: "100px" }}>Continue Shopping</Button>


      </div>
      
    </div>


    </Container>
  );
}

export default failurePage;
