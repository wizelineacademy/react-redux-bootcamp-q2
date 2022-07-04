import React from 'react';
import { MainButton } from '../Buttons';
import { CardContainer, TextName, ImageContainer, TextPrice, Price } from './styles';

export const ProductCard = ({ image, name, price, onClick, addToCart }) => {
    return (
        <CardContainer onClick={onClick}>
            <ImageContainer>
                <img style={{width: '100%', objectFit: 'contain', height: 200}} src={image} alt="" />
            </ImageContainer>
            <TextName>{name?.slice(0, 40)}</TextName>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 16, columnGap: 24 }}>
                <div>
                    <TextPrice>Price</TextPrice>
                    <Price>${price}</Price>
                </div>

                <MainButton textStyle={{ color: "#000" }} style={{ background: "#fff", border: '1px solid #CCC' }} onClick={addToCart}>
                    Add to cart
                </MainButton>
            </div>
        </CardContainer>
    )
}

