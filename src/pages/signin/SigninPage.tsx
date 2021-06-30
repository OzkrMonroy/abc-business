import { useEffect } from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { LoginPageContainer, LoginCover } from './loginPageStyles';
import { SigninForm, SignupForm } from '../../components/forms';

export const SigninPage = ({ match }: RouteComponentProps) => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if(match.path === '/signup'){
      setIsLogin(false);
      return;
    }
    setIsLogin(true);
  }, [match])

  return (
    <LoginPageContainer>
      { isLogin ? <SigninForm/> : <SignupForm/> }
      <LoginCover>
        <img src="/assets/account.svg" alt="cover"/>
      </LoginCover>
    </LoginPageContainer>
  )
}
