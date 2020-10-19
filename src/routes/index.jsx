import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Route from './Route';


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cadastro" component={Cadastro} />
    </Switch>
  );
};

export default Routes;
