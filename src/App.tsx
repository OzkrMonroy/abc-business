import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SigninPage } from './pages/signin/SigninPage';
import { RootState } from './redux/root-reducer';
import { checkUserSession } from './redux/user/userAction';
import { AuthenticatedRoute } from './components/auth/AuthenticatedRoute';
import { ProvidersPage } from './pages/providers/ProvidersPage';
import { ProductsPage } from './pages/products/ProductsPage';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setIsLoading(!!user)
  }, [user])

  const checkUser = () => {
    dispatch(checkUserSession());
  }

  return (
    <>
      {isLoading ? (
        <Switch>
          <Route exact path='/' render={() =>
            user ? <ProductsPage/> : <Redirect to='/signin'/>
          }/>
          <Route exact path='/providers' render={() =>
            user ? <ProvidersPage/> : <Redirect to='/signin'/>
          }/>
          <AuthenticatedRoute exact path='/signin' component={SigninPage} user={user}/>
          <AuthenticatedRoute exact path='/signup' component={SigninPage} user={user}/>
        </Switch>
      ): (<p>Cargando...</p>)}
    </>
  );
}

export default App;
