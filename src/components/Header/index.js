import React from 'react';
import { useSelector } from 'react-redux';
import {
  Bar,
  Links,
  FlexContainer,
} from './Header.styles.js';

export const Header = () => {
  const isLoggedIn = useSelector((state) => state.login.isLogged)

  return (
    <Bar className="topnav" id="myTopnav">
      <Links to="/">
        Wizestore
      </Links>
      <FlexContainer>
        {
          isLoggedIn
          ?
          <>
            <Links to="/cart">Cart</Links>
            <Links to="/products">Products</Links>
            <Links>Logout</Links>
          </>
          :
          <Links to="/login">Login</Links>
        }
      </FlexContainer>
    </Bar>
  );
};