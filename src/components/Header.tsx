import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Header: React.FC = () => {
    return (
        <div className='header-container'>
            <div className='header-title'>
                <Typography variant='h2'>Git Hub Viewer</Typography>
            </div>
            <div>
                <TextField id="outlined-basic" variant="outlined" className='classes.input-box' label="Repo Name"/>
            </div>
            <div>
                <Button>Search</Button>
            </div>
        </div>
    )
}
export default Header;