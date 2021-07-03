export interface ContainerInterface {
  id: string;
  departurePort: string;
  arrivalPort: string;
  departureDate: Date;
  deliveryDate: Date;
  tentativeDeliveryDate: Date;
  createdAt: Date;
  createContainerBy: {
    userId: string;
    userName: string;
  }
}