import React from 'react'
import listOfProducts from '../../data/products.json';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import {
  ShopNowTitleWrapper,
  ShopNowTitle,
  ProductsWrapper
} from './Products.styles';

export const Products = () => {
  const arrayOfProducts = listOfProducts.data.products.items;
  const productCardsRendered = () => {
    const arrayOfProductCards = arrayOfProducts.map((item) => {
      return(
        <ProductCard
        key={item.id}
        image={item.images[0]}
        name={item.name}
        category={item.categories[0]}
        price={item.price}
        />
      )
    })
    return arrayOfProductCards;
  }

  return (
    <>
      <ShopNowTitleWrapper>
        <ShopNowTitle>Shop now!</ShopNowTitle>
      </ShopNowTitleWrapper>

      <ProductsWrapper>
        {productCardsRendered()}
      </ProductsWrapper>
    </>
  )
}
