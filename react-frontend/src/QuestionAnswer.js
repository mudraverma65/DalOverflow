import { useState, useEffect  } from "react";
import "./styles.css";

import { createTheme } from '@mui/material/styles';
import axios from "axios";
import QuestionDetails from "./QuestionDetails";
import AnswersDisplay from "./AnswerDisplay";
import GetAnswer from "./GetAnswer";


const theme = createTheme({
  palette: {
    primary: {
      main: '#ffc107',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

function QuestionAnswer(){

  const [questionAnswerInfo, setQuestionAnswerInfo] = useState("");
  const questionID = localStorage.getItem("selectedQuestionId")
  console.log("selectedQuestionId" + questionID)
  useEffect(() => {   

    const URL = `http://localhost:8080/api/question/${questionID}/answer`;

    const fetchQuestionByID = async () => {
      try { 
        const response = await axios.get(URL);
        console.log(response.data);
        setQuestionAnswerInfo(response.data)
      } catch (error) {
        console.log(error.stack)
      }
    }

    fetchQuestionByID();
  }, []);

  console.log(questionAnswerInfo);
  
    return(
      <div className="jsBeginnerWantToInsertTeParent">
        <div class="thread">
          <QuestionDetails 
            questionCode={questionAnswerInfo.questionCode}
            questionDate={questionAnswerInfo.questionDate}
            questionDescription={questionAnswerInfo.questionDescription}
            questionTitle={questionAnswerInfo.questionTitle}
            questionTags={questionAnswerInfo.tags}
            questionAnswerCount={questionAnswerInfo.answerCount}
          />

          {
            (questionAnswerInfo) 
              ? questionAnswerInfo.allAnswers.map((answerData) => <AnswersDisplay data={answerData}  />)
              : <p>No Data in questionAnswerInfo</p>
            }

          <GetAnswer questionID={questionAnswerInfo.questionID}/>  
        </div>
      </div>  
    );
}


export default QuestionAnswer;


