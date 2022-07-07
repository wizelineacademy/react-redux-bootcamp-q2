import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import CartList from '../components/CartList'
import CartSummary from '../components/CartSummary'

import { getViewSize } from '../styles/globalStyles.js'
import { CartContainer, CartDetails, Title, EmptyCart } 
  from '../styles/pages/Cart.styles.js';

import CartItems from '../utils/CartItems.json';

export const Cart = () => {
  const [cartItems, setCartItems] = useState(CartItems?.data?.products?.items || [])
  const titleRef = useRef();
  const [offsetTop, setOffsetTop] = useState(getOffsetTop(titleRef) || 0);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const itemsTotals = cartItems.reduce((prevValue, currValue) => {
    return ({
      totalItems: prevValue.totalItems + currValue.quantity, 
      totalCost: prevValue.totalCost + (currValue.price * currValue.quantity)
    })
  }, {totalItems: 0, totalCost: 0})
  
  useLayoutEffect(() => {
    setOffsetTop(getOffsetTop(titleRef) || 0)
  }, [])

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    setOffsetTop(getOffsetTop(titleRef));

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);  
  
  const DisplayCart = () => {
    if (cartItems.length > 0) {
      return (
        <CartContainer>
          <Title ref={titleRef} $top={offsetTop}>Shopping cart</Title>
          <CartDetails>
            <CartSummary {...itemsTotals}/>
            <CartList cartItems={cartItems}/>
          </CartDetails>
        </CartContainer>
      )
    } else {
      return(
        <EmptyCart>
          There's no items in your cart :(
        </EmptyCart>
      )
    }
  }

  return (
    <DisplayCart/>
  )
}

function getOffsetTop(ref) {
  return ref?.current?.parentElement?.offsetTop || 0;
}

function getWindowSize() {
  const {innerWidth} = window;

  return getViewSize(innerWidth);
}