import styled from 'styled-components';

export const ProductWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  border: 1px solid grey;
  border-radius: 10px;
`;

export const RowContent = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  max-width: 45%;
  margin: 0 auto;
`;

export const NameWrapper = styled(RowContent)`
  font-weight: bold;
  justify-content: start;
`;

export const CategoryWrapper = styled(RowContent)`
  font-weight: lighter;
  font-size: 12px;
  justify-content: start;
`;

export const PriceWrapper = styled(RowContent)`
  font-weight: bolder;
`;
