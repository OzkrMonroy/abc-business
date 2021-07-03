import { useState } from 'react';
import { ButtonContainer, Container } from './addProductToPurchaseStyles';
import { SubmitButton } from '../forms/formStyles';
import { CreateProductForm } from '../forms'

export const AddProductToPurchase = () => {
  const [isCreating, setIsCreating] = useState(false);

  const handleOnClick = () => {
    setIsCreating(!isCreating);
  }

  return (
    <>
      <Container>
        <ButtonContainer>
          {!isCreating &&  <SubmitButton type='button' onClick={handleOnClick}>Add Product</SubmitButton>}
        </ButtonContainer>
      </Container>
      {isCreating && <CreateProductForm showForm={handleOnClick}/>}
    </>
  )
}
