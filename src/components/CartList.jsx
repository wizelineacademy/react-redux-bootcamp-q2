import React, { useContext } from 'react'
import CartItem from './CartItem';
import { CartContext } from './CartProvider'

import { ItemList } 
  from '../styles/components/CartList.styles.js';

const CartList = () => {
  const { cartList } = useContext(CartContext);
  
  return cartList
    ? 
      <ItemList>
        {
          cartList.map(item => {
            return <CartItem {...item} key={item.id}/>
          })
        }
      </ItemList>
    : <div>Empty</div>;
}

export default CartList