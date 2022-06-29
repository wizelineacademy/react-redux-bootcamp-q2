import React from "react";
import { AddToCartButton } from "../Buttons";
import { shortenName } from "../../utils/shortenName";

import {
  StyledProductCard,
  StyledDataContainer,
  StyledImage,
  StyledName,
  StyledCategory,
  StyledPrice,
  StyledButtonsContainer,
} from "./styles";

const ProductCard = ({ images = [], name, categories = [], price }) => {
  return (
    <StyledProductCard>
      <StyledDataContainer>
        <StyledImage src={images[0]} />
        <StyledName>{shortenName(name)}</StyledName>
        <StyledCategory>{categories[0]}</StyledCategory>
        <StyledPrice>
          {new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </StyledPrice>
      </StyledDataContainer>
      <StyledButtonsContainer>
        <AddToCartButton />
      </StyledButtonsContainer>
    </StyledProductCard>
  );
};

export { ProductCard };
