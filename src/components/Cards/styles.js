import styled from "styled-components";

const StyledProductCard = styled.article`
  width: 300px;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 1px 1px 8px 3px var(--n40);
  display: grid;
  grid-template-rows: 1fr auto;
`;

const StyledDataContainer = styled.div``;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: scale-down;
`;

const StyledName = styled.p`
  margin: 24px 0 8px;
  font-size: 24px;
  font-weight: bold;
  color: var(--n900);
`;

const StyledCategory = styled.p`
  margin: 8px 0 0;
  color: var(--n400);
`;

const StyledPrice = styled.p`
  text-align: right;
  color: var(--n900);
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export {
  StyledProductCard,
  StyledDataContainer,
  StyledImage,
  StyledName,
  StyledCategory,
  StyledPrice,
  StyledButtonsContainer,
};
