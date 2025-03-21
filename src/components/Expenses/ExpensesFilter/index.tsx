import React from "react";
import SelectBox from "../../../shared/SelectBox";
import ExpenseContext from "../../../store/expenseContext";
import classes from "./filter.module.scss";

interface IExpensesFilter {
	toggleChart?: React.MouseEventHandler<HTMLButtonElement>;
	toggleText: boolean;
	onChangeYear: any;
	selectedYear: any;
}

const ExpensesFilter: React.FC<IExpensesFilter> = ({
	toggleChart,
	toggleText,
	selectedYear,
	onChangeYear,
}) => {
	const ctx = React.useContext(ExpenseContext);

	const filterYear = ctx.items.map((item: any) => {
		return item.date.getFullYear().toString();
	});

	const years: any = new Set(filterYear);

	const reverseYear = Array.from(years).reverse();

	const updatedYears = reverseYear.map((currYear: any, i: any) => {
		return {
			id: i,
			value: currYear,
		};
	});

	return (
		<div className={classes.filter}>
			<p>Filter by year</p>

			<div className={classes.wrap}>
				<button onClick={toggleChart}>
					{toggleText ? "Hide" : "Show"} Chart
				</button>
				{reverseYear.length > 1 && (
					<SelectBox
						selected={selectedYear}
						dropdownChangeHandler={onChangeYear}
						options={updatedYears}
					/>
				)}
			</div>
		</div>
	);
};

export default ExpensesFilter;
