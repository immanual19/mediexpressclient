import React from 'react';
import { Redirect, Route } from 'react-router';
const PrivateRoute = ({ children, ...rest }) => {
    const currentUser=localStorage.getItem('mediExpressUser');
    const parsedCurrentUser=JSON.parse(currentUser);
    return (
        <Route
      {...rest}
      render={({ location }) =>
      parsedCurrentUser.isSignedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;