import React from 'react'
import {CardProduct} from '../../components/CardProduct/CardProduct'
import { Wrapper} from './Products.styles'
import mockData from '../../utils/MockData/products.json'


export const Products = () => {

  return (
    <Wrapper>
      <CardProduct items ={mockData}/>
    </Wrapper>
  )
};
