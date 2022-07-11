import React from 'react';
import {
  Bar,
  Links,
  FlexContainer,
} from './Header.styles.js';

export const Header = () => {
  return (
    <Bar className="topnav" id="myTopnav">
      <Links to="/">
        Wizestore
      </Links>
      <FlexContainer>
              <Links to="/cart">Cart</Links>
              <Links to="/products">Products</Links>
            <Links to="/login">Login</Links>
      </FlexContainer>
    </Bar>
  );
};