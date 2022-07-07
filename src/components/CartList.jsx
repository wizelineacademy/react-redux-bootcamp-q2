import React, { useContext } from 'react'
import CartItem from './CartItem';
import { CartContext } from './CartProvider'

import { ItemList } 
  from '../styles/components/CartList.styles.js';

const CartList = () => {
  const { cartList, incrementQuantity, decrementQuantity, setQuantity } = useContext(CartContext);
  
  const renderList = cartList
    ? 
      <ItemList>
        {
          cartList.map(item => {
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