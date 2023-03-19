import styled from "styled-components";
import axios from "axios";
import { Component } from "react";
import './styles.css';
import { Navigate } from "react-router-dom";

const Container = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 1.5rem;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
`;

const UsernameInput = styled.input`
  background: none;
  padding: 7px;
  width: 70%;
  color: #fff;
  border: 2px solid #aaa;
  display: block;
  box-sizing: border-box;
  margin-left: 10px;
`;

const PasswordInput = styled.input`
  background: none;
  padding: 7px;
  width: 70%;
  color: #fff;
  border: 2px solid #aaa;
  display: block;
  box-sizing: border-box;
  margin-left: 10px;
`;

const SubmitButton = styled.button`
  font-size: 1.1rem;
  color: #fff;
  border: 0;
  background-color: #378ad3;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
  margin-left: 10px;
  background: none;
  padding: 7px;
  width: 70%;
  color: #aaa;
  border: 2px solid #aaa;
  display: block;
  box-sizing: border-box;
  margin-top:30px;
  margin-left: 10px;
`;

const Fieldlabel = styled.label`
    padding: 10px;
`;



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
    this.setState({ [event.target.name]: event.target.value });
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
                  }alert("Invalid username or password");
                });
              } else {
                // Update state with errors
                this.setState({ errors });
              }
            }

            render(){
              const { userName, password, errors } = this.state;
              return(<>
                        {this.state.redirectToHomePage && (<Navigate to = {'/'} /> )}
                        <form onSubmit={this.handleSubmit}>
                        <Container><h1>Log In</h1></Container>
                        <br />
                        <Fieldlabel htmlFor="name">Please enter your username:</Fieldlabel>
                        <div>
                            <UsernameInput
                            placeholder="Username"
                            type="text"
                            id="userName"
                            name="userName"
                            value={userName}
                            onChange={this.handleChange}
                            />
                            {errors.name && <div className="error">{errors.name}</div>}
                        </div>
                        <br />
                        <Fieldlabel htmlFor="password">Please enter your password:</Fieldlabel>
                        <div>
                            <PasswordInput
                            placeholder="Password"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            />
                            {errors.password && <div className="error">{errors.password}</div>}
                        </div>
                        <SubmitButton type="submit">Submit</SubmitButton>
                        </form>
                      </>
                      );
                    }
                  }
export default LoginPage;

