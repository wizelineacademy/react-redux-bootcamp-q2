import React from 'react';
import { Bar, Links, FlexContainer } from '../styles/components/Header.styles.js';

export const Header = (props) => {
  return (
    <Bar className="topnav" id="myTopnav">
      <Links to="/">
        Wizestore
      </Links>
      <FlexContainer>
        <Links to="/cart">Cart</Links>
        <Links to="/products">Products</Links>
        {
          props.auth ?
            <Links to="/logout">Logout</Links>
            :<Links to="/login">Login</Links>
        }
      </FlexContainer>
    </Bar>
  );
};