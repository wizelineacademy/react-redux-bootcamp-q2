import styled, { css } from 'styled-components';

const colors = {
  mainFontColor: "rgb(0,0,0, 0.9)",
  secondaryColor: "rgb(255,255,255)",
  mainInteractiveColor: "rgb(228,33,45)",
  mainShadowColor: "rgb(0, 30, 108)",
  secondary: "rgb(255,255,255)"
}


export const Card = styled.div `
  width: 100%;
  max-width: 280px;
  min-width: 150px;
  height: 350px;
  background-image: linear-gradient(rgb(10,10,10, 0.1) 45%, rgb(10,10,10, 0.3) 75%, rgb(10,10,10, 0.8) 100%);
  border-radius: 10px;
  transition: .1s;
  
  &:hover{
    box-shadow: 0px 0px 5px 3px ${colors.shadowColor};
  }
  `;
  
export const CardInfo = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  padding: 5px 20px;
`;
  
export const CardButtons = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 0px 0px 10px 10px;
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
`;

export const Title =  styled.h3 `
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  color: ${colors.mainFontColor};
  font-size: 1rem;
`;

export const Paragraph = styled.p `
  color: ${colors.mainFontColor};
  font-size: 1rem;

  ${(props) => {
    switch(props.$type) {
      case "price":
        return css`
          font-weight: bold;
          align-self: self-end;
          margin-bottom: 10px;
          letter-spacing: .05rem;
          color: ${colors.mainFontColor};
        `;
      default:
        return css`
        font-weight: normal;
        `;
    }
  }}
`;


export const Button = styled.button `
  width: 70%;
  align-self: center;
  padding: 10px;
  border-radius: 5px;
  background-color: ${colors.mainInteractiveColor};
  color: ${colors.secondaryColor};
  letter-spacing: .05rem;
  border: 1px solid #203349;
  transition: .2s;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0px 0px 3px 1px ${colors.shadowColor};
  }
`;