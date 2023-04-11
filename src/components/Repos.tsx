import React, { useState } from 'react';
import { TextField, Button, Typography, Stack} from '@mui/material';
import RepoList from './RepoList';
import useFetch from '../Hooks/useFetch';

const Main: React.FC = () => {

    const [ repoName, setRepoName ] = useState('');
    const [ searchText, setSearchText] = useState('');
    const [ filterText, setFilterText] = useState('');

    const searchString = `https://api.github.com/users/${repoName}/repos`;
    const { repos, error, loading, filteredRepos, filterRepos } = useFetch(searchString)

    if (loading) return <Typography variant="h2">...Loading</Typography>;

    const onClick = (event: React.MouseEvent<HTMLElement>) => {
        setRepoName(searchText);
    }

    const onChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(event.target.value);
        filterRepos(event.target.value);
    }

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSearchText(event.currentTarget.value);
    }

    return (
            <div>
            {error ? <h1>{`An error has occured: ${error}`}</h1>
                :
                <div className='header-container'>
                    <div className='header-title'>
                        <Typography variant='h2'>Git Hub Viewer</Typography>
                    </div>
                    <Stack spacing={2} direction="column">
                        <TextField 
                            id="outlined-basic" 
                            variant="outlined" 
                            className='classes.input-box' 
                            label="Repo Owner" 
                            value={searchText}
                            onChange={onChange}
                        />
                        <Button variant="outlined" onClick={onClick}>Search</Button>
                        <TextField
                            variant="outlined"
                            label="filter"
                            value={filterText}
                            onChange={onChangeFilter}
                        />
                    </Stack>
                    {filteredRepos.length > 0 ? <RepoList repos={filteredRepos} /> : <RepoList repos={repos} />} 
                </div>}
            </div>
    )
}

export default Main;