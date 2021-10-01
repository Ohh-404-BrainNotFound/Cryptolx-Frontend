import {
  Grid,
  Header,
  Image,
  Message,
  Container,
  Segment,
  Form,
  Button,
} from "semantic-ui-react";
import { signInWithGoogle } from "../../Services/auth";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../Provider/userCheck";
import { Redirect } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router";
// import "./Login.css"

const LoginPage = () => {
  const history = useHistory();
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [redirect, setredirect] = useState(null);

  useEffect(() => {
    if (user && !isLoading) {
      setredirect("/dashboard");
      history.push("/dashboard");
    } else {
      history.push("/login");
      setredirect("/login");
    }
  }, [user, isLoading]);

  const googleSignIn = () => {
    try {
      signInWithGoogle();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "70vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Container textAlign="center">
          <Header as="h2" color="teal" textAlign="center">
            Welcome user let's getin with google
          </Header>
          <Container textAlign="center">
            <Segment>
              <img
                onClick={() => googleSignIn()}
                className="google-login"
                alt="sign in with google"
                src="/images/google.png"
              />
            </Segment>
          </Container>
        </Container>
        <Message>Login and enjoy our service</Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginPage;
