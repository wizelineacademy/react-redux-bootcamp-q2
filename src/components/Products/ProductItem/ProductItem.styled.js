import styled from "styled-components";

export const ProductCard = styled.div`
  width: 15%;
  height: 250px;
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  height: 80px;
`;

export const CardImage = styled.img`
  height: 80px;
  width: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.h2`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  font-size: 14px;
`;

export const CardDescription = styled.div``;

export const CardPrice = styled.p`
  text-align: right;
  padding: 0;
  margin: 5px 0;
  font-weight: bold;
`;

export const CardFooter = styled.div`
  height: 100px;
`;

export const CardButton = styled.button`
  background-color: rgb(32, 52, 73);
  width: 100%;
  height: 40px;
  border: none;
  cursor: pointer;
  color: white;
`;
