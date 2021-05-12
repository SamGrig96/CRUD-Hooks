import React, { useState} from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles'
import allData from '../user-list.json'
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#ff7043',
        },
    },
});

export default function Login(props) {
    const classes = useStyles();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [error, setError] = useState('')
    let history = useHistory();
    const onSubmit = (data) => {
        let allDatas = allData.map(user => (user.username))
        let allDataspassword = allData.map(user => (user.password))
        
        if ((allDatas.indexOf(data.firstName) !== -1) && (allDataspassword.indexOf(data.password) !== -1)) {
            console.log(props)
            props.test()
            console.log(props.isAuth)
            // window.location.pathname='/user'
        }
        else {
            setError('Invalid User!!')
        }
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ marginLeft: '40%' }}>
                <div className={classes.root} >
                    <TextField
                        required
                        id="first-name"
                        label="First name"
                        placeholder='First name'
                        margin="normal"
                        variant="outlined"
                        type="text"
                        {...register('firstName', { required: true })} />

                    <div className='errors'>{errors.firstName && 'error in firstname'}</div>
                </div>
                <div className={classes.root}>
                    <TextField
                        required
                        id="password"
                        label="Password"
                        placeholder='Password'
                        margin="normal"
                        variant="outlined"
                        type="password"
                        {...register('password', { required: true })} />
                </div>
                <div className={classes.root}>
                    <ThemeProvider theme={theme}>
                        <Button type='submit' color="secondary" placeholder='LogIn'>LogIn</Button>
                    </ThemeProvider>
                </div>
            </div>
            <div style={{ marginLeft: '40%', color: 'red' }}>{error}</div>
        </form>
    );
}

