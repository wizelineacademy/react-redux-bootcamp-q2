import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoadingOrder,
  selectNumberItems,
  selectTotal,
} from '../selectors/cart';
import { Button } from '../styles/components/Producto.styles';
import {
  ColumnContainer,
  Container,
  Subtitle,
} from '../styles/components/Summary';
import { createOrder } from '../thunks/cart';
import { numberFormat } from '../utils/formats';

const Summary = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectNumberItems);
  const total = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoadingOrder);

  const handleCheckout = () => {
    dispatch(createOrder());
  };

  return (
    <Container>
      <Subtitle>Summary</Subtitle>
      <ColumnContainer>
        <span>{`Items: ${items}`}</span>
        <span>{`Total cost: ${numberFormat.format(total.toFixed(2))}`}</span>
        <Button onClick={handleCheckout} disabled={isLoading}>
          Checkout
        </Button>
      </ColumnContainer>
    </Container>
  );
};

export default Summary;
