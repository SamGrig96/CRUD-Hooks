import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Layout from './components/layout/layout'

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Layout/>
                </Switch>
            </Router>
        </div>
    )
}

export default App
