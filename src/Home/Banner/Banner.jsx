import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DomainIcon from '@mui/icons-material/Domain';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import HotelInfo from '../../Component/ParentTab/Hotel/HotelInfo';
import SearchSection from '../../Component/SearchSection';
import TourInfo from '../../Component/ParentTab/Tour/TourInfo';
import Flight from '../../Component/ParentTab/Flight/Flight';
import Visa from '../../Component/ParentTab/Visa/Visa';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div className=' max-w-[1200px] mx-auto mt-5 min-h-60'
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
        <Box sx={{ width: '100%', marginX: 'auto', marginTop: '100px', marginBottom: '50px', position:'fixed' }}>
            <Box sx={{ width: '50%', margin: 'auto', background: 'white', borderRadius: '50px', height: '51px' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="icon position tabs example"
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
                        icon={<FlightTakeoffIcon sx={{ color: value === 0 ? '#ff' : '#525371' }} />} // Apply color directly to the icon
                        iconPosition="start"
                        label="FLIGHT"
                        {...a11yProps(0)}
                        sx={{
                            backgroundColor: value === 0 ? '#32D095' : 'transparent',
                            color: value === 0 ? '#fff' : 'inherit',
                            marginTop: '5px',
                            height: '10px', // Set fixed height
                            minHeight: '40px',
                            width: '120px', // Set fixed width
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50px',
                            '&.Mui-selected': {
                                backgroundColor: '#32D095', // Set background color for selected tab
                                color: '#fff', // Set text color for selected tab
                                borderBottom: 'none', // Remove bottom border
                            },
                            '&:not(.Mui-selected)': {
                                borderBottom: 'none', // Ensure bottom border is removed for non-selected tabs
                                color: '#32D095'
                            },
                            // Ensure icons are always visible
                            '& .MuiTab-icon': {
                                color: '#fff', // Ensure the icon color is consistent
                            },
                        }}
                    />
                    <Tab
                        label="HOTEL"
                        icon={<DomainIcon sx={{ color: value === 1 ? '#fff' : '#525371' }} />} // Apply conditional color to the icon
                        iconPosition="start"
                        {...a11yProps(1)}
                        sx={{
                            backgroundColor: value === 1 ? '#32D095' : 'transparent',
                            color: value === 1 ? '#fff' : '#32D095', // Set text color based on selection
                            marginTop: '5px',
                            height: '40px', // Set fixed height
                            minHeight: '40px',
                            width: '120px', // Set fixed width
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50px',
                            '&.Mui-selected': {
                                backgroundColor: '#32D095', // Set background color for selected tab
                                color: '#fff', // Set text color for selected tab
                                borderBottom: 'none', // Remove bottom border
                            },
                            '&:not(.Mui-selected)': {
                                borderBottom: 'none', // Ensure bottom border is removed for non-selected tabs
                                color: '#32D095', // Set text color for non-selected tab
                            },
                            // Ensure icons are always visible
                            '& .MuiTab-icon': {
                                color: value === 1 ? '#fff' : '#525371', // Ensure icon color changes based on selection
                            },
                        }}
                    />

                    <Tab
                        label="TOUR"
                        icon={<TravelExploreIcon sx={{ color: value === 2 ? '#fff' : '#525371' }} />} // Apply conditional color to the icon
                        iconPosition="start"
                        {...a11yProps(2)}
                        sx={{
                            backgroundColor: value === 2 ? '#32D095' : 'transparent',
                            color: value === 2 ? '#fff' : '#32D095', // Set text color based on selection
                            marginTop: '5px',
                            height: '40px', // Set fixed height
                            minHeight: '40px',
                            width: '120px', // Set fixed width
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50px',
                            '&.Mui-selected': {
                                backgroundColor: '#32D095', // Set background color for selected tab
                                color: '#fff', // Set text color for selected tab
                                borderBottom: 'none', // Remove bottom border
                            },
                            '&:not(.Mui-selected)': {
                                borderBottom: 'none', // Ensure bottom border is removed for non-selected tabs
                                color: '#32D095', // Set text color for non-selected tab
                            },
                            '& .MuiTab-icon': {
                                color: value === 2 ? '#fff' : '#525371', // Ensure icon color changes based on selection
                            },
                        }}
                    />
                    <Tab
                        label="VISA"
                        icon={<AirplaneTicketIcon sx={{ color: value === 3 ? '#fff' : '#525371' }} />} // Apply conditional color to the icon
                        iconPosition="start"
                        {...a11yProps(3)}
                        sx={{
                            backgroundColor: value === 3 ? '#32D095' : 'transparent',
                            color: value === 3 ? '#fff' : '#32D095', // Set text color based on selection
                            marginTop: '5px',
                            height: '40px', // Set fixed height
                            minHeight: '40px',
                            width: '120px', // Set fixed width
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50px',
                            '&.Mui-selected': {
                                backgroundColor: '#32D095', // Set background color for selected tab
                                color: '#fff', // Set text color for selected tab
                                borderBottom: 'none', // Remove bottom border
                            },
                            '&:not(.Mui-selected)': {
                                borderBottom: 'none', // Ensure bottom border is removed for non-selected tabs
                                color: '#32D095', // Set text color for non-selected tab
                            },
                            // Ensure icons are always visible
                            '& .MuiTab-icon': {
                                color: value === 3 ? '#fff' : '#525371', // Ensure icon color changes based on selection
                            },
                        }}
                    />

                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
               <Flight></Flight>
               {/* <FlightSearchTabs></FlightSearchTabs> */}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
               {/* <HotelInfo></HotelInfo> */}
               <SearchSection></SearchSection>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               <TourInfo></TourInfo>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Visa></Visa>
            </CustomTabPanel>
        </Box>
    );
}
