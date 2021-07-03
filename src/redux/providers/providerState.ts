import { ProviderInterface } from '../../interfaces/ProviderInterface';

export interface ProvidersState {
  providersList: ProviderInterface[];
  isLoading: boolean;
  error: boolean;
  errorMessage: string | null;
}

export const initialState: ProvidersState = {
  providersList: [],
  isLoading: false,
  error: false,
  errorMessage: null,
}