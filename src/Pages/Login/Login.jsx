import React, { useState } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Box,
  Typography
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"; import './login.css'
import Logo from '../../assets/login/logo.svg'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handelLogin = () => {
    navigate("/register");
  };

  return (
    <div className='main-login' >
      <div className='login-inner-section' >
        <div className='login-inner-section-main'>
          <div className='login-inner-section-stack'>
            <img src={Logo} />
            <h1>SingUp</h1>
            <p>Let’s start your wonderful journey with Uninex</p>
            <Typography className="heading">Company information</Typography>

            <TextField className="custom-textfield"  size="small" label="Company Name" variant="outlined" fullWidth  />
            <TextField className="custom-textfield"  size="small" label="Company Website (optional)" variant="outlined" fullWidth  />
            <TextField className="custom-textfield"  size="small" label="Industry" variant="outlined" fullWidth  />

            <TextField className="custom-textfield" 
              size="small"
              label="Company Email"
              variant="outlined"
              fullWidth
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button className="send-code-button">Send Code</Button>
                  </InputAdornment>
                ),
              }}
            />

            <TextField className="custom-textfield"  size="small" label="Verification Code" variant="outlined" fullWidth  />

            <TextField className="custom-textfield"  size="small"
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button fullWidth className="next-button" onClick={handelLogin}>Next</Button>

            <Typography className="footer-text">
              Already have an account? <span className="login-text">Log in</span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
