/* eslint-disable react/no-typos */
import React from 'react'
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

//HOC that takes another component as an argument and returns new Route
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={
      (props) => {
        return <Component {...props} />;
      }} />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default ProtectedRoute;