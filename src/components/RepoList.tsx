import React from 'react';
import IRepo from '../types/repo'
import { DataGrid, GridColDef } from '@mui/x-data-grid';


interface RepoListProps {
    repos: Array<IRepo>
}

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Repo Name', width: 250 },
    { field: 'full_name', headerName: 'Owner', width: 150 },

    {
      field: 'clone_url',
      headerName: 'Repo Link',
      width: 290,
      renderCell: (params) => 
      <a href={`${params.row.clone_url}`} target='_blank' rel="noreferrer">{params.row.clone_url}</a>,
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