import React from 'react';
import lodable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const SignUp = lodable(() => import('@pages/SignUp'));
const LogIn = lodable(() => import('@pages/LogIn'));

export default function App() {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
    </Switch>
  );
}
