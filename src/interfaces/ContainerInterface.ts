import { ProductInterface } from "./ProductInterface";

type statusType = 'Pending' | 'Delivered' | 'Cancelled';

export interface ContainerInterface {
  id: string;
  departurePort: string;
  arrivalPort: string;
  departureDate: string;
  deliveryDate: string;
  tentativeDeliveryDate: string;
  createdAt: Date;
  createdContainerBy: {
    userId: string;
    userName: string;
  };
  purchaseData: {
    purchasedProducts: ProductInterface[];
    totalPaid: number;
    possibleEarnings: number;
  }
  status: statusType,
}