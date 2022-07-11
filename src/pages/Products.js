import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Producto } from '../components/Producto';
import { ProductGrid } from '../styles/pages/Products.styles';

export const Products = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const productosRequest = await fetch('data/products.json');
        const productosJson = await productosRequest.json();
        setProductos(productosJson.data.products.items);
      } catch (err) {
        console.log(err);
      }
    };
    getProductos();
  }, []);

  return (
    <ProductGrid>
      {productos.map((producto) => (
        <Producto key={producto.id} producto={producto} />
      ))}
    </ProductGrid>
  );
};
