import {Link} from 'react-router-dom';
import QuestionList from './QuestionList';
import React, { useState, useEffect } from 'react';


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
            <div className="TopRow">
                <h2>Top Questions</h2>
                <Link to="/ask">
                    <div class="button1" >Ask Question</div>
                </Link>
            </div>
            <DisplayQuestionList questions={questions} />
        </main>
    );
}

export default QuestionsFrontPage;