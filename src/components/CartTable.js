import { useState } from 'react';
import {
  Column,
  ColumnHeader,
  Detail,
  ImageContainer,
  Row,
  Table,
  TableContainer,
  Title,
} from '../styles/components/CartTable.styles';
import { Image } from '../styles/components/Producto.styles';
import Summary from './Summary';

const CartTable = ({ productos }) => {
  const [quantities, setQuantities] = useState(
    productos.reduce((acc, producto) => {
      return {
        ...acc,
        [producto.id]: 1,
      };
    }, {})
  );
  const handleQuantityChange = (index) => (event) => {
    setQuantities({
      ...quantities,
      [productos[index].id]: parseInt(event.target.value),
    });
  };
  return (
    <>
      <Title>Shopping Cart</Title>
      <TableContainer>
        <Table>
          <thead>
            <Row>
              <ColumnHeader>Product details</ColumnHeader>
              <ColumnHeader>Quantity</ColumnHeader>
              <ColumnHeader>Price</ColumnHeader>
              <ColumnHeader>Total</ColumnHeader>
            </Row>
          </thead>
          <tbody>
            {productos.map(({ id, name, images, price }, index) => {
              return (
                <Row key={id}>
                  <Column style={{ display: 'flex' }}>
                    <ImageContainer>
                      <Image src={images[0]} alt={name} />
                    </ImageContainer>
                    <Detail>{name}</Detail>
                  </Column>
                  <Column>
                    <input
                      type={'number'}
                      onChange={handleQuantityChange(index)}
                      value={quantities[id]}
                      min={1}
                    />
                  </Column>
                  <Column style={{ textAlign: 'right' }}>{`$ ${price}`}</Column>
                  <Column style={{ textAlign: 'right' }}>
                    {`$ ${price * quantities[id]}`}
                  </Column>
                </Row>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
      <Summary productos={productos} quantities={quantities} />
    </>
  );
};

export default CartTable;
