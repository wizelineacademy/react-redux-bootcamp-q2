import React from 'react'
import { CartTable } from '../../components/CartTable/CartTable';
import { CartSummary } from '../../components/CartSummary/CartSummary';
import {
  ShopCartWrapper,
  ShoppingCartTitle,
  ShoppingCartTableWrapper,
  ShoppingCartHorizontalLine,
} from './Cart.styles';


export const Cart = () => {
  return (
    <ShopCartWrapper>

      <ShoppingCartTableWrapper>

        <ShoppingCartTitle>
          Shopping Cart
        </ShoppingCartTitle>
        <ShoppingCartHorizontalLine/>
        <CartTable/>

      </ShoppingCartTableWrapper>

      <CartSummary/>

    </ShopCartWrapper>
  )
}