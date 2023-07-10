import React from "react";
import './Login.css'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Lock  from "@mui/icons-material/Lock";
import Card from '@mui/material/Card'
import Button from '@mui/material/Button';
const Login = () =>{
    return(
       <section className="main">
            <Card className="cardTitle">
                    <label>Human Resaurce Management System</label>
            </Card>
            <Card className="cardLogin">
                <div className="box">
                <Box  sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Email" variant="standard" />
                </Box>
                </div>
                <div className="box">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="Password" variant="standard" />
                    </Box> 
                </div>
                 <div className="loginAction">
                    <div className="forgotPassword">  
                        <Button color="primary">Forgot Password</Button>
                    </div>
                    <div className="loginButton">
                        <Button variant="contained" color="success">Login</Button>
                    </div>
                 </div>
            </Card>
       </section>
    )
}
export default Login;