import { ThemeProvider } from "@mui/material"
import { Router } from "./routes/Router"
import { lightTheme, darkTheme } from "./styles/ThemeMui"
import ReactGA from 'react-ga';
import { useEffect, useState } from "react";
const TRACKING_ID = "6395311067"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID, {debug: true});
import { CssBaseline } from '@mui/material';
import Cookies from "js-cookie";
import { CookiesDialog } from "./components/items/CookiesDialog";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  const handleChangeTheme = () => { 
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    Cookies.set('darkMode', newDarkMode.toString(), { expires: 365 });
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
      <CookiesDialog/>
    </ThemeProvider>
  )
}

export default App