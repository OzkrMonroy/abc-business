import { ProductToPurchaseInterface } from "./ProductToPurchaseInterface";

export interface PurchaseInterface {
  id:string;
  products: ProductToPurchaseInterface[],
  dateOfPurchase: Date,
  purchaseMadeBy: {
    userId: string,
    userName: string,
  }
  totalToPay: number;
}