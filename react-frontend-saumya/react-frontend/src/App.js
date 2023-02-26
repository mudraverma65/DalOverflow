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

const Styles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;700&display=swap');
  body{
    background: #2d2d2d; 
    color: #fff;
    font-family: Roboto Condensed, sans-serif;
  } 
`;

function App() {
  return (
    <div>
      <Reset />
      <Styles />
      

      <Router>
        <Header />
        <Routes>
          <Route path="/ask" element = {<AskQuestion/>} />
          <Route path="/" element = {<QuestionsFrontPage/>} />
        </Routes >
      </Router>

    </div>
  );
}

export default App;
