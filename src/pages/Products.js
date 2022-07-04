import { useState, useEffect } from 'react';
import { Container, Product, Title, Category, Price, Button } from '../styles/pages/Products.styles';
import axios from 'axios';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = () => {
    axios.get('data/products.json').then(
      res => setProducts(res.data.data.products.items));
  }

  return (
    <Container>
      {products.map(({ id, images, name, categories, price }) => {
        const productName = name.length > 40 ? `${name.substring(0, 40)}...` : name;
        return (
          <Product key={id}>
            <img src={images[0]} alt={name} />
            <Title>{productName}</Title>
            <Category>{categories[0]}</Category>
            <Price>$ {price}</Price>
            <Button>Add to cart</Button>
          </Product>
        )
      })}
    </Container>
  )
}
