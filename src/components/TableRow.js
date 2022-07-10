import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../store/slices/cart";
import {
	QuantityContainer,
	TableCell,
} from "../styles/components/CartTable.styles";

const TableRow = ({ item }) => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(item.quantity);

	const handleQuantityChange = (e) => {
		const newQuantity = parseInt(e.target.value);
		setQuantity(newQuantity);
		dispatch(changeQuantity({ id: item.id, quantity: newQuantity }));
	};

	return (
		<tr key={item.id}>
			<TableCell>
				<img
					src={item.images[0]}
					alt={item.description}
					width={100}
					height={100}
				/>
			</TableCell>
			<TableCell>{item.name}</TableCell>
			<TableCell>
				<QuantityContainer>
					<input
						type="number"
						min="0"
						value={quantity}
						onChange={handleQuantityChange}
					/>
					<button>Remove</button>
				</QuantityContainer>
			</TableCell>
			<TableCell>${item.price}</TableCell>
			<TableCell>${(item.price * quantity).toFixed(2)}</TableCell>
		</tr>
	);
};

export default TableRow;
