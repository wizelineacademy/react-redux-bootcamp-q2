import {
	Button,
	SummaryContainer,
} from "../styles/components/CartSummary.styles";
import { BoldTitle, Line } from "../styles/pages/Cart.styles";

const CartSummary = ({ total }) => {
	return (
		<SummaryContainer>
			<BoldTitle>Summary</BoldTitle>
			<Line />
			<p>Items</p>
			<Line />
			<p>Total Cost</p>
			<p>${total}</p>
			<Button>Checkout</Button>
		</SummaryContainer>
	);
};

export default CartSummary;
