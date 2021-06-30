import { FormContainer, FormHeader, InputLabel, Input, SubmitButton } from './loginFormStyles';

export const LoginForm = () => {
  return (
    <FormContainer>
      <FormHeader>
        <img src="/assets/graph_bar.svg" alt="abc business logo" />
        <h1>ABC Business</h1>
      </FormHeader>
      <form>
        <InputLabel>
          <span>Email: </span>
          <Input type='email' placeholder='Email address'/>
        </InputLabel>
        <InputLabel>
          <span>Password: </span>
          <Input type='password' placeholder='Password'/>
        </InputLabel>
        <SubmitButton type='submit' value='Log In'/>
      </form>
    </FormContainer>
  )
}
