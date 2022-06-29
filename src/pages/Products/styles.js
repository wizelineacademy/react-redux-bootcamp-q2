import styled from "styled-components";

const StyledProductsPage = styled.article`
  margin: 64px;
`;

const StyledTitle = styled.h1`
  font-size: 38px;
  color: var(--n900);
`;

const StyledProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
`;

export { StyledProductsPage, StyledTitle, StyledProductsContainer };
