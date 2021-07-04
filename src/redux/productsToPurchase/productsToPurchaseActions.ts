import { ProductInterface } from "../../interfaces/ProductInterface";
import { ProductsToPurchaseTypes } from "./productsToPurchaseTypes";

export const addProductToPurchaseAction = (product: ProductInterface) => {
  const total = product.purchasePrice * product.quantity;

  return {
    type: ProductsToPurchaseTypes.ADD_PRODUCT_TO_PURCHASE,
    payload: {product, total},
  }
}

export const removeProductToPurchaseAction = (product: ProductInterface, productsList: ProductInterface[], totalToPay:number) => {
  const totalProduct = product.purchasePrice * product.quantity;
  const newProductsList = productsList.filter(prod => prod.id !== product.id);
  const newTotalToPay = totalToPay - totalProduct;

  return {
    type: ProductsToPurchaseTypes.REMOVE_PRODUCT_TO_PURCHASE,
    payload: { newProductsList, newTotalToPay }
  }
}