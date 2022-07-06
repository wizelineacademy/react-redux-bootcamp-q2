import React from 'react'
import CartItem from './CartItem'

import { ItemList } 
  from '../styles/components/CartList.styles.js';

import CartItems from '../utils/CartItems.json'

const CartList = () => {
  const cartItems = CartItems?.data?.products?.items;
  const renderList = cartItems
    ? 
      <ItemList>
        {
          cartItems.map(item => {
            return <CartItem {...item} key={item.id}/>
          })
        }
      </ItemList>
    
    : <div>Empty</div>;

  return (
    renderList
  )
}

export default CartList