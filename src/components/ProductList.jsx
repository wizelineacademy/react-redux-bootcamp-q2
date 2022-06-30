import React from 'react'
import ProductItem from './ProductItem';

import ProductsData from '../utils/Products.json';

import { ProductsGrid } 
  from '../styles/components/ProductList.styles.js';

const ProductList = () => {
  const productsItems = ProductsData?.data?.products?.items;
  const productsList = productsItems.map(item => {
    return <ProductItem {...item} key={item.id}/>
  })

  return (
    <ProductsGrid data-testid="products-grid">
      {productsList}
    </ProductsGrid>
  )
}

export default ProductList