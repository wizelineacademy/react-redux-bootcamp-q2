import styled, { css } from 'styled-components';

export const Card = styled.div `
  width: 100%;
  max-width: 320px;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: rgb(34,37,41, 0.2);
  border-radius: 10px;
  transition: .5s;
  
  &:hover{
    background-color: rgb(233,61,68, 0.3);
    transform: scale(1.03);
  }
`;

export const ImageContainer = styled.div`
  display: block;
  width: auto;
`;

export const Image = styled.img`
  display: block;
  width: auto;
  max-width: 100%;
  height: 100%;
  max-height: 200px;
  background-size: cover;
  margin: 0 auto;
`;

export const Title =  styled.h3 `

`;

export const Paragraph = styled.p `
  ${(props) => {
    switch(props.$type) {
      case "price":
        return css`
          font-weight: bold;
          align-self: self-end;
          margin-bottom: 10px;
        `;
      default:
        return css`
        font-weight: normal;
        `;
    }
  }}
`;

export const Button = styled.button `
  width: 100%;
  max-width: 200px;
  align-self: center;
  padding: 10px;
  border-radius: 5px;
  background-color: #203349;
  color: #fff;
  border: 1px solid #203349;
  transition: .5s;
  
  &:hover {
    box-shadow: 0px 0px 3px 1px rgba(100,100,255,0.75);
    transform: scale(1.05);
  }
`;