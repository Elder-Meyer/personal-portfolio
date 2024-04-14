import { ThemeProvider } from "@mui/material"
import { Router } from "./routes/Router"
import { lightTheme, darkTheme } from "./styles/ThemeMui"
import ReactGA from 'react-ga';
import { useEffect, useState } from "react";
import { CssBaseline } from '@mui/material';
import Cookies from "js-cookie";
import { CookiesDialog } from "./components/items/CookiesDialog";

const TRACKING_ID = "6395311067"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID, {debug: true});

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
  
  useEffect(() => {
    // Función para cambiar el color del meta theme color
    const changeThemeColor = () => {
      const metaThemeColor = document.querySelector("meta[name=theme-color]");
      if (metaThemeColor) {
        const colorUp = darkMode ? darkTheme.palette.background.default : lightTheme.palette.primary.light;
        const colorScrolled = darkMode ? darkTheme.palette.background.paper : lightTheme.palette.primary.light;
        metaThemeColor.setAttribute("content", window.scrollY > 0 ? colorScrolled : colorUp);
      }
    };
    // Agrega un listener para el evento de desplazamiento que llame a la función changeThemeColor
    window.addEventListener("scroll", changeThemeColor);
    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", changeThemeColor);
    };
  }, [darkMode]);

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