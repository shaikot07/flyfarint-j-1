import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Box, Typography } from '@mui/material';
import ChildTab from '../../ChildTab/ChildTab';
import CircleIcon from '@mui/icons-material/Circle';
import OneWay from '../../ChildTab/OneWay/OneWay';

const Flight = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ background: '#fff', p: 0, marginTop:'0px', }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example"
                TabIndicatorProps={{ style: { display: 'none' } }} // Remove underline
            >
                <Tab
                    icon={<CircleIcon />}
                    label="ROUND-WAY"
                    sx={{
                        flexDirection: 'row',
                        '& .MuiTab-wrapper': {
                            color: value === 0 ? '#32D095' : '#32D095', // Customize label text color
                        },
                        '& .MuiTab-iconWrapper': {
                            color: value === 0 ? '#32D095' : 'inherit', // Customize icon color
                        },
                    }}
                />
                <Tab
                    icon={<CircleIcon/>}
                    label="ONE-WAY"
                    sx={{
                        flexDirection: 'row',
                        '& .MuiTab-wrapper': {
                            color: value === 1 ? '#32D095' : 'inherit', // Customize label text color
                        },
                        '& .MuiTab-iconWrapper': {
                            color: value === 1 ? '#32D095' : 'inherit', // Customize icon color
                        },
                    }}
                />
                <Tab
                    icon={<CircleIcon />}
                    label="MULTI-CITY"
                    sx={{
                        flexDirection: 'row',
                        '& .MuiTab-wrapper': {
                            color: value === 2 ? '#32D095' : 'inherit', // Customize label text color
                        },
                        '& .MuiTab-iconWrapper': {
                            color: value === 2 ? '#32D095' : 'inherit', // Customize icon color
                        },
                    }}
                />
            </Tabs>
            <Box sx={{ p: 2 }}>
                {value === 0 && (
                    <ChildTab></ChildTab>
                )}
                {value === 1 && (
                    <OneWay></OneWay>
                )}
                {value === 2 && (
                    <OneWay></OneWay>
                )}
            </Box>
        </Box>
    );
};

export default Flight;
