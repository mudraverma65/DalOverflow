import { FunctionComponent, useState, useEffect  } from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css";

import { createTheme } from '@mui/material/styles';
import axios from "axios";
import QuestionDetails from "./QuestionDetails";
import AnswersDisplay from "./AnswerDisplay";
import GetAnswer from "./GetAnswer";
import Comment from "./Comment";

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

  // useEffect(() => {


  //   const fetchItems = async () => {
  //     try{
  //       const response = await fetch(URL);
  //       responseData = await response.json();
  //       console.log(responseData)
  //       setQuestionAnswerInfo(responseData);
  //     }
  //     catch (err){
  //       console.log(err.stack)
  //     }
  //   }

  //   (async () => await fetchItems())();
  //   }, []);

  console.log(questionAnswerInfo);
  
    return(
      <div className="jsBeginnerWantToInsertTeParent">
        <div class="thread">
          {/* {questionAnswerInfo} */}
          {/* {console.log(questionAnswerInfo)} */}
          <QuestionDetails 
            questionCode={questionAnswerInfo.questionCode}
            questionDate={questionAnswerInfo.questionDate}
            questionDescription={questionAnswerInfo.questionDescription}
            questionTitle={questionAnswerInfo.questionTitle}
            questionTags={questionAnswerInfo.tags}
          />

          {
            (questionAnswerInfo) 
              ? questionAnswerInfo.allAnswers.map((answerData) => <AnswersDisplay data={answerData}/>)
              : <p>No Data in questionAnswerInfo</p>
            }

          <GetAnswer questionID={questionAnswerInfo.questionID}/>  
        </div>
      </div>  
    );
}


export default QuestionAnswer;


