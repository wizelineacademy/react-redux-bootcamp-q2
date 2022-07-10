import React, { useContext} from 'react';

import { UserContext } from './UserData';
import {
  Bar,
  Links,
  FlexContainer,
} from '../styles/components/Header.styles.js';

export const Header = () => {
  const { activeUser } = useContext(UserContext);
  return (
    <Bar className="topnav" id="myTopnav" data-testid="bar">
      <Links to="/">
        Wizestore
      </Links>
      <FlexContainer>
        <Links to="/products">Products</Links>
        <Links to="/cart">Cart</Links>
        <Links to="/login">{activeUser ? 'logout' : 'login'}</Links>
      </FlexContainer>
    </Bar>
  );
};