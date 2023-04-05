import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Main: React.FC = () => {

    const [ repoName, setRepoName ] = useState('nodejs');

    useEffect(() => {
        fetch(`https://api.github.com/users/${repoName}/repos`)
        .then(response => response.json())
        .then(data => {
            console.log(data) 
        })
        .catch(error => console.error(error))
    }, [])

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setRepoName(event.currentTarget.value)
    }

    return (
        <div className='header-container'>
        <div className='header-title'>
            <Typography variant='h2'>Git Hub Viewer</Typography>
        </div>
        <div>
            <TextField 
                id="outlined-basic" 
                variant="outlined" 
                className='classes.input-box' 
                label="Repo Owner" 
                value={repoName}
                onChange={onChange}
            />
        </div>
        <div>
            <Button>Search</Button>
        </div>
    </div>
    )
}

export default Main;