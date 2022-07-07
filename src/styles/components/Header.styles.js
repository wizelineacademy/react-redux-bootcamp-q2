import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { viewSizes } from '../globalStyles.js'

export const Bar = styled.div`
  padding: 0px 16px;
  background-color: rgb(228,33,45);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;

  @media only screen and (min-width: ${viewSizes.mobile}px) {
    flex-direction: row;
  }
`;

export const Links = styled(Link)`
  color: white;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 18px;
`;

export const Text = styled.p`
  color: white;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 18px;
`;

export const FlexContainer = styled.div`
  display: flex;
`;