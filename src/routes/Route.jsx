/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Route({
  isPrivate = false,
  onlyPublic = false,
  component: Component,
  ...rest
}) {
  const { token } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return !(onlyPublic && !!token) || (isPrivate && !!token) ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/', state: location }} />
        );
      }}
    />
  );
}

export default Route;
