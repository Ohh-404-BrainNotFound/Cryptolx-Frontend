import React, { useEffect, useState } from "react";
import { Container, Header, Grid } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import Card from "../Shared/ProductCard/ProductCard";
import "./Listings.scss";
import { getAllItems } from "../../Services/generalServices"
import Loader from "../Shared/Loader/Loader"

let items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const ListingPage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchItems = async () => {
    setLoading(true);
    let data = await getAllItems();
    setLoading(false);
    setProducts(data);
    console.log(data);
  }

  useEffect(() => {
    fetchItems();
  },[])


  return (loading ? <Loader /> :
    <Container>
      <Header as="h1" style={{ marginTop: "50px" }}>
        <h1 className="listing-heading"> Featured </h1>
      </Header>
      <Grid stackable columns={3}>
        {products.map((product) => {
          return (
            <Grid.Column>
              <Container fluid textAlign="center">
                {/* <NavLink
                      activeClassName="current"
                    //   to={path}
                    > */}
                <Card data = {product.data} />
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
