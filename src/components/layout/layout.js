import React, { useEffect, useState } from 'react'
import PrivateRoute from '../protectedRoute'
import PersonInputs from '../PersonInputs/PersonInputs'
import { Redirect, Route, useHistory } from 'react-router-dom'
import Login from '../Login/Login'

const Layout = () => {
    const history = useHistory()
    const [ isAuth, setIsAuth ] = useState(false)
    const test = () => {
        setIsAuth(true)
    }

    useEffect(() => {
        if (isAuth) {
            debugger
            history.push('/user')
        }
    }, [ history, isAuth ])

    return (
        <div>
            <PrivateRoute path="/user" isAuth={isAuth} component={PersonInputs}/>
            {/*{isAuth ?*/}
            {/*    (*/}
            {/*        <Route path={'/user'}>*/}
            {/*            <PersonInputs/>*/}
            {/*        </Route>*/}
            {/*    )*/}
            {/*    : <Redirect to='/'/>*/}
            {/*}*/}
            <Route exact path="/" component={() => <Login test={test} isAuth={isAuth}/>}/>
        </div>
    )
}

export default Layout