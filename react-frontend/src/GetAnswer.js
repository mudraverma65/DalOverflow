import "./styles.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";

function GetAnswer(){
  const[answerBody,setAnswerBody] = useState('')
  const[code, setCode] = useState('')

  const handleClick = (e)=>{
    e.preventDefault()
    const answer = {answerBody}
    console.log(answer)
    fetch("   ",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(answer)
    }).then(()=>{
      console.log("Answer Updated")
    })
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
          value = {answerBody}
          onChange = {(e) => setAnswerBody(e.target.value)}
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
          value = {code}
          onChange = {(e) => setCode(e.target.value)}
        />
        </Box>
      </div>
      <div class ="button1" onClick={handleClick}>Submit</div>
    </div>
  );
}

export default GetAnswer;
  