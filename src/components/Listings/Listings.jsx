import React, { useEffect, useState } from "react";
import { Container, Header, Grid } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import Card from "../Shared/ProductCard/ProductCard";
import "./Listings.scss";
import { getAllItems } from "../../Services/generalServices";
import Loader from "../Shared/Loader/Loader";
import { Link } from "react-router-dom";

const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchItems = async () => {
    setLoading(true);
    let data = await getAllItems();
    setLoading(false);
    setProducts(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Header as="h1" style={{ marginTop: "50px" }}>
        <h1 className="listing-heading"> Featured </h1>
      </Header>
      <Grid stackable columns={3}>
        {products.map((product) => {
          return (
            <Grid.Column>
              <Container fluid textAlign="center">
                <Link to={`product/${product.id}`} >
                  <Card data={product.data} />
                </Link>
              </Container>
            </Grid.Column>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ListingPage;
