import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";
import {Navigate} from "react-router-dom";
import UserLoggedIn from './UserLoggedIn';



const Container = styled.div`
    font-size: 1.5rem;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
`;

const Header1 = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const Button = styled.button`
    font-size: 1.1rem;
    color:#fff;
    border:0;
    background-color: #378ad3;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 10px;
    margin-left: 10px;
`;

function UserProfile() {
    const[BackToHomePage, setBackToHomePage] = useState(false);
    const{checkUser} = useContext(UserLoggedIn);
    function Logout(){
             localStorage.setItem("userId", null);
             checkUser();
             setBackToHomePage(true);
           }

    return(

        <>
            {BackToHomePage && (
                <Navigate to={'/'}/>
            )}
            <Container>
                <Header1>{localStorage.getItem("username").charAt(0).toUpperCase()+ localStorage.getItem("username").slice(1)}❜s Profile</Header1>
                <Button onClick={() => Logout()}>Logout</Button>
            </Container>

        </>
    );


}
export default UserProfile;