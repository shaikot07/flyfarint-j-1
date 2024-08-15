import { Box, Grid } from '@mui/material';
import React from 'react';

const HotelInfo = () => {
    return (
        <div>
            <Box>
            <Grid container spacing={2} 
            sx={{background:'white'}} >
                <Grid item xs={8}>
                    <div> 
                        
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div>4</div>
                </Grid>
                
            </Grid>
            </Box>
        </div>
    );
};

export default HotelInfo;