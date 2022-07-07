import React from 'react'
import CartItem from './CartItem';

import { ItemList } 
  from '../styles/components/CartList.styles.js';

const CartList = (props) => {
  const { cartItems } = props
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