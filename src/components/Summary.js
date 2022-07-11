import { useMemo } from 'react';
import { Button } from '../styles/components/Producto.styles';
import {
  ColumnContainer,
  Container,
  Subtitle,
} from '../styles/components/Summary';

const Summary = ({ productos, quantities }) => {
  const items = useMemo(
    () =>
      Object.keys(quantities).reduce((acc, key) => acc + quantities[key], 0),
    [quantities]
  );

  const total = useMemo(
    () =>
      productos.reduce((acc, producto) => {
        return acc + producto.price * quantities[producto.id];
      }, 0),
    [productos, quantities]
  );

  return (
    <Container>
      <Subtitle>Summary</Subtitle>
      <ColumnContainer>
        <span>{`Items: ${items}`}</span>
        <span>{`Total cost: $ ${Math.round(total, 2)}`}</span>
        <Button>Checkout</Button>
      </ColumnContainer>
    </Container>
  );
};

export default Summary;
