import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { CreateFormContainer, InputLabel, Input, SubmitButton, ButtonsContainer, FormHeader, TextArea, Select } from '../formStyles';
import { ProductInterface } from "../../../interfaces/ProductInterface";
import { productInitialState } from "./productState";
import { RootState } from '../../../redux/root-reducer';
import { addProductToPurchaseAction } from '../../../redux/productsToPurchase/productsToPurchaseActions';

interface Props {
  showForm: () => void;
}

export const CreateProductForm = ({ showForm }: Props) => {
  const [product, setProduct] = useState<ProductInterface>(productInitialState)
  const providersList = useSelector((state: RootState) => state.providers.providersList);
  const userId = useSelector((state: RootState) => state.user.user!.id);
  const { name, description, salePrice, purchasePrice, providerId, quantity } = product;
  const dispatch = useDispatch();

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  }
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const id = uuidv4();
    const salePrice = parseFloat(product.salePrice.toString());
    const purchasePrice = parseFloat(product.purchasePrice.toString());
    const quantity = parseInt(product.quantity.toString());

    const fullProductData = {...product, id, userId, salePrice, purchasePrice, quantity}
    dispatch(addProductToPurchaseAction(fullProductData));
    showForm();
  }

  return (
    <CreateFormContainer>
      <FormHeader>
        <h2>Create product</h2>
      </FormHeader>
      <form onSubmit={handleOnSubmit}>
        <InputLabel>
          <span>Name: </span>
          <Input 
            type='text' 
            placeholder='Product name'
            value={name} 
            name='name'
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Purchase price: </span>
          <Input 
            type='number'
            value={purchasePrice}
            name='purchasePrice'
            step='0.01'
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Sale price: </span>
          <Input 
            type='number'
            value={salePrice}
            name='salePrice'
            step='0.01'
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Quantity: </span>
          <Input 
            type='number'
            value={quantity}
            name='quantity'
            step='1'
            onChange={handleOnChange}
          />
        </InputLabel>
        <InputLabel>
          <span>Select provider </span>
          <Select
            name="providerId"
            value={providerId}
            onChange={handleOnChange}
          >
            <option value="">-- Select one --</option>
            {providersList.map(provider => (
              <option value={provider.id} key={provider.id}>{provider.name}</option>
            ))}
          </Select>
        </InputLabel>
        <InputLabel fullWidth>
          <span>Description: </span>
          <TextArea name="description" rows={3} onChange={handleOnChange} value={description} ></TextArea>
        </InputLabel>
        <ButtonsContainer>
          <SubmitButton type='button' accentColor onClick={showForm}>
            Cancel
          </SubmitButton>
          <SubmitButton type='submit'>
            Add Product
          </SubmitButton>
        </ButtonsContainer>
      </form>
    </CreateFormContainer>
  )
}
