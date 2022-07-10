import { useDispatch } from "react-redux";
import { add } from "../store/slices/cart";
import Button from "../styles/components/AddButton.styles";

const AddButton = ({ productData }) => {
	const dispatch = useDispatch();

	return (
		<Button onClick={() => dispatch(add({ ...productData, quantity: 1 }))}>
			Add to cart
		</Button>
	);
};

export default AddButton;
