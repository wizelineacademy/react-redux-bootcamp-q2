import styled from "styled-components";

const StyledProduct = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-size: 18px;
	min-width: 0;
`;

const Name = styled.p`
	font-weight: bold;
	margin-bottom: 5px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

	@supports (-webkit-line-clamp: 3) {
		white-space: initial;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
`;

const Price = styled.p`
	font-weight: bold;
	text-align: right;
	margin: 10px 0;
`;

const Image = styled.img`
	width: 100%;
	height: 150px;
`;

export { Image, Name, Price, StyledProduct };
