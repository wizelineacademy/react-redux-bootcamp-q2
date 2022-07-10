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
    
`;
export const SummaryProductCartConatiner = styled.div`
    width: 20%;
    display: inline-block;
    padding:10px; 
    box-sizing: border-box;
    div.summay{
        padding:32px;
        display:inline-block;
        background-color: rgb(245, 245, 245);
    }
    float:right;
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

