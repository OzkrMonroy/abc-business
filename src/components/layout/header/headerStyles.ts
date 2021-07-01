import styled from 'styled-components';
import device from '../../../utils/css/breakpoints';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 57.781px;
  background-color: #FFFFFF;
  box-shadow: 2px 6px 8px -1px rgba(0,0,0,0.3);
  margin-bottom: 2rem;

  & img {
    width: 2rem;
    height: 2rem;
    margin-left: .5rem;

    @media ${device.tablet}{
      display: none;
    }
  }
`