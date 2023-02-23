import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledHeader = styled.h1`
    font-size: 1.5rem;
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 30px 20px;
`;

const Button = styled(Link)`
    font-size: 1.5rem;
    color:#fff;
    border:0;
    background-color: #378ad3;
    border-radius: 5px;
    text-decoration: none;
`;

const QuestionList = styled.div`
    background-color: rgba(255,255,255,.100);
    display: grid;
    padding: 15px 25px;
    border-top: 1px solid #999;
`;

const QuestionAsked = styled.div`
    padding: 0 30px;
`;

const QuestionLink = styled.a`
    text-decoration: none;
    color: #3ca4ff
    font-size: 1.2rem;
    margin-bottom: 5px;
    display: block;
`;

function QuestionsFrontPage() {
    return(
        <main>
            <TopRow>
            <StyledHeader>Top Questions</StyledHeader>
            <Button to={'/ask'}>Ask Question</Button>
            </TopRow>
            <QuestionList>
                <QuestionAsked>
                    <QuestionLink>Getting string in quotes in javascript</QuestionLink>
                </QuestionAsked>
            </QuestionList>
            <QuestionList>
                <QuestionAsked>
                    <QuestionLink>Getting string in quotes in javascript</QuestionLink>
                </QuestionAsked>
            </QuestionList>
            <QuestionList>
                <QuestionAsked>
                    <QuestionLink>Getting string in quotes in javascript</QuestionLink>
                </QuestionAsked>
            </QuestionList>  
            <QuestionList>
                <QuestionAsked>
                    <QuestionLink>Getting string in quotes in javascript</QuestionLink>
                </QuestionAsked>
            </QuestionList>                
        </main>        
    );
}

export default QuestionsFrontPage;