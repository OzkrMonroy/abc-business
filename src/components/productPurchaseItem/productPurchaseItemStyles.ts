import styled from 'styled-components';
import device from '../../utils/css/breakpoints';

export const Container = styled.div`
  display: flex;
`

export const ProductInfoContainer = styled.div`
  display: flex;
  align-items: center;

  & p {
    width: 30vw;
    margin-left: 1rem;

    @media ${device.tablet}{
      width: 20vw;
    }
    @media ${device.laptop}{
      width: 15vw;
    }
  }
`