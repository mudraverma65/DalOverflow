import { FunctionComponent, useState, useEffect  } from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css";

import { createTheme } from '@mui/material/styles';
import axios from "axios";

function QuestionDetails(props) {
    // const questionTitle = props.questionTitle;
    // console.log(questionTitle);
    return(
      <div className="jsBeginnerWantToInsertTeParent">
        <div class="question_details_row">
          <div class="question_col">
            <div class="question"><h2>{props.questionTitle}</h2></div>
          </div>
          <div class="button_col">
            <div class="button1">Ask Question</div>
          </div>
        </div>
  
        <div class="question_details">
          <div class="details_module"><p><strong><span>Asked</span></strong><span> </span>4 years, 5 months ago<strong><span> Modified</span></strong><span> </span>6 months ago<strong><span> Viewed</span></strong><span> </span>55k times</p></div>
        </div>
        <div class="question_des_row">
          <div class="question_des"><body>{props.questionDescription}</body></div>
          <div class="question_answer_code">{props.questionCode}</div>
          <div class="question_tags_col">
            <div class="tags">java</div>
          </div>
        </div>
        <div class="question_answer_count"><h3>3<span> </span>Answers</h3></div>
      </div>
    );

}

export default QuestionDetails;