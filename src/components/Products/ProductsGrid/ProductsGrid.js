import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import { Container } from "./ProductsGrid.styled";

const ProductsGrid = ({ products }) => {
  if (!products?.length) return null;
  return (
    <Container>
      {products.map((product, index) => (
        <ProductItem key={index} product={product}>
          {JSON.stringify(product, null, 2)}
        </ProductItem>
      ))}
    </Container>
  );
};

export default ProductsGrid;
