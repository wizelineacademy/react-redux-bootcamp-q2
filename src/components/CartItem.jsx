import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

import { Card, CardInfo, Image, Title, Paragraph, CardButtons, 
  Button, QuantityButtons } 
  from '../styles/components/CartItem.styles.js';

const CartItem = (props) => {
  const {id, name, images, price, quantity} = props

  return (
    <Card data-testid="product-card">
      <Image src={(images && images[0]) || undefined} alt={ null }
        data-testid="product-image"
        />
      <CardInfo>
        <Title data-testid="product-name">{name || "Not Available"}</Title>
        <CardButtons>
          <Button
            data-testid="product-btn-add_to_cart"
            ><FontAwesomeIcon icon={faTrash} />
          </Button>
          <Paragraph $type="price"
            data-testid="product-price"
            >${quantity * price || 0}
          </Paragraph>
          <QuantityButtons>
            <Button
              data-testid="product-btn-add_to_cart"
              ><FontAwesomeIcon icon={faMinus} />
            </Button>
            <Paragraph>{quantity || 0}</Paragraph>
            <Button
              data-testid="product-btn-add_to_cart"
              ><FontAwesomeIcon icon={faPlus} />
            </Button>
          </QuantityButtons>
        </CardButtons>
      </CardInfo>
    </Card>
  )
}

export default CartItem