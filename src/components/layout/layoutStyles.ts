import styled from 'styled-components';
import device from '../../utils/css/breakpoints';

export const LayoutContainer = styled.div`
  display: flex;
  padding-top: 65px;
`
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: 1;

  @media ${device.tablet}{
    width: 70%;
    margin-left: 30%;
  }
  @media ${device.laptop}{
    width: 75%;
    margin-left: 25%;
  }
`