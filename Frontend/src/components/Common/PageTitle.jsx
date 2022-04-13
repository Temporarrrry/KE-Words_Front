import { palette } from "lib/styles/palette";
import React from "react";
import styled from "styled-components";

function PageTitle({ children }) {
	return <StyledTitle>{children}</StyledTitle>;
}

const StyledTitle = styled.div`
	width: 600px;
	height: 100px;
	line-height: 100px;
	text-align: center;
	vertical-align: middle;
	color: ${palette.Secondary};
	font-size: 35px;
	margin-top: 50px;
`;

export default PageTitle;