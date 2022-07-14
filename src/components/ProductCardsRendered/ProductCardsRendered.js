import React from 'react';
import { ProductCard } from './ProductCard/ProductCard';


export const ProductCardsRendered = ({arrayOfProducts}) => {
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