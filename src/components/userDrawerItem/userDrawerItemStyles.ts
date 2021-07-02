import styled from 'styled-components';

export const UserItemContainer = styled.div`
  width: 100%;
  background-color: #001557;
  display: flex;
  align-items: center;
`;
export const UserPhoto = styled.img`
  width: 3rem;
  height: 42px;
  border-radius: 0.5rem;
  margin-right: 0.75rem;
  margin-left: 1.5rem;
  object-fit: cover;
`;
export const UserName = styled.p`
  flex: 1;
  color: #bdbdbd;
  font-size: 1.15rem;
  font-weight: 700;
  margin-left: 1.5rem;
`;
export const UserItemOptions = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
  cursor: pointer;
`;
