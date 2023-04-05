import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import RepoList from './RepoList';
import IRepos from '../types/repo';

const Main: React.FC = () => {

    const [ repoName, setRepoName ] = useState('nodejs');
    const [ repos, setRepos ] = useState<Array<IRepos>>([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${repoName}/repos`)
        .then(response => response.json())
        .then(repos => {
            console.log(repos)
            setRepos(repos)
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
            {repos.length}
            <RepoList repos={repos} />
        </div>
    )
}

export default Main;