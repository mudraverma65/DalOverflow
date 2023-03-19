import "./styles.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import axios from 'axios';

// function GetAnswer(props){
//   const[answerBody,setAnswerBody] = useState('')
//   const[code, setCode] = useState('')

//   const handleClick = (e)=>{
//     e.preventDefault()
//     const answer = {answerBody,code}
//     console.log(answer)
//     fetch(`http://localhost:8080/questions/${props.questionID}/answers/{userId}`,{
//       method:"POST",
//       headers:{"Content-Type":"application/json"},
//       body: JSON.stringify(answer)
//     }).then(()=>{
//       console.log("Answer Updated")
//     })
//   } 
function GetAnswer(props){
  const[answerDescription,setAnswerDescription] = useState()
  const[answerCode, setAnswerCode] = useState()

  const handleClick = (e)=>{
    e.preventDefault()
    const answer = {answerDescription,answerCode }
   const questionId = localStorage.getItem("selectedQuestionId")
   const userId = localStorage.getItem("userId")
   const URL = `http://localhost:8080/questions/${props.questionId}/answers/${userId}`
   axios.post(URL, answer)
                   .then(response => {
                       window.alert("Your answer was posted successfully!");
                   })
                   .catch(error => {
                       if (error.response && error.response.status === 500)
                       {
                       }
                       else
                       {
                           console.error(error);
                       }
                   });
  }

  return(
    <div class="get_answer_col">
      <div>
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
          value = {answerDescription}
          onChange = {(e) => setAnswerDescription(e.target.value)}
        />
        </Box>
        <h3>Add Code</h3>
        {/* <pre>
          <code>

          </code>
        </pre> */}
        <Box
          sx={{
              '& .MuiTextField-root': { m: 1, width: '100%' },
          }}
        >
        <TextField
          id="outlined-multiline-static"
          label="Code"
          multiline
          rows={6}
          value = {answerCode}
          onChange = {(e) => setAnswerCode(e.target.value)}
        />
        </Box>
      </div>
      <button className="button1" onClick={handleClick}>Submit</button>

    </div>
  );
}
export default GetAnswer;
  