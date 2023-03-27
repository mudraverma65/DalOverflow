import Comment from "./Comment";
function CommentDisplay(props){
    return(
        <div>
            <div class="comment"><body>{props.data.commentText}<comment_user> – user5734311</comment_user><comment_time>May 22, 2017 at 13:44</comment_time> </body></div>
        </div>
    );
}

export default CommentDisplay;