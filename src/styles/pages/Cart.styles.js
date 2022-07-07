import styled, {css} from 'styled-components';
import { viewSizes } from '../globalStyles.js'

const gridTemplateValues = {

}

export const CartContainer = styled.div`
  position: relative;
`;

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: ${viewSizes.mobile}px) {
    flex-direction: row-reverse;
  }
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