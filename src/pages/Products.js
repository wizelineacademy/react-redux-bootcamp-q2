import React, {useEffect} from 'react'
import Product from "../components/Product";
import {useSelector} from "react-redux";
import {store} from "../store/config";
import {productsFetch} from "../store/products/slice";

export const Products = () => {
  const {products} = useSelector((state) => state.products);

  useEffect(() => {
      store.dispatch(productsFetch());
  }, []);
  return (
      <div className={'container'}>
        <div className={'mt-4 mb-4'}>
          <h1 className={'fw-bold'}>Products</h1>
        </div>
    <div className={'d-flex row'}>
        {
          products?.map((product) => (
                <Product product={product} key={product.id}></Product>
            ))
        }
    </div>
      </div>
  )
}