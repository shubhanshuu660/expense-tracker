import React from "react";
import Date from "../Date";
import Description from "../Description";
import classes from "./item.module.scss";

interface IItem {
	data: any;
	onRemoveExpense: any;
}

const Item: React.FC<IItem> = ({ data, onRemoveExpense }) => {
	return (
		<>
			<li
				style={{ animationDelay: data.id + "s" }}
				className={classes.animateLeft}
			>
				<Date date={data.date} />
				<Description
					title={data.title}
					onRemoveExpense={onRemoveExpense}
					price={data.amount}
					id={data.id}
				/>
			</li>
		</>
	);
};

export default Item;
