import { ThemeProvider } from "@mui/material"
import { Router } from "./routes/Router"
import { lightTheme } from "./styles/ThemeMui"
import ReactGA from 'react-ga';
const TRACKING_ID = "6395311067"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID, {debug: true});

console.log("welcome to my portfolio")

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router/>
    </ThemeProvider>
  )
}

export default App
