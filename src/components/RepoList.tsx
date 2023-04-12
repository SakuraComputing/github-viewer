import React from 'react';
import IRepo from '../types/repo'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface RepoListProps {
    repos: Array<IRepo>
}

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Repo Name', width: 250 },
    { field: 'full_name', headerName: 'Owner', width: 150 },
    { field: 'forks', headerName: 'Forks', width: 30 },
    { field: 'stargazers_count', headerName: 'Stars', width: 30 },
    { field: 'open_issues_count', headerName: 'Issues', width: 30 },

    {
      field: 'clone_url',
      headerName: 'Repo Link',
      width: 290,
      renderCell: (params) => 
      <a href={`${params.row.clone_url}`} target='_blank' rel="noreferrer">{params.row.clone_url}</a>,
    },
    {
        field: "click",
        headerName: "ReadMe",
        width: 90,
        renderCell: (params) => 
        <a href={`https://github.com/nodejs/abi-stable-node/blob/doc/README.md`}>Read Me</a>
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