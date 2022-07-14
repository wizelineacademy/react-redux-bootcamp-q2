import styled from 'styled-components';

export const CartSummaryWrapper = styled.div`
  position: relative;
  border-radius: 5px;
  height: 20rem;
  width: 30%;
  margin: 1%;
  align-items: center;
  border-radius: 5%;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
`;

export const SummaryTitle = styled.h2`
  text-align: center;
`;

export const HorizontalLine = styled.hr`
  width: 75%;
  margin-top: 2rem;
`;

export const Text = styled.p`
  text-align: center;
`;

export const TotalCostNumber = styled.p`
  text-align: center;
  font-size: 23px;
  font-weight: 600;
`;

export const CheckoutButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const CheckoutButton = styled.button`
  width: auto;
  margin: auto;
  text-align: center;
  padding: 1.2em 3.1em;
  border: none;
  border-radius: 7px;
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #fff;
  background-color: #3483fa;
  cursor: pointer;
`
