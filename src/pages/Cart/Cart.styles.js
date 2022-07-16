import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 50px;
  width: 100wv;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
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
    grid-template-columns: 1fr 2fr .6fr .6fr;
    justify-content: space-between;  
    text-align:left;
    gap: 2rem;
    margin-top:3rem;
    margin-button:3rem;

    p{
      font-family: "Roboto","Helvetica","Arial",sans-serif;
      font-weight: 400;
    }
  }

  .divider{
    margin-top:1.5rem;
  }

  .input{
    text-align:center !important;
    width:150px
  }
  .subtotal{
    text-align: right;
  }

  .removeBotton{
    margin-top: 7px;
    font-size:15px;
  }

  .removeButton :hover{
    color:black;
  }

  .product-price{
    font-weight: 900 !important;
  }
  
  .titles-container{
    display: grid;
    grid-template-columns: 1fr .23fr .15fr;
    justify-content: space-between;  
  }
  
`;