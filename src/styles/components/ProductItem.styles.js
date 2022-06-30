import styled, { css } from 'styled-components';

export const Card = styled.div `
  width: 100%;
  max-width: 375px;
  min-width: 150px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background-color: #EEE;
  border: 1px solid #AAA;
  border-radius: 7px
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
      case "category":
        return css`

        `;
      case "price":
        return css`
          font-weight: bold;
          align-self: self-end;
          margin-bottom: 10px;
        `;
      default:
        return css`
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
  box-shadow: 0px 0px 5px 2px rgba(100,100,255,0.75);
`;