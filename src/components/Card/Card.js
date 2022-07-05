import React from 'react';
import {
    ProductName,
    Categories, 
    Price, 
    Button, 
    InfoContainer, 
    CardContainer, 
    ImgContainer
} from './CardStyles';

const Imagen = ({srcImg, name}) => (
    <ImgContainer>
      <img src={srcImg} alt={name}/>
    </ImgContainer>

)

const Info = ({name, categories, price}) =>
(
    <InfoContainer>
        <ProductName>{name}</ProductName>
        <Categories>{categories[0]}</Categories>
        <Price>{`$${price}`}</Price>
        <Button>Add to cart</Button>
    </InfoContainer> 
);

export const Card = (props) => {
    const {name, images} = props.data;
    return (
        <CardContainer>
            <Imagen srcImg={images[0]} name={name} />
            <Info {...props.data} />     
        </CardContainer>
    )
};

export default Card;