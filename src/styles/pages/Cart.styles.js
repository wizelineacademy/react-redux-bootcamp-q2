import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 40px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const BoldTitle = styled.p`
	font-weight: bold;
`;

const Line = styled.hr`
	width: 100%;
	color: #d3d3d4;
`;

export { Container, MainContainer, BoldTitle, Line };
