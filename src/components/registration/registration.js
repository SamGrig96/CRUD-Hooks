import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import  {ThemeProvider} from '@material-ui/styles'
import { Link, useHistory } from 'react-router-dom'
import '../../App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#ff7043',
        },
        themes: {
            main: '#f54f5f'
        }
    },
})

export default function Registartion() {
    const classes = useStyles()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [error, setError] = useState('')
    const validPassword =  new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&])(?=.{8,})");
    const history = useHistory()
    const [user] = useState(JSON.parse(localStorage.getItem('user')) || [])

    const onSubmit = (data) => {
        let passwordHash = require('../../../node_modules/password-hash/lib/password-hash')
        let hashedPassword = passwordHash.generate(`${data.password}`);
        let localData = user
        let allUserName = localData.map(user => (user.username))

        if (allUserName.indexOf(data.firstName) === -1) {
            if (data.password === data.retrypassword) {
                if (validPassword.test(data.password)) {
                    let newCurrent = { username: data.firstName, password: hashedPassword }
                    localStorage.setItem('user', JSON.stringify([...localData, newCurrent]));
                    history.push('/')
                } else {
                    setError('The password must contain uppercase letters և two characters')
                }
            } else {
                setError('Passwords do not match')
            }
        } else {
            setError('You are registered in the system, please log in directly')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ marginLeft: '40%' }}>
                <div className={classes.root}>
                    <TextField
                        required
                        id="first-name"
                        label="First name"
                        placeholder="First name"
                        margin="normal"
                        variant="outlined"
                        type="text"
                        {...register('firstName', { required: true })} />

                    <div className="errors">{errors.firstName && 'error in firstname'}</div>
                </div>
                <div className={classes.root}>
                    <TextField
                        required
                        id="password"
                        label="Password"
                        placeholder="Password"
                        margin="normal"
                        variant="outlined"
                        type="password"
                        {...register('password', { required: true })} />
                </div>
                <div className={classes.root}>
                    <TextField
                        required
                        id="retry-password"
                        label="Retry-Password"
                        placeholder="Password"
                        margin="normal"
                        variant="outlined"
                        type="password"
                        {...register('retrypassword', { required: true })} />
                </div>
                <div className={classes.root}>
                    <ThemeProvider theme={theme}>
                        <Button type="submit" color="secondary" >Registration</Button><br/>
                        <Link to='/'><Button className='btn-name' style={{ color: '#f54f5f' }} type="submit"  >Login</Button></Link>
                    </ThemeProvider>
                </div>
            </div>
            <div style={{ marginLeft: '40%', color: 'red' }}>{error}</div>
        </form>
    )
}

