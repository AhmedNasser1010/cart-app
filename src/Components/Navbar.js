import { Link } from "react-router-dom";
import "../style/nav.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from "../rtk/slices/productsSlice.js";

function Nav() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
  	dispatch(fetchProducts())
  }, [])

	return (

		<nav>
			<Link className="logo" to="/">Cart App</Link>
			<div className="links">
				<Link className="link" to="/">Products</Link>
				<Link className="link" to="cart">Cart - {cart.length}</Link>
			</div>
		</nav>

	);
}

export default Nav;