import axios from "axios";
import { useState, useContext,useEffect} from "react";
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
    // The values for  will be dynamic in the future releases.
  { id: 1, title: '24', content: 'Questions Answered' },
  { id: 2, title: '32', content: 'Questions Asked' }
];

function UserProfile() {
  const [BackToHomePage, setBackToHomePage] = useState(false);
  const [userId, setUserId] = useState(null);
  const { checkUser } = useContext(UserLoggedIn);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);

  function Logout() {
    localStorage.removeItem("userId");
    checkUser();
    setBackToHomePage(true);
  }

    return(

        <>
            {BackToHomePage && (
                <Navigate to={'/'}/>
            )}
            <div class = "UserProfilePage">
            <div class = "UserDetails">
              <h2>{localStorage.getItem("username").charAt(0).toUpperCase()+ localStorage.getItem("username").slice(1)}❜s Profile</h2>
            </div>
              <div class = "UserProfile">
                <div class = "QuestionAnswered">
                  <h2>24</h2>
                  <p>Questions Answered</p>
                </div>
                <div class = "QuestionAsked">
                  <h2>32</h2>
                  <p>Questions Asked</p>
                </div>
              </div>
              <div class="Logout">
                <div class="button1" onClick={() => Logout()}> Logout</div>
              </div>

            </div>
            
            {/* <Container>
                <Header1>{localStorage.getItem("username").charAt(0).toUpperCase()+ localStorage.getItem("username").slice(1)}❜s Profile</Header1>
                <br />
                <TileList tiles={tiles} />
                <br />
            </Container>
            </div>
            <div>
            <Button onClick={() => Logout()}>Logout</Button>
            </div> */}

        </>
    );


}
export default UserProfile;