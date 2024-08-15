import React from 'react';
import { Box } from '@mui/material';

const PlaneIcon = () => {
    return (
        <Box sx={{ width: '100px', height: '70px', marginLeft:'40px',  textAlign: 'center' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="100%"
                height="100%"
                fill="#32D095" // Set your desired color here
            >
                {/* Plane icon path */}
                <path
                    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                    transform="rotate(90 12 12)" // Rotates the icon 45 degrees around the center
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="100%"
                height="100%"
                fill="none" // No fill, just the stroke
                stroke="#32D095" // Set your desired stroke color here
                strokeWidth="1"// Set your desired color here
                
            >
                {/* Plane icon path */}
                <path
                    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                    transform="rotate(-90 12 12)" // Rotates the icon 45 degrees around the center
                />
            </svg>
        </Box>
    );
};

export default PlaneIcon;
