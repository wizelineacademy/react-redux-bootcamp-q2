import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card.js/Card';
import MockData from '../mock/mockData';

const FlexContainer = styled.ul`
  padding: 0;
  margin: auto;
  list-style: none;
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 70%;
`;

const Item = styled.li`
  padding: 5px;
  width: 300px;
  margin: 10px;
  font-weight: bold;
  text-align: center;
  min-height: 310px;
  align-self: flex-end;
`
 
export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {   
    setProducts([...MockData.data.products.items])
  }, []);

  console.log(products)
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
