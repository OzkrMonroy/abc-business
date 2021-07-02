import { ProviderInterface } from "../../interfaces/ProviderInterface";
import { addProviderToFirestore, getProvidersFromFirestore } from "../../server/firebaseHelper";
import { ProvidersType } from "./providersTypes";

export const createProviderStart = () => ({
  type: ProvidersType.CREATE_PROVIDER_START
})

export const createProviderSuccess = (providerData: ProviderInterface) => ({
  type: ProvidersType.CREATE_PROVIDER_SUCCESS,
  payload: providerData
})

export const createProviderFailure = (errorMessage: string) => ({
  type: ProvidersType.CREATE_PROVIDER_FAILURE,
  payload: errorMessage,
})

export const getProvidersListStart = () => ({
  type: ProvidersType.GET_PROVIDER_LIST_START
})

export const getProvidersListSuccess = (providersList: any) => ({
  type: ProvidersType.GET_PROVIDER_LIST_SUCCESS,
  payload: providersList
})

export const getProvidersListFailure = (errorMessage: string) => ({
  type: ProvidersType.GET_PROVIDER_LIST_FAILURE,
  payload: errorMessage,
})

export const createProviderStartAsync = (providerData: ProviderInterface, showForm: () => void) => {
  return async (dispatch: any) => {
    dispatch(createProviderStart());
    try {
      await addProviderToFirestore(providerData);
      showForm();
      dispatch(createProviderSuccess(providerData));
    } catch (error) {
      dispatch(createProviderFailure(error.message));
    }
  }
}

export const getProvidersListStartAsync = () => {
  return async (dispatch: any) => {
    dispatch(getProvidersListStart());
    try {
      const querySnapshot = await getProvidersFromFirestore();
      const providersList = querySnapshot.docs.map(doc => doc.data());
      dispatch(getProvidersListSuccess(providersList))
    } catch (error) {
      dispatch(getProvidersListFailure(error.message));
    }
  }
}