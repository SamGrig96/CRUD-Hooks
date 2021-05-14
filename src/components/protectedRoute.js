import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ component: Component, isAuth, ...rest }) {
    if (!isAuth) {
        return <Redirect to={{ pathname: '/', state: { from: rest.path } }}/>
    }

    return (
        <Route
            {...rest}
            render={props => <Component {...props} />}
        />
    )
}

export default PrivateRoute
