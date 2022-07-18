import { useCallback, useEffect, useState } from 'react';
import { Container } from './../styles/pages/Products.styles';
import Product from './../components/Product';
import { I_Item, I_Data } from './types/Products';
import { axiosClient } from '../api/config';
import Lottie from 'lottie-react';
import * as data from './../lotties/happy-pencil.json';
import { Alert, Snackbar } from '@mui/material';

export const Products = () => {
  const [products, setProducts] = useState<I_Item[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const toggleMessage = useCallback(async () => {
    setShowAlert(!showAlert);
  }, [showAlert]);

  // Cache
  const fetchData = useCallback(async () => {
    try {
      const result = await axiosClient.get<I_Data>('/products');
      setProducts(result.data?.items || []);
      setLoader(false);
    } catch (error) {
      throw error;
    }
  }, [setProducts]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
            {products.map((item: I_Item) => {
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
