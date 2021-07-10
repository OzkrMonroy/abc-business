import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/root-reducer';
import { FormContainer, FormHeader, InputLabel, Input, SubmitButton, FormLink } from '../formStyles';
import { Spinner } from '../../spinner/Spinner';
import { signInUserStartAsync } from '../../../redux/user/userAction';

interface State {
  email: string;
  password: string;
}

export const SigninForm = () => {
  const [userCredentials, setUserCredentials] = useState<State>({email: '', password: ''})
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.user.isLoading);

  const { email, password } = userCredentials;

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    })
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    if(email.trim() === '' || password.trim() === ''){
      return
    }
    dispatch(signInUserStartAsync(email, password));
  }

  return (
    <FormContainer>
      <FormHeader>
        <img src="/assets/graph_bar.svg" alt="abc business logo" />
        <h1>ABC Business</h1>
      </FormHeader>
      <form onSubmit={handleOnSubmit}>
        <InputLabel>
          <span>Email: </span>
          <Input 
            type='email' 
            placeholder='Email address'
            name='email'
            value={email}
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <InputLabel>
          <span>Password: </span>
          <Input 
            type='password' 
            placeholder='Password'
            name='password'
            value={password}
            onChange={handleOnChange}
            required
          />
        </InputLabel>
        <SubmitButton type='submit'>
          {isLoading ? <Spinner size='20' color='#FFFFFF'/> : 'Sign In'}
        </SubmitButton>
      </form>
      <p>Don't you have an account? <FormLink to='/signup'>Sign Up</FormLink> </p>
    </FormContainer>
  )
}
