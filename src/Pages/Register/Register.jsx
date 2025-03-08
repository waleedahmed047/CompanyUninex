import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography
} from "@mui/material";
import './Register.css'
import Logo from '../../assets/login/logo.svg'
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const navigate = useNavigate();

  const handelCreateAccount = () => {
    navigate('/dashboard');
  }

  return (
    <div className='main-login' >
      <div className='login-inner-section' >
        <div className='login-inner-section-main'>
          <div className='login-inner-section-stack'>
            <img src={Logo} />
            <h1>SingUp</h1>
            <p>Let’s start your wonderful journey with Uninex</p>
            <Typography className="heading">Company Contract</Typography>
            <div className="input-fields-section">
              <p>Contact Person's Name</p>
              <TextField className="custom-textfield" size="small" label="Name" variant="outlined" fullWidth />

            </div>
            <div className="input-fields-section">
              <p>Phone Number</p>
              <TextField className="custom-textfield" size="small" label="Phone Number" variant="outlined" fullWidth />
            </div>
            <div className="input-fields-section">
              <p>Company Location (City/Region)</p>
              <TextField className="custom-textfield" size="small" label="Location" variant="outlined" fullWidth />
            </div>
           

            <Button fullWidth className="next-button" onClick={handelCreateAccount}>Create Account</Button>

            <Typography className="footer-text">
              Already have an account? <span className="login-text">Log in</span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
