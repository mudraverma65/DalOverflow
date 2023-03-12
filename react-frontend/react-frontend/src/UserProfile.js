import axios from "axios";
import { useState } from "react";

const Container = styled.div`
    font-size: 1.5rem;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
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
    function Logout(){
        axios.post('').then(()=>{
            setBackToHomePage(true);
        });
    }
    return(

        <>
            {BackToHomePage && (
                <Redirect to={'/'}/>
            )}
            <Container>
                <Header1>Profile</Header1>
                
            </Container>
            <Button onClick={() => logout()}>Logout</Button>
        </>
    );


}
export default UserProfile;