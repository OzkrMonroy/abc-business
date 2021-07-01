import { Route, Redirect } from 'react-router-dom';

export const AuthenticatedRoute = ({component: Component, user, ...propsComponent}: any) => {
  return (
    <Route
      {...propsComponent}
      render={(props) => (
        user ? <Redirect to='/'/> : <Component {...propsComponent} {...props}/>
      )}
    />
  )
}
