import { useState } from 'react';
import { DrawerNav } from '../drawer/DrawerNav';
import { Header } from './header/Header';
import { LayoutContainer, MainContainer } from './layoutStyles';

export const Layout = ({children}: any) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const closeDrawer = () => {
    setOpenDrawer(false);
  }

  const openDrawerHandler = () => {
    setOpenDrawer(true);
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
