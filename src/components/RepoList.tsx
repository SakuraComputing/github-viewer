import React from 'react';
import IRepo from '../types/repo'

interface RepoListProps {
    repos: Array<IRepo>
}

const RepoList: React.FC<RepoListProps> = ({repos}) => {
    return (
        <div>
            {repos.map((repo) => <div>{repo.name}</div>)}
        </div>
    )
};

export default RepoList;