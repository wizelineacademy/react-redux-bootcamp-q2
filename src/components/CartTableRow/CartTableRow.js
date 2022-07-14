import React from 'react';
import {
  TableData,
  ProductDetailsWrapper,
  ProductImageWrapper,
  Image,
  ProductDetailsTextWrapper,
  QuantityWrapper,
  RemoveButton,
} from './CartTableRow.styles';

export const CartTableRow = ({item, quantity}) => {
  const {name, price, images, id} = item;
  const totalPrice = (price * quantity).toFixed(2);

  return (
    <tr>
      <TableData>

        <ProductDetailsWrapper>
          <ProductImageWrapper>
            <Image src={images[0]} alt={'Picture of the product' + {name}} />
          </ProductImageWrapper>
          <ProductDetailsTextWrapper>
            <p>{name}</p>
            <p>Product code: {id}</p>
          </ProductDetailsTextWrapper>
        </ProductDetailsWrapper>
      </TableData>

      <TableData>
        <QuantityWrapper>
          <input
            defaultValue={quantity}
            type='number'
            min={0}
          />
          <RemoveButton>Remove</RemoveButton>
        </QuantityWrapper>
      </TableData>

      <TableData>${price}</TableData>
      <TableData>${totalPrice}</TableData>
    </tr>
  );
};