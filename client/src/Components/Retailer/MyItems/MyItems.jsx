import React, { useContext, useEffect, useState } from "react";
import classes from "./MyItems.module.css";
import { Card, ProductCard, Spinner } from "../../UI";
import trial1 from "../../../Assets/trial1.png";
import { sellerAuthContext } from "../../../Contexts";

const MyItems = () => {
	const { getSellerProducts, products } = useContext(sellerAuthContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getSellerProducts()
			.then((d) => {
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	let hasProductsReadyForSale = false;

	return (
		<>
			{loading ? (
				<Spinner center />
			) : (
				<div className={classes.my_items}>
					<h1 className={classes.text}>My Products</h1>
					<Card smooth width="auto" height="auto">
						<div className={classes.cards_container}>
							{products.map((p, i) => {
								// const product = p.data.sellerProducts;
								return (
									<ProductCard
										key={i}
										image={p.image}
										name={p.title}
										price={p.price}
										id={p._id}
									/>
								);
							})}
						</div>
					</Card>
					<h1 className={classes.text}>Products Ready for Sale</h1>
					<Card smooth width="auto" height="auto">
						<div className={classes.cards_container}>
							{products.map((p, i) => {
								// const product = p.data.sellerProducts;
								if (p.isReadyForSale) {
									hasProductsReadyForSale = true;
									return (
										<ProductCard
											key={i}
											image={p.image}
											name={p.title}
											price={p.price}
											id={p._id}
										/>
									);
								}
							})}
							{!hasProductsReadyForSale && <h3>No orders available</h3>}
						</div>
					</Card>
				</div>
			)}
		</>
	);
};

export default MyItems;
