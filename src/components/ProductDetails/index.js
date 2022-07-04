import React, { useState, useEffect } from 'react';
import { MainButton } from '../Buttons';
import { Price, TextName, TextPrice } from '../ProductCard/styles';
import { Container, DescriptionLabel, ImageContainer } from './styles';

export const ProductDetails = ({ product }) => {
    const { images, name, description, price, id } = product;
    const [imageSelected, setImageSelected] = useState("");

    useEffect(() => {
        setImageSelected(images?.length > 0 ? images[0] : "");
    }, [images]);


    return (
        <Container>
            {
                id && (
                    <>
                        <div>
                            <img style={{ width: '100%', height: 300, objectFit: 'contain' }} src={imageSelected} alt="" />
                        </div>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', margin: "10px 0", columnGap: 10 }}>
                            {
                                images?.map((item, index) => {
                                    return (
                                        <ImageContainer key={index} onClick={() => { setImageSelected(item) }}>
                                            <img style={{ width: '100%', height: 80, objectFit: 'contain' }} src={item} alt="" />
                                        </ImageContainer>
                                    )
                                })
                            }
                        </div>
                        <br />

                        <TextName>{name}</TextName>
                        <br />
                        {
                            description?.split("\n").map((line, key) => {
                                return (
                                    <DescriptionLabel key={key} style={{ marginTop: 10 }}>{line}</DescriptionLabel>
                                )
                            })

                        }
                        <br />
                        <TextPrice>Price</TextPrice>
                        <Price>${price}</Price>
                        <br />
                        <br />

                        <MainButton> Add to cart </MainButton>
                    </>
                )
            }


        </Container>
    )
}