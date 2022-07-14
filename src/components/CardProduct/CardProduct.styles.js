import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: calc(30% - 16px) calc(30% - 16px) calc(30% - 16px) ;
  grid-template-rows: auto;
  gap: 35px;
  justify-content:center;
  align-items:center;
  font-weight: bold;
  margin: 7rem 1rem 2rem 1rem;
  color:#73777B;
  width: 100wv;
  heigth: 100hv;
  
  .principal-image-product{
    max-width: 200px;
    max-height: 160px;
  }

  .product-name{
    text-align:center;
    justify-self:center;
    width: 85%;
    font-size: 1rem;
    
  }

  .product-category{
    margin-top:1rem;
    color: #40394A;
  }

  .product-price{
    color: #FF4949; 
  }

  .container-button-add-to-cart{
    width:100%
    background-color:yellow;
  }

  .card-products{
    display:grid;
    grid-template-rows: 3.5fr 1fr repeat(3, 1fr);
    max-height: 400px;
    justify-content: center;
    text-align:center;

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
      width:150%
    }


    .button-add-to-cart{
      border-color: rgb(150, 95, 239);
      background-color: #764AF1;
      color: white;
      width:calc(100% - 16px);
      font-size: 1.2rem;
      font-family: "Roboto","Helvetica","Arial",sans-serif;

      height: 50px;
    }
  
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 180px;
    grid-template-columns: calc(50% - 16px);
  }
`;
