import styled from "styled-components";

export const Container = styled.section`
	width: auto;
	height: 100%;
`;

export const ReposUl = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin-top: 1rem;
	gap: 2rem;
	justify-content: center;
`;
export const ReposA = styled.a`
	width: 195px;
	height: 110px;
	border: solid 1px #d0d7de;
	background-color: #ffffff;
	list-style: none;
	text-align: start;
	cursor: pointer;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	color: inherit;

	p {
		padding-top: 10px;
		font-size: 1rem;
		text-align: initial;
		margin-left: 10px;
	}

	span {
		display: block;
		position: relative;
		top: 20px;
		font-size: 0.85rem;
		margin-left: 10px;
		color: #6c747d;
		align-items: center;
	}

	&:hover {
		top: -4px;
		box-shadow: 0.2rem 0.4rem 0.4rem #999;
		transition: all 0.2s ease-in-out;
	}
`;
