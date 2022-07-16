import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: calc(30% - 10px) calc(30% - 10px) calc(30% - 10px)  ;
  grid-auto-rows: max-content;
  gap: 35px;
  justify-content:center;
  align-items:center;
  font-weight: bold;
  margin: 1rem 1rem 1rem 1rem;
  color:#464241;
  width: 100wv;
  heigth: 100hv;
  font-family: 'Inter', sans-serif;
  
  .principal-image-product{
    max-width: 200px;
    max-height: 160px;
  }
  
  .add-to-shopping-card{
    color:white;
  }
  
  .product-name{
    text-align:center;
    justify-self:center;
    width: 70%;
    margin-top: 1rem;
    font-size: 1rem;
  }

  .product-category{
    margin-top:1rem;
    color: #5690F4;
    font-weight:bold;
  }

  .product-price{
    color: #E9694E;
  }

  .container-button-add-to-cart{
    width:100%
    background-color:yellow;
  }

  .card-products{
    display:grid;
    grid-auto-rows: auto;
    max-height: 100%;
    max-width: 350px;
    justify-content: center;
    text-align:center;
    background-color: white;

      p{
        margin:0;
        padding:0;
      }
      
    .container-image-product{
      max-width: 100%;
      background-color: white;
      padding-top: 1.5rem;
      justify-content: center;
      text-align:center;
      align-items:center;
    }

    .button-add-to-cart{
      display:flex;
      flex-direction: row;
      justify-content:center;
      align-items:center;
      gap: 1rem;
      background-color: #764AF1;
      color: white;
      width:100%;
      font-size: 1rem;
      height: 50px;
      margin-top:2px;
    }
  
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 180px;
    grid-template-columns: calc(50% - 16px);
  }
`;