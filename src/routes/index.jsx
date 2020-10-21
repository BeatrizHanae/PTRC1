import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Contato from '../pages/Contato';
import Suporte from '../pages/Suporte';
import Route from './Route';


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cadastro" component={Cadastro} />
      <Route exact path="/Contato" component={Contato} />
      <Route exact path="/Suporte" component={Suporte} />
    </Switch>
  );
};

export default Routes;
