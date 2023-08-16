import { useSelector } from 'react-redux';
import Product from "./Product.js";
import "../style/products.css";

function Products() {
	const products = useSelector((state) => state.products);

	return (

		<div className="products">
			
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}

		</div>

	);
}

export default Products;