import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { SigninPage } from './pages/signin/SigninPage';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/signin' component={SigninPage}/>
      <Route exact path='/signup' component={SigninPage}/>
    </Switch>
  );
}

export default App;
