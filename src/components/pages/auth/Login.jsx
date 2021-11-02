import React, {useRef, useContext } from 'react'
// import axios from 'axios';
import './login.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthContext';
import { loginCall } from '../../../apiCalls'
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '85%',
      },
    },

    btn1: {
        backgroundColor: 'rgb(13, 136, 136)',
        color: '#fff',
        fontWeight: 'bold',
        maxWidth: '30%',
        textAlign: 'center',
        width: '100%',
        padding: '10px',
        // margin: '10px auto',

        '&:hover' : {
            backgroundColor: 'rgb(13, 136, 136)',
            color: '#fff',
        }
    }
  }));

const Login = () => {
    const classes = useStyles();
    const userInput = useRef();
    const password = useRef();
    const history = useHistory();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!userInput.current.value) return toast.error('Username required');
        if(!password.current.value) return toast.error('Please enter a password');


        const user = {
            userInput: userInput.current.value,
            password: password.current.value,
        }

        loginCall(user, dispatch, history);



    }

    return (
        <div className="login">
            <div className="holder">
                <h3>
                    User Login
                </h3>
                <form  onSubmit = {handleSubmit} className={classes.root} noValidate autoComplete="off">
                <TextField  type="text" id="outlined-basic" label="Username or Email" variant="outlined" inputRef={userInput}/> 
                <TextField type="password" id="outlined-basic" label="Password" variant="outlined" inputRef={password} />

                <Button type="submit" className={classes.btn1} variant="contained">
                    Signin
                </Button>

                </form>
            </div>
        </div>
    )
}

export default Login
