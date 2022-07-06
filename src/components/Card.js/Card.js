import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    align-self: flex-end;
`;
const ImgContainer = styled.div`
    height: 150px;
    -moz-box-pack: center;
    justify-content: center;
    display: flex;
    -moz-box-pack: center;
    cursor: pointer;
`;

const ProductName = styled.h3`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -moz-box-orient: vertical;
    margin: 0px;
    text-align: left;
    font-size: 1.3em;
    color: black;
    cursor: pointer;
`;
const Categories = styled.p`
    margin: 4px 0px 8px;
    text-align: left;
    font-weight: 100;
    font-size: 1em;
    color: black;
    cursor: pointer;
    line-height: 1;
    font-family: "Nunito Sans", sans-serif;
`;

const Price = styled.h4`
    line-height: 1;
    text-align: right;
    color:black;
    margin:5px;
`;
const Button = styled.button`
    margin-top: 16px;
    width: 100%;
    background-color: rgb(32, 52, 73);
    color: white;
    border: 0px none;
    height: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
`;
const Imagen = ({srcImg, name}) => (
    <ImgContainer>
      <img src={srcImg} alt={name}/>
    </ImgContainer>

)
const InfoContainer = styled.div`
    align-self: center;
    width: 100%;
    text-align: center;
    align-self: flex-end;
    padding:16px 0;
`;
const Info = ({name, categories, price}) =>
(
    <InfoContainer>
        <ProductName>{name}</ProductName>
        <Categories>{categories[0]}</Categories>
        <Price>{`$${price}`}</Price>
        <Button>Add to cart</Button>
    </InfoContainer> 
)
export const Card = (props) => {
    const {name, images} = props.data;
    return (
        <CardContainer>
            <Imagen srcImg={images} name={name} />
            <Info {...props.data} />     
        </CardContainer>
    )
}

export default Card;