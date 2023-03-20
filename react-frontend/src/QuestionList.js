import {Link} from "react-router-dom";

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
      <div className='jsBeginnerWantToInsertTeParent'>
        <div className='Questions'>
          <div className='QuestionListCol'>
            <div className='QuestionInfoList'>
              <div><strong><span>0</span></strong><span> </span>Votes</div>
              <div><strong><span>{question.answerCount}</span></strong><span> </span>Answers</div>
            </div>
          </div>
          <div className='QuestionDesCol'>
            <div onClick={() => handleQuestionClickEvent(question.questionID)} ><Link to={"./question-answer"}><h3>{question.questionTitle}</h3></Link></div>
            <div>{question.tags.map(tag => (
                        <tags key={tag}>{tag}</tags>
                    ))}
            </div>
            <div className='QuestionStats'>Asked by {question.userName} at {question.questionDate}</div>
          </div>
        </div>
      </div>
    );
}

export default QuestionList;
