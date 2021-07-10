import styled, { css, keyframes } from "styled-components";

interface SpinnerProps {
  spinnerSize: string;
  spinnerColor: string;
}

const circle = css`
  content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 100%;
`
const rotate = keyframes`
  0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`

export const HalfSpinner = styled.div<SpinnerProps>`
  width: ${(props) => `${props.spinnerSize}px`};
	height: ${(props) => `${props.spinnerSize}px`};
	border-radius: 100%;
	position: relative;
	margin: 0 auto;
  box-sizing: border-box;

  & * {
    box-sizing: border-box;
  }
`

export const CircleOne = styled.div<SpinnerProps>`
  border: ${(props) => `calc(${props.spinnerSize}px / 10) solid transparent`};
  border-top-color: ${(props) => props.spinnerColor};
	animation: ${rotate} 1s infinite;
  ${circle}
`
export const CircleTwo = styled.div<SpinnerProps>`
  border: ${(props) => `calc(${props.spinnerSize}px / 10) solid transparent`};
  border-bottom-color: ${(props) => props.spinnerColor};
	animation: ${rotate} 1s infinite alternate;
  ${circle}
`