import axios from "axios";
import { Component } from "react";
import './styles.css';
import { Link, Navigate } from "react-router-dom";
import UserLoggedIn from "./UserLoggedIn";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { userName, password} = this.state;
    // Check for errors
    let errors = {};
    if (userName === '') {
      errors.name = 'Name is required';
    } 
    if (password === '') {
      errors.password = 'Password is required';
    }
    if (Object.keys(errors).length === 0) {
      // Submit the form
      console.log('Submitting form...');
      axios.post("http://127.0.0.1:8080/user/login", {
        username: this.state.userName,
        password: this.state.password,
      })
      .then((response) => {
        localStorage.setItem("userId", response.data.userId);
        window.location.href = '/';
        this.context.checkUser();
        this.setState({ redirectToHomePage: true });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        } alert("Invalid username or password");
      });
    } else {
      this.setState({ errors });
    }
  }
  render(){
    const { userName, password, errors } = this.state;
    return(<>
    {this.state.redirectToHomePage && (<Navigate to = {'/'} /> )}
    <div className="LoginRegistration">
      <div className="Login"><br/><h2>Login</h2>
        <Box
          sx={{
            width: '100%',
            '& .MuiTextField-root': { m: 1, width: '90%', textAlign: 'center'},
          }}
        >
          <TextField
            id="userName"
            label="username"
            multiline
            rows={1}
            value={userName}
            onChange={this.handleChange}
          />
        </Box>
        {errors.name && <div className="error">{errors.name}</div>}
        <br/>
        <Box
          sx={{
            width: '100%',
            '& .MuiTextField-root': { m: 1, width: '90%', textAlign: 'center'},
          }}
        >
          <TextField
            id="password"
            label="password"
            multiline
            rows={1}
            value={password}
            onChange={this.handleChange}
          />
        </Box>
        {errors.password && <div className="error">{errors.password}</div>}
        <br/>
        <div className="button1"onClick={this.handleSubmit}>Login</div>
        <br/>
        <div className="PromptRegister">
          <body>Don't have an account?</body>
          <div className="LinkText"><Link to="/registration">SignUp Instead</Link></div>
        </div>
        <br/><br/>
      </div>
    </div>
    </>
    );
  }
}

LoginPage.contextType = UserLoggedIn;  

export default LoginPage;