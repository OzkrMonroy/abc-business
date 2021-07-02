import { ProviderInterface } from '../../interfaces/ProviderInterface';
import { AddProviderButton, ProvidersListContainer, ProviderItems, ProviderItemsContainer } from './providersListStyles';

interface Props {
  providers: ProviderInterface[];
  showForm: () => void;
}

export const ProvidersList = ({ providers, showForm }: Props) => {

  return (
    <ProvidersListContainer>
      {console.log(providers)}
      <h1>Providers</h1>
      {providers.length > 0 ? (
        <ProviderItemsContainer>
          {providers.map(provider => (
            <ProviderItems key={provider.id}>
              {provider.name}
            </ProviderItems>
          ))}
        </ProviderItemsContainer>
      ): (<p>No Providers found!</p>)}
      <AddProviderButton onClick={showForm}>+</AddProviderButton>
    </ProvidersListContainer>
  )
}
