import { useState } from 'react';
import { CreateFormContainer, InputLabel, Input, SubmitButton, ButtonsContainer, FormHeader, TextArea } from '../formStyles';
import { ProductInterface } from "../../../interfaces/ProductInterface";
import { productInitialState } from "./productState";

interface Props {
  showForm: () => void;
}

export const CreateProductForm = ({ showForm }: Props) => {
  const [product, setProduct] = useState<ProductInterface>(productInitialState)
  const { name, description, salePrice, purchasePrice } = product;

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value
    });
  }
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    console.log(product);
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
            placeholder='Provider name'
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
