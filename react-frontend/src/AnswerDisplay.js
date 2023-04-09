import { useState, useEffect } from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css";
import Comment from "./Comment";
import { createTheme } from '@mui/material/styles';
import CommentDisplay from "./CommentDisplay";
import axios from "axios";

function AnswersDisplay(props){
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);
  const answerId = props.data.answerID;

  useEffect(() => {
    const upvoted = localStorage.getItem(`answer-${answerId}-upvoted`);
    const downvoted = localStorage.getItem(`answer-${answerId}-downvoted`);

    if (upvoted) {
      setHasUpvoted(true);
      setHasDownvoted(false);
    } else if (downvoted) {
      setHasUpvoted(false);
      setHasDownvoted(true);
    } else {
      setHasUpvoted(false);
      setHasDownvoted(false);
    }
  }, [answerId]);

  const handleUpVote = () => {
    const userId = localStorage.getItem("userId");

    if (!hasUpvoted && !localStorage.getItem(`answer-${answerId}-upvoted-${userId}`)) {
      axios
        .put(`http://localhost:8080/questions/${answerId}/votes?direction=1&userId=${userId}`)
        .then(response => {
          setHasUpvoted(true);
          setHasDownvoted(false);
          props.data.votes = response.data.votes;
          localStorage.setItem(`answer-${answerId}-upvoted-${userId}`, true);
          localStorage.removeItem(`answer-${answerId}-downvoted-${userId}`);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const handleDownVote = () =>{
    const userId = localStorage.getItem("userId");

    if (!hasDownvoted && !localStorage.getItem(`answer-${answerId}-downvoted-${userId}`)) {
      const votesChange = hasUpvoted ? -2 : -1;
      axios.put(`http://localhost:8080/questions/${answerId}/votes?direction=-1&userId=${userId}`)
        .then(response => {
          setHasDownvoted(true);
          setHasUpvoted(false);
          props.data.votes += votesChange;
          localStorage.setItem(`answer-${answerId}-downvoted-${userId}`, true);
          localStorage.removeItem(`answer-${answerId}-upvoted-${userId}`);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const handleLogout = () => {
    localStorage.clear();
  }

  return (
    <div className="jsBeginnerWantToInsertTeParent">
      <div class="answer_row">
        <div class="votes_col">
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            orientation="vertical"
          >
            <Button onClick={handleUpVote} disabled={hasUpvoted}>
              Up
            </Button>
            <votes>{props.data.votes}</votes>
            <Button onClick={handleDownVote} disabled={hasDownvoted}>
              Down
            </Button>
          </ButtonGroup>
                  </div>
                  <div class="answer_col">
                    <div class="answer_des">
                      <body>{props.data.answerDescription}</body>
                    </div>
                    <div class="question_answer_code">{props.data.answerCode}</div>  
                  </div>
                  <div class="comment_col">
                    <h3>Comments</h3>
                    <div class="comment">
                      <CommentDisplay data = {props.data.allComments}/>
                      <Comment/>
                    </div>
                  </div>
                </div>
          </div>

            );
          }

          export default AnswersDisplay;

