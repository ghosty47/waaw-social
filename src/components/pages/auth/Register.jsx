import React, { useRef } from 'react'
import axios from 'axios';
import './register.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
// import validator from 'validator';



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

const Register = () => {
    const classes = useStyles();
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const gender = useRef();
    const history = useHistory();

    const handleSubmit  = async (e) => {
        e.preventDefault();

        if(!username.current.value) return toast.error('Please enter a username');

        if(!email.current.value) return toast.error('Please enter a email');

        if(!password.current.value) return toast.error('Please enter a password');
        
        if(!gender.current.value) return toast.error('Please enter a gender');

        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            gender: gender.current.value
        }

        try {
            let res = await axios.post('http://localhost:9000/api/v1/auth/register', user)
            if(res.data.success) toast.success(res.data.msg)
            history.push('/verify-user');

        } catch (err) {
            if(!err.response.data.success) return toast.error(err.response.data.msg)
        }
    }

    return (
        
        <div className="register">
            <div className="holder">
                <h3>
                    User SignUp
                </h3>
                <form  onSubmit = {handleSubmit} className={classes.root} noValidate autoComplete="off">
                <TextField  type="text" id="outlined-basic" label="Username" variant="outlined" inputRef={username}/>

                <TextField 
                type="text" 
                id="outlined-basic" 
                label="Email address" 
                variant="outlined" 
                inputRef={email}/> 

                <TextField type="password" id="outlined-basic" label="Password" variant="outlined" inputRef={password} />

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                    <Select
                        native
                        inputRef={gender}
                        onChange=""
                        label="Gender"
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Select>
                </FormControl>
                <Button type="submit" className={classes.btn1} variant="contained">
                    SignUp
                </Button>

                </form>
            </div>
        </div>
    )
}

export default Register
