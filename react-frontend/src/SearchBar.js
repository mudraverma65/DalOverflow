import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";

function SearchBar(){
    const[SearchQuery,setSearch] = useState()

    return(
        <div className='SearchBar'>
            <Box
            sx={{
                width: '100%',
                maxWidth: '100%',
              }}
            >
            <TextField 
                fullWidth label="Search..." id="fullWidth"
                value = {SearchQuery}
                onChange = {(e) => setSearch(e.target.value)}
            />
            </Box>
        </div>
    );
}

export default SearchBar;