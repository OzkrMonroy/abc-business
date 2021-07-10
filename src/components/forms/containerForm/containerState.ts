import { ContainerInterface } from "../../../interfaces/ContainerInterface";

export const containerState: ContainerInterface = {
  id: '',
  departurePort: '',
  arrivalPort: '',
  departureDate: '',
  deliveryDate: '',
  tentativeDeliveryDate: '',
  createdAt: new Date(),
  createdContainerBy: {
    userId: '',
    userName: '',
  },
  purchaseData: {
    purchasedProducts: [],
    totalPaid: 0,
    possibleEarnings: 0,
  },
  status: 'Pending',
}