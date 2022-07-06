import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import MockData from '../mock/mockData';
import { FlexContainer, Item } from '../components/Products/ProductsStyles';

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {   
    setProducts([...MockData.data.products.items])
  }, []);

  return (
    <FlexContainer>
      {
        products.map((item, key)=>{
          return (<Item key={key}><Card data={item} /></Item>)
        })
      }
    
    </FlexContainer>
  )
}
