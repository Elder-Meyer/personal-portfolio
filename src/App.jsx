import { ThemeProvider } from "@mui/material"
import { Router } from "./routes/Router"
import { lightTheme, darkTheme } from "./styles/ThemeMui"
import ReactGA from 'react-ga';
import { useEffect, useState } from "react";
const TRACKING_ID = "6395311067"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID, {debug: true});
import { CssBaseline } from '@mui/material';
import Cookies from "js-cookie";

import Stack from '@mui/material/Stack';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CookieOutlined } from "@mui/icons-material";
import Slide from '@mui/material/Slide';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [bannerOpen, setBannerOpen] = useState(true);
  
  const handleChangeTheme = () => { 
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    Cookies.set('darkMode', newDarkMode.toString(), { expires: 365 });
  };

  const closeBanner = () => {
    setBannerOpen(false);
  };

  useEffect(() => {
    const darkModeCookie = Cookies.get('darkMode');
    if (darkModeCookie !== undefined) {
      setDarkMode(darkModeCookie === 'true');
    }
  }, [])
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme/>
      <meta name="theme-color" content={darkMode ? darkTheme.palette.background.default : lightTheme.palette.primary.main } />
      <Router darkMode={darkMode} handleChangeTheme={handleChangeTheme}/>
      <TrapFocus open disableAutoFocus disableEnforceFocus>
        <Slide direction="up" appear={false} in={bannerOpen}>
          <Paper
            elevation={4}
            role="dialog"
            aria-modal="false"
            aria-label="Cookie banner"
            tabIndex={-1}
            sx={{
              position: 'fixed',
              width: { sm : "auto", md: 526},
              bottom: { xs: 0, sm: 0, md:30},
              right: { xs: 0, sm: 0, md:30},
              left: { xs: 0, sm: 0, md: "auto" },
              m: {xs: 1, sm: 2, md: 3},
              p: 3,
              borderWidth: 2,
              borderColor: "divider",
              zIndex :100,
            }}
          >
            <Stack
              direction={"column"}
              justifyContent="center"
              gap={2}
            >
              <Box>
                <CookieOutlined fontSize="large" sx={{mb:1}}/>
                <Typography fontWeight="bold">This website uses cookies</Typography>
                <Typography variant="body2">
                  To improve your experience this website use cookies
                </Typography>
              </Box>
              
              <Button size="small" onClick={closeBanner} variant="contained">
                Allow all
              </Button>
              
            </Stack>
          </Paper>
        </Slide>
      </TrapFocus>
    </ThemeProvider>
  )
}

export default App