import classes from "./header.module.scss";
import LOGO from "../../images/logo.png";
import USER from "../../images/logout.png";
import Button from "../Button";
import Container from "../container";
import { useNavigate } from "react-router-dom";

interface IHeader {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<IHeader> = ({ onClick }) => {
	const history = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("isLoggedIn");
		history("/login");
	};

	return (
		<header className={classes.header}>
			<Container>
				<div className={classes.logo}>
					<img src={LOGO} alt="Logo" height="30" />
					<span>Expense Tracker</span>
				</div>

				<div className={classes.wrap}>
					<Button onClick={onClick}>Create New Expense</Button>

					<div className={classes.user}>
						<button onClick={handleLogout}>
							<img src={USER} height="24" alt="user" />
						</button>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
