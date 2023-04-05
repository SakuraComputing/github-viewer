import React from 'react';

interface IRepo {
    repo: string
}

const RepoList = ({repo}:IRepo ) => {
    return (
        <div>
            {repo}
        </div>
    )
};

export default RepoList;