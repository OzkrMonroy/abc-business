import styled from "styled-components";
import device from "../../utils/css/breakpoints";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;

  @media ${device.mobileL} {
    width: 40%;
  }
  @media ${device.laptop} {
    width: 35%;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: center;
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
`

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 2rem;

  & span {
    margin-bottom: .75rem;
    color: #001557;
  }
`

export const Input = styled.input`
  padding: .5rem 0;
  border: none;
  border-bottom: 2px solid #cdcfd3;
  color: #a5a7ad;
  font-family: 'Raleway', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.5rem;
  transition: border 1s ease-in-out;

  &:focus {
    outline: none;
    border-color: #001557;
  }
`

export const SubmitButton = styled.input`
  background-color: #192369;
  color: #FFFFFF;
  cursor: pointer;
  border-radius: .75rem;
  border: none;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  padding: .75rem .5rem;
  transition: background-color .7s ease-in-out;
  margin-bottom: 1rem;

  &:hover {
    background-color: #001557;
  }
`

// .color1 {color: #6f1b27;}
// .color2 {color: #560015;}
// .color3 {color: #001557;}
// .color4 {color: #192369;}
// .color5 {color: #0b4760;}