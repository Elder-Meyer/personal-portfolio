import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
      mode: 'dark',
      primary:{
        main: "#8c7abc",
        light: "#f0dbff",
        dark: "#5D4E8C"
      },
      secondary:{
        main: "#8C6DB5",
        light: "#f0dbff",
        dark: "#ffffff"
      },
      text:{
        primary: "#FFFFFF",
        secondary: "#e0e0e0",
        icon: "#fb7703",
      },
      divider: "#59517a",
      background:{
        paper: "#3f395f",
        default: "#2E294E"
      }

    },
    typography:{
      fontFamily: "'Plus Jakarta Sans', sans-serif"
    }
  });
  
export const darkTheme = createTheme({
    
  });

