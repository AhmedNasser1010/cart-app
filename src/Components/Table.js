import TableTr from "./TableTr.js";

function Table(props) {
	const products = props.products;

	return (

		<table className="styled-table">
			<thead>
				<tr>
					<th>Title</th>
					<th>Photo</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{products.map(product => (<TableTr key={product.id} product={product} />))}
			</tbody>
		</table>

	);
}

export default Table;