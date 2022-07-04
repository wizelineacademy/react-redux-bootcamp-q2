import React from 'react';
import {
  Bar,
  Links,
  FlexContainer,
} from '../Header/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export const Header = () => {
  return (
    <Bar className="topnav" id="myTopnav">
      <Links to="/">
        Wizestore
      </Links>
      <FlexContainer>
        <Links to="/products" style={{ fontWeight: 'normal' }}>Products</Links>
        <Links to="/cart">
          <ShoppingCartOutlinedIcon color="#000" />
        </Links>
        <Links to="/login">
          <LogoutIcon color='#000' />
        </Links>
      </FlexContainer>
    </Bar>
  );
};