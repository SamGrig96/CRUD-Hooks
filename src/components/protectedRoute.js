import React, { useEffect } from 'react'
import { useHistory,Redirect,Route } from 'react-router-dom'

function PrivateRoute ({component: Component, isAuth, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => props.isAuth===true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
      />
    )
  }

export default PrivateRoute;
