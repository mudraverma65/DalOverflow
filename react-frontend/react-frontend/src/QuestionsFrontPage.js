import styled from 'styled-components';
import {Link} from 'react-router-dom';
import QuestionList from './QuestionList';
import React, { useState, useEffect } from 'react';

const StyledHeader = styled.h1`
    font-size: 1.5rem;
    font-family: 'Sans Serif', cursive;
`;

const TopRow = styled.div`
  display: grid;
  background: #222222;
  grid-template-columns: 6fr 1fr;
  padding: 30px 20px;
  font-family: 'Sans Serif', cursive;
`;

const Button = styled(Link)`
    font-size: 1.2rem;
    height: 50px;
    color: #00000;
    background: #FFD401;
    border-radius: 10px;
    text-decoration: none;
    line-height: 50px;
    padding: 2px;
    padding: 0 35px;
    font-family: 'Sans Serif', cursive;
`;

function DisplayQuestionList(props) {
    console.log('QuestionList props:', props);
    return (
        <ul>
            {props.questions.map(question => (
                <li key={question.questionId}>
                    <QuestionList question={question}/>
                </li>
            ))}
        </ul>
    );
}
function QuestionsFrontPage() {
    const [questions, setQuestions] = useState([]);
    console.log("Calling Fetch Top Question API");
    useEffect(() => {
        fetch('http://localhost:8080/api/question/fetchTopQuestions')
            .then(response => response.json())
            .then(data => setQuestions(data));
    }, []);
    console.log("Question API response:"+questions);
    return (
        <main>
            <TopRow>
                <StyledHeader>Top Questions</StyledHeader>
                <Button to="/ask">Ask Question</Button>
            </TopRow>
            <DisplayQuestionList questions={questions} />
        </main>
    );
}

export default QuestionsFrontPage;