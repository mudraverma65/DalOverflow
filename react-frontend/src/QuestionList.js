import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import QuestionAnswer from "./QuestionAnswer";

const QuestionStat = styled.div`
  text-align: center;
  display: inline-block;
  font-size: 1.2rem;
  color:#7C7C7C;
  margin-top:7px;
  span{
    font-size:.7rem;
    display: block;
    font-weight: 300;
    margin-top: 4px;
  }
  border: 1px #BDA115 solid;
  border-radius: 8px;
  margin-right: 2px;
`;

// const QuestionList = styled.div`
//     background-color: rgba(255,255,255,.100);
//     display: grid;
//     padding: 15px 25px;
//     border-top: 1px solid #999;
// `;

const QuestionTitleArea = styled.div`
  padding: 0 30px;
`;

const QuestionLink = styled(Link)`
  text-decoration: none;
  color:#BDA115;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 5px;
`;

const StyledQuestionRow = styled.div`
  background-color: #000000;
  padding: 15px 15px 10px;
  display: grid;
  grid-template-columns: repeat(3, 50px) 1fr;
  border-top: 1px solid #555;
`;

const WhoAndWhen = styled.div`
  display: inline-block;
  color:#aaa;
  font-size: .8rem;
  float:right;
  padding: 10px 0;
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 5px;
  background-color: #222222;
  color:#FBFFFE;
  padding: 7px;
  border-radius: 4px;
  font-size: .9rem;
  text-decoration: none;
  transition: all .2s ease;
  &:hover{
    background-color: #7C7C7C;
    color:#000000;
  }
`;

function QuestionList(props) {
  function handleQuestionClickEvent(questionId){
    localStorage.setItem("selectedQuestionId",questionId)
    console.log("selected Question id: " + localStorage.getItem("selectedQuestionId"))
  }

    console.log("Question List Props:"+props);
    const { question } = props;
    if (!question) {
        return <div>Loading...</div>;
    }
    if (question.length === 0) {
        return <div>No questions found.</div>;
    } else if (question.error) {
        return <div>Error retrieving questions.</div>;
    }

    return (
        <>
            <StyledQuestionRow key={question.questionID}>
                <QuestionStat>0<span>votes</span></QuestionStat>
                <QuestionStat>{question.answerCount}<span>answers</span></QuestionStat>
                <QuestionTitleArea>
                    <QuestionLink  onClick={() => handleQuestionClickEvent(question.questionID)} ><Link to={"./QuestionAnswer"}>{question.questionTitle}</Link></QuestionLink>
                    {question.tags.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                    <WhoAndWhen>Asked by {question.userName} at {question.questionDate}</WhoAndWhen>
                </QuestionTitleArea>
            </StyledQuestionRow>
        </>
    );
}


  export default QuestionList;
