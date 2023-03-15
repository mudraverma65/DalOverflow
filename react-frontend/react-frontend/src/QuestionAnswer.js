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

  useEffect(() => {  

    const questionID = 1;

    

    const URL = `http://localhost:8080/api/question/1/answer`;
    //const URL = `http://25c9aea5-f1c3-48c3-a102-b7ed61759c6d.mock.pstmn.io/question`;

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
          />

          {
            (questionAnswerInfo) 
              ? questionAnswerInfo.allAnswers.map((answerData) => <AnswersDisplay data={answerData}/>)
              : <p>No Data in questionAnswerInfo</p>
            }

          <GetAnswer/>  
        </div>
      </div>  
    );
}

function GetAnswer(){
  return(
    
    <div class="get_answer_col">
      <h3>Your Answer</h3>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
      >
      <TextField
        id="outlined-multiline-static"
        label="Answer"
        multiline
        rows={6}
      />
      </Box>
    </div>
      
  );
}

export default QuestionAnswer;


