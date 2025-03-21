import { useState } from "react";
import classes from "./toast.module.scss";

interface IToast {
	message?: string;
	error?: boolean;
}

const Toast: React.FC<IToast> = ({ message, error }) => {
	const [showToast, setShowToast] = useState(true);

	const toastClass = `${classes.toast} ${showToast ? classes.fadeInLeft : classes.fadeOutLeft
		}`;

	setTimeout(() => {
		setShowToast(false);
	}, 5000);

	const backgroundColor = error ? "red" : "green";

	return (
		<div className={toastClass} style={{ backgroundColor }}>
			{message}
		</div>
	);
};

Toast.defaultProps = {
	message: "Dummy Message",
};

export default Toast;
