import styled from "styled-components";
import device from "../../utils/css/breakpoints";

export const LoginPageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: space-around;
  align-items: center;
`;

export const LoginCover = styled.div`
  display: none;
  justify-content: center;

  & img {
    width: 75%;
  }

  @media ${device.tablet} {
    display: flex;
    width: 40%;
  }

  @media ${device.laptop} {
    display: flex;
    width: 35%;
  }
`