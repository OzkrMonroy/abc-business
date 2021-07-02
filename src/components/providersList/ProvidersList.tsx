import { ProviderInterface } from '../../interfaces/ProviderInterface';
import { AddProviderButton, ProvidersListContainer } from './providersListStyles';

interface Props {
  providers: ProviderInterface[] | null;
  showForm: () => void;
}

export const ProvidersList = ({ providers, showForm }: Props) => {

  return (
    <ProvidersListContainer>
      {console.log(providers)}
      <h1>Providers</h1>
      <AddProviderButton onClick={showForm}>+</AddProviderButton>
    </ProvidersListContainer>
  )
}
