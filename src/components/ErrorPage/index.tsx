import Button from "../../shared/Button";
import classes from "./error.module.scss";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const history = useNavigate();
	const handleBack = () => {
		history("/");
	};

	return (
		<div className={classes["error-page"]}>
			<h1>404</h1>
			<p>Page Not Found!</p>
			<Button onClick={handleBack}>Back to Home</Button>
		</div>
	);
};
export default ErrorPage;
