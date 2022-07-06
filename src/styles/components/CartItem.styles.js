import styled, { css } from 'styled-components';

const colors = {
  mainColor: "rgb(0,0,0, 0.9)",
  secondaryColor: "rgb(255,255,255)",
  mainInteractiveColor: "rgb(228,33,45)",
  mainShadowColor: "rgb(0, 30, 108)",
  secondaryShadowColor: "rgb(255,255,255)"
}


export const Card = styled.div `
  width: 100%;
  min-width: 150px;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgb(10,10,10, 0.1) 45%, rgb(10,10,10, 0.3) 75%, rgb(10,10,10, 0.8) 100%);
  border-radius: 10px;
  padding: 10px;
  gap: 10px;

  @media only screen and (min-width: 420px) {
    flex-direction: row;
  }
  `;
  
export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 10px;

`;
  
export const CardButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: black;
  padding: 5px;

  @media only screen and (min-width: 600px) {
    width: 60%;
    align-self: end;
  }
`;

export const QuantityButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: 150px;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 5px;
  padding: 5px;
  background-color: rgb(255,255,255, 0.9);

  @media only screen and (min-width: 420px) {
    height: 100px;
  }
`;

export const Title =  styled.h3 `
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  color: ${colors.mainColor};
  font-size: 1rem;
`;

export const Paragraph = styled.p `
  color: ${colors.mainFontColor};
  font-size: 1rem;
  color: ${colors.secondaryColor};
  // padding: 0 5px;

  ${(props) => {
    switch(props.$type) {
      case "price":
        return css`
          font-weight: bold;
          letter-spacing: .05rem;
        `;
      default:
        return css`
          font-weight: normal;
        `;
    }
  }}
`;


export const Button = styled.button `
  align-self: center;
  padding: 5px;
  border-radius: 5px;
  color: ${colors.mainFontColor};
  letter-spacing: .05rem;
  border: none;
  transition: .2s;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0px 0px 3px 1px ${colors.secondaryShadowColor};
  }
`;