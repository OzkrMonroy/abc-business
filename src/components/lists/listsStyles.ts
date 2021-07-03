import styled from 'styled-components';

export const DataListContainer = styled.div`
  width: 85%;
  margin: 0 auto;
`

export const AddNewDataButton = styled.button`
  border: none;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #6f1b27;
  color: #FFFFFF;
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
`
export const DataItemsContainer = styled.div`
  box-shadow: 0 3px 8px 0px rgb(0 0 0 / 30%);
`

export const DataItem = styled.p`
  border-bottom: 1px solid rgba(0, 0, 0, .3);
  padding: 1rem;
  margin: 0;
  font-weight: 700;
  color: #666666;
`