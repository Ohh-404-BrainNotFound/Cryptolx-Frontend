import { Grid, Header, Image, Message, Container, Segment, Form, Button } from 'semantic-ui-react'
import { signInWithGoogle } from '../../../Services/Consumer/consumerAuth';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../Providers/userProvider'
import { Redirect } from "react-router-dom"; 
import React from "react";
import "./Login.css"

const LoginPage = () => {
  
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [redirect, setredirect] = useState(null);
  
  useEffect(() => {
    if (user && !isLoading) {
        setredirect("/");
    }
  }, [user, isLoading]);

  if (redirect) {
    return <Redirect to={redirect} />;
  }
  return (
    <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Container textAlign="center">
          <Header as='h2' color='teal' textAlign='center'>
            Welcome user let's getin with google
          </Header>
          <Container textAlign="center">
            <Segment>
              <img onClick={signInWithGoogle} className="google-login" alt="sign in with google" src='/images/google.png' />
            </Segment>
          </Container>
        </Container>
        <Message>
          Login and enjoy our service
        </Message>
      </Grid.Column>
    </Grid>
  );
}


export default LoginPage;