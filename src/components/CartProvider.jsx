import React, { useReducer } from 'react'

import CartItems from '../utils/CartItems.json';

const actions = {
  INCREMENT_BY1: '@quantity/incrementBy1',
  DECREMENT_BY1: '@quantity/decrementBy1',
  SET_QUANTITY: '@quantity/setQuantity'
}

export const CartContext = React.createContext();

const initialCartState = CartItems?.data?.products?.items || [];

function reducer(state, action) {
  switch (action.type) {
    case '@quantity/incrementBy1':
      return state.map(item => {
        if (item.id === action.id) {
            return {...item, quantity: item.quantity + 1}
          }
          return {...item}
      });
    case '@quantity/decrementBy1':
      return state.map(item => {
        if (item.id === action.id) {
            return {...item, quantity: item.quantity - 1}
          }
          return {...item}
      });
    case '@quantity/setQuantity':
      return state.map(item => {
        if (item.id === action.payload.id) {
            return {...item, quantity: action.quantity}
          }
          return {...item}
      }).filer(item => item.quantity > 0);
    default:
      return state;
  }
}

const CartProvider = ({ children }) => {
  const [cartList, dispatch] = useReducer(reducer, initialCartState);

  const CartValues = {
    cartList: cartList,
    incrementQuantity: (id) => {
      dispatch({ type: actions.INCREMENT_BY1, id})
    },
    decrementQuantity: (id) => {
      dispatch({ type: actions.DECREMENT_BY1, id})
    },
    setQuantity: (id, quantity) => {
      dispatch({ type: actions.SET_QUANTITY, id, quantity})
    }
  }

  return (
    <CartContext.Provider value={CartValues}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider