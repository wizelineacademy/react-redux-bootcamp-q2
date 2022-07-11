import styled from 'styled-components';

export const StyledProducto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledImageWrapper = styled.div`
  max-height: 150px;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

export const StyledInfoWrapper = styled.div`
  align-self: center;
  text-align: center;
  padding: 4px;
  width: 100%;
`;

export const Name = styled.h3`
  margin: 0;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Price = styled.h4`
  margin: 0;
  text-align: right;
`;

export const Category = styled.p`
  margin: 8px 0;
  text-align: left;
`;

export const Button = styled.button`
  appearance: none;
  cursor: pointer;
  border-radius: 1px;
  padding: 0 12px;
  font-weight: bold;
  margin: 0;
  height: 36px;
  color: snow;
  background-color: crimson;
  border: 1px solid crimson;
  transition: transform 0.15s ease-out;
  width: 100%;
  margin-top: 8px;

  &:hover {
    background-color: firebrick;
    border-color: firebrick;
  }
`;
