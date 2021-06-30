import { useHistory } from 'react-router-dom';
import { FormContainer, FormHeader, InputLabel, Input, SubmitButton, FormLink } from '../formStyles'

export const SignupForm = () => {
  const history = useHistory();

  return (
    <FormContainer>
      <FormHeader>
        <img src="/assets/graph_bar.svg" alt="abc business logo" />
        <h1>ABC Business</h1>
      </FormHeader>
      <form>
        <InputLabel>
          <span>Name: </span>
          <Input type='text' placeholder='Name'/>
        </InputLabel>
        <InputLabel>
          <span>Email: </span>
          <Input type='email' placeholder='Email address'/>
        </InputLabel>
        <InputLabel>
          <span>Password: </span>
          <Input type='password' placeholder='Password'/>
        </InputLabel>
        <SubmitButton type='submit' value='Signup'/>
      </form>
      <p>Do you have an account? <FormLink to='/signin'>Sign In</FormLink> </p>
    </FormContainer>
  )
}
