import { ProductInterface } from "../../interfaces/ProductInterface";
import { ProductsToPurchaseTypes } from "./productsToPurchaseTypes";

interface ProductsToPurchaseState {
  productsToPurchase: ProductInterface[],
  totalToPay: number;
}

const initialState: ProductsToPurchaseState = {
  productsToPurchase: [],
  totalToPay: 0,
}

const productsToPurchaseReducer = (state: ProductsToPurchaseState = initialState, action: any) : ProductsToPurchaseState => {
  switch (action.type) {
    case ProductsToPurchaseTypes.ADD_PRODUCT_TO_PURCHASE:
      return {
        totalToPay: state.totalToPay + action.payload.total,
        productsToPurchase: [...state.productsToPurchase, action.payload.product]
      }
    case ProductsToPurchaseTypes.REMOVE_PRODUCT_TO_PURCHASE:
      return {
        totalToPay: action.payload.newTotalToPay,
        productsToPurchase: action.payload.newProductsList
      }
    default:
      return state
  }
}

export default productsToPurchaseReducer;