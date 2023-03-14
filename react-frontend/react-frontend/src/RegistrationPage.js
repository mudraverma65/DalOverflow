import styled from "styled-components";
import axios from "axios";
import { Component } from "react";
import { Navigate } from "react-router-dom";

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
            userName:'',
            emailId:'',
            password:'',
            redirectToHomePage: false
        }
    }
    RegisterInfo(){
        axios.post('http://127.0.0.1:8080/user/add',{userName:this.state.userName, emailId:this.state.emailId, password:this.state.password})
        .then(response => {
            this.setState({redirectToHomePage: true})
        })
        .catch((error) => {
                            if (error.response) {
                                console.log(error.response.data);
                                console.log(error.response.status);
                                console.log(error.response.headers);
                            } else if (error.request) {
                                console.log(error.request);
                            } else {
                                console.log('Error', error.message);
                            }
                        })
    }
    render(){
        return(
            <>
            {this.state.redirectToHomePage && (
                <Navigate to = {'/'} />
            )}
            <Container>
                <h1>Registration</h1>

                <UsernameInput placeholder = {'User Name'} type="userName" value={this.state.userName} onChange={ev => this.setState({userName:ev.target.value})} />
                <UsernameInput placeholder = {'Email'} type="emailId" value={this.state.emailId} onChange={ev => this.setState({emailId:ev.target.value})} />
                <PasswordInput placeholder = {'Password'} type="password" value={this.state.password} onChange={ev => this.setState({password:ev.target.value})}/>
                <PasswordInput placeholder = {'Confirm password'} type="password" value={this.state.password} onChange={ev => this.setState({password:ev.target.value})}/>
                <SubmitButton onClick={()=>this.RegisterInfo()}> Register </SubmitButton>
            </Container>
        </>);
    }

}
export default RegistrationPage;