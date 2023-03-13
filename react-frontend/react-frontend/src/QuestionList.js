import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

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
  font-family: 'Sans Serif', cursive;
`;

// const QuestionList = styled.div`
//     background-color: rgba(255,255,255,.100);
//     display: grid;
//     padding: 15px 25px;
//     border-top: 1px solid #999;
// `;

const QuestionTitleArea = styled.div`
  padding: 0 30px;
  font-family: 'Sans Serif', cursive;
`;

const QuestionLink = styled(Link)`
  text-decoration: none;
  color:#BDA115;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 5px;
  font-family: 'Sans Serif', cursive;
`;

const StyledQuestionRow = styled.div`
  background-color: #000000;
  padding: 15px 15px 10px;
  display: grid;
  grid-template-columns: repeat(3, 50px) 1fr;
  border-top: 1px solid #555;
  font-family: 'Sans Serif', cursive;
`;

const WhoAndWhen = styled.div`
  display: inline-block;
  color:#aaa;
  font-size: .8rem;
  float:right;
  padding: 10px 0;
  font-family: 'Sans Serif', cursive;
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
    font-family: 'Sans Serif', cursive;
  }
`;

function QuestionList() {
    return (
      <StyledQuestionRow>
        <QuestionStat>0<span>votes</span></QuestionStat>
        <QuestionStat>1<span>answers</span></QuestionStat>
        <QuestionStat>6<span>views</span></QuestionStat>
        <QuestionTitleArea>
            <QuestionLink>Question 1</QuestionLink>
            <Tag>Java</Tag>
            <Tag>Python</Tag>
            <Tag>R</Tag>
            <WhoAndWhen>
                Asked 2 minutes ago    
            </WhoAndWhen>
        </QuestionTitleArea>
    </StyledQuestionRow>
    );
}

QuestionList.propTypes = {
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    tags: PropTypes.string,
    author: PropTypes.object,
  };
  
  export default QuestionList;
