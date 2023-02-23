import styled from "styled-components";

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

    return(
        <QuesTitle>
            <StyledHeader>Ask a Questions</StyledHeader>
            <QuestionTitle type="text" placeholder="Question Title"/>
            <MainQuestion placeholder = "Question Body"></MainQuestion>
            <SubmitButton> Submit </SubmitButton>
        </QuesTitle>
    );
}
