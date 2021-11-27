import React from "react";
import { Container, Button, Divider } from "semantic-ui-react";
import "./Home.scss";
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../Provider/userCheck'
import { Redirect } from "react-router-dom"; 

const Home = () => {
  
  const info = useContext(UserContext);
  const { user, isLoading } = info;
  const [redirect, setredirect] = useState(null);
  
  useEffect(() => {
    if (user && !isLoading) {
        setredirect("/dashboard");
    }
  }, [user, isLoading]);
  
  if(redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <div>
      <div className="intro-section">
        <div className="intro-section-image">
          <img src="/images/crypto.png" alt="crypto" />
        </div>
        <div className="intro-section-info">
          <div className="intro-section-info-text">
            <h1> Buy and sell with crypto Now at your finger tips !! </h1>
            <h3> Feasible and Easy to use  </h3>
          </div>
          <div className="intro-section-info-btn">
            <Button primary size="large">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <Divider />
      <div className="bns-vector">
          <img src="/images/bns.png" alt="bns" className="bns-vector" />
      </div>
    </div>
  );
};

export default Home;
