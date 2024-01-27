import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { Desktop } from './desktopProjects/Desktop';
import { Mobile } from './mobileProjects/Mobile';
import { Web } from './webProjects/Web';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: {xs: 0, sm: 1, md: 2} }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const isSmallScreen = useMediaQuery('(max-width:370px)');

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', /* border: "3px solid blue" */ }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
            value={value} 
            onChange={handleChange} 
            variant={isSmallScreen ? 'scrollable' : 'fullWidth'}
            scrollButtons
            allowScrollButtonsMobile
            aria-label="basic tabs example" 
            sx={{
                '& .MuiTabs-indicator': {
                    backgroundColor: 'primary.light',
                },
            }}
        >
            <Tab 
                label="Web" {...a11yProps(0)} 
                sx={{
                  '&:hover': {
                      color: 'primary.light',
                  },
                  '&.Mui-selected': {
                      color: 'primary.light',
                  },
                  color: "text.primary",
              }}
            />
            <Tab 
                label="Mobile" {...a11yProps(1)} 
                sx={{
                    '&:hover': {
                        color: 'primary.light',
                    },
                    '&.Mui-selected': {
                        color: 'primary.light',
                    },
                    color: "text.primary",
                }}
            />
            <Tab 
                label="Desktop" {...a11yProps(2)} 
                sx={{
                  '&:hover': {
                      color: 'primary.light',
                  },
                  '&.Mui-selected': {
                      color: 'primary.light',
                  },
                  color: "text.primary",
              }}
            />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Web/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Mobile/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Desktop/>
      </TabPanel>
    </Box>
  );
}