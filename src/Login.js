import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel, Checkbox } from '@mui/material'


import AcUnitIcon from '@mui/icons-material/AcUnit';

const Login = () => {

    const navigate = useNavigate();


    const [login, SetLogin] = useState("")
    const [pass, SetPass] = useState("")

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    function myfunc() {

        if (login === "admin" && pass === "admin") {
            //window.location.assign("/info")
            navigate("/info")
            //window.location.href = "http://localhost:3000/info"
            //window.location.href = "https://leonid-06.github.io/bta_13_forever/info"
        } else {
            console.log(false)
        }
    }


    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AcUnitIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField onChange={(e) => SetLogin(e.target.value)} className='login' label='Username' placeholder='Enter username' variant="outlined" fullWidth required />
                <TextField onChange={(e) => SetPass(e.target.value)} className='password' label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button onClick={myfunc} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Link href="#" >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login