import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Wrapper = styled.div`
  padding: 0px 16px;
  background-color: #764AF1;
  overflow: hidden;
  display: flex;
  max-height: 65px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  width:100%;
  position:fixed;
  top:0;
  left:20;
  right:0;
  
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    max-height: 400px;
  }



  .container-logo{
    display:grid;
    grid-template-columns: 50px auto;
    justify-content:center;
    align-items: center;

  }

  .wize-store-logo{
    width: 50px;
    justify-self: end;
  }
`;

export const Links = styled(Link)`
  color: white;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
`;

export const Text = styled.p`
  color: white;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
`;

export const FlexContainer = styled.div`
  display: flex;
`;