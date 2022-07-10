import React from "react";
import mockData from "../../public/data/products.json";
import CartSummary from "../components/CartSummary";
import CartTable from "../components/CartTable";
import Container from "../styles/pages/Cart.styles";

export const Cart = () => {
	const { data } = mockData;
	const items = data.products.items;

	return (
		<>
			<p>Shopping Cart</p>
			<hr />
			<Container>
				<CartTable items={[items[0], items[1]]} />
				<CartSummary total={items[0].price + items[1].price} />
			</Container>
		</>
	);
};
