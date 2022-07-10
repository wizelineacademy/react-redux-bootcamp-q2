import {
	QuantityContainer,
	TableCell,
} from "../styles/components/CartTable.styles";

const CartTable = ({ items }) => {
	return (
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Product details</th>
					<th>Quantity</th>
					<th>Price</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item) => (
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
									// value={quantity}
									// onChange={handleQuantityChange}
								/>
								<button>Remove</button>
							</QuantityContainer>
						</TableCell>
						<TableCell>${item.price}</TableCell>
						<TableCell>${item.price}</TableCell>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default CartTable;
