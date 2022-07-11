import React from 'react';
import {
  Bar,
  Links,
  FlexContainer,
} from '../styles/components/Header.styles.js';
import { useAuth } from './AuthProvider.js';

export const Header = () => {
  const auth = useAuth();
  return (
    <Bar className="topnav" id="myTopnav">
      <Links to="/">Wizestore</Links>
      <FlexContainer>
        <Links to="/cart">Cart</Links>
        <Links to="/products">Products</Links>
        {!auth.user ? (
          <Links to="/login">Login</Links>
        ) : (
          <Links to="/logout">Logout</Links>
        )}
      </FlexContainer>
    </Bar>
  );
};
