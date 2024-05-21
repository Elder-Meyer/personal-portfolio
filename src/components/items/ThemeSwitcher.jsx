import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, useMediaQuery, Tooltip } from '@mui/material';
import { DarkMode, DarkModeOutlined, LightMode, LightModeOutlined } from '@mui/icons-material';

const ThemeSwitcher = ({ darkMode, handleChangeTheme }) => {
  const { t } = useTranslation()
  const [isRotated, setIsRotated] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleIconClick = () => {
    setIsRotated(!isRotated);
    handleChangeTheme(); // Cambiar tema
  };

  return (
    <Tooltip title={darkMode ? t("navbar.darkthemetext") : t("navbar.lightthemetext") } placement={"bottom"} arrow>
      <IconButton onClick={handleIconClick}
        sx={{ 
          color : "inherit",
          transition: 'transform 0.5s ease',
          transform: isRotated ? 'rotate(360deg)' : 'rotate(180deg)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={darkMode ? t("navbar.darkthemetext") : t("navbar.lightthemetext") }
        size='large'
      >
        {darkMode ? (
          hovered ? <LightMode fontSize='inherit' /> : <LightModeOutlined fontSize='inherit' />
        ) : (
          hovered ? <DarkMode fontSize='inherit' /> : <DarkModeOutlined fontSize='inherit' />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitcher;