import React, { useContext } from 'react'
import CartItem from './CartItem';
import { UserContext } from './UserData'

import { ItemList } 
  from '../styles/components/CartList.styles.js';

const CartList = () => {
  const { activeUser, getUserCart } = useContext(UserContext);
  const cartList = getUserCart(activeUser);
  
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