import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuantityByProductId } from '../selectors/cart';
import { selectProductoById } from '../selectors/productos';
import { removeProduct, setQuantity } from '../slices/cart';
import {
  Column,
  Detail,
  ImageContainer,
  Row,
} from '../styles/components/CartTable.styles';
import { Image } from '../styles/components/Producto.styles';
import { getProducto } from '../thunks/productos';
import { numberFormat } from '../utils/formats';

const CartRow = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector(selectProductoById(productId));
  const quantity = useSelector(selectQuantityByProductId(productId));

  useEffect(() => {
    if (!product) {
      dispatch(getProducto(productId));
    }
  }, [dispatch, productId, product]);

  const handleQuantityChange = useCallback(
    (event) => {
      const value = event.target.value;
      if (value > 0) {
        dispatch(
          setQuantity({
            id: productId,
            quantity: parseInt(value),
          })
        );
      }
    },
    [dispatch, productId]
  );

  const handleRemoveClick = useCallback(() => {
    dispatch(removeProduct(productId));
  }, [dispatch, productId]);

  if (!product || !quantity) return null;

  const { name, price, images } = product;

  return (
    <Row>
      <Column style={{ display: 'flex' }}>
        <ImageContainer>
          <Image src={images[0]} alt={name} />
        </ImageContainer>
        <Detail>{name}</Detail>
      </Column>
      <Column>
        <div style={{ display: 'flex', gap: '4px' }}>
          <input
            type={'number'}
            onChange={handleQuantityChange}
            value={quantity}
            min={1}
          />
          <button onClick={handleRemoveClick}>Remove</button>
        </div>
      </Column>
      <Column style={{ textAlign: 'right' }}>
        {numberFormat.format(price)}
      </Column>
      <Column style={{ textAlign: 'right' }}>
        {numberFormat.format(price * quantity)}
      </Column>
    </Row>
  );
};

export default CartRow;
