import React, { useState, useRef, useCallback } from 'react';
import { Box, Grid, Typography, TextField, Autocomplete, Button } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; // Adapter for date-fns

const locations = [
    { label: 'Dhaka, Bangladesh' },
    { label: 'Chittagong, Bangladesh' },
    { label: 'Sylhet, Bangladesh' },
    { label: 'Khulna, Bangladesh' },
    { label: 'Barisal, Bangladesh' },
    { label: 'Rajshahi, Bangladesh' },
    { label: 'Cox\'s Bazar, Bangladesh' },
];

const SearchSection = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
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
                    <Grid item xs={12} sm={3} style={{background:'#fff', marginTop:'10px', borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}>
                        <Typography variant="subtitle1" color="textSecondary">
                            DESTINATION
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

                    {/* first Check In Section with DatePicker....... */}
                    <Grid item xs={12} sm={3} style={{background:'#fff', marginTop:'10px'}}>
                        <Typography variant="subtitle1" color="textSecondary">
                            CHECK IN
                        </Typography>
                        <Typography
                            variant="h6"
                            color="#32D095"
                            sx={{

                                marginBottom: '10px',    // Adds margin to the bottom


                            }}
                        >
                            {checkInDate ? checkInDate.toLocaleDateString() : currentDate}
                        </Typography>
                        <DatePicker
                            value={checkInDate}
                            onChange={handleCheckInDateChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <CalendarTodayIcon color="primary" sx={{ mr: 1 }} />
                                            </Box>
                                        ),
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: '#32D095', // Custom background color
                                            borderRadius: '8px', // Custom border radius
                                            '& fieldset': {
                                                border: 'none', // Remove the border from the fieldset
                                            },
                                            '&:hover fieldset': {
                                                border: 'none', // Ensure no border on hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: 'none', // Ensure no border when focused
                                            },
                                            '&.Mui-disabled fieldset': {
                                                border: 'none', // Ensure no border when disabled
                                            },
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '12px', // Custom padding for the input field
                                            color: '#000', // Custom text color
                                        },
                                    }}
                                />




                            )}
                        />

                    </Grid>

                    {/* Check Out Section with DatePicker */}
                    <Grid item xs={12} sm={3} style={{   borderTopRightRadius:'10px', borderBottomRightRadius:'10px', background:'#fff', marginTop:'10px', }}  >
                        <Typography variant="subtitle1" color="textSecondary">
                            CHECK OUT
                        </Typography>
                        <Typography variant="h6" color="#32D095" sx={{

                            marginBottom: '10px',    // Adds margin to the bottom


                        }}>
                            {checkOutDate ? checkOutDate.toLocaleDateString() : currentDate}
                        </Typography>
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

                    {/* Guests & Rooms Section */}
                    <Grid item xs={12} sm={3} style={{ paddingRight:'5px',marginLeft:'0px', background:'#fff', marginTop:'10px', borderRadius:'10px'}}>
                        <Typography variant="subtitle1" color="textSecondary">
                            Guests & Rooms
                        </Typography>
                        <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            value="1 ROOM, 1 GUEST, 1 ADULT"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#D7E7F4', // Custom background color
                                    borderRadius: '8px', // Custom border radius
                                    '& fieldset': {
                                        border: 'none', // Remove the border from the fieldset
                                    },
                                    '&:hover fieldset': {
                                        border: 'none', // Ensure no border on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: 'none', // Ensure no border when focused
                                    },
                                    '&.Mui-disabled fieldset': {
                                        border: 'none', // Ensure no border when disabled
                                    },
                                },
                                '& .MuiOutlinedInput-input': {
                                    padding: '5px', // Custom padding for the input field
                                    color: '#000', // Custom text color
                                },
                                '& .MuiOutlinedInput-input': {
                                    padding: '10px', // Custom padding for the input field
                                    fontSize: '12px', // Custom font size
                                    color: '#000', // Custom text color
                                  },
                            }}
                        />
                        <Button type="button" variant="contained" fullWidth sx={{ backgroundColor: '#32D095', color: '#fff', mt: 2, mb:2 }}>
                            SEARCH FOR HOTEL
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </LocalizationProvider>
    );
};

export default SearchSection;
