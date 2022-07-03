import React from 'react';
import {
  Wrapper,
  Links,
  FlexContainer,
  Text
} from './Header.styles'

import Logo from '../../Images/wizeStoreLogo.png'

export const Header = () => {
  return (
    <Wrapper className="topnav" id="myTopnav">
      <Links to="/">
        <div className='container-logo'>
          <img src={Logo} alt='logo' className='wize-store-logo'/>
          <Text> WizeStore</Text>
        </div>
      </Links>
      <FlexContainer>
              <Links to="/cart">Cart</Links>
              <Links to="/products">Products</Links>
            <Links to="/login">Login</Links>
      </FlexContainer>
    </Wrapper>
  );
};