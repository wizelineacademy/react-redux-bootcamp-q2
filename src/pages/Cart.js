import React from "react";
import { useSelector } from "react-redux";
import CartSummary from "../components/CartSummary";
import CartTable from "../components/CartTable";
import {
	Container,
	MainContainer,
	BoldTitle,
	Line,
} from "../styles/pages/Cart.styles";

export const Cart = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<MainContainer>
			<Container>
				<BoldTitle>Shopping Cart</BoldTitle>
				<Line />
				<CartTable items={cart} />
			</Container>
			<CartSummary />
		</MainContainer>
	);
};
