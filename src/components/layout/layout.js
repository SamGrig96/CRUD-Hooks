import React, { useEffect, useState } from 'react'
import PrivateRoute from '../protectedRoute'
import PersonInputs from '../PersonInputs/PersonInputs'
import { Route, useHistory } from 'react-router-dom'
import Login from '../Login/Login'
import Registration from '../registration/registration'

const Layout = () => {
    const history = useHistory()
    const [isAuth, setIsAuth] = useState(false)
    const protectedChange = () => {
        setIsAuth(true)
    }

    useEffect(() => {
        if (isAuth) {
            history.push('/user')
        }
    }, [history, isAuth])

    return (
        <div>

            <PrivateRoute path="/user" isAuth={isAuth} component={PersonInputs} />
            <Route exact path="/" component={() => <Login protectedChange={protectedChange} isAuth={isAuth} />} />
            <Route exact path='/registration' component={Registration} />
        </div>
    )
}

export default Layout