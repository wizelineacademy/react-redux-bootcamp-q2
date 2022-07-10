import styled from "styled-components";

const QuantityContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	input,
	button {
		width: 35%;
	}
`;

const TableCell = styled.td`
	padding: 0 10px;
`;

export { QuantityContainer, TableCell };
