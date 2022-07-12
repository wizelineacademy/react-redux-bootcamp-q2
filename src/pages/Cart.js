import React from 'react'
import {useSelector} from "react-redux";
import ProductDetails from "../components/ProductDetails";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import Summary from "../components/Summary";

export const Cart = () => {
    const {cart} = useSelector(state => state.cart)
  return (
    <div className={'container'}>
      <h1 className={'mt-4 mb-4'}>Shopping Cart</h1>
        <div className={'d-flex justify-content-between'}>
        <div className={'col-md-6'}>
            <ProductsInCarts items={cart}></ProductsInCarts>

        </div>
            <div className={'col-2'}>
                <Summary></Summary>
            </div>
        </div>
    </div>
  )
}

const ProductsInCarts = ({items}) => {
    return items.length == 0 ? (<div>No Products</div>) :
            items.map((item) => (
                <ProductDetails item={item} key={generateUniqueID()}></ProductDetails>
            ))
}