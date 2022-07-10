import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, ...rest }) => {
	const loggedIn = useSelector((state) => state.login.value);

	return (
		<>
			{loggedIn ? (
				<Route {...rest}>{children}</Route>
			) : (
				<Redirect to="/login" />
			)}
		</>
	);
};

export default ProtectedRoute;
