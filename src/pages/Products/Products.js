import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { CardProduct } from '../../components/CardProduct/CardProduct'
import { Wrapper} from './Products.styles'
import Skeleton from '@mui/material/Skeleton';
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
    return (
      <div className='skeleton'>
      <Skeleton variant="rectangular" width={"80%"} height={118} />
      <Skeleton width={"80%"} />
      <Skeleton width={"80%"} />
      </div>
    )
  }
  return (
    <Wrapper>
      <CardProduct items ={products}/>
    </Wrapper>
  )
};
