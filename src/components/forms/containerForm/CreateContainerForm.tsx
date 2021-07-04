import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ContainerInterface } from '../../../interfaces/ContainerInterface';
import { RootState } from '../../../redux/root-reducer';
import { CreateFormContainer, InputLabel, Input, FormHeader, SubmitButton } from '../formStyles';
import { containerState } from './containerState';

export const CreateContainerForm = () => {
  const [containerData, setContainerData] = useState<ContainerInterface>(containerState);
  const { departureDate, tentativeDeliveryDate, deliveryDate, arrivalPort, departurePort } = containerData;
  const { productsToPurchase, totalToPay, possibleEarnings } = useSelector((state: RootState) => state.productsToPurchase);
  const { displayName, id } = useSelector((state: RootState) => state.user.user!);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setContainerData({
      ...containerData,
      [name]: value,
    })
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const date = new Date();
    const idContainer = uuidv4();
    const containerDataComplete:ContainerInterface = {
      ...containerData,
      createdContainerBy: { userId: id, userName: displayName },
      purchaseData: { purchasedProducts: productsToPurchase, totalPaid: totalToPay, possibleEarnings },
      createdAt: date,
      id: idContainer,
    }

    console.log(containerDataComplete);
  }

  return (
    <CreateFormContainer>
      <FormHeader>
        <h2>Container data</h2>
      </FormHeader>
      <form onSubmit={handleOnSubmit}>
        <InputLabel>
          <span>Departure port: </span>
          <Input 
            type='text' 
            placeholder='Place address'
            name='departurePort'
            value={departurePort}
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Arrival port: </span>
          <Input 
            type='text' 
            placeholder='Place address'
            name='arrivalPort'
            value={arrivalPort}
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Departure date: </span>
          <Input 
            type='date'
            name='departureDate'
            value={departureDate}
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Delivery date: </span>
          <Input 
            type='date'
            name='deliveryDate'
            value={deliveryDate}
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Tentative delivery date: </span>
          <Input 
            type='date'
            name='tentativeDeliveryDate'
            value={tentativeDeliveryDate}
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        {productsToPurchase.length && <SubmitButton type='submit'>Register container</SubmitButton>}
      </form>
    </CreateFormContainer>
  )
}
