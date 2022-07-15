import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cart';
import {
  Button,
  Category,
  Image,
  Name,
  Price,
  StyledImageWrapper,
  StyledInfoWrapper,
  StyledProducto,
} from '../styles/components/Producto.styles';
import { numberFormat } from '../utils/formats';

export const Producto = ({
  producto: { id, images, name, categories, price },
}) => {
  const dispatch = useDispatch();

  const handleClik = useCallback(() => {
    dispatch(addToCart(id));
  }, [dispatch, id]);

  return (
    <StyledProducto>
      <StyledImageWrapper>
        <Image src={images[0]} alt={name} />
      </StyledImageWrapper>
      <StyledInfoWrapper>
        <Name>{name}</Name>
        <Category>{categories[0]}</Category>
        <Price>{numberFormat.format(price)}</Price>
        <Button onClick={handleClik}>Add to cart</Button>
      </StyledInfoWrapper>
    </StyledProducto>
  );
};
