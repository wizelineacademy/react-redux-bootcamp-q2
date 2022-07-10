import styled from 'styled-components';
import { viewSizes } from '../globalStyles.js'

const colors = {
  secondaryColor: "rgb(255,255,255)",
  mainInteractiveColor: "rgb(228,33,45)",
}

export const Summary = styled.div`
  min-width: 230px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  position: sticky;
  top: ${(props) => `${props.$top}px` || 0};
  border-bottom: 1px solid black;
  background-color: ${colors.secondaryColor};
  z-index: 0;

  @media only screen and (min-width: ${viewSizes.tablet}px) {
    max-width: 230px;
    align-self: flex-start;
  }
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid black;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: .05rem;

  span {
    font-weight: normal;
    white-space: nowrap;
  }
`;

export const Button = styled.button`
  align-self: center;
  padding: 5px;

  border-radius: 5px;
  background-color: ${colors.mainInteractiveColor};
  color: ${colors.secondaryColor};
  letter-spacing: .05rem;
  border: 1px solid ${colors.mainInteractiveColor};
  transition: .2s;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0px 0px 3px 1px ${colors.mainInteractiveColor};
  }
`;