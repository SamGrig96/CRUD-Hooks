import React from 'react'
import { Redirect,Route } from 'react-router-dom'

function PrivateRoute ({component: Component, isAuth, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => isAuth
          ? <Component {...props} />
          : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
      />
    )
  }

export default PrivateRoute;
