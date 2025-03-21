import React from "react";
import classes from "./select.module.scss";

interface ISelectBox {
	options?: {
		id: number;
		value: string;
	}[];
	selected?: string;
	dropdownChangeHandler?: any;
}

const DUMMY_OPTIONS = [
	{ id: 0, value: "2021" },
	{ id: 1, value: "2022" },
];

const SelectBox: React.FC<ISelectBox> = ({
	options,
	selected,
	dropdownChangeHandler,
}) => {
	const handleYearSelect = (e: { target: { value: any } }) => {
		dropdownChangeHandler(e.target.value);
	};
	return (
		<select
			className={classes.select}
			value={selected}
			onChange={handleYearSelect}
		>
			<option value="all">All</option>
			{options &&
				options.map((option: { id: number; value: string }) => (
					<option key={option.id} value={option.value}>
						{option.value}
					</option>
				))}
			{/* <option value="2022">2022</option>
			<option value="2021">2021</option>
			<option value="2020">2020</option>
			<option value="2019">2019</option> */}
		</select>
	);
};

export default SelectBox;
