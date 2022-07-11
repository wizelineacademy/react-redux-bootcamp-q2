import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 17rem;
  height: 25rem;
  margin: 1%;
  align-items: center;
  border-radius: 5%;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
  `;

export const ProductImageWrapper = styled.div`
  width: 70%;
  height: 50%;
  margin: auto;
  margin-top: 10%;
  display: flex;
  justify-content: center;
`;

export const ProductImage = styled.img`
  width: auto;
  height: 70%;
  margin: 0%;
  `;

export const ProductName = styled.h4`
  margin: 0%;
  text-align: center;
  color: #4c4c4c;
  padding: 2%;
`;

export const ProductCategory = styled.h5`
  margin: 0%;
  text-align: center;
  color: #a6a6a6;
`;

export const ProductPrice = styled.h4`
  margin: 4%;
  text-align: center;
  color: #ff3f40;
`;
export const AddToCartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const AddToCartButton = styled.button`
  margin: auto;
  text-align: center;
  padding: 1.2em 3.1em;
  border: none;
  border-radius: 7px;
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 1.3px;
  color: #fff;
  background-color: #ff3f40;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
  cursor: pointer;
`