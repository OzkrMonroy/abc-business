import { LoginPageContainer, LoginCover } from './loginPageStyles';
import { LoginForm } from '../../components/signinForm/LoginForm';

export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm/>
      <LoginCover>
        <img src="/assets/account.svg" alt="cover"/>
      </LoginCover>
    </LoginPageContainer>
  )
}
