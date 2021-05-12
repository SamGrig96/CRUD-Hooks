import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const ProtectedRoute = (props) => {
    let Cmp=props.Cmp;
    const history =useHistory()
    
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            history.push('/')
            console.log(true)
        }
        else{
            history.push('/user') 
        }}, [history]);
    return (
    <div>
        <Cmp/>
    </div>
    )
}
export default ProtectedRoute