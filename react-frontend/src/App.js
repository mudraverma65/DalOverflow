import { Reset } from 'styled-reset';
import styled, {createGlobalStyle} from 'styled-components';
import Header from "./Header";
import QuestionsFrontPage from "./QuestionsFrontPage";
import AskQuestion from "./AskQuestion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
import { useState, Component, useEffect } from 'react';
import UserLoggedIn from './UserLoggedIn';
import LoginPage from './LoginPage';
import axios from 'axios';
import RegistrationPage from './RegistrationPage';
import UserProfile from './UserProfile';
import QuestionAnswer from './QuestionAnswer';

const Styles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;700&display=swap');
  body{
    background: #2d2d2d; 
    color: #fff;
    font-family: Times New Roman;
  } 
`;


function App() {
  const[user, setUser] = useState(null);
  
  function checkUser(){
    axios.get("http://127.0.0.1:8080/user/login")
  .then(response => {
    setUser({userName: response.data});
  })
  .catch( () => {
    setUser(null);
  })
}
  
  useEffect(() => {
    checkUser();
  })


  
  return (
    <div>
      <Reset />
      <Styles />
      

      <Router>
        <UserLoggedIn.Provider value={{user, checkUser}}>
          <Header />
          <Routes>
            <Route path="/ask" element = {<AskQuestion/>} />
            <Route path="/profile" element = {<UserProfile/>} />
            <Route path="/" element = {<QuestionsFrontPage/>} />
            <Route path="/question-answer" element = {<QuestionAnswer/>} />
            <Route path="/login" element = {<LoginPage/>} />
            <Route path="/registration" element = {<RegistrationPage/>} />
          </Routes >
          </UserLoggedIn.Provider>
        
      </Router>

    </div>
  );
}

export default App;
