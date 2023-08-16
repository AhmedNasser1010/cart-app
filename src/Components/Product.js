import { useDispatch } from 'react-redux';
import { addToCart } from "../rtk/slices/cartSlice.js";

function Product(props) {
	const dispatch = useDispatch();
	const product = props.product;

	return (

		<div className="product">

			<div className="top">
				<img className="image" src={product.image} alt={product.title} />
			</div>

			<div className="middle">
				<h3 className="title">{product.title}</h3>
				<p className="sub">{product.description}</p>
				<span className="price">{product.price}$</span>
			</div>

			<div className="bottom">
				<button className="btn" onClick={() => dispatch(addToCart(product))}>Buy</button>
			</div>

		</div>

	);
}

export default Product;