import { ThemeProvider } from "@mui/material"
import { Router } from "./routes/Router"
import { lightTheme } from "./styles/ThemeMui"

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router/>
    </ThemeProvider>
  )
}

export default App
