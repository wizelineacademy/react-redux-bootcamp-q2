import React, { useLayoutEffect, useRef, useState, useEffect, useContext } from 'react'
import { UserContext } from '../components/UserData'

import CartList from '../components/CartList'
import CartSummary from '../components/CartSummary'

import { getViewSize } from '../styles/globalStyles.js'
import { CartContainer, CartDetails, Title, EmptyCart } 
  from '../styles/pages/Cart.styles.js';

export const Cart = () => {
  const titleRef = useRef();
  const [offsetTop, setOffsetTop] = useState(getOffsetTop(titleRef) || 0);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  
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
    const { activeUser, getUserCart } = useContext(UserContext);
    const cartList = getUserCart(activeUser);

    return (
      <CartContainer>
        {
          cartList.length > 0 
            ? 
              <>
                <Title ref={titleRef} $top={offsetTop}>Shopping cart</Title>
                <CartDetails>
                  <CartSummary/>
                  <CartList />
                </CartDetails>  
              </>
            : 
            <EmptyCart>
              There's no items in your cart :(
            </EmptyCart>
        }
      </CartContainer>
    )
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