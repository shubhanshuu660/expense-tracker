import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Expenses from "./components/Expenses";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";
import ExpenseProvider from "./store/expenseContextProvider";
import { useRef } from "react";

function App() {
	const loginStatus = useRef(localStorage.getItem("isLoggedIn"));

	return (
		<ExpenseProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />

					<Route path="/register" element={<Register />} />

					<Route path="/expenses" element={<Expenses />} />

					<Route
						path="/"
						element={
							<Navigate
								replace
								to={loginStatus.current !== null ? "/expenses" : "/login"}
							/>
						}
					/>

					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</ExpenseProvider>
	);
}

export default App;
