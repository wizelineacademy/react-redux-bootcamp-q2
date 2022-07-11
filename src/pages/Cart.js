import React, { useEffect, useState } from 'react';
import CartTable from '../components/CartTable';

export const Cart = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const productosRequest = await fetch('data/products.json');
        const productosJson = await productosRequest.json();
        setProductos(
          productosJson.data.products.items.filter(({ price }) => price < 30)
        );
      } catch (err) {
        console.log(err);
      }
    };
    getProductos();
  }, []);

  return <>{productos.length > 0 && <CartTable productos={productos} />}</>;
};
