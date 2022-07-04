import React from 'react'
import Product from "../components/Product";
import {useSelector} from "react-redux";

export const Products = () => {
  const {products} = useSelector((state) => state.products);
  return (
      <div className={'container'}>
        <div className={'row'}>
          <h1>Products</h1>
        </div>
    <div className={'row-cols-3'}>
        {
          products?.map((product) => (
                <Product product={product} key={product.id}></Product>
            ))
        }
    </div>
      </div>
  )
}