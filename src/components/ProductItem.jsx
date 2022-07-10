import React, { useContext } from 'react'

import { UserContext } from './UserData'

import { Card, CardInfo, Image, Title, Paragraph, CardButtons, Button } 
  from '../styles/components/ProductItem.styles.js';

const ProductItem = (props) =>{
  const { id, name, images, price, categories } = props
  const { activeUser, addProductToCart } = useContext(UserContext);

  return (
    <Card data-testid="product-card">
      <CardInfo>
        <Image src={(images && images[0]) || undefined} alt={ null }
           data-testid="product-image"
        />
        <Title data-testid="product-name">{name || "Not Available"}</Title>
        <Paragraph
          data-testid="product-category"
          >{(categories && categories[0]) || "Generic"}
        </Paragraph>
        <Paragraph $type="price"
          data-testid="product-price"
          >${price || "Not Available"}
        </Paragraph>
      </CardInfo>
      <CardButtons>
        <Button
          data-testid="product-btn-add_to_cart"
          onClick={() => addProductToCart(activeUser, id)}
          >Add to cart
        </Button>
      </CardButtons>
    </Card>
  )
}

export default ProductItem