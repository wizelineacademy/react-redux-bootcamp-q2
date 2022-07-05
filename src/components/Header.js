import React from 'react';
import {
  Bar,
  Links,
  FlexContainer,
} from '../styles/components/Header.styles.js';

export const Header = () => {
  return (
    <Bar className="topnav" id="myTopnav" data-testid="bar">
      <Links to="/">
        Wizestore
      </Links>
      <FlexContainer>
        <Links to="/products">Products</Links>
        <Links to="/cart">Cart</Links>
        <Links to="/login">Login</Links>
      </FlexContainer>
    </Bar>
  );
};