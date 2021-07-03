import { CreateFormContainer, InputLabel, Input, FormHeader } from '../formStyles';

export const CreateContainerForm = () => {
  return (
    <CreateFormContainer>
      <FormHeader>
        <h2>Container data</h2>
      </FormHeader>
      <form>
        <InputLabel>
          <span>Name: </span>
          <Input 
            type='text' 
            placeholder='Provider name'
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Purchase price: </span>
          <Input 
            type='date'
            name='purchasePrice'
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Sale price: </span>
          <Input
            type='number'
            required
          />
        </InputLabel>
      </form>
    </CreateFormContainer>
  )
}
