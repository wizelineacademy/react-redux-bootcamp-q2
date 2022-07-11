import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Row = styled.tr`
  border-bottom: 0.0625em solid gray;

  :last-child {
    border-bottom: inherit;
  }
`;

export const ColumnHeader = styled.th`
  padding: 1em;
  position: sticky;
  top: 0;
  background: white;
`;

export const Column = styled.td`
  padding: 0.25em;
`;

export const Detail = styled.div`
  width: 300px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Title = styled.h3`
  padding: 24px;
  margin: 0;
`;

export const TableContainer = styled.div`
  height: 50vh;
  overflow: auto;
  width: 80%;
  margin: auto;
`;

export const ImageContainer = styled.div`
  width: 142px;
  height: 52px;
  display: flex;
  justify-content: center;
`;
