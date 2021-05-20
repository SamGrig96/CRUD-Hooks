import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { Link } from 'react-router-dom'

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
    },
})

export default function Login(props) {
    const classes = useStyles()
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [error, setError] = useState('')
    const [user] = useState(JSON.parse(localStorage.getItem('user')) || [])

    const onSubmit = (data) => {
        let passwordHash = require('../../../node_modules/password-hash/lib/password-hash');
        let localData = user
        let usersName = localData.map(user => user.username)
        let usersPassword = localData.map(user => user.password)

        if ((usersName.indexOf(data.firstName) !== -1)) {
            let indexUser = usersName.indexOf(data.firstName)

            if (passwordHash.verify(`${data.password}`, usersPassword[indexUser])) {
                props.protectedChange()
            } else {
                setError('Invalid Password!')
            }

        } else {
            setError('Invalid User')
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
                    <ThemeProvider theme={theme}>
                        <Button type="submit" color="secondary" placeholder="LogIn">LogIn</Button>
                    </ThemeProvider>
                </div>
            </div>
            <div style={{ marginLeft: '41.5%', color: 'orange' }}><Link to='/registration'><p>You do not have an account<br /> yet register</p></Link></div>
            <div style={{ marginLeft: '40%', color: 'red' }}>{error}</div>
        </form>
    )
}

