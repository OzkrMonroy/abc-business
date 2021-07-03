import { initialState, ProvidersState } from "./providerState";
import { ProvidersType } from "./providersTypes";

const providersReducer = (state: ProvidersState = initialState, action: any) : ProvidersState => {
  switch (action.type) {
    case ProvidersType.CREATE_PROVIDER_START:
      return {
        ...state,
        isLoading: true,
        error: false,
        errorMessage: null,
      }
    case ProvidersType.CREATE_PROVIDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        providersList: [...state.providersList, action.payload]
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