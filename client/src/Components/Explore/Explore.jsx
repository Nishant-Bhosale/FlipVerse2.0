import React, { useContext, useEffect, useState } from "react";
import classes from "./Explore.module.css";
import { ProductCard } from "../UI";
// import trial2 from "../../Assets/trial2.png";
// import trial3 from "../../Assets/trial3.png";
// import trial4 from "../../Assets/trial4.png";
// import trial5 from "../../Assets/trial5.png";
// import CartIcon from "../UI/CartIcon/CartIcon";
import { productContext } from "../../Contexts";
import { Spinner } from "../UI";

const Explore = () => {
	const { getAllProducts, allProducts } = useContext(productContext);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getAllProducts().then((d) => {
			setLoading(false);
		});
	}, []);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div className={classes.cart_container}>
					<h1 className={classes.cart_text}>
						Explore our Products ✨{/* <CartIcon />{" "} */}
					</h1>
					<div className={classes.cart_products}>
						{allProducts.length > 0 &&
							allProducts.map((p, i) => {
								return (
									<ProductCard
										key={i}
										id={p._id}
										image={p.image}
										name={p.title}
										price={p.price}
									/>
								);
							})}
					</div>
				</div>
			)}
		</>
	);
};

export default Explore;
