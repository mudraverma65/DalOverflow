import "./styles.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function GetAnswer(){
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
        />
        </Box>
      </div>
        <div class ="button1">Submit</div>
      </div>
        
    );
  }

  export default GetAnswer;
  