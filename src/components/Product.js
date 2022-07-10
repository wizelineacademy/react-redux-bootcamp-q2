import AddButton from "./AddButton";
import {
	Name,
	Price,
	Image,
	StyledProduct,
} from "../styles/components/Product.styles";

const Product = (productData) => {
	const { categories, images, name, price } = productData;

	return (
		<StyledProduct>
			<Image src={images[0]} alt={name} />
			<Name>{name}</Name>
			<span>{categories[0]}</span>
			<Price>${price}</Price>
			<AddButton />
		</StyledProduct>
	);
};

export default Product;
