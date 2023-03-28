import { useState } from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css";
import Comment from "./Comment";
import { createTheme } from '@mui/material/styles';
import axios from "axios";

function AnswersDisplay(props){
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);
  const answerId = props.data.answerID;

  const handleUpVote = () =>{
    if (!hasUpvoted) {
      axios.put(`http://localhost:8080/questions/${answerId}/votes?direction=1`)
        .then(response => {
          setHasUpvoted(true);
          setHasDownvoted(false);
          props.data.votes += 1;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  const handleDownVote = () =>{
    if (!hasDownvoted) {
      axios.put(`http://localhost:8080/questions/${answerId}/votes?direction=-1`)
        .then(response => {
          setHasDownvoted(true);
          setHasUpvoted(false);
          props.data.votes -= 1;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  return(
    <div className="jsBeginnerWantToInsertTeParent">
      <div class="answer_row">
        <div class="votes_col">
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            orientation="vertical"
          >
            <Button onClick={handleUpVote} disabled={hasUpvoted}>Up</Button>

            <votes>{props.data.votes}</votes>
            <Button onClick={handleDownVote} disabled={hasDownvoted}>Down</Button>
          </ButtonGroup>
        </div>
        <div class="answer_col">
          <div class="answer_des"><body>{props.data.answerDescription}</body></div>
          <div class="question_answer_code">{props.data.answerCode}</div>
        </div>
        <div class="comment_col">
          <h3>Comments</h3>
          <div class="comment">
            <Comment/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnswersDisplay;
