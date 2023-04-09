import axios from "axios";
import React, { useState } from "react";
import './styles.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Register(){
    const [userName, setUserName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'userName') {
            setUserName(value);
        } else if (name === 'emailId') {
            setEmailId(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    }

    const isValid = (str) => {
        return !/[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(str);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Check for errors
        let errors = {};
        if (userName === '') {
            errors.name = 'Name is required';
        } else if (userName.length > 10){
            errors.name = 'Username cannot be more than 10 characters';
        }
        if (emailId === '') {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(emailId)) {
            errors.email = 'Email is invalid';
        }
        if (password === '') {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        } else if (isValid(password)){
            errors.password = 'Password should have at least 1 special character';
        } else if (confirmPassword !== password) {
            errors.confirmPassword = 'Password do not match';
        }

        if (Object.keys(errors).length === 0) {
            // Submit the form
            console.log('Submitting form...');
            axios.post('http://127.0.0.1:8080/user/add', {userName, emailId, password})
                .then(response => {
                    // handle success
                    console.log(response.data);
                })
                .catch(error => {
                    // handle error
                    console.log(error);
                });
        } else {
            // Update state with errors
            setErrors(errors);
        }
    }

    const handleClickShowPassword = () => setShowPassword((showPassword) => !showPassword);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    }

    return(
        <div className="LoginRegistration">
            <div className="LoginRegister"><br/><h2>Register</h2>
                <Box
                    sx={{
                        width: '100%',
                        '& > :not(style)': { m: 1, width: '90%', textAlign: 'center' },
                      }}
                    >
                    <TextField
                        id="userName"
                        label="username"
                        name="Username"
                        autoComplete="username"
                        value={userName}
                        onChange={handleChange}
                    />
                    <TextField
                        id="userName"
                        label="username"
                        name="Username"
                        autoComplete="username"
                        value={userName}
                        onChange={handleChange}
                    />
                    </Box>
                    <FormControl sx={{ m: 1, width: '90%', textAlign:'center' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            placeholder="Password"
                            label="Password"
                            id="password"
                            name="password"
                            value={password} // Added value prop
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                        {errors.password && <div className="error">{errors.password}</div>}
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                             }
                            label="Password"
                            id="password"
                            name="password"
                            value={password} // Added value prop
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </FormControl>
            </div>
        </div>
    );
}


export default Register;
