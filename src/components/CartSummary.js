import {
	Button,
	SummaryContainer,
} from "../styles/components/CartSummary.styles";

const CartSummary = ({ total }) => {
	return (
		<SummaryContainer>
			<p>Summary</p>
			<p>Items</p>
			<p>Total Cost</p>
			<p>{total}</p>
			<Button>Checkout</Button>
		</SummaryContainer>
	);
};

export default CartSummary;
