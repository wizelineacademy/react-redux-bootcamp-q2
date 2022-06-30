import React from 'react'

import { Card, ImageContainer, Image, Title, Paragraph, Button } 
  from '../styles/components/ProductItem.styles.js';

const ProductItem = (props) =>{
  const { name, images, price, categories } = props

  return (
    <Card>
      <ImageContainer>
        <Image src={(images && images[0]) || undefined} alt={ null }/>
      </ImageContainer>
        <Title>{name || "Not Available"}</Title>
        <Paragraph $type="category">{(categories && categories[0]) || "Generic"}</Paragraph>
        <Paragraph $type="price">${price || "Not Available"}</Paragraph>
        <Button>Add to cart</Button>
    </Card>
  )
}

export default ProductItem