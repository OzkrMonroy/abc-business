import styled, { css } from 'styled-components';
import device from '../../../utils/css/breakpoints';

const itemStyle = css`
  width: 30vw;

  @media ${device.tablet}{
    width: 20vw;
  }
  @media ${device.laptop}{
    width: 15vw;
  }
`

export const ProductsPurchaseListContainer = styled.div`
  width: 100%;
  max-height: 200px;
  overflow: scroll;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: 0px -1px 14px -7px rgb(0 0 0 / 30%);
  background-color: #0b4760;

  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b3b3b3;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #e1e1e1;;
    border-radius: 4px;

  }
`

export const ProductsPurchaseHeader = styled.div`
  display: flex;
  background-color: #0b4760;
  color: #FFFFFF;
`
export const ProductsPurchaseHeaderItem = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  background-color: #0b4760;

  & p {
    ${itemStyle}
    margin-left: 1rem;
  }
`

export const Total = styled.p`
  color: #a5a7ad;
  font-size: 1.2rem;

  & span {
    color: #000000;
    font-weight: 700;
  }
`