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
import { Redirect, Link } from "react-router-dom";
import { getShippingAddress } from "../../Services/userServices";
import DOMPurify from "dompurify";

function successPage(props) {

  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [redirect, setredirect] = useState(null);
  const [save, setSave] = useState(false);
  const [address, setAddress] = useState("");

  const getAddress = async () => {
    setAddress(props.location.obj.shippingAddress);
  };
  useEffect(() => {
    console.log(user);
    if (user && !isLoading) {
      setredirect("/");
      getAddress();
    } else {
      setredirect("/success");
    }
  }, [user, isLoading]);
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  return (
    <>
      {user && (
        <Container>
          <h1
            style={{
              marginLeft: "50px",
              color: "grey",
              font: "Gill Sans-Regular",
              marginTop: "20px",
            }}
          >
            Success
          </h1>

          <div className="overall">
            <div className="image">
              <img
                style={{ marginTop: "100px", marginLeft: "100px" }}
                src={"/images/succ.png"}
                style={{ height: "300px", width: "310px" }}
                className="cross-image"
                alt="card"
              />
            </div>

            <div className="info">
              {/* <h1
                style={{
                  marginLeft: "100px",
                  color: "Black",
                  font: "Gill Sans-Regular",
                  marginTop: "20px",
                }}
              >
                Generic Product name
              </h1>
              <h4
                style={{
                  marginLeft: "100px",
                  color: "grey",
                  font: "Gill Sans-Regular",
                  marginTop: "10px",
                }}
              >
                Generic Product info will be presented here
              </h4> */}

              {/* Divider */}
              {/* <h1 style={{ width: "2px", height:"2px"}}></h1> */}

              {/* User Information */}

              <h3
                style={{
                  marginLeft: "100px",
                  color: "Black",
                  font: "Gill Sans-Light",
                }}
              >
                {" "}
                {user.displayName}
              </h3>
              {/* <h5
                
              >
                {address} */}
              <div
                style={{
                  marginLeft: "100px",
                  color: "grey",
                  font: "Gill Sans-Light",
                  marginTop: "0px",
                }}
                className="preview"
                dangerouslySetInnerHTML={createMarkup(address)}
              ></div>
              {/* </h5> */}

              {/* Divider */}
              {/* <h1 style={{ width: "2px", height:"2px"}}></h1> */}

              {/* Payment Info */}
              <h1
                style={{
                  marginLeft: "100px",
                  color: "Orange",
                  font: "Gill Sans-Regular",
                  fontStyle: "Italic",
                  marginTop: "20px",
                }}
              >
                Payment Processed!!
              </h1>
              <p
                style={{
                  marginLeft: "100px",
                  color: "Orange",
                  fontStyle: "Italic",
                  font: "Gill Sans-Regular",
                }}
              >
                Will reach you in 5-7 working days
              </p>

              {/* Buttons  */}

              <Button
                style={{
                  backgroundColor: "Maroon",
                  color: "white",
                  font: "Gill Sans - Light",
                  marginLeft: "100px",
                  marginTop: "15px",
                }}
              >
                <Link to="/listing" activeClassName="current">
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default successPage;
