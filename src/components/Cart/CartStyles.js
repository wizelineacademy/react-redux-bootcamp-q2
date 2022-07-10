import styled from 'styled-components';

export const CartContainer = styled.div`
    width: 70%;
    margin: 20px auto;
`;

export const ProductCartContainer = styled.div`
    width: 80%;
    display: inline-block;
    padding:10px;
    box-sizing: border-box;
    td{
        padding:16px;
    }
    hr {
        margin-top: 16px;
        margin-bottom: 16px;
        width: 100%;
        height: 1px;
        background-color: rgb(211, 211, 212);
        border: medium none;
    }
`;
export const SummaryProductCartConatiner = styled.div`
    width: 20%;
    display: inline-block;
    padding:10px; 
    box-sizing: border-box;
    font-family: "Nunito Sans",sans-serif;
    div.summay{
        padding:32px;
        display:inline-block;
        background-color: rgb(245, 245, 245);
    }
    float:right;
    div > button {
        margin-top: 16px;
        width: 100%;
        background-color: rgb(32,52,73);
        color: white;
        border: 0px none;
        height: 50px;
        cursor: pointer;
        -webkit-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
      }
    div >  hr {
        margin-top: 16px;
        margin-bottom: 16px;
        width: 100%;
        height: 1px;
        background-color: rgb(211, 211, 212);
        border: medium none;
    }
`;
export const ProductDetails = styled.div`
    display:flex;
    align-items: center;
    div {
 
        display:inline-block;
    }
    .img-container{
        width:150px;
        img{
            width: 100%;
        }
    }
    .info-container {

        width: 300px;
        margin-left:20px;
        p{
            margin:0;
            vertical-aling:middle; 
        }            

    }

`
export const QuantityContainer = styled.div`
    width:200px;
    button, input {
        display:block;
        width:50%;
        margin:0 auto;
        box-sizing:border-box;
        
    }


`;

