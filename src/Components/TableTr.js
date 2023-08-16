import { removeFromCart } from "../rtk/slices/cartSlice.js";
import { useDispatch } from 'react-redux';

function TableTr(props) {
	const dispatch = useDispatch();
	const product = props.product;

	return (

		<tr className={`row-${product.id}`}>
			<th>{product.title}</th>
			<th><img className="product-image" src={product.image} alt={product.title} /></th>
			<th>{product.price}$</th>
			<th>{product.quantity}</th>
			<th><button className="red-btn" onClick={() => dispatch(removeFromCart(product))}>Delete</button></th>
		</tr>

	);
}

export default TableTr;