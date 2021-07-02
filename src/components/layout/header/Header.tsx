import { HeaderContainer } from './headerStyles';

interface Props {
  showDrawer: () => void;
}

export const Header = ({ showDrawer }: Props) => {
  return (
    <HeaderContainer>
      <img src="/assets/menu.svg" alt="open menu" onClick={showDrawer}/>
    </HeaderContainer>
  )
}
