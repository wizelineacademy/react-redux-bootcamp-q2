import TableRow from "./TableRow";

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
					<TableRow item={item} />
				))}
			</tbody>
		</table>
	);
};

export default CartTable;
