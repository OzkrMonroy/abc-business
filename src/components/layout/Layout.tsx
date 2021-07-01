import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { signOutStartAsync } from '../../redux/user/userAction';
import { DrawerNav } from '../drawer/DrawerNav';
import { Header } from './header/Header';
import { LayoutContainer, MainContainer } from './layoutStyles';

export const Layout = ({children}: any) => {
  // TODO: Move to a Redux
  const [openDrawer, setOpenDrawer] = useState(false);
  // const history = useHistory();
  const dispatch = useDispatch();

  const closeDrawer = () => {
    setOpenDrawer(false);
  }

  const openDrawerHandler = () => {
    setOpenDrawer(true);
    dispatch(signOutStartAsync());
  }

  return (
    <LayoutContainer>
      <DrawerNav openDrawer={openDrawer} closeDrawer={closeDrawer} />
      <MainContainer>
        <Header></Header>
        {/* <button type='button' onClick={openDrawerHandler}>Open Drawer</button> */}
        {children}
      </MainContainer>
    </LayoutContainer>
  )
}
