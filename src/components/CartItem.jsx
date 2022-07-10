import React, {useContext, useRef} from 'react'

import { UserContext } from './UserData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

import { Card, CardInfo, Image, Title, Paragraph, CardButtons, 
  Button, QuantityButtons, Input } 
  from '../styles/components/CartItem.styles.js';

const CartItem = (props) => {
  const { id, name, images, price, quantity } = props
  const { activeUser, incrementQuantityBy1, decrementQuantityBy1, setItemQuantity, deleteProductFromCart } = useContext(UserContext);
  const inputRef = useRef();

  return (
    <Card data-testid="cart-card">
      <Image src={(images && images[0]) || undefined} 
        alt={ name || "Not Available" }
        data-testid="cart-image"
        />
      <CardInfo>
        <Title data-testid="cart-item-name">{name || "Not Available"}</Title>
        <CardButtons>
          <Paragraph $type="price"
            data-testid="cart-product-price"
            >${Math.round((quantity * price || 0) * 100) / 100}
          </Paragraph>
          <QuantityButtons>
            <Button
              data-testid="cart-btn-rest-1-item"
              onClick={() => decrementQuantityBy1(activeUser, id)}
              ><FontAwesomeIcon icon={faMinus} />
            </Button>
            <Input type="text" name="itemQuantity" id="" 
              ref={inputRef}
              value={quantity || 0}
              onChange={() => setItemQuantity(activeUser, id, inputRef.current.value)}
            />
            <Button
              data-testid="cart-btn-add-1-item"
              onClick={() => incrementQuantityBy1(activeUser, id)}
              ><FontAwesomeIcon icon={faPlus} />
            </Button>
          </QuantityButtons>
        </CardButtons>
      </CardInfo>
      <Button
        data-testid="cart-btn-remove-item"
        onClick={() => deleteProductFromCart(activeUser, id)}
        ><FontAwesomeIcon icon={faTrash} />
      </Button>
    </Card>
  )
}

export default CartItem