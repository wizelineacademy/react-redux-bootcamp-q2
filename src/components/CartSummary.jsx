import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { Title } from '../styles/components/CartSummary.styles.js';
import { getViewSize } from '../styles/globalStyles.js';
import { Summary, Paragraph, Button } 
  from '../styles/components/CartSummary.styles.js';

const CartSummary = ({totalItems, totalCost}) => {
  const mainRef = useRef();
  const [offsetTop, setOffsetTop] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useLayoutEffect(() => {
    setOffsetTop(getOffsetTop(mainRef));
  }, [])
  
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    setOffsetTop(getOffsetTop(mainRef));

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowSize]);  

  return (
    <Summary ref={mainRef} $top={offsetTop}>
      <Title>Summary</Title>
      <Paragraph>Items: <span>{totalItems || 0}</span></Paragraph>
      <Paragraph>Total cost: <span>&#36; {totalCost || 0}</span></Paragraph>
      <Button>Checkout</Button>
    </Summary>
  )
}

function getOffsetTop(ref) {
  return ref?.current?.parentElement?.parentElement?.offsetTop
    + ref?.current?.parentElement?.offsetTop || 0;
}

function getWindowSize() {
  const {innerWidth} = window;

  return getViewSize(innerWidth);
}

export default CartSummary