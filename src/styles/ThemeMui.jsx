import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5c62e0",
      light: "#7d7dff",
      dark: "#565eda",
    },
    secondary: {
      main: "#6794ff",
      light: "#565eda",
      dark: "#003d9a",
    },
    text: {
      primary: "#333333",
      secondary: "#5c5c5c",
      icon: "#fb7703",
    },
    divider: "#cccccc",
    background: {
      paper: "#F5F5F5",
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b3b1ff",
      light: "#d2cfff",
      dark: "#9490ff",
    },
    secondary: {
      main: "#8C6DB5",
      light: "#f0dbff",
      dark: "#ffffff",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#e0e0e0",
      icon: "#fb7703",
    },
    divider: "#59517a",
    background: {
      paper: "#28272e",
      default: "#1d1c26",
    },
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  },
});