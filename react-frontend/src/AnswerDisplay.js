import { FunctionComponent, useState, useEffect  } from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css";
import Comment from "./Comment";

import { createTheme } from '@mui/material/styles';
import axios from "axios";
import CommentDisplay from "./CommentDisplay";

function AnswersDisplay(props){

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
                <Button>Up</Button>
                <votes>{props.data.votes}</votes>
                <Button>Down</Button>
              </ButtonGroup> 
            </div>
            <div class="answer_col">
              <div class="answer_des"><body>{props.data.answerDescription}</body></div>
              <div class="question_answer_code">{props.data.answerCode}</div>
            </div>
            <div class="comment_col"><h3>Comments</h3>
              {
              (props.data.allComments && props.data.allComments.length > 0) 
                ? props.data.allComments.map((commentData) => <CommentDisplay data={commentData}  />)
                : <p>No Comments</p>
              }
              <div class="comment">
                <Comment/>
              </div>
            </div>
          </div>
        </div>
    );
  }

export default AnswersDisplay;