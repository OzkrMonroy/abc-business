import { useEffect, useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import { CreateProviderForm } from '../../components/forms';
import { ProvidersList } from '../../components/providersList/ProvidersList';
import { useDispatch, useSelector } from 'react-redux';
import { getProvidersListStartAsync } from '../../redux/providers/providersActions';
import { RootState } from '../../redux/root-reducer';

export const ProvidersPage = () => {
  const [isCreating, setIsCreating] = useState(false);
  const providersList = useSelector((state: RootState) => state.providers.providersList);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProvidersListStartAsync());
  }, [dispatch]);

  const showForm = () => {
    setIsCreating(!isCreating);
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

  return (
    <Layout>
      {isCreating ? (
        <CreateProviderForm showForm={showForm}/>
      ) : (
        <ProvidersList providers={providersList} showForm={showForm}/>
      )}
    </Layout>
  )
}
