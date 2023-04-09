import {  useContext  } from "react";
import "./styles.css";
import {Link} from "react-router-dom";
import UserLoggedIn from './UserLoggedIn';

function QuestionDetails(props) {

  const questionDate = props.questionDate;
  const questionUserId = localStorage.getItem("questionUserId");
  const userLoggedin = localStorage.getItem("userId");

  const ifUser = () => {
    if(questionUserId == userLoggedin){
        alert("Delete Accepted");
    }
    else{
        alert("Only the owner can delete the question");
    }
  }
  const notUser = () => {
    alert("Please login to delete the question");
  }
    const {user} = useContext(UserLoggedIn)
    return(
      <div className="jsBeginnerWantToInsertTeParent">
        <div class="question_details_row">
          <div class="question_col">
            <div class="question"><h2>{props.questionTitle}</h2></div>
          </div>
          <div class="button_col">
            <Link to="/ask">
              <div class="button1" >Ask Question</div>
            </Link>
          </div>
          {user && (<div>
               <div class="button1" onClick={ifUser}>Delete Question</div>
          </div>)}
          {!user && (<div>
                <div class="button1" onClick={notUser}>Delete Question</div>
          </div>)}
        </div>
  
        <div class="question_details">
          <div class="details_module"><p><strong><span>Asked</span></strong><span> </span>{questionDate}</p></div>
        </div>
        <div class="question_des_row">
          <div class="question_des"><body>{props.questionDescription}</body></div>
          <div class="question_answer_code">{props.questionCode}</div>
          <div class="question_tags_col">

          {props.questionTags?.map(tag => (
            <tags>{tag}</tags>
            ))}
          </div>
        </div>
        <div class="question_answer_count"><h3>{props.questionAnswerCount}<span> </span>Answers</h3></div>
      </div>
    );

}

export default QuestionDetails;