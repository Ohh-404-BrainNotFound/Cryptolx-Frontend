import React from "react";
import { Container, Header, Grid } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import Card from "../Shared/ProductCard/ProductCard";
import "./Listings.scss";

let items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const ListingPage = () => {
  return (
    <Container>
      <Header as="h1" style={{ marginTop: "50px" }}>
        <h1 className="listing-heading"> Featured </h1>
      </Header>
      <Grid stackable columns={3}>
        {items.map((item) => {
          return (
            <Grid.Column>
              <Container fluid textAlign="center">
                {/* <NavLink
                      activeClassName="current"
                    //   to={path}
                    > */}
                <Card />
                {/* </NavLink> */}
              </Container>
            </Grid.Column>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ListingPage;
