import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
      mode: 'dark',
      primary:{
        main: "#bcb5ff",
        light: "#cac3ff",
        dark: "#aea7ff"
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
        paper: "#32313a",
        default: "#1d1c26"
      }

    },
    typography:{
      fontFamily: "'Plus Jakarta Sans', sans-serif"
    }
  });
  
export const darkTheme = createTheme({
    
  });

