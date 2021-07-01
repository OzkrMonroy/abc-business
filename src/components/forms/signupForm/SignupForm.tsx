import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FormContainer, FormHeader, InputLabel, Input, SubmitButton, FormLink } from '../formStyles';
import { registerUserStartAsync } from '../../../redux/user/userAction';
import { Spinner } from '../../spinner/Spinner';
import { RootState } from '../../../redux/root-reducer';

interface UserCredentials {
  email: string;
  password: string;
  confirmPassword: string;
  displayName: string;
}

export const SignupForm = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
  })
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.user.isLoading);

  const { email, password, confirmPassword, displayName } = userCredentials;

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    })
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    if(email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || displayName.trim() === ''){
      console.log('Campos obligatorios');
      return;
    }
    if(password.trim() !== confirmPassword.trim()){
      console.log('Contraseñas no iguales');
      return;
    }

    console.log(userCredentials);
    dispatch(registerUserStartAsync(email, password, { displayName }));
  }

  return (
    <FormContainer>
      <FormHeader>
        <img src="/assets/graph_bar.svg" alt="abc business logo" />
        <h1>ABC Business</h1>
      </FormHeader>
      <form onSubmit={handleOnSubmit}>
        <InputLabel>
          <span>Name: </span>
          <Input 
            type='text' 
            placeholder='Name' 
            value={displayName} 
            name='displayName'
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
          <span>Password: </span>
          <Input 
            type='password' 
            placeholder='Password'
            value={password}
            name='password'
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Confirm password: </span>
          <Input 
            type='password' 
            placeholder='Confirm password'
            value={confirmPassword}
            name='confirmPassword'
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <SubmitButton type='submit'>
          {isLoading ? <Spinner/> : 'Sign up'}
        </SubmitButton>
      </form>
      <p>Do you have an account? <FormLink to='/signin'>Sign In</FormLink> </p>
    </FormContainer>
  )
}
