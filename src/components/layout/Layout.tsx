import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signOutStartAsync } from '../../redux/user/userAction';
import { DrawerNav } from '../drawer/DrawerNav';
import { Header } from './header/Header';
import { LayoutContainer, MainContainer } from './layoutStyles';

export const Layout = ({children}: any) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();

  const closeDrawer = () => {
    setOpenDrawer(false);
  }

  const openDrawerHandler = () => {
    // setOpenDrawer(true);
    dispatch(signOutStartAsync());
  }

  return (
    <LayoutContainer>
      <DrawerNav openDrawer={openDrawer} closeDrawer={closeDrawer} />
      <MainContainer>
        <Header showDrawer={openDrawerHandler}></Header>
        {children}
      </MainContainer>
    </LayoutContainer>
  )
}
