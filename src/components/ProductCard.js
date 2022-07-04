import { Main, ProductImg, InnerContainer, NameText, AddToCartBtn, InnerTop, InnerBottom, CatText, PriceText } from '../styles/components/ProductCard.styles';

export const ProductCard = ({productObj}) => {
  const shortName = productObj.name.length> 38 ? `${productObj.name.slice(0,38)}...` : productObj.name;
  return (
    <Main>
      <InnerContainer>
        <InnerTop>
          <ProductImg src={productObj.images[0]} />
          <NameText>{shortName}</NameText>
        </InnerTop>
        <InnerBottom>
          <CatText>{productObj.categories[0]}</CatText>
          <PriceText>${productObj.price}</PriceText>
          <AddToCartBtn>
            Add to cart
          </AddToCartBtn>
        </InnerBottom>
      </InnerContainer>
    </Main>
  )
}