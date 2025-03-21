import React from "react";
import classes from "./bar.module.scss";

interface IBar {
	label: string;
	value: number;
	maxValue: number;
}

const Bar: React.FC<IBar> = ({ label, maxValue, value }) => {
	let barFillHeight = "0%";

	if (maxValue > 0) {
		barFillHeight = Math.round((value / maxValue) * 100) + "%";
	}

	return (
		<div className={classes.wrap}>
			<div className={classes.bar}>
				<span style={{ height: barFillHeight }} />
			</div>
			<p>{label}</p>
		</div>
	);
};

export default Bar;
