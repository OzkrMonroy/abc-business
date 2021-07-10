import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { SigninPage } from './pages/signin/SigninPage';
import { RootState } from './redux/root-reducer';
import { checkUserSession } from './redux/user/userAction';
import { AuthenticatedRoute, InverseAuthenticatedRoute } from './components/auth/AuthenticatedRoute';
import { ProvidersPage } from './pages/providers/ProvidersPage';
import { ProductsPage } from './pages/products/ProductsPage';
import { MainSpinnerContainer } from './appStyles';
import { Spinner } from './components/spinner/Spinner';
import { PurchasesPage } from './pages/purchases/PurchasesPage';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user)
  const isChecking = useSelector((state: RootState) => state.user.isChecking);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(isChecking)
  }, [isChecking])

  return (
    <>
      {!isLoading ? (
        <Switch>
          <InverseAuthenticatedRoute exact path='/' component={ProductsPage} user={user}/>
          <InverseAuthenticatedRoute exact path='/providers' component={ProvidersPage} user={user}/>
          <InverseAuthenticatedRoute exact path='/purchases' component={PurchasesPage} user={user}/>
          <AuthenticatedRoute exact path='/signin' component={SigninPage} user={user}/>
          <AuthenticatedRoute exact path='/signup' component={SigninPage} user={user}/>
        </Switch>
      ): (<MainSpinnerContainer><Spinner size='75' color='#001557'/></MainSpinnerContainer>)}
    </>
  );
}

export default App;
