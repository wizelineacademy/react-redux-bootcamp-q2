import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import { I_Item } from '../pages/types/Products';
import {
  RowContent,
  NameWrapper,
  CategoryWrapper,
  Img,
  PriceWrapper
} from './../styles/components/Products.styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { addItemOnStorage } from './../utils/sessionStorage';
import { useCallback } from 'react';

interface I_Product {
  item: I_Item;
  toggleMessage: () => void;
}

const Product = ({ item, toggleMessage }: I_Product) => {
  const { images, name, categories, price } = item;

  const addItem = useCallback(() => {
    addItemOnStorage(item);
    toggleMessage();
  }, [item, toggleMessage]);

  return (
    <Card>
      <CardMedia>
        <RowContent>
          <Img src={images[0]} alt={name} />
        </RowContent>
      </CardMedia>
      <CardContent>
        <NameWrapper>
          <Typography component='h1'>{name}</Typography>
        </NameWrapper>
        <CategoryWrapper>
          <Typography component='h6'>{categories[0]}</Typography>
        </CategoryWrapper>
        {price && (
          <PriceWrapper>
            <Typography fontSize={12}>$</Typography>
            <Typography fontSize={16}>{price}</Typography>
          </PriceWrapper>
        )}
      </CardContent>
      <RowContent>
        <Button
          onClick={() => addItem()}
          startIcon={<ShoppingCartIcon />}
          variant='contained'
        >
          Add to cart
        </Button>
      </RowContent>
    </Card>
  );
};

export default Product;
