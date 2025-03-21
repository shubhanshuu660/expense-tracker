import ReactDOM from "react-dom";
import classes from "./modal.module.scss";

// interface IBackdrop {
// 	onClose?: React.MouseEventHandler<HTMLDivElement>;
// }

interface IModal {
	onClose?: any;
	heading?: string;
	onClick?: any;
}

// const Backdrop: React.FC<IBackdrop> = ({ onClose }) => {
// 	return <div className={classes.backdrop} onClick={onClose} />;
// };

const Backdrop = () => {
	return <div className={classes.backdrop} />;
};

const ModalOverlay: React.FC<IModal> = ({ children, onClose, heading }) => {
	return (
		<div className={classes.modal}>
			<button className={classes.close} onClick={onClose}>
				&times;
			</button>
			{heading && <h3>{heading}</h3>}
			<div className={classes.content}>{children}</div>
		</div>
	);
};

const portalElement: any = document.getElementById("modal-root");

const Modal: React.FC<IModal> = ({ children, onClose, heading }) => {
	return (
		<>
			{/* {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)} */}
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay heading={heading} onClose={onClose}>
					{children}
				</ModalOverlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
