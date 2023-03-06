import styled from 'styled-components';
import {Link} from 'react-router-dom';
import QuestionList from './QuestionList';

const StyledHeader = styled.h1`
    font-size: 1.5rem;
`;

const TopRow = styled.div`
  display: grid;
  background: #222222;
  grid-template-columns: 6fr 1fr;
  padding: 30px 20px;
`;

const Button = styled(Link)`
    font-size: 1.5rem;
    height: 50px;
    color: #00000;
    background: #FFD401;
    border-radius: 10px;
    text-decoration: none;
    line-height: 50px;
`;



// const QuestionAsked = styled.div`
//     padding: 0 30px;
// `;

// const QuestionLink = styled.a`
//     text-decoration: none;
//     color: #3ca4ff
//     font-size: 1.2rem;
//     margin-bottom: 5px;
//     display: block;
// `;

function QuestionsFrontPage() {
    return(
        <main>
            <TopRow>
            <StyledHeader>Top Questions</StyledHeader>
            <Button to={'/ask'}>Ask Question</Button>
            </TopRow> 
            <QuestionList/>
            <QuestionList/>
            <QuestionList/>
            <QuestionList/>
            <QuestionList/>
            <QuestionList/>
            <QuestionList/>
            <QuestionList/>
            <QuestionList/>                
        </main>        
    );
}

export default QuestionsFrontPage;