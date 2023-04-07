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
    display: flex;
    flex-direction: column;
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
    display: block;
`;

const Tile = ({title, content}) => {
  return (
    <div className="tile">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

const TileList = ({tiles}) => {
  return (
    <div className="tile-list">
      {tiles.map(tile => <Tile key={tile.id} title={tile.title} content={tile.content} />)}
    </div>
  );
};

const tiles = [
  { id: 1, title: 'Tile 1', content: 'This is the content of Tile 1.' },
  { id: 2, title: 'Tile 2', content: 'This is the content of Tile 2.' }
];

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
            <div>
            <Container>
                <Header1>{localStorage.getItem("username").charAt(0).toUpperCase()+ localStorage.getItem("username").slice(1)}❜s Profile</Header1>
                <br />
                <TileList tiles={tiles} />
                <br />
            </Container>
            </div>
            <div>
            <Button onClick={() => Logout()}>Logout</Button>
            </div>

        </>
    );


}
export default UserProfile;