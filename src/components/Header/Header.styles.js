import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Wrapper = styled.div`
  padding: 0px 16px;
  background-color: #764AF1;
  overflow: hidden;
  height:90px;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  width:100%;
  position:fixed;
  top:0;
  left:0;
  right:0;


  .button-logout{
    color: #ffff;
  }
  
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    max-height: 400px;
  }



  .container-logo{
    display:flex;
    justify-self: start;
    align-items: center;
  }

  .wize-store-logo{
    width: 50px;
    
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
  flex-direction: row ;
  justify-content:space-around;


  .links{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content:end;
    align-items:center;
  }
`;