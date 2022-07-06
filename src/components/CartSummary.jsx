import React from 'react';
import { Summary, Title, Paragraph, Button } 
  from '../styles/components/CartSummary.styles.js';

const CartSummary = (props) => {
  const { totalItems, totalCost } = props
  return (
    <Summary>
      <Title>Summary</Title>
      <Paragraph>Items: <span>{totalItems || 0}</span></Paragraph>
      <Paragraph>Total cost: <span>&#36; {totalCost || 0}</span></Paragraph>
      <Button>Checkout</Button>
    </Summary>
  )
}

export default CartSummary