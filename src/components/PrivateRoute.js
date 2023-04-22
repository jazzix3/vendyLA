import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './Authentication';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { authUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authUser ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
}
