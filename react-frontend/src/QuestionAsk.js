import axios from 'axios';
import React, { useState } from 'react';
import "./CheckBoxes.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';

export default function QuestionAsk(){

    const Tags = [
        { title: 'Java'},
        { title: 'Python'},
        { title: 'C'},
        { title: 'C++'},
        { title: 'HTML'},
        { title: "Cloud Computing"},
        { title: 'SQL'},
    ];

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    const [userInfo, setuserInfo] = useState({
        title: '',
        description: '',
        information: '',
    });

    const ondescription = (event) => {
        const { value } = event.target;
        setuserInfo({
            ...userInfo,
            description: value
        });
    }

    const oninformation = (event) => {
        const { value } = event.target;
        setuserInfo({ ...userInfo,
            information:value
        });
    }

    const ontitle = (event) => {
        const { value } = event.target;
        setuserInfo({ ...userInfo,
            title:value
        });
    }

    const [checked1, setChecked1] = React.useState(false);

    const handleChange1 = () => {
        setChecked1(!checked1);
    };
    const [checked2, setChecked2] = React.useState(false);

    const handleChange2 = () => {
        setChecked2(!checked2);
    };
    const [checked3, setChecked3] = React.useState(false);

    const handleChange3 = () => {
        setChecked3(!checked3);
    };
    const [checked4, setChecked4] = React.useState(false);

    const handleChange4 = () => {
        setChecked4(!checked4);
    };
    const [checked5, setChecked5] = React.useState(false);

    const handleChange5 = () => {
        setChecked5(!checked5);
    };
    const [checked6, setChecked6] = React.useState(false);

    const handleChange6 = () => {
        setChecked6(!checked6);
    };
    const [checked7, setChecked7] = React.useState(false);

    const handleChange7 = () => {
        setChecked7(!checked7);
    };
    const [checked8, setChecked8] = React.useState(false);

    const handleChange8 = () => {
        setChecked8(!checked8);
    };

    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [value, setValue] = useState('');
    const api = axios.create({
        baseURL: "http://localhost:8080"
    });

    const [selectedTags, setSelectedTags] = useState([]);

    console.log(selectedTags)

    const handleAutocompleteChange = (event, values) => {
        setSelectedTags(values);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const question = {
            // questionTitle: event.target.elements.title.value,
            // questionDescription: event.target.elements.body.value,

            questionTitle: userInfo.title,
            questionDescription: userInfo.description,
            questionCode: userInfo.information,
            userID: localStorage.getItem("userId"),
            tags: selectedTags.map((tag) => tag.title),
            topics: [
                { name: "Java", selected: checked1 },
                { name: "Python", selected: checked2 },
                { name: "C", selected: checked3 },
                { name: "C++", selected: checked4 },
                { name: "HTML", selected: checked5 },
                { name: "Cloud Computing", selected: checked6 },
                { name: "SQL", selected: checked7 },
            ],
        };
        const confirmed = window.confirm("Are you sure you want to submit the form?");
        if(confirmed){
            console.log(api);
            await axios.post('http://localhost:8080/api/question/postQuestion', question)
                .then(response => {
                    setSuccess(true);
                    window.alert("Your question was posted successfully!");
                })
                .catch(error => {
                    if (error.response && error.response.status === 500) {
                        //setErrorMessage('500 response, some issue with the backend server');
                    }
                    else{
                        console.error(error);
                    }
                });
        }
    };

    return(
        <div className="jsBeginnerWantToInsertTeParent">
            <div className="AskQuestion">
                <div className="QuestionColumn">
                    <div className="AskTitle"><h2>Describe your question</h2></div>
                    <Box
                        sx={{
                            width: '100%',
                            '& > :not(style)': { m: 1, width: '90%' },
                        }}
                    >
                        <TextField
                            placeholder="Introduce the problem."
                            name="title"
                            value={userInfo.title}
                            onChange={ontitle}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            '& > :not(style)': { m: 1, width: '90%' },
                        }}
                    >
                        <TextField
                            id="outlined-multiline-static"
                            placeholder="Describe any difficulties that have prevented you from solving it yourself"
                            name="body"
                            multiline
                            value={userInfo.description}
                            onChange={ondescription}
                            rows={6}
                        />
                    </Box>
                    <h3>Additional Information and Code</h3>
                    <Box
                        sx={{
                            width: '100%',
                            '& > :not(style)': { m: 1, width: '90%' },
                        }}
                    >
                        <TextField
                            id="outlined-multiline-static"
                            placeholder="Please enter additional information and code"
                            multiline
                            value={userInfo.information}
                            onChange={oninformation}
                            rows={6}
                        />
                    </Box>
                    <h3>Select appropriate tags</h3>
                    <Stack spacing={1} sx={{ width: '91%' }}>
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={Tags}
                            getOptionLabel={(option) => option.title}
                            filterSelectedOptions
                            value={selectedTags}
                            onChange={handleAutocompleteChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Tags"
                                    placeholder="Tags"
                                />
                            )}
                        />
                    </Stack>
                    <br/>
                    <button className="button1" onKeyDown={handleSubmit}>Submit</button>

                </div>
            </div>
        </div>
    );
}