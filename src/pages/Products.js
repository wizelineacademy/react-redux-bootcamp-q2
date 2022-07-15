import React from 'react';
import { useEffect } from 'react';
import { Producto } from '../components/Producto';
import { ProductGrid } from '../styles/pages/Products.styles';
import { useDispatch, useSelector } from 'react-redux';
import { getProductos } from '../thunks/productos';
import {
  selectHasErrorProducts,
  selectHasLoadedProducts,
  selectIsLoadingProducts,
  selectProducts,
} from '../selectors/productos';
import { Oval } from 'react-loader-spinner';
import { Main } from '../styles/pages/Home.styles';

export const Products = () => {
  const dispatch = useDispatch();
  const productos = useSelector(selectProducts);
  const hasLoaded = useSelector(selectHasLoadedProducts);
  const isLoading = useSelector(selectIsLoadingProducts);
  const hasError = useSelector(selectHasErrorProducts);

  useEffect(() => {
    dispatch(getProductos());
    // eslint-disable-next-line
  }, []);

  if (hasError) {
    return (
      <Main>
        <h2>{hasError}</h2>
      </Main>
    );
  }

  if (hasLoaded && !productos) {
    return (
      <Main>
        <h2>There are no products to show in the system</h2>
      </Main>
    );
  }

  if (isLoading) {
    return (
      <Main>
        <Oval
          ariaLabel="loading-indicator"
          strokeWidth={5}
          color="red"
          secondaryColor="gray"
        />
      </Main>
    );
  }

  return (
    <ProductGrid>
      {productos?.map((producto) => (
        <Producto key={producto.id} producto={producto} />
      ))}
    </ProductGrid>
  );
};
