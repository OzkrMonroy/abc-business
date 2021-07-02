import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { ProviderInterface } from '../../../interfaces/ProviderInterface';
import { CreateFormContainer, InputLabel, Input, SubmitButton, ButtonsContainer, FormHeader } from '../formStyles';
import { providerInitialState } from './providerState';
import { createProviderStartAsync } from '../../../redux/providers/providersActions';

interface Props {
  showForm: () => void;
}

export const CreateProviderForm = ({ showForm }: Props) => {

  const [provider, setProvider] = useState<ProviderInterface>(providerInitialState)
  const { name, address, phone, email, webPage, contactPerson, country } = provider;
  const dispatch = useDispatch();

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;

    setProvider({
      ...provider,
      [name]: value
    });
  }
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const id = uuidv4();
    const providerData = {...provider, id}
    dispatch(createProviderStartAsync(providerData, showForm));
  }

  return (
    <CreateFormContainer>
      <FormHeader>
        <h2>Create provider</h2>
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
          <span>Email: </span>
          <Input 
            type='email' 
            placeholder='Email address' 
            value={email}
            name='email'
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Address: </span>
          <Input 
            type='text' 
            placeholder='Address'
            value={address}
            name='address'
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Phone: </span>
          <Input 
            type='text' 
            placeholder='Phone'
            value={phone}
            name='phone'
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Web Page: </span>
          <Input 
            type='text' 
            placeholder='Web url'
            value={webPage}
            name='webPage'
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Contact person: </span>
          <Input 
            type='text' 
            placeholder='Person name'
            value={contactPerson}
            name='contactPerson'
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Country: </span>
          <Input 
            type='text' 
            placeholder='country'
            value={country}
            name='country'
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <ButtonsContainer>
          <SubmitButton type='button' accentColor onClick={showForm}>
            Cancel
          </SubmitButton>
          <SubmitButton type='submit'>
            Create Provider
          </SubmitButton>
        </ButtonsContainer>
      </form>
    </CreateFormContainer>
  )
}
