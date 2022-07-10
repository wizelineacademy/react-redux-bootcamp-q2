import styled from 'styled-components';
import { viewSizes } from '../globalStyles.js'

export const CartContainer = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: ${viewSizes.tablet}px) {
    flex-direction: row-reverse;
  }
`;

export const EmptyCart = styled.h2`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  position: sticky;
  top: ${(props) => `${props.$top}px` || 0};
  background-color: white;
  z-index: 1;
`;