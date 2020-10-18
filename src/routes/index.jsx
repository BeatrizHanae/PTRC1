import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Route from './Route';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
