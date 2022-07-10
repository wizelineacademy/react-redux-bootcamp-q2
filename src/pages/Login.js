import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../store/slices/login";
import Button from "../styles/components/AddButton.styles";
import {
	Container,
	Input,
	Label,
	LoginContainer,
} from "../styles/pages/Login.styles";
import loginApi from "../utils/loginApi";

export const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();

	const changeUsername = (e) => {
		setUsername(e.target.value);
	};

	const changePassword = (e) => {
		setPassword(e.target.value);
	};

	const onClickLogin = async () => {
		const random = await loginApi(username, password);
		if (random) {
			dispatch(login());
			history.push("/products");
		}
	};

	return (
		<Container>
			<LoginContainer>
				<h1>Welcome to the WizeStore!</h1>
				<Label htmlFor="username">Username</Label>
				<Input
					type="text"
					id="username"
					placeholder="Enter username"
					value={username}
					onChange={changeUsername}
				/>
				<Label htmlFor="password">Password</Label>
				<Input
					type="password"
					id="password"
					placeholder="Enter password"
					value={password}
					onChange={changePassword}
				/>
				<Button onClick={onClickLogin}>Login</Button>
			</LoginContainer>
		</Container>
	);
};
