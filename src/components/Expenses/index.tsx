import React, { useContext } from "react";
import Container from "../../shared/container";
import Layout from "../../shared/Layout";
import NoData from "../../shared/noData";
import ExpenseContext from "../../store/expenseContext";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = () => {
	// const currentYear = new Date().getFullYear().toString();

	const [showChart, setShowChart] = React.useState(true);

	const [selectedYear, setSelectedYear] = React.useState("all");

	const handleChange = (year: string) => {
		setSelectedYear(year);
	};

	const ctx = useContext(ExpenseContext);

	let items;

	if (selectedYear !== "all") {
		items = ctx.items.filter((item: any) => {
			return item.date.getFullYear().toString() === selectedYear;
		});
	} else {
		items = ctx.items;
	}

	const handleRemove = (id: any) => {
		ctx.removeItem(id);
	};

	const toggleChart = () => {
		setShowChart((prevState) => !prevState);
	};

	let expenses = <NoData />;

	if (ctx.items.length) {
		expenses = (
			<>
				<ExpensesFilter
					onChangeYear={handleChange}
					toggleText={showChart}
					toggleChart={toggleChart}
					selectedYear={selectedYear}
				/>

				{showChart && <ExpenseChart expenses={items} />}

				<ExpenseList onRemoveExpense={handleRemove} items={items} />
			</>
		);
	}

	return (
		<Layout>
			<Container>{expenses}</Container>
		</Layout>
	);
};

export default Expenses;
