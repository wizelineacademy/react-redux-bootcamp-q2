import React from 'react'
import { useDispatch } from 'react-redux';
import { Wrapper} from './CardProduct.styles'
import { add } from '../../Redux/slices/myCartSlice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export const CardProduct = (props) => {
  const {items} = props;
  const dispatch = useDispatch();
  const formatNumbers = new Intl.NumberFormat('en-US');


  const handleAddToMyCart = (product) => {
    dispatch(add(product));
  };

  return (
    <Wrapper>
      {items.map(product => (
        <div className='card-products' key={Math.random()}>
          <div className='container-image-product'>
            <img className='principal-image-product' src={product.images[0]} alt={product.id}/>
          </div>
          <div className='product-name'>
            <p>{product.name.toLowerCase()}</p>
          </div>
          <div className='product-category'>
            <p>{product.categories}</p>
          </div>
          <div className='product-price'>
            <p> {`$ ${formatNumbers.format(product.price)}`}</p>
          </div>
          <div onClick= {()=> handleAddToMyCart(product)} className='button-add-to-cart'  >
            <p>Add to Cart</p>
            <AddShoppingCartIcon/>
          </div>
        </div>
      ))}
    </Wrapper>
  )
};
