import React from "react";
import mockData from "../../public/data/products.json";

import Product from "../components/Product";
import StyledProducts from "../styles/pages/Products.styles";

export const Products = () => {
	const { data } = mockData;

	return (
		<StyledProducts>
			{data.products.items.map((item) => (
				<Product key={item.id} {...item} />
			))}
		</StyledProducts>
	);
};
