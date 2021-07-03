import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import device from "../../utils/css/breakpoints";

interface ButtonProps {
	accentColor?: boolean;
}

interface HeaderProps {
	centered?: boolean;
}

interface Props {
	fullWidth?: boolean;
}

export const CreateFormContainer = styled.div`
	width: 85%;
	margin: 0 auto;

	& form {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}

	@media ${device.mobileL} {
		width: 70%;
	}
	@media ${device.tablet} {
		width: 80%;
		& form {
			flex-direction: row;
		}
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 85%;

	& p {
		color: #192369;
		text-align: center;
	}

	@media ${device.mobileL} {
		width: 40%;
	}
	@media ${device.laptop} {
		width: 35%;
	}
`;

export const FormHeader = styled.div<HeaderProps>`
	display: flex;
	justify-content: ${(props) => (props.centered ? 'center' :  'flex-start')};
	align-items: center;
	margin-bottom: 2rem;

	& h1 {
		color: #001557;
	}
	& img {
		width: 2rem;
		height: 2rem;
		object-fit: cover;
		margin-right: 1rem;
	}
`;

export const InputLabel = styled.label<Props>`
	display: flex;
	flex-direction: column;
	font-weight: 700;
	font-size: 1.2rem;
	margin-bottom: 2rem;
	width: 100%;

	& span {
		margin-bottom: 0.75rem;
		color: #001557;
	}

	@media ${device.tablet} {
		width: ${(props) => (props.fullWidth ? '100%' : '45%')};
	}
`;

const inputStyles = css`
	padding: 0.5rem 0;
	border: none;
	border-bottom: 2px solid #cdcfd3;
	color: #a5a7ad;
	font-family: "Raleway", sans-serif;
	font-size: 1.1rem;
	font-weight: 700;
	line-height: 1.5rem;
	transition: border 1s ease-in-out;

	&:focus {
		outline: none;
		border-color: #001557;
	}
`;
export const Input = styled.input`
	${inputStyles};
`;
export const TextArea = styled.textarea`
	${inputStyles}
	&::-webkit-scrollbar {
		width: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background: #b3b3b3;
		border-radius: 4px;
	}
	&::-webkit-scrollbar-track {
		background: #e1e1e1;
		border-radius: 4px;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	@media ${device.tablet} {
		flex-direction: row;

		& button {
			width: 45%;
		}
	}
`;

export const SubmitButton = styled.button<ButtonProps>`
	background-color: ${(props) => (props.accentColor ? "#6f1b27" : "#192369")};
	color: #ffffff;
	cursor: pointer;
	border-radius: 0.75rem;
	border: none;
	display: block;
	font-size: 1rem;
	font-weight: 700;
	width: 100%;
	padding: 0.75rem 0.5rem;
	transition: background-color 0.7s ease-in-out;
	margin-bottom: 1rem;

	&:hover {
		background-color: ${(props) => (props.accentColor ? "#560015" : "#001557")};
	}
`;
export const FormLink = styled(Link)`
	text-decoration: none;
	color: #560015;
	font-size: 1rem;
	font-weight: 700;
`;
export const Notice = styled.p`
	color: #560015;
	font-size: 1rem;
	text-align: center;
`;
// .color1 {color: #6f1b27;}
// .color2 {color: #560015;}
// .color3 {color: #001557;}
// .color4 {color: #192369;}
// .color5 {color: #0b4760;}
