import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css";
import axios from 'axios';

function Comment(props){

    const [modalComment, setModalComment] = useState(false);

    const toggleModel = () => {
        setModalComment(!modalComment)
    }

    const[comment,setComment] = useState('')

    const handleClick = (e) => {
        e.preventDefault();
        const userId = localStorage.getItem("userId")
        const answerId = props.answerID;
        const commentData = { commentText: comment,
        userID: userId,
        answerID: answerId }
      
        axios
          .post(`http://localhost:8080/api/${answerId}/comment/${userId}/post`, commentData, {
            headers: { "Content-Type": "application/json" },
          })
          .then(() => {
            console.log("Comment Posted");
            window.alert("Your comment was posted successfully!");
          })
          .catch((err) => {
            console.error(err);
          });
      }; 

  

    return(
        <div className="jsBeginnerWantToInsertTeParent">
            <div class ="button2" onClick={toggleModel}>Comment</div>

            {modalComment && (
                <div className="modal_comment">
                <div className = "overlay">
                    <div className="comment_modal">
                        <h3>Your Comment</h3>
                        <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '100%' },
                        }}
                        >
                        <TextField
                        id="outlined-multiline-static"
                        label="Comment"
                        multiline
                        rows={6}
                        value = {comment}
                        onChange = {(e) => setComment(e.target.value)}
                        />
                        
                        </Box>
                        <button className="close-modal" onClick={toggleModel}>
                            CLOSE
                        </button>
                        <div class ="button1" onClick={handleClick}>Submit</div>
                    </div>
                    
                </div>
            </div>
            )}
         </div>
    );
}

export default Comment;