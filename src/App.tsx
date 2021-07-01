import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { SigninPage } from './pages/signin/SigninPage';
import { RootState } from './redux/root-reducer';
import { checkUserSession } from './redux/user/userAction';
import { AuthenticatedRoute } from './components/auth/AuthenticatedRoute';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user)

  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {user ? (
        <Switch>
          <Route exact path='/' render={() =>
            user ? <Dashboard/> : <Redirect to='/signin'/>
          }/>
          <AuthenticatedRoute exact path='/signin' component={SigninPage} user={user}/>
          <AuthenticatedRoute exact path='/signup' component={SigninPage} user={user}/>
        </Switch>
      ): (<p>Cargando...</p>)}
    </>
  );
}

export default App;
