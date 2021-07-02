import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Option = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
`;

export const OptionTitle = styled.p`
  flex: 1;
  color: #bdbdbd;
  font-size: 1rem;
  font-weight: 700;
`;
// export const ChannelIcon = styled.img`
//   width: 3rem;
//   height: 42px;
//   border-radius: 0.5rem;
//   margin-right: 0.75rem;
// `;
