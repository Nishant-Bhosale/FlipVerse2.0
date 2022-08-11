import React, { useEffect, useContext, useState } from "react";
import classes from "./PurchasedItems.module.css";
import { Card, ProductCard } from "../../UI";
import { Spinner } from "../../UI";
import { productContext } from "../../../Contexts";

const PurchasedItems = () => {
	const { getPurchasedProducts, purchasedProducts } =
		useContext(productContext);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getPurchasedProducts()
			.then((d) => {
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
			});
		console.log(purchasedProducts);
	}, []);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div className={classes.purchased_products}>
					<h1 className={classes.text}>Purchased Items</h1>
					<Card smooth width="auto" height="auto">
						<div className={classes.cards_container}>
							{purchasedProducts.map((product, index) => {
								return (
									<ProductCard
										key={index}
										id={product._id}
										image={product.image}
										name={product.title}
										price={product.price}
									/>
								);
							})}
						</div>
					</Card>
				</div>
			)}
		</>
	);
};

export default PurchasedItems;
