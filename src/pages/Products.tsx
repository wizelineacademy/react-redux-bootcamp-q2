import { useCallback, useEffect, useState } from 'react';
import { Container } from './../styles/pages/Products.styles';
import Product from './../components/Product';
import { I_Item } from './types/Products';
import Lottie from 'lottie-react';
import * as data from './../lotties/happy-pencil.json';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  selectAllProducts,
  selectProductsLoading
} from '../redux/slices/Products';

export const Products = () => {
  // const [products, setProducts] = useState<I_Item[]>([]);
  // const [loader, setLoader] = useState<boolean>(true);
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const toggleMessage = useCallback(async () => {
    setShowAlert(!showAlert);
  }, [showAlert]);

  const loader = useSelector(selectProductsLoading);
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    dispatch(getProducts()).unwrap();
  }, [dispatch]);

  return (
    <>
      {loader ? (
        <div role='progressbar'>
          <Lottie animationData={data} loop={true} />
        </div>
      ) : (
        <>
          <Snackbar
            open={showAlert}
            autoHideDuration={6000}
            onClose={toggleMessage}
          >
            <Alert
              onClose={toggleMessage}
              severity='success'
              sx={{ width: '100%' }}
            >
              Product added to the cart
            </Alert>
          </Snackbar>
          <Container role='document'>
            {products?.map((item: I_Item) => {
              return (
                <Product
                  key={`${item.id}`}
                  item={item}
                  toggleMessage={toggleMessage}
                />
              );
            })}
          </Container>
        </>
      )}
    </>
  );
};

export default Products;
