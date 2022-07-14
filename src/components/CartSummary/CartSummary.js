import React from 'react';
import { CartSummaryWrapper,
  SummaryTitle,
  Text,
  TotalCostNumber,
  HorizontalLine,
  CheckoutButtonWrapper,
  CheckoutButton,
} from './CartSummary.styles';

export const CartSummary = () => {
  return (
  <CartSummaryWrapper>

    <SummaryTitle>Summary</SummaryTitle>
    <HorizontalLine />

    <Text>Items: 4</Text>
    <HorizontalLine />

    <Text>Total Cost:</Text>
    <TotalCostNumber>$ 999</TotalCostNumber>

    <CheckoutButtonWrapper>
     <CheckoutButton>Checkout</CheckoutButton>
    </CheckoutButtonWrapper>

  </CartSummaryWrapper>
  )
};