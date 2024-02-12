import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { DarkMode, DarkModeOutlined, Face, LightMode, LightModeOutlined } from '@mui/icons-material';

const ThemeSwitcher = (props) => {
    
    const { darkMode } = props
    const { handleChangeTheme } = props

  const [hovered, setHovered] = useState(false);

  return (
    <IconButton
      aria-label=""
      onClick={handleChangeTheme}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "text.primary",
      }}
    >
      {darkMode ? (
        hovered ? <DarkMode /> : <DarkModeOutlined />
      ) : (
        hovered ? <LightMode /> : <LightModeOutlined />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;
