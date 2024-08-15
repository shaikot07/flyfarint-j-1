import { Autocomplete, Grid, TextField, Typography } from '@mui/material';
import  { useCallback, useRef, useState } from 'react'; 
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const locations = [
    { label: 'Dhaka, Bangladesh' },
    { label: 'Chittagong, Bangladesh' },
    { label: 'Sylhet, Bangladesh' },
    { label: 'Khulna, Bangladesh' },
    { label: 'Barisal, Bangladesh' },
    { label: 'Rajshahi, Bangladesh' },
    { label: 'Cox\'s Bazar, Bangladesh' },
];

const Class = () => {
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
        <div>
            <Grid item xs={12} sm={3} style={{ background: '#fff', marginTop: '0px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}> 
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
                                    width:'245px',
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
        </div>
    );
};

export default Class;