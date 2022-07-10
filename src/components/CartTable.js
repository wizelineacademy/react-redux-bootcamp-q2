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
						<td>
							<img
								src={item.images[0]}
								alt={item.description}
								width={100}
								height={100}
							/>
						</td>
						<td>{item.name}</td>
						<td>
							<input
								type="number"
								// value={quantity}
								// onChange={handleQuantityChange}
							/>
							<button>Remove</button>
						</td>
						<td>${item.price}</td>
						<td>${item.price}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default CartTable;
