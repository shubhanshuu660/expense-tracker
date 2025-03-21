import React from "react";

interface IInputEvent {
	target: {
		value: string;
	};
}

const initialState = {
	value: "",
	isTouched: false,
};

const inputReducer = (
	state: { isTouched: boolean; value: string },
	action: { type: string; val?: any }
) => {
	if (action.type === "INPUT") {
		return { value: action.val, isTouched: state.isTouched };
	}

	if (action.type === "BLUR") {
		return { value: state.value, isTouched: true };
	}

	if (action.type === "RESET") {
		return { value: "", isTouched: false };
	}

	return initialState;
};

const useInput = (validateValue: (arg0: any) => any, errorMessage: string) => {
	const [state, dispatch] = React.useReducer(inputReducer, initialState);

	const isNotEmpty = state.value.trim() !== "";

	const valueIsValid = validateValue(state.value) && isNotEmpty;

	const hasError = !valueIsValid && state.isTouched;

	const handleChange = (event: IInputEvent) => {
		dispatch({ type: "INPUT", val: event.target.value });
	};

	const handleBlur = () => {
		dispatch({ type: "BLUR" });
	};

	const handleReset = () => {
		dispatch({ type: "RESET" });
	};

	return {
		value: state.value,
		isValid: valueIsValid,
		hasError,
		handleChange,
		handleBlur,
		handleReset,
		errorMessage: !isNotEmpty ? "Input shouldn't be empty!" : errorMessage,
	};
};

export default useInput;
