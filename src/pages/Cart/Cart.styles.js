import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 50px;
  width: 100wv;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 1px;
  display: grid;
  grid-template-columns: auto 300px;
  gap: 2rem;
  

  h1{
    font-size: 1.3rem;
  }
  
  p{
    font-weight: bold;
  }

  .container-image-product{
    text-align:center;
  }

  .card-product{
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    justify-content: space-between;  
    text-align:justify;
    gap: 2rem;
    margin-top:3rem;
    margin-button:3rem;

    p{
      font-family: 'Open Sans', sans-serif;
      font-weight: 500 ;
    }
  }

  .product-price{
    font-weight: 900 !important;
  }
  
  .titles-container{
    display: grid;
    grid-template-columns: 1fr .1fr;
    justify-content: space-between;  
  }
  
`;