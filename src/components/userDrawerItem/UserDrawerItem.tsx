import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/root-reducer';
import { signOutStartAsync } from '../../redux/user/userAction';
import { UserItemContainer, UserItemOptions, UserName } from './userDrawerItemStyles';

export const UserDrawerItem = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutStartAsync());
  }

  return (
    <UserItemContainer>
      <UserName>{user?.displayName}</UserName>
      <UserItemOptions src='/assets/logout.svg' alt='User options' onClick={signOut}/>
    </UserItemContainer>
  )
}
