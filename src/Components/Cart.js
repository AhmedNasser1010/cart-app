import Table from "./Table.js";
import { useSelector, useDispatch } from 'react-redux';
import "../style/table.css";
import "../style/cart.css";
import { clearCart } from "../rtk/slices/cartSlice.js"

function Cart() {
	const products = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const total = products.reduce((acc, product) => {
		acc += product.price * product.quantity;
		return acc;
	}, 0)

	return (

		<div className="cart">
			<span className="red-btn" onClick={() => dispatch(clearCart())}>Clear</span>
			<h5>Total Price: {total.toFixed(2)}$</h5>
			<Table products={products} />
		</div>

	);
}

export default Cart;