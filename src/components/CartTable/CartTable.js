import React from 'react';
import { CartTableRow } from '../CartTableRow/CartTableRow';
import { TableWrapper } from './CartTable.styles'
import listOfProducts from '../../data/products.json';

export const CartTable = () => {
  const arrayOfProducts = listOfProducts.data.products.items.slice(0, 3) //Temporary for testing purposes while submitting second delivery

  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>Product details</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {arrayOfProducts.map((product) => {
          return (
            <CartTableRow
              key={product.id}
              item={product}
              quantity={2}
            />
          );
        })}
      </tbody>

    </TableWrapper>
  );
};