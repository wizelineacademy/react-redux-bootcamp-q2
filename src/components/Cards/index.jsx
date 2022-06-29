import React from "react";
import { AddToCartButton } from "../Buttons";

import {
  StyledProductCard,
  StyledImage,
  StyledName,
  StyledCategory,
  StyledPrice,
  StyledButtonsContainer,
} from "./styles";

const ProductCard = ({ images = [], name, categories = [], price }) => {
  return (
    <StyledProductCard>
      <StyledImage src={images[0]} />
      <StyledName>{name}</StyledName>
      <StyledCategory>{categories[0]}</StyledCategory>
      <StyledPrice>
        {new Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </StyledPrice>
      <StyledButtonsContainer>
        <AddToCartButton />
      </StyledButtonsContainer>
    </StyledProductCard>
  );
};

export { ProductCard };
