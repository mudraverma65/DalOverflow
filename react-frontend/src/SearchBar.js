import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";

function SearchBar(){
    const[SearchQuery,setSearch] = useState("");
    const [results, setResults] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('SearchQuery updated:', SearchQuery);
    
        fetch(`/api/search/searchQuestions?keyword=${SearchQuery}`)
          .then((response) => response.json())
          .then((data) => setResults(data))
          .catch((error) => console.error(error));
        };

        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
            handleSubmit(e);
            }
        };

        useEffect(() => {
            setSearch("");
          }, []);


    return(
        <div className='SearchBar' onSubmit={handleSubmit}>
            <Box
            sx={{
                width: '100%',
                maxWidth: '100%',
              }}
            >
            <TextField 
                fullWidth label="Search..." id="fullWidth"
                value = {SearchQuery} 
                onChange = {(e) => 
                    setSearch(e.target.value)
                }
                onKeyDown={handleKeyDown}
                
            />
            </Box>
        </div>
        
    );
}

export default SearchBar;