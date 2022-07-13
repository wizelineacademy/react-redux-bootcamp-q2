import styled from 'styled-components';
import { maxMediaQuery } from './../utils';

export const Container = styled.div`
  margin: 10px 50px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 1rem;
  ${maxMediaQuery('LG', `grid-template-columns: auto auto auto;`)}
  ${maxMediaQuery('MD', `grid-template-columns: auto auto;`)}
  ${maxMediaQuery('SM', `grid-template-columns: auto;`)}
`;
