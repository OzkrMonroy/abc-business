import { ProductInterface } from "../../interfaces/ProductInterface";
import { ProductsToPurchaseTypes } from "./productsToPurchaseTypes";

interface ProductsToPurchaseState {
  productsToPurchase: ProductInterface[],
  totalToPay: number;
  possibleEarnings: number;
}

const initialState: ProductsToPurchaseState = {
  productsToPurchase: [],
  totalToPay: 0,
  possibleEarnings: 0,
}

const productsToPurchaseReducer = (state: ProductsToPurchaseState = initialState, action: any) : ProductsToPurchaseState => {
  switch (action.type) {
    case ProductsToPurchaseTypes.ADD_PRODUCT_TO_PURCHASE:
      return {
        totalToPay: state.totalToPay + action.payload.total,
        productsToPurchase: [...state.productsToPurchase, action.payload.product],
        possibleEarnings: state.possibleEarnings + action.payload.earning,
      }
    case ProductsToPurchaseTypes.REMOVE_PRODUCT_TO_PURCHASE:
      return {
        totalToPay: action.payload.newTotalToPay,
        productsToPurchase: action.payload.newProductsList,
        possibleEarnings: action.payload.newTotalEarnings
      }
    default:
      return state
  }
}

export default productsToPurchaseReducer;