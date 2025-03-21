import classes from "./input.module.scss";
import SHOW_PASSWORD from "../../images/show.png";
import HIDE_PASSWORD from "../../images/hide.png";

export type inputType = string | number;

export type InputObject = {
	min?: inputType;
	step?: inputType;
	max?: inputType;
};

interface IInput {
	type?: React.HTMLInputTypeAttribute;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	value: inputType;
	inputProps?: InputObject;
	label: string;
	hasError?: boolean;
	onBlur: React.FocusEventHandler<HTMLInputElement>;
	errorMessage?: string;
	handlePasswordVisibility?: React.MouseEventHandler<HTMLButtonElement>;
	placeholder?: string;
}

const Input: React.FC<IInput> = ({
	type,
	onChange,
	value,
	inputProps,
	label,
	hasError,
	onBlur,
	errorMessage,
	handlePasswordVisibility,
	placeholder,
}) => {
	let formClass = hasError
		? `${classes["form-control"]} ${classes.invalid}`
		: classes["form-control"];

	return (
		<div className={formClass}>
			<label>{label}</label>
			<div className={classes["input-with-icon"]}>
				<input
					placeholder={placeholder}
					type={type}
					autoComplete="off"
					onBlur={onBlur}
					onChange={onChange}
					value={value}
					{...inputProps}
				/>

				{label === "Password" && (
					<button type="button" onClick={handlePasswordVisibility}>
						{type === "password" ? (
							<img src={SHOW_PASSWORD} alt="Password" />
						) : (
							<img src={HIDE_PASSWORD} alt="Password" />
						)}
					</button>
				)}
			</div>
			{hasError && <p>{errorMessage}</p>}
		</div>
	);
};

Input.defaultProps = {
	type: "text",
};

export default Input;
