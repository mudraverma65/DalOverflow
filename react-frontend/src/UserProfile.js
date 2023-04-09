import { useState, useContext,useEffect} from "react";
import {Navigate} from "react-router-dom";
import UserLoggedIn from './UserLoggedIn';

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
        </>
    );


}
export default UserProfile;