import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  padding: 8px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--r400);
  color: var(--n10);
`;

const StyledTitle = styled.p`
  margin: 0;
  font-weight: bold;
`;

const StyledNav = styled.nav``;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  gap: 16px;
`;

const StyledListItem = styled.li``;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export {
  StyledHeader,
  StyledTitle,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledLink,
};
