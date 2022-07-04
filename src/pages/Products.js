import React, { useEffect, useState } from 'react'
import { Main, ProductsContainer } from '../styles/pages/Products.styles';
import { data } from '../utils/mockData';
import { ProductCard } from '../components/ProductCard';

export const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(data.data.products.items)
  }, [])

  return (
    <Main>
      <ProductsContainer>
        {products.map((productObj, i) => (
          <ProductCard key={i} productObj={productObj}/>
        ))}
      </ProductsContainer>
    </Main>
  )
}
