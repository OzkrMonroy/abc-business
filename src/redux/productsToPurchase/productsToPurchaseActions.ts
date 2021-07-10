import { ProductInterface } from "../../interfaces/ProductInterface";
import { ProductsToPurchaseTypes } from "./productsToPurchaseTypes";

export const addProductToPurchaseAction = (product: ProductInterface) => {
  const total = product.purchasePrice * product.quantity;
  const earning = (product.salePrice * product.quantity) - total;

  return {
    type: ProductsToPurchaseTypes.ADD_PRODUCT_TO_PURCHASE,
    payload: {product, total, earning},
  }
}

export const removeProductToPurchaseAction = (product: ProductInterface, productsList: ProductInterface[], totalToPay:number, possibleEarnings: number) => {
  const totalProduct = product.purchasePrice * product.quantity;
  const totalEarning = (product.salePrice * product.quantity) - totalProduct;

  const newProductsList = productsList.filter(prod => prod.id !== product.id);
  const newTotalToPay = totalToPay - totalProduct;
  const newTotalEarnings = possibleEarnings - totalEarning;
  console.log(possibleEarnings, totalEarning);
  

  return {
    type: ProductsToPurchaseTypes.REMOVE_PRODUCT_TO_PURCHASE,
    payload: { newProductsList, newTotalToPay, newTotalEarnings }
  }
}