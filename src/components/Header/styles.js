import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Bar = styled.div`
  padding: 0px 16px;
  background-color: var(--background);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  
`;

export const Links = styled(Link)`
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #000;
`;

export const Text = styled.p`
  display: block;
  text-align: center;
  padding: 14px 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #000;
`;

export const FlexContainer = styled.div`
  display: flex;
`;