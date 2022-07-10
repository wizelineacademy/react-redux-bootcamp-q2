import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Header } from "../components/Header";
import { Login } from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

export const AppRouter = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<ProtectedRoute exact path="/">
					<Home />
				</ProtectedRoute>
				<ProtectedRoute path="/products">
					<Products />
				</ProtectedRoute>
				<ProtectedRoute path="/cart">
					<Cart />
				</ProtectedRoute>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</Router>
	);
};
