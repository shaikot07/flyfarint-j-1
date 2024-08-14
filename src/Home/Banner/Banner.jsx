import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div className='bg-yellow-300 w-full mt-5'
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', marginX: 'auto', marginTop:'50px',marginBottom:'50px'}}>
            <Box sx={{ width: '50%', margin: 'auto', background: 'pink', borderRadius: '50px', paddingY:'4px',  }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        '& .MuiTabs-flexContainer': { justifyContent: 'space-around' },
                        '& .MuiTabs-indicator': {
                            display: 'none', // Hide the default indicator
                        },
                    }}
                >
                    <Tab
                        label="FLIGHT"
                        {...a11yProps(0)}
                        sx={{
                            backgroundColor: value === 0 ? '#32D095' : 'transparent',
                            color: value === 0 ? '#fff' : 'inherit',
                            paddingX: '30px', // Add padding X
                            paddingY: '0px', // Add padding Y
                            borderRadius:'50px',
                            '&.Mui-selected': {
                                backgroundColor: '#32D095', // Set background color for selected tab
                                color: '#fff', // Set text color for selected tab
                                borderBottom: 'none', // Remove bottom border
                            },
                            '&:not(.Mui-selected)': {
                                borderBottom: 'none', // Ensure bottom border is removed for non-selected tabs
                            }
                        }}
                    />
                    <Tab
                        label="HOTEL"
                        {...a11yProps(1)}
                        sx={{
                            backgroundColor: value === 1 ? '#32D095' : 'transparent',
                            color: value === 1 ? '#fff' : 'inherit',
                            paddingX: '30px', // Add padding X
                            paddingY: '1px', // Add padding Y
                            borderRadius:'50px',
                            '&.Mui-selected': {
                                backgroundColor: '#32D095', // Set background color for selected tab
                                color: '#fff', // Set text color for selected tab
                                borderBottom: 'none', // Remove bottom border
                            },
                            '&:not(.Mui-selected)': {
                                borderBottom: 'none', // Ensure bottom border is removed for non-selected tabs
                            }
                        }}
                    />
                    <Tab
                        label="TOUR"
                        {...a11yProps(2)}
                        sx={{
                            backgroundColor: value === 2 ? '#32D095' : 'transparent',
                            color: value === 2 ? '#fff' : 'inherit',
                            paddingX: '30px', // Add padding X
                            paddingY: '1px', // Add padding Y
                            borderRadius:'50px',
                            '&.Mui-selected': {
                                backgroundColor: '#32D095', // Set background color for selected tab
                                color: '#fff', // Set text color for selected tab
                                borderBottom: 'none', // Remove bottom border
                            },
                            '&:not(.Mui-selected)': {
                                borderBottom: 'none', // Ensure bottom border is removed for non-selected tabs
                            }
                        }}
                    />
                    <Tab
                        icon={<PhoneMissedIcon />} iconPosition="start"
                        label="VISA"
                        {...a11yProps(3)}
                        sx={{
                            backgroundColor: value === 3 ? '#32D095' : 'transparent',
                            color: value === 2 ? '#fff' : 'inherit',
                            paddingX: '30px', // Add padding X
                            paddingY: '1px', // Add padding Y
                            borderRadius:'50px',
                            '&.Mui-selected': {
                                backgroundColor: '#32D095', // Set background color for selected tab
                                color: '#fff', // Set text color for selected tab
                                borderBottom: 'none', // Remove bottom border
                            },
                            '&:not(.Mui-selected)': {
                                borderBottom: 'none', // Ensure bottom border is removed for non-selected tabs
                            }
                        }}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                Flight
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Hotel
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                tour
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                visa
            </CustomTabPanel>
        </Box>
    );
}
