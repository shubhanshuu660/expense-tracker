
import classes from "./container.module.scss";

const Container: React.FC = ({ children }) => (
	<div className={classes.container}>{children}</div>
);

export default Container;
