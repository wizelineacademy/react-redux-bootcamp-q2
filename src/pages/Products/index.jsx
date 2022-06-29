import React from "react";

import products from "../../mocks/products.json";

import { ProductCard } from "../../components/Cards";

import {
  StyledProductsPage,
  StyledTitle,
  StyledProductsContainer,
} from "./styles";

const Products = () => {
  return (
    <StyledProductsPage>
      <StyledTitle>Products</StyledTitle>
      <StyledProductsContainer>
        {products.data.products.items.map((product) => (
          <ProductCard
            key={product.id}
            images={product.images}
            name={product.name}
            categories={product.categories}
            price={product.price}
          />
        ))}
      </StyledProductsContainer>
    </StyledProductsPage>
  );
};

export { Products };
