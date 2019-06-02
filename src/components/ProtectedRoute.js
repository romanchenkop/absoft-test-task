import React from 'react'
import { Route } from 'react-router-dom';

//HOC that takes another component as an argument and returns new Route
let ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={
      (props) => {
        return <Component {...props} />;
      }} />
  );
}

export default ProtectedRoute;