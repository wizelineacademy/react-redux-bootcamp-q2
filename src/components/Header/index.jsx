import React from "react";

import {
  StyledHeader,
  StyledTitle,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledLink,
} from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>
        <StyledLink to="/">Wizestore</StyledLink>
      </StyledTitle>
      <StyledNav>
        <StyledList>
          <StyledListItem>
            <StyledLink to="/cart">Cart</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/products">Products</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/login">Login</StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export { Header };
