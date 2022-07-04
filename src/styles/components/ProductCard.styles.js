import styled from "styled-components";

export const Main = styled.div`
  width: 20%;
  height: 25vw;
  min-height: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

`;

export const InnerContainer = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const InnerTop = styled.div`
  width: 100%;
  height: 60%;
`

export const InnerBottom = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const ProductImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 65%;
`

export const NameText = styled.p`
  height: 35%;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  @media (max-width: 1050px) {
    font-size: 16px;
  }
`

export const CatText = styled.p`
  margin-top: 10px;
`

export const PriceText = styled.p`
  margin: 0;
  text-align: right;
  font-weight: bold;
`

export const AddToCartBtn = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 8px;
  cursor: pointer;
  background-color: rgb(32, 52, 73);
  color: #ffffff;
`
