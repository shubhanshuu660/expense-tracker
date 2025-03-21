import React from "react";

// type context = {
// 	items: any[];
// 	addItem: (item: any) => void;
// 	removeItem: (id: number) => void;
// };

const ctx: any = {
	items: [],
	addItem: (item: any) => null,
	removeItem: (id: number) => null,
};

const ExpenseContext = React.createContext(ctx);

export default ExpenseContext;
