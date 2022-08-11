import React from "react";
import classes from "./Spinner.module.css";

const Spinner = ({ center }) => {
	return (
		<div
			className={classes.spinner}
			style={{
				marginLeft: center ? "25rem" : "",
				marginBottom: center ? "25rem" : "",
				marginTop: center ? "15rem" : "",
			}}
		></div>
	);
};

export default Spinner;
