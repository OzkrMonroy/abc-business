import styled from 'styled-components';
import device from '../../utils/css/breakpoints';

export const Container = styled.div`
  display: flex;
`

export const ProductInfoContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,.3);
  border-right: 1px solid rgba(0,0,0,.3);
  padding: .5rem 0;
  background-color: #FFFFFF;

  & p {
    width: 30vw;
    margin-left: 1rem;

    & img {
      display: block;
      width: 2rem;
      margin: 0 auto;
      cursor: pointer;
    }

    @media ${device.tablet}{
      width: 20vw;
    }
    @media ${device.laptop}{
      width: 15vw;
    }
  }

`