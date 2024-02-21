import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { DarkMode, DarkModeOutlined, Face, LightMode, LightModeOutlined } from '@mui/icons-material';
import { Tooltip } from '../material-ui/Tooltip';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mui/material'

const ThemeSwitcher = (props) => {

  const { t } = useTranslation()
    
  const { darkMode } = props
  const { handleChangeTheme } = props

  const [hovered, setHovered] = useState(false);
  const isMobile = useMediaQuery('(max-width:899px)');

  return (
    <Tooltip title={darkMode ? t("navbar.darkThemeText") : t("navbar.lightThemeText") } placement={isMobile ? "top" : "bottom"} arrow>
      <IconButton
        aria-label=""
        onClick={handleChangeTheme}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{ border: 1, borderColor: 'divider', color : "inherit" }}
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
