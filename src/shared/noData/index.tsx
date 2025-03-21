import LOGO from "../../images/logo.png";
import classes from "./nodata.module.scss";

interface INoData {
	message?: string;
	height?: string;
}

const NoData: React.FC<INoData> = ({ message, height }) => {
	return (
		<div style={{ height }} className={classes["no-data"]}>
			<img src={LOGO} alt="LOGO" height="80" />

			<p>{message}</p>
		</div>
	);
};

NoData.defaultProps = {
	message: "No Data Found!",
};

export default NoData;
