import React from 'react';
import NavBar from './NavBar/NavBar';
import Banner from './Banner/Banner';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* <div className="bg-[url('https://i.ibb.co/4KfXjMK/mainbannerimg.jpg')] bg-cover bg-center max-w-6xl mx-auto min-h-7">
          <Banner></Banner>
          </div> */}
            <Box sx={{ position: 'relative', maxWidth: '1300px', margin: 'auto', height: '500px' }}>
                {/* Background Image */}
                <Box
                    sx={{
                        backgroundImage: `url('https://i.ibb.co/4KfXjMK/mainbannerimg.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        paddingX:'25px',
                        paddingY:'20px'
                    }}
                />

                {/* Overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Overlay with opacity
                        zIndex: 2,
                    }}
                />

                {/* Content */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 3, 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        color: 'white',
                    }}
                >
                    <Banner></Banner>
                </Box>
            </Box>
        </div>
    );
};

export default Home;