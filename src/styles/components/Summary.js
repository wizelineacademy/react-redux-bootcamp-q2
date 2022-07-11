import styled from 'styled-components';

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled(ColumnContainer)`
  width: 80%;
  margin: auto;
  align-items: end;
`;

export const Subtitle = styled.h4`
    padding: 16px,
    margin:0;
`;
