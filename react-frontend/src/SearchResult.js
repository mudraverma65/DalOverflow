import {Link} from 'react-router-dom';
import QuestionList from './QuestionList';
import React, { useState, useEffect } from 'react';
import UserLoggedIn from './UserLoggedIn';
import {useContext} from 'react';
import { useLocation } from 'react-router-dom';


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


function SearchResult() {
    const location = useLocation();
    const results = location.state.results;
    return (
        <div className='jsBeginnerWantToInsertTeParent'>
            <div className="TopRow">
                <h2>Search Results</h2>
            </div>
            <DisplayQuestionList questions={results} />
        </div> 
        
    );
}

export default SearchResult;