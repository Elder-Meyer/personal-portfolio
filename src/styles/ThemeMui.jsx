import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#00434c',
        light: '#44b4d0',
        dark: '#002429',
      },
      secondary: {
        main: '#376b83',
        light: '#79a2b9',
        dark: '#073040',
      },
      background: {
        default: '#111E26',
        paper: '#073040',
      },
    },
  });
  
export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#851E57',
        light: '#962262',
        dark: '#741A4C',
      },
      secondary: {
        main: '#7b2876',
        light: '#8b2d84',
        dark: '#6c2367',
      },
    },
  });

