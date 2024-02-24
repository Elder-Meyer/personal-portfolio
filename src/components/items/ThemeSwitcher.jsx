import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, useMediaQuery } from '@mui/material';
import { DarkMode, DarkModeOutlined, LightMode, LightModeOutlined } from '@mui/icons-material';
import { Tooltip } from '../material-ui/Tooltip';

const ThemeSwitcher = ({ darkMode, handleChangeTheme }) => {
  const { t } = useTranslation()

  const [hovered, setHovered] = useState(false);
  const isMobile = useMediaQuery('(max-width:899px)');

  return (
    <Tooltip title={darkMode ? t("navbar.darkThemeText") : t("navbar.lightThemeText") } placement={isMobile ? "top" : "bottom"} arrow>
      <IconButton onClick={handleChangeTheme}
        sx={{ border: 1, borderColor: 'divider', color : "inherit" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={darkMode ? t("navbar.darkThemeText") : t("navbar.lightThemeText") }
      >
        {darkMode ? (
          hovered ? <LightMode /> : <LightModeOutlined />
        ) : (
          hovered ? <DarkMode /> : <DarkModeOutlined />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitcher;