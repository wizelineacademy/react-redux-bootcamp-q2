import { Main } from '../styles/components/ProductCard.styles';

export const ProductCard = ({productObj}) => {
  console.log('pord-obj', productObj)
  return (
    <Main>
      <img style={{objectFit: 'contain'}} src={productObj.images[0]} width="100" height="100" />
      <p>{productObj.name}</p>
    </Main>
  )
}