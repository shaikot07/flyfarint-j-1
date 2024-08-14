
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const NavBar = () => {
    return (
        <div className='bg-[#EDF2F6] '>
            <Box sx={{ flexGrow: 1, backgroundColor: '#EDF2F6', }}>
                <div className='max-w-6xl mx-auto'>
                    <AppBar position="static" sx={{ backgroundColor: '#EDF2F6' }} elevation={0}>
                        <Toolbar>
                            <Box sx={{ flexGrow: 1 }}>
                                <img
                                    src="https://i.ibb.co/KzWRfm4/companylogo-1.png" // Logo URL
                                    alt="Logo"
                                    style={{ width: '150px', height: '100%', marginRight: '10px' }} 
                                />
                            </Box>
                            
                            <Button
                                sx={{
                                    backgroundColor: '#525371',
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#357ABD',
                                    },
                                    padding: '5px 20px',
                                    borderRadius: '20px',
                                }}
                            >
                                LOG IN / SIGN UP
                            </Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </Box>
        </div>
    );
};

export default NavBar;