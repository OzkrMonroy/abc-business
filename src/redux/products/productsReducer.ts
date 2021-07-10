import { initialState, ProductsState } from "./productsState";
import { ProductsTypes } from "./productsTypes";

const productsReducer = (state: ProductsState = initialState, action: any) :ProductsState => {
  switch (action.type) {
    case ProductsTypes.GET_PRODUCTS_LIST_START:
      return {
        ...state,
        isLoading: true,
        error: false,
        errorMessage: null,
      }
    case ProductsTypes.GET_PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productsList: action.payload,
      }
    case ProductsTypes.GET_PRODUCTS_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload,
      }
    default:
      return state;
  }
}


export default productsReducer;