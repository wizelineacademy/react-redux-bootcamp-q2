import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "../components/Product";

const Container = styled.section`
  width: 70%;
  margin: auto;
`;

const Grid = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0px, 1fr));
  gap: 40px;
`;

export const Products = () => {
  const [products, setProducts] = useState(null);

  async function getProducts() {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/luisgerrarrdo/react-redux-bootcamp/main/public/data/products.json"
      );
      const { products: productsResponse } = response.data.data;

      setProducts(productsResponse.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  });

  return (
    <Container>
      <Grid>
        {products && products.map((product) => <Product value={product} />)}
      </Grid>
    </Container>
  );
};
