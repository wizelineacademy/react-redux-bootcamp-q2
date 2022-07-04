import {
  Button,
  Category,
  Image,
  Name,
  Price,
  StyledImageWrapper,
  StyledInfoWrapper,
  StyledProducto,
} from '../styles/components/Producto.styles';

export const Producto = ({ producto: { images, name, categories, price } }) => {
  return (
    <StyledProducto>
      <StyledImageWrapper>
        <Image src={images[0]} alt={name} />
      </StyledImageWrapper>
      <StyledInfoWrapper>
        <Name>{name}</Name>
        <Category>{categories[0]}</Category>
        <Price>$ {price}</Price>
        <Button>Add to cart</Button>
      </StyledInfoWrapper>
    </StyledProducto>
  );
};
