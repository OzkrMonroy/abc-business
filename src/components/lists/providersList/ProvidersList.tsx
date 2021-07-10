import { ProviderInterface } from '../../../interfaces/ProviderInterface';
import { DataListContainer, DataItem, DataItemsContainer, AddNewDataButton } from '../listsStyles';

interface Props {
  providers: ProviderInterface[];
  showForm: () => void;
}

export const ProvidersList = ({ providers, showForm }: Props) => {

  return (
    <DataListContainer>
      <h1>Providers</h1>
      {providers.length > 0 ? (
        <DataItemsContainer>
          {providers.map(provider => (
            <DataItem key={provider.id}>
              {provider.name}
            </DataItem>
          ))}
        </DataItemsContainer>
      ): (<p>No Providers found!</p>)}
      <AddNewDataButton onClick={showForm}>+</AddNewDataButton>
    </DataListContainer>
  )
}
