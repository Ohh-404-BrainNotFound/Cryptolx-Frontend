import React from "react";
import { Container, Button, Divider } from "semantic-ui-react";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="intro-section">
        <div className="intro-section-image">
          <img src="/images/crypto.png" alt="crypto" />
        </div>
        <div className="intro-section-info">
          <div className="intro-section-info-text">
            <h1> Buy and sell with crypto Now at your finger tips !! </h1>
            <h3> Tried and tested platform  </h3>
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
      <div className="footer">
          Made this shit with 💻 by Noobs 
      </div>
    </div>
  );
};

export default Home;
