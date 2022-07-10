import { useSelector } from "react-redux";
import {
	Button,
	SummaryContainer,
} from "../styles/components/CartSummary.styles";
import { BoldTitle, Line } from "../styles/pages/Cart.styles";

const CartSummary = () => {
	const cart = useSelector((state) => state.cart);

	const total = cart.reduce((previousValue, currentValue) => {
		const total = currentValue.quantity * currentValue.price;

		return previousValue + total;
	}, 0);

	return (
		<SummaryContainer>
			<BoldTitle>Summary</BoldTitle>
			<Line />
			<p>Items</p>
			<Line />
			<p>Total Cost</p>
			<p>${total.toFixed(2)}</p>
			<Button>Checkout</Button>
		</SummaryContainer>
	);
};

export default CartSummary;
