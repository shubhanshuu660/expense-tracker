import React from "react";
import classes from "./description.module.scss";

interface IDescription {
	title?: string;
	price?: number;
	id?: number;
	onRemoveExpense?: any;
}

const Description: React.FC<IDescription> = ({
	title,
	price,
	id,
	onRemoveExpense,
}) => {
	const handleDelete = () => {
		onRemoveExpense(id);
	};
	return (
		<div className={classes.description}>
			<h2>
				{title}
				<p>{`$${price}`}</p>
			</h2>
			{/* <div className={classes.price}></div> */}
			<button type="button" onClick={handleDelete.bind(null, id)}>
				Remove
			</button>
		</div>
	);
};

export default Description;
