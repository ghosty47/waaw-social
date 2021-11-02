import React, { useRef } from 'react'
import axios from 'axios';
import './login.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './verify.css'
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom'


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

const VerifyUser = () => {
    const classes = useStyles();
    const secretToken = useRef();
    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!secretToken.current.value) return toast.error('Token required');

        const user = {
            secretToken: secretToken.current.value,

        }

        try {
            let res = await axios.post('http://localhost:9000/api/v1/auth/confirm-user', user)
            if(res.data.success) toast.success(res.data.msg)
            history.push('/login');

        } catch (err) {
            if(!err.response.data.success) return toast.error(err.response.data.msg)
        }

        
    }

    return (
        <div className="verify">
            <div className="holder">
                <h3>
                    Verify your Email
                </h3>

                <h4>
                    Kindly input your token sent to the registered email account to continue:::
                </h4>
                <form  onSubmit = {handleSubmit} className={classes.root} noValidate autoComplete="off">
                    <TextField  type="password" id="outlined-basic" label="Token" variant="outlined" inputRef={secretToken}/>

                    <Button type="submit" className={classes.btn1} variant="contained">
                        Verify
                </Button>
                </form>
            </div>
        </div>
    )
}

export default VerifyUser
