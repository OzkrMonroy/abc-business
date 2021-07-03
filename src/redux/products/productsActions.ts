import { getDataListFromFirestore } from "../../server/firebaseHelper";
import { ProductsTypes } from "./productsTypes";

export const getProductsStart = () => ({
  type: ProductsTypes.GET_PRODUCTS_LIST_START,
})
export const getProductsSuccess = (productsList: any) => ({
  type: ProductsTypes.GET_PRODUCTS_LIST_SUCCESS,
  payload: productsList,
})
export const getProductsFailure = (errorMessage: string) => ({
  type: ProductsTypes.GET_PRODUCTS_LIST_FAILURE,
  payload: errorMessage,
})

export const getProductsStartAsync = () => {
  return async (dispatch: any) => {
    dispatch(getProductsStart());
    try {
      const productsList = await getDataListFromFirestore('Products');
      dispatch(getProductsSuccess(productsList))
    } catch (error) {
      dispatch(getProductsFailure(error.message));
    }
  }
}