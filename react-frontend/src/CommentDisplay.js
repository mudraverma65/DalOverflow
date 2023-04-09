import Comment from "./Comment";

function CommentDisplay(props){
    return(
        <div className="CommentDisplay">
            <div class="CommentText"><body>This is a comment{props.data.commentText}</body></div>
            <div class ="CommentDate"><body>Asked at {props.data.commentDate}</body></div>
        </div>
    );
}

export default CommentDisplay;