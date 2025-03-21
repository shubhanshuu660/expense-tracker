
import useInput from "../../hooks/useInput";
import Button from "../../shared/Button";
import Input from "../../shared/Input";
import Modal from "../../shared/Modal";
import classes from "./createExpense.module.scss";

interface ICreateExpense {
	onClose: any;
	onAdd: any;
}

const inputValidation = (value: string) => value.length >= 2;

const defaultErrorMessage = "Minimum 2 Chars required!";

const CreateExpense: React.FC<ICreateExpense> = ({ onClose, onAdd }) => {
	const {
		value: title,
		isValid: titleIsValid,
		hasError: titleHasError,
		handleChange: titleChange,
		handleBlur: titleBlur,
		handleReset: titleReset,
		errorMessage: titleErrorMessage,
	} = useInput(inputValidation, defaultErrorMessage);

	const {
		value: amount,
		isValid: amountIsValid,
		hasError: amountHasError,
		handleChange: amountChange,
		handleBlur: amountBlur,
		handleReset: amountReset,
		errorMessage: amountErrorMessage,
	} = useInput(inputValidation, defaultErrorMessage);

	const {
		value: date,
		isValid: dateIsValid,
		hasError: dateHasError,
		handleChange: dateChange,
		handleBlur: dateBlur,
		handleReset: dateReset,
		errorMessage: dateErrorMessage,
	} = useInput(inputValidation, defaultErrorMessage);

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const expenseData = {
			title: title,
			amount: +amount,
			date: new Date(date),
		};

		onAdd(expenseData);

		titleReset();

		amountReset();

		dateReset();
	};

	let formIsValid = false;

	formIsValid = titleIsValid && amountIsValid && dateIsValid;

	return (
		<Modal onClose={onClose}>
			<form onSubmit={handleSubmit}>
				<div className={classes["input-wrapper"]}>
					<Input
						label="Title"
						onBlur={titleBlur}
						onChange={titleChange}
						value={title}
						hasError={titleHasError}
						errorMessage={titleErrorMessage}
					/>
					<Input
						label="Amount"
						type="number"
						inputProps={{
							min: "0.01",
							step: "0.01",
						}}
						onBlur={amountBlur}
						onChange={amountChange}
						value={amount}
						hasError={amountHasError}
						errorMessage={amountErrorMessage}
					/>
					<Input
						label="Date"
						type="date"
						onBlur={dateBlur}
						onChange={dateChange}
						hasError={dateHasError}
						value={date}
						errorMessage={dateErrorMessage}
						inputProps={{
							// min: new Date().toISOString().slice(0, 10),
							min: "2022-01-01",
							max: "2025-12-31",
						}}
					/>
				</div>

				<div className={classes["button-group"]}>
					<Button type="submit" isDisable={!formIsValid}>
						Add Expense
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default CreateExpense;
