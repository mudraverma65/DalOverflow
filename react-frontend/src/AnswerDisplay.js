import { FunctionComponent, useState, useEffect  } from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css";

import { createTheme } from '@mui/material/styles';
import axios from "axios";

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
              <div class="comment"><body>You need ../public/images/logo_2016.png You went up twice, first out of the components folder, then out of the src folder.<comment_user> – user5734311</comment_user><comment_time>May 22, 2017 at 13:44</comment_time> </body></div>
              <div class="comment"><body>You need ../public/images/logo_2016.png You went up twice, first out of the components folder, then out of the src folder.<comment_user> – user5734311</comment_user><comment_time>May 22, 2017 at 13:44</comment_time> </body></div>
            </div>
          </div>
        </div>
    );
  }

export default AnswersDisplay;