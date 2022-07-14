import React from 'react'
import listOfProducts from '../../data/products.json';
import { ProductCardsRendered } from '../../components/ProductCardsRendered/ProductCardsRendered';
import {
  ShopNowTitleWrapper,
  ShopNowTitle,
  ProductsWrapper
} from './Products.styles';

export const Products = () => {
  const products = listOfProducts.data.products.items;

  return (
    <>
      <ShopNowTitleWrapper>
        <ShopNowTitle>Shop now!</ShopNowTitle>
      </ShopNowTitleWrapper>

      <ProductsWrapper>
        <ProductCardsRendered arrayOfProducts={products}/>
      </ProductsWrapper>
    </>
  )
}
