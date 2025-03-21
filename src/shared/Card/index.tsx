import React from "react";
import classes from "./card.module.scss";

interface ICard {
	secondary?: boolean;
}

const Card: React.FC<ICard> = ({ children, secondary }) => {
	const cardClass = secondary
		? `${classes.card} ${classes.secondary}`
		: classes.card;

	return <div className={cardClass}>{children}</div>;
};

export default Card;
