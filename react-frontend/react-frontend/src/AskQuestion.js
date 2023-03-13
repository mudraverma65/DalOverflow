import styled from "styled-components";
import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";


const StyledHeader = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-family: 'Sans Serif', cursive;
`;

const QuesTitle = styled.div`
    padding: 30px 20px;
    font-family: 'Sans Serif', cursive;
`;

const QuestionTitle = styled.input`
    background: none;
    padding: 7px;
    width: 70%;
    color: #fff;
    border: 2px solid #aaa;
    display: block;
    font-family: 'Sans Serif', cursive;
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
    font-family: 'Sans Serif', cursive;
`;

const SubmitButton = styled.button`
    font-size: 1.5rem;
    color:#fff;
    border:0;
    background-color: #378ad3;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    font-family: 'Sans Serif', cursive;

`;


export default function AskQuestion(){
    const [userInfo, setuserInfo] = useState({
        title: '',
        description: '',
        information: '',
    });
    
    const ondescription = (value) => {
        setuserInfo({ ...userInfo,
          description:value
        });
    } 
    const oninformation = (value) => {
        setuserInfo({ ...userInfo,
          information:value
        });
    } 

    const [checked1, setChecked1] = React.useState(false);

      const handleChange1 = () => {
        setChecked1(!checked1);
    };
    const [checked2, setChecked2] = React.useState(false);

      const handleChange2 = () => {
        setChecked2(!checked2);
    };
    const [checked3, setChecked3] = React.useState(false);

      const handleChange3 = () => {
        setChecked3(!checked3);
    };
    const [checked4, setChecked4] = React.useState(false);

      const handleChange4 = () => {
        setChecked4(!checked4);
    };
    const [checked5, setChecked5] = React.useState(false);

      const handleChange5 = () => {
        setChecked5(!checked5);
    };
    const [checked6, setChecked6] = React.useState(false);

      const handleChange6 = () => {
        setChecked6(!checked6);
    };
    const [checked7, setChecked7] = React.useState(false);

      const handleChange7 = () => {
        setChecked7(!checked7);
    };
    const [checked8, setChecked8] = React.useState(false);

      const handleChange8 = () => {
        setChecked8(!checked8);
    };

    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [value, setValue] = useState('');
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
                <br/>
                <StyledHeader className="font-weight-bold"> Additional information and code <span className="required"> </span> </StyledHeader>
                 <EditorToolbar toolbarId={'t1'}/>
                <ReactQuill
                theme="snow"
                value={userInfo.description}
                onChange={ondescription}
                placeholder={"Write something ..."}
                modules={modules('t1')}
                formats={formats}
                />
                <br />
                <label>
                    <input type="checkbox" checked={checked1} onChange={handleChange1}/>
                    Java
                </label>
                <label>
                    <input type="checkbox" checked={checked2} onChange={handleChange2}/>
                    Python
                </label>
                <label>
                    <input type="checkbox" checked={checked3} onChange={handleChange3}/>
                    C++
                </label>
                <label>
                    <input type="checkbox" checked={checked4} onChange={handleChange4}/>
                    Swift
                </label>
                <label>
                    <input type="checkbox" checked={checked5} onChange={handleChange5}/>
                    Cloud Computing
                </label>
                <label>
                    <input type="checkbox" checked={checked6} onChange={handleChange6}/>
                    Database Technologies
                </label>
                <label>
                    <input type="checkbox" checked={checked7} onChange={handleChange7}/>
                    HTML
                </label>
                <label>
                    <input type="checkbox" checked={checked8} onChange={handleChange8}/>
                    Springboot
                </label>
                <br/>
                <br/>    
                <SubmitButton type="submit">Submit</SubmitButton>
                
            </form>
        </QuesTitle>
    );
}
