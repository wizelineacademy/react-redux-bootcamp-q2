import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

import { Card, CardInfo, Image, Title, Paragraph, CardButtons, 
  Button, QuantityButtons } 
  from '../styles/components/CartItem.styles.js';

const CartItem = (props) => {
  const {id, name, images, price, quantity} = props

  return (
    <Card data-testid="cart-card">
      <Image src={(images && images[0]) || undefined} 
        alt={ name || "Not Available" }
        data-testid="cart-image"
        />
      <CardInfo>
        <Title data-testid="cart-item-name">{name || "Not Available"}</Title>
        <CardButtons>
          <Button
            data-testid="cart-btn-remove-item"
            ><FontAwesomeIcon icon={faTrash} />
          </Button>
          <Paragraph $type="price"
            data-testid="cart-product-price"
            >${quantity * price || 0}
          </Paragraph>
          <QuantityButtons>
            <Button
              data-testid="cart-btn-rest-1-item"
              ><FontAwesomeIcon icon={faMinus} />
            </Button>
            <Paragraph>{quantity || 0}</Paragraph>
            <Button
              data-testid="cart-btn-add-1-item"
              ><FontAwesomeIcon icon={faPlus} />
            </Button>
          </QuantityButtons>
        </CardButtons>
      </CardInfo>
    </Card>
  )
}

export default CartItem