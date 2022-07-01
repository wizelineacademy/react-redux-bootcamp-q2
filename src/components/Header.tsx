import { Bar, FlexContainer, Links } from "../styles/components/Header.styles";

import React from "react";

export const Header: React.FC = () => {
  return (
    <Bar className="topnav" id="myTopnav">
      <Links to="/">Wizestore</Links>
      <FlexContainer>
        <Links to="/cart">Cart</Links>
        <Links to="/products">Products</Links>
        <Links to="/login">Login</Links>
      </FlexContainer>
    </Bar>
  );
};
