import React from "react";
import classes from "./login.module.scss";
import Input from "../../shared/Input";
import Card from "../../shared/Card";
import Button from "../../shared/Button";
import LOGO from "../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import Toast from "../../shared/Toast";

const emailValidation = (value: string) => value.includes("@");

const passwordValidation = (value: string) => value.length >= 3;

const DUMMY_USER = {
	email: "shubh@gmail.com",
	password: "123456",
};

const Login = () => {
	const [show, setShow] = React.useState(false);

	const [passwordShow, setPasswordShow] = React.useState(false);

	const history = useNavigate();

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		handleChange: emailHandleChange,
		handleBlur: emailHandleBlur,
		handleReset: emailHandleReset,
		errorMessage: emailErrorMessage,
	} = useInput(emailValidation, "Enter Valid Email!");

	const {
		value: passwordValue,
		isValid: passwordIsValid,
		hasError: passwordHasError,
		handleChange: passwordHandleChange,
		handleBlur: passwordHandleBlur,
		handleReset: passwordHandleReset,
		errorMessage: passwordErrorMessage,
	} = useInput(passwordValidation, "Minimum 3 Chars required!");

	const handleLogin = (e: any) => {
		e.preventDefault();

		if (
			DUMMY_USER.email === emailValue &&
			DUMMY_USER.password === passwordValue
		) {
			localStorage.setItem("isLoggedIn", "1");
			history("/expenses");
		} else {
			setShow(true);
		}

		emailHandleReset();

		passwordHandleReset();
	};

	const handleVisible = () => {
		setPasswordShow((prevState) => !prevState);
	};

	let formIsValid = false;

	formIsValid = emailIsValid && passwordIsValid;

	return (
		<>
			<div className={classes.login}>
				<div className={classes.logo}>
					<img src={LOGO} alt="Logo" height="50" />
					<span>Expense Tracker</span>
				</div>
				<Card secondary>
					<form autoComplete="off" onSubmit={handleLogin}>
						<Input
							type="email"
							label="Email Address"
							placeholder="shubh@gmail.com"
							onBlur={emailHandleBlur}
							onChange={emailHandleChange}
							value={emailValue}
							hasError={emailHasError}
							errorMessage={emailErrorMessage}
						/>

						<Input
							placeholder="123456"
							label="Password"
							type={!passwordShow ? "password" : "text"}
							onBlur={passwordHandleBlur}
							onChange={passwordHandleChange}
							value={passwordValue}
							hasError={passwordHasError}
							errorMessage={passwordErrorMessage}
							handlePasswordVisibility={handleVisible}
						/>

						<Button isDisable={!formIsValid}>Sign In</Button>
					</form>

					<p>
						Don't Have an Account? <Link to="/register">Sign up</Link>
					</p>
				</Card>
			</div>

			{show && <Toast error message="Invalid Credentials!" />}
		</>
	);
};

export default Login;
