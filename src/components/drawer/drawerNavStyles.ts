import styled from 'styled-components';
import device from '../../utils/css/breakpoints';

interface DrawerProps {
  isOpen: boolean;
}

export const DrawerContainer = styled.div<DrawerProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: left 1.7s ease-in-out;
  left: ${(props) => (props.isOpen ? '0rem' : '-100%')};

  @media ${device.tablet}{
    width: 30%;
    left: 0;
    transition: left 0s ease-in-out;
  }
  @media ${device.laptop}{
    width: 25%;
  }
`;
export const Drawer = styled.div<DrawerProps>`
  background-color: #192369;
  color: #e0e0e0;
  width: 88%;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  position: relative;

  @media ${device.tablet}{
    width: 100%;
  }
`;
export const DrawerHeader = styled.header`
  box-shadow: 0px 4px 4px 0px #001557;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;

  & p {
    font-size: 1.15rem;
    font-weight: 700;
  }

  & img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 2rem;
  }
`;

export const OptionList = styled.div`
  flex: 1;
  padding: 1.5rem 1.5rem 0;
`;

export const CloseDrawerContainer = styled.div<DrawerProps>`
  width: 12%;
  display: flex;
  justify-content: center;
  max-height: 100vh;
  padding-top: 0.8rem;
  position: relative;

  @media ${device.tablet} {
    display: none;
  }
`;
export const CloseDrawerButton = styled.div`
  box-shadow: 0px 4px 4px 0px #00000040;
  background-color: #192369;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  padding: 0.2rem;
  width: 2rem;

  & img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
