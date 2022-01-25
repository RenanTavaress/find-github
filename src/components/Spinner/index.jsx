import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const SpinnerStyle = styled.div`
	display: flex;
	justify-content: center;
`;

const Spinner = () => {
	return (
		<SpinnerStyle>
			<CircularProgress />
		</SpinnerStyle>
	);
};

export default Spinner;
