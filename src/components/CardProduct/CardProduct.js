import React from 'react'
import { Wrapper} from './CardProduct.styles'

export const CardProduct = ({items: {data}}) => {
const {products} = data;

  return (
    <Wrapper>
      {products.items.map(product => (
        <div className='card-products'key={product.id}>
          <div className='container-image-product'>
            <img className='principal-image-product' src={product.images[0]} alt={product.id}/>
          </div>
          <div className='product-name'>
            <p>{product.name}</p>
          </div>
          <div className='product-category'>
            <p>{product.categories}</p>
          </div>
          <div className='product-price'>
            <p> {`$ ${product.price}`}</p>
          </div>
          <div className='container-button-add-to-cart'>
            <button className='button-add-to-cart' type='submit'>+ Add to Cart</button>
          </div>
        </div>
      ))}

    </Wrapper>
  )
};
