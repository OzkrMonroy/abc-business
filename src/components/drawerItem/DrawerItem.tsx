import { Option, OptionTitle } from './drawerOptionStyles';

export interface OptionProps {
  id: string;
  title: string;
  to: string;
}

interface Props {
  option: OptionProps;
}

export const DrawerItem = ({ option: { title, to } }: Props) => {
  return (
    <Option to={to}>
      <OptionTitle>{title}</OptionTitle>
    </Option>
  )
}
