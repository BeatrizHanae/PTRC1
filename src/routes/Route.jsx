/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

function Route({ isPrivate = false, component: Component, ...rest }) {
  return <ReactDOMRoute {...rest} component={Component} />;

  // return (
  //   <ReactDOMRoute
  //     {...rest}
  //     render={({ location }) => {
  //       return isPrivate === !!user ? (
  //         <Component />
  //       ) : (
  //         <Redirect
  //           to={{ pathname: isPrivate ? '/' : '/dashboard', state: location }}
  //         />
  //       );
  //     }}
  //   />
  // );
}

export default Route;
