import { DrawerContainer, Drawer, DrawerHeader, CloseDrawerButton, CloseDrawerContainer, OptionList } from './drawerNavStyles';
import { OptionProps, DrawerItem } from '../drawerItem/DrawerItem';
import { UserDrawerItem } from '../userDrawerItem/UserDrawerItem';

const options: OptionProps[] = [
  { id: '1', title: 'Products', to: '/' },
  { id: '2', title: 'Providers', to: 'providers' },
  { id: '3', title: 'Containers', to: '/containers' },
  { id: '4', title: 'Reports', to: '/reports' },
]

interface Props {
  openDrawer: boolean;
  closeDrawer: () => void;
}

export const DrawerNav = ({ openDrawer, closeDrawer }: Props) => {

  return (
    <DrawerContainer isOpen={openDrawer}>
      <Drawer isOpen={openDrawer}>
        <DrawerHeader>
          <img src="/assets/graph_bar.svg" alt="add group" />
          <p>ABC BUSINESS</p>
        </DrawerHeader>
        <OptionList>
          <div>
            {options.map(option => (
              <DrawerItem option={option} key={option.id}/>
            ))}
          </div>
        </OptionList>
        <UserDrawerItem />
      </Drawer>
      <CloseDrawerContainer onClick={closeDrawer} isOpen={openDrawer}>
        <CloseDrawerButton>
          <img src="/assets/close.svg" alt="close button" onClick={closeDrawer} />
        </CloseDrawerButton>
      </CloseDrawerContainer>
    </DrawerContainer>
  )
}
