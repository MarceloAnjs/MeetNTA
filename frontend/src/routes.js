import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { useContext } from 'react'
import Home from './pages/Home'
import Registration from './pages/registrationForm'
import Login from './pages/loginForm'
import {AuthContext} from './context/AuthProvider';

const PrivateRoute = ({ component: Component, ...rest}) => {
  const { token } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => token
        ? <Component {...rest} />
        : <Redirect to="/login" />
      }
    />
  )
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" exact component={Login} />
        <Route path="/Registration" component={Registration} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;