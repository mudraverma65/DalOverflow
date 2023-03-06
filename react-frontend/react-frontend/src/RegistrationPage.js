import styled from "styled-components";
import axios from "axios";
import { Component } from "react";

const Container = styled.h1`
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
    margin-top:20px;
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
    margin-top:20px;
    margin-left: 10px;
`;

const SubmitButton = styled.button`
    font-size: 1.1rem;
    color:#fff;
    border:0;
    background-color: #378ad3;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 10px;
    margin-left: 10px;
`;

class RegistrationPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        }
    }
    RegisterInfo(){
        axios.post('http://localhost:8080/register/authenticate',{email:this.state.email,password:this.state.password})
    }
    render(){
        return(
            <Container>
                <h1>Registration</h1>
                <UsernameInput placeholder = {'name'} type="name" value={this.state.name} onChange={ev => this.setState({name:ev.target.value})} />
                <UsernameInput placeholder = {'username'} type="username" value={this.state.username} onChange={ev => this.setState({username:ev.target.value})} />
                <UsernameInput placeholder = {'email'} type="email" value={this.state.email} onChange={ev => this.setState({email:ev.target.value})} />
                <PasswordInput placeholder = {'password'} type="password" value={this.state.password} onChange={ev => this.setState({password:ev.target.value})}/>
                <SubmitButton onClick={()=>this.RegisterInfo()}> Register </SubmitButton>
            </Container>
        );
    }

}
export default RegistrationPage;