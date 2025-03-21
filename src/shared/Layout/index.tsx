import React from "react";
import CreateExpense from "../../components/CreateExpense";
import ExpenseContext from "../../store/expenseContext";
import Header from "../Header";
import Wrapper from "../Wrapper";

const Layout: React.FC = ({ children }) => {
	const [open, setOpen] = React.useState(false);
	const [id, setId] = React.useState(0);
	const ctx = React.useContext(ExpenseContext);

	const handleClose = () => {
		setOpen(false);
	};

	const handleCreateExpense = () => {
		setOpen(true);
	};

	const onAdd = (item: any) => {
		const expenseData = {
			id: id,
			...item,
		};

		setId((prevId) => prevId + 1);
		ctx.addItem(expenseData);
		setOpen(false);
	};

	return (
		<>
			<Header onClick={handleCreateExpense} />
			<Wrapper>{children}</Wrapper>
			{open && <CreateExpense onAdd={onAdd} onClose={handleClose} />}
		</>
	);
};

export default Layout;
