import { ThemeProvider } from "@mui/material"
import { Router } from "./routes/Router"
import { lightTheme } from "./styles/ThemeMui"
import ReactGA from 'react-ga';
const TRACKING_ID = "6395311067"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID, {debug: true});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <meta name="theme-color" content={lightTheme.palette.background.default} />
      <Router/>
    </ThemeProvider>
  )
}

export default App
