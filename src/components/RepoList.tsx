import React from 'react';
import IRepo from '../types/repo'

interface RepoListProps {
    repos: Array<IRepo>
}

const RepoList: React.FC<RepoListProps> = ({repos}) => {
    return (
        <div className='list-container'>
            {repos.length > 0 && repos.map((repo) => {
                return (
                    <div className='wrapper'>
                        <div>{repo.name}</div>
                        <div>{repo.stars}</div>
                        <div>{repo.forks}</div>
                    </div>
                )
            })}
        </div>
    )
};

export default RepoList;