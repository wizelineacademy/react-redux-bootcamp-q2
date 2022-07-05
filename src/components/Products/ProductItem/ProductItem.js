import React from "react";
import {
  CardDescription,
  CardFooter,
  CardImageWrapper,
  CardImage,
  CardPrice,
  CardTitle,
  ProductCard,
  CardButton,
} from "./ProductItem.styled";

const ProductItem = ({ product }) => {
  return (
    <ProductCard>
      <CardImageWrapper>
        <CardImage src={product.images[0]} alt={product.images.name} />
      </CardImageWrapper>
      <CardTitle>{product.name}</CardTitle>
      <CardDescription>{product.categories[0]}</CardDescription>
      <CardPrice>${product.price}</CardPrice>
      <CardFooter>
        <CardButton onClick={() => {}}>Add to cart</CardButton>
      </CardFooter>
    </ProductCard>
  );
};

export default ProductItem;
