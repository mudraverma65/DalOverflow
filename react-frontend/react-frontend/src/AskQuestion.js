import styled from "styled-components";
import axios from 'axios';
import React, { useState } from 'react';

const StyledHeader = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const QuesTitle = styled.div`
    padding: 30px 20px;
`;

const QuestionTitle = styled.input`
    background: none;
    padding: 7px;
    width: 70%;
    color: #fff;
    border: 2px solid #aaa;
    display: block;
    box-sizing: border-box;
`;

const MainQuestion = styled.textarea`
    margin-top: 8px;
    background: none;
    padding: 10px;
    width: 70%;
    color: #fff;
    border: 2px solid #aaa;
    display: block;
    box-sizing: border-box;
    min-height: 200px;
`;

const SubmitButton = styled.button`
    font-size: 1.5rem;
    color:#fff;
    border:0;
    background-color: #378ad3;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 10px;
`;

export default function AskQuestion(){
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const api = axios.create({
        baseURL: "http://localhost:8080"
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        const question = {
            questionTitle: event.target.elements.title.value,
            questionDescription: event.target.elements.body.value,
        };
        const confirmed = window.confirm("Are you sure you want to submit the form?");
        if(confirmed){
            console.log(api);
            await axios.post('http://localhost:8080/api/question', question)
                .then(response => {
                    setSuccess(true);
                    window.alert("Your question was posted successfully!");
                })
                .catch(error => {
                    if (error.response && error.response.status === 500) {
                        //setErrorMessage('500 response, some issue with the backend server');
                    }
                    else{
                        console.error(error);
                    }
                });
        }
    };

    return(
        <QuesTitle>
            <StyledHeader>Ask a Question</StyledHeader>
            <form onSubmit={handleSubmit}>
                <QuestionTitle type="text" placeholder="Question Title" name="title" />
                <MainQuestion placeholder="Question Body" name="body" />
                <SubmitButton type="submit">Submit</SubmitButton>
            </form>
        </QuesTitle>
    );
}
