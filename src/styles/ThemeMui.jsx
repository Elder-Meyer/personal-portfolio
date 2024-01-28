import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        // dark: '#7d7dff',
        // main: '#8e8bff',
        // light: '#9f98ff'
        main: '#7d7dff'
      },
      secondary: {
        main: '#a0ffff'
      },
      background: {
        default: '#1D1C26',
        paper: '#32313A',
      },
    },
    typography:{
      fontFamily: "'Plus Jakarta Sans', sans-serif"
    }
  });
  
export const darkTheme = createTheme({
    
  });

