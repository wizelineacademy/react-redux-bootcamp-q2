import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { CardProduct } from '../../components/CardProduct/CardProduct'
import { Wrapper} from './Products.styles'
import { useSelector } from 'react-redux';
import { getProducts, selectAllProducts, selectProductsLoading } from '../../Redux/slices/getProductsSlice';


export const Products = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectProductsLoading);
  const products = useSelector(selectAllProducts);

  useEffect(()=>{
    dispatch(getProducts());
  },[]);


  if( loading ){
    return <>Loading....</>
  }
  return (
    <Wrapper>
      <CardProduct items ={products}/>
    </Wrapper>
  )
};
