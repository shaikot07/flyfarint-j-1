
import React, { useState, useRef, useCallback } from 'react';
import { Box, Grid, Typography, TextField, Autocomplete, Button } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Adapter for date-fns
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
const locations = [
    { label: 'Rome, Italy' },
    { label: 'Paris, France' },
    { label: 'Berlin, Germany' },
    { label: 'Tokyo, Japan' },
    { label: 'Sydney, Australia' },
    { label: 'New York, USA' },

];
const tourLocations = [
    { label: 'Tourist Visa' },
    { label: 'Business Visa' },
    { label: 'Student Visa' },
    { label: 'Work Visa' },
    { label: 'Transit Visa' },
    
];

const Visa = () => {
    const [selectedLocation, setSelectedLocation] = useState(locations[1]);
    const [selectedLocations, setSelectedLocations] = useState(tourLocations[1]);
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
                        <Typography variant="subtitle1" color="textSecondary">
                        
                        DESTINATION CITY OR COUNTRY
                        </Typography>
                        <Typography variant="h6" color="#32D095">
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
                                    placeholder="International"
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
                                                <TravelExploreIcon sx={{
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

                    {/* first Check In Section with DatePicker....... */}
                    <Grid item xs={12} sm={3} style={{ background: '#fff', marginTop: '10px', }}>
                        
                    </Grid>

                    {/* Check Out Section with DatePicker */}
                    <Grid item xs={12} sm={3} style={{ borderTopRightRadius: '10px', borderBottomRightRadius: '10px', background: '#fff', marginTop: '10px', }}>
                        <Typography variant="subtitle1" color="textSecondary">
                        
                        SELECT VISA TYPE
                        </Typography>
                        <Typography variant="h6" color="#32D095">
                            {selectedLocations ? selectedLocations.label : 'Rome,Vasnis'}
                        </Typography>
                        <Autocomplete
                            options={tourLocations}
                            getOptionLabel={(option) => option.label}
                            value={selectedLocations}
                            onChange={(event, newValue) => setSelectedLocations(newValue)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    size="small"
                                    placeholder="Bangladesh (BD)"
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

                        <Button type="button" variant="contained" fullWidth sx={{ backgroundColor: '#32D095', color: '#fff', mt: 2, mb: '1px' }}>
                            SEARCH FOR HOTEL
                        </Button>
                        <Button type="button" variant="contained" fullWidth sx={{ backgroundColor: '#32D095', color: '#fff', mt: 2, mb: 2 }}>
                            SEARCH FOR HOTEL
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </LocalizationProvider>
    );
};

export default Visa;