import React from 'react';
import {
  CardWrapper,
  ProductImageWrapper,
  ProductImage,
  ProductName,
  ProductCategory,
  ProductPrice,
  AddToCartButton,
  AddToCartButtonWrapper
} from './ProductCard.styles';

export const ProductCard = ({image, name, category, price}) => {
  name = name.length > 45 ? name.slice(0, 45) + '...' : name; // To keep the product name max in 2 rows when rendering in ProductCard.

  return (
  <CardWrapper>

    <ProductImageWrapper>
      <ProductImage src={image} alt={'Picture of a ' + name} />
    </ProductImageWrapper>

    <ProductName>{name}</ProductName>
    <ProductCategory>{category}</ProductCategory>
    <ProductPrice>$ {price}</ProductPrice>

    <AddToCartButtonWrapper>
      <AddToCartButton>Add to  Cart</AddToCartButton>
    </AddToCartButtonWrapper>

  </CardWrapper>
  )
};