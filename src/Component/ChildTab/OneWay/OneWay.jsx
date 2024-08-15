import React from 'react';
import { useState, useRef, useCallback } from 'react';
import { Box, Grid, Typography, TextField, Autocomplete, Button } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Adapter for date-fns

import PlaneIcon from '../../PlaneIcon';
import GroupSelection from '../../GroupSelection';
import Class from '../../Class';
import PlenOne from '../../PlenOne';

const locations = [
    { label: 'Dhaka' },
    { label: 'Chittagong' },
    { label: 'Sylhet' },
    { label: 'Khulna' },
    { label: 'Barisal' },
    { label: 'Rajshahi' },
    { label: 'Cox Bazar' },
];

const OneWay = () => {
    const [selectedLocation, setSelectedLocation] = useState(locations[0]);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    // Create a ref for the second DatePicker
    const checkOutDateRef = useRef(null);

    // Get current date
    const currentDate = new Date().toLocaleDateString();

    // Memoize the handler to avoid unnecessary re-renders
    const handleCheckInDateChange = useCallback((newValue) => {
        setCheckInDate(newValue);
        // Focus the second DatePicker when the first one changes
        if (checkOutDateRef.current) {
            checkOutDateRef.current.focus();
        }
    }, []);
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box sx={{ padding: '10px', borderRadius: 2, backgroundColor: '' }}>
                <Grid container spacing={2}  >
                    {/* Destination Section */}
                    <Grid item xs={12} sm={3} style={{ background: '#fff', marginTop: '10px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                        <Typography variant="subtitle1" color="textSecondary" textAlign="center">
                            FROM
                        </Typography>
                        <Typography variant="h5" color="#32D095" textAlign="center">
                            {selectedLocation ? selectedLocation.label : 'Select Location'}
                        </Typography>
                        <Autocomplete
                            options={locations}
                            getOptionLabel={(option) => option.label}
                            value={selectedLocation}
                            onChange={(event, newValue) => setSelectedLocation(newValue)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    size="small"
                                    placeholder="Choose Location"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: '#D7E7F4', // Set background color to pink
                                            border: 'none', // Remove border
                                            marginTop: '15px',
                                            '&.Mui-focused': {
                                                border: 'none', // Ensure no border on focus
                                            },
                                            '& .MuiInputBase-input': {
                                                padding: '0px',
                                            },
                                            '&.MuiInputBase-sizeSmall': {
                                                paddingTop: '0px',
                                                paddingBottom: '0px',
                                                paddingLeft: '0px',
                                            },
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none', // Remove the outline when the field is not focused
                                        },
                                    }}
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <>
                                                <LocationOnOutlinedIcon sx={{
                                                    color: 'white',
                                                    // backgroundColor: '#32D095', // Set your background color here
                                                    backgroundColor: '#32D095', // Set your background color here
                                                    borderTopLeftRadius: '5px', // Set border radius for the top-left corner
                                                    borderBottomLeftRadius: '5px', // Set border radius for the bottom-left corner
                                                    borderTopRightRadius: '0px', // Optional: ensure no radius for the top-right corner
                                                    borderBottomRightRadius: '0px', // Optional: ensures no radius for the bottom-right corner
                                                    paddingX: '0px',
                                                    fontSize: '2rem',
                                                    
                                                    mr: 1,
                                                }} />
                                                {params.InputProps.startAdornment}
                                            </>
                                        ),
                                        endAdornment: null, // Remove the end adornment icon
                                    }}
                                />


                            )}
                        />
                        <DatePicker
                            value={checkOutDate}
                            onChange={(newValue) => setCheckOutDate(newValue)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    ref={checkOutDateRef}
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <CalendarTodayIcon
                                                color="pink"
                                                sx={{
                                                    mr: 1, // Margin-right
                                                    width:'200px'

                                                }}
                                            />
                                        ),
                                        sx: {
                                            '& .MuiInputBase-input': {
                                                paddingLeft: '0px',
                                                paddingRight: '8px',

                                            },
                                            '& .MuiOutlinedInput-root': {
                                                paddingLeft: '0px',
                                            },
                                        },
                                    }}
                                    value={params.inputProps.value}
                                />
                            )}
                        />
                    </Grid>

                    {/* first Check In Section with DatePicker....... */}
                    <Grid item xs={12} sm={3} style={{ background: '#fff', marginTop: '10px', paddingLeft: '25px', alignItems: 'center' }}>
                        <PlenOne></PlenOne>


                    </Grid>

                    {/* Check Out Section with DatePicker */}
                    <Grid item xs={12} sm={3} style={{ background: '#fff', marginTop: '10px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }}>
                        <Typography variant="subtitle1" color="textSecondary" textAlign="center">
                            FROM
                        </Typography>
                        <Typography variant="h5" color="#32D095" textAlign="center">
                            {selectedLocation ? selectedLocation.label : 'Select Location'}
                        </Typography>
                        <Autocomplete
                            options={locations}
                            getOptionLabel={(option) => option.label}
                            value={selectedLocation}
                            onChange={(event, newValue) => setSelectedLocation(newValue)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    size="small"
                                    placeholder="Choose Location"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: '#D7E7F4', // Set background color to pink
                                            border: 'none', // Remove border
                                            marginTop: '15px',
                                            '&.Mui-focused': {
                                                border: 'none', // Ensure no border on focus
                                            },
                                            '& .MuiInputBase-input': {
                                                padding: '0px',
                                            },
                                            '&.MuiInputBase-sizeSmall': {
                                                paddingTop: '0px',
                                                paddingBottom: '0px',
                                                paddingLeft: '0px',
                                            },
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none', // Remove the outline when the field is not focused
                                        },
                                    }}
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <>
                                                <LocationOnOutlinedIcon sx={{
                                                    color: 'white',
                                                    backgroundColor: '#32D095', // Set your background color here
                                                    borderTopLeftRadius: '5px', // Set border radius for the top-left corner
                                                    borderBottomLeftRadius: '5px', // Set border radius for the bottom-left corner
                                                    borderTopRightRadius: '0px', // Optional: ensure no radius for the top-right corner
                                                    borderBottomRightRadius: '0px', // Optional: ensures no radius for the bottom-right corner
                                                    paddingX: '0px',
                                                    fontSize: '2rem',
                                                    mr: 1,
                                                }} />
                                                {params.InputProps.startAdornment}
                                            </>
                                        ),
                                        endAdornment: null, // Remove the end adornment icon
                                    }}
                                />


                            )}
                        />
                        
                    </Grid>

                    {/* Guests & Rooms Section */}
                    <Grid item xs={12} sm={3} style={{ paddingRight: '5px', marginLeft: '0px', background: '#fff', marginTop: '10px', borderRadius: '10px' }}>
                        
                        <GroupSelection></GroupSelection>
                        <Class></Class>
                        <Button type="button" variant="contained" fullWidth sx={{ backgroundColor: '#32D095', color: '#fff', mt: 2, mb: 2 }}>
                            SEARCH FOR HOTEL
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </LocalizationProvider>
    );
};

export default OneWay;