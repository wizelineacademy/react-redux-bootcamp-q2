import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 94vh;
`;

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #f5f5f5;
	padding: 40px;
`;

const Label = styled.label`
	font-weight: bold;
	margin-bottom: 10px;
`;

const Input = styled.input`
	padding: 10px;
	margin-bottom: 20px;
`;

export { Container, LoginContainer, Label, Input };
