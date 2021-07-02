import { ProviderInterface } from "../../interfaces/ProviderInterface";
import { ProvidersType } from "./providersTypes";

interface ProvidersState {
  providersList: ProviderInterface[] | null;
  isLoading: boolean;
  error: boolean;
  errorMessage: string | null;
}

const initialState: ProvidersState = {
  providersList: null,
  isLoading: false,
  error: false,
  errorMessage: null,
}

const providersReducer = (state: ProvidersState = initialState, action: any) : ProvidersState => {
  switch (action.type) {
    case ProvidersType.CREATE_PROVIDER_START:
      return {
        ...state,
        isLoading: true,
      }
    case ProvidersType.CREATE_PROVIDER_SUCCESS:
      const providerCopy = state.providersList ? state.providersList : []
      return {
        ...state,
        isLoading: false,
        error: false,
        errorMessage: null,
        providersList: [...providerCopy, action.payload]
      }
    case ProvidersType.CREATE_PROVIDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload,
      }
    case ProvidersType.GET_PROVIDER_LIST_START:
      return {
        ...state,
        isLoading: true,
        error: false,
        errorMessage: null,
      }
    case ProvidersType.GET_PROVIDER_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        errorMessage: null,
        providersList: action.payload
      }
    case ProvidersType.GET_PROVIDER_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}

export default providersReducer;