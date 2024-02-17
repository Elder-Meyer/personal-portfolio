import { ThemeProvider } from "@mui/material"
import { Router } from "./routes/Router"
import { lightTheme, darkTheme } from "./styles/ThemeMui"
import ReactGA from 'react-ga';
import { useState } from "react";
const TRACKING_ID = "6395311067"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID, {debug: true});
import { CssBaseline } from '@mui/material';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const handleChangeTheme = () => { setDarkMode(!darkMode); };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme/>
      <meta name="theme-color" content={darkMode ? darkTheme.palette.background.default : lightTheme.palette.primary.main } />
      <Router darkMode={darkMode} handleChangeTheme={handleChangeTheme}/>
    </ThemeProvider>
  )
}

export default App
