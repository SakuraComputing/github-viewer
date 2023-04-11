import React from 'react';
import IRepo from '../types/repo'
import { DataGrid, GridColDef } from '@mui/x-data-grid';


interface RepoListProps {
    repos: Array<IRepo>
}

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Repo Name', width: 250 },
    { field: 'stargazers_count', headerName: 'Stars', width: 30 },
    { field: 'forks', headerName: 'Forks', width: 30 },
    {
      field: 'clone_url',
      headerName: 'Repo Link',
      width: 290
    }
];

const RepoList: React.FC<RepoListProps> = ({repos}) => {
    return (
        <div className='list-container'>
            <DataGrid
                rows={repos}
                columns={columns}
                autoHeight={true}
          />
        </div>
    )
};

export default RepoList;