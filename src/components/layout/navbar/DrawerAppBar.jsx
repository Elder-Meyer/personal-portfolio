import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Book, BookOutlined, ContactPage, ContactPageOutlined, Home, HomeOutlined } from '@mui/icons-material';
import { ElevationScroll } from '../../../utils/fnElevationScroll';
import {CubeGD} from '../../items/CubeGD'
// MATERIAL UI - LOCAL
import { Typography } from '../../material-ui/Typography';
import { Box } from '../../material-ui/Box';
import { Button } from '../../material-ui/Button';
import { Container } from '../../material-ui/Container';
import { Divider } from '../../material-ui/Divider';
import { IconButton } from '../../material-ui/IconButton';
import { List } from '../../material-ui/List';
import { ListItem } from '../../material-ui/ListItem';
import { ListItemButton } from '../../material-ui/ListItemButton';
import { ListItemText } from '../../material-ui/ListItemText';
import { ListItemIcon } from '../../material-ui/ListItemIcon';
import { SwipeableDrawer } from '../../material-ui/SwipeableDrawer';
import { Toolbar } from '../../material-ui/Toolbar';
import { Tooltip } from '../../material-ui/Tooltip';
import ThemeSwitcher from '../../items/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcherNav } from '../../items/LanguageSwitcherNav';
import { Stack } from '../../material-ui/Stack';

const drawerWidth = 240;

export const DrawerAppBar = (props) => {
  const { t } = useTranslation()
  const navItems = [{title: t("navbar.items.home"), path: '/home', icon: <HomeOutlined/>, iconSelected: <Home/>}, {title: t("navbar.items.blog"), path: '/blog', icon: <BookOutlined/>, iconSelected: <Book/>}, {title: t("navbar.items.contact"), path: '/contact', icon: <ContactPageOutlined/>, iconSelected: <ContactPage/>}];

  const { darkMode, handleChangeTheme } = props
  const theme = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => { setMobileOpen((prevState) => !prevState); };

  const drawer = (
    <Box sx={{ textAlign: 'center', height: "100%" }}>
      <Typography variant="h6" sx={{ my: 2, color: "primary.light" }}>
        Elder M.
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding onClick={handleDrawerToggle}>
            <ListItemButton component={NavLink} to={item.path}
              sx={{ textAlign: 'left', pl: 7, color: 'text.primary', '&.active': { color: 'primary.light' } }}
            >
              <ListItemIcon sx={{color: 'inherit'}}>
                {item.path === location.pathname ? item.iconSelected : item.icon }
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Stack direction="column" spacing={1} alignItems="center" justifyContent="center" py={2} /**height={"60%"} */ >
        <ThemeSwitcher darkMode={darkMode} handleChangeTheme={handleChangeTheme} />
      </Stack>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <ElevationScroll {...props}> 
        <AppBar position='fixed' sx={{backgroundColor: theme.palette.mode === "dark" ? "background.default" : "primary" }}>
          <Container maxWidth="xl">
            <Toolbar sx={{justifyContent: "space-between", mx:-2 }}>
              <Box>
                <Tooltip title={t("navbar.bbtn")} placement="right" arrow>
                  <Link
                    to="/home"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    aria-label="Go home"
                  >
                    <Box sx={{display: isHome ? {xs :'none', md: 'none'} : 'flex'}}>
                      <CubeGD aria-label='Go home' />
                    </Box>
                  </Link>            
                </Tooltip>
              </Box>
              <IconButton aria-label="open drawer" edge="start"
                onClick={handleDrawerToggle} sx={{ display: { xs: "flex", sm: "flex", md: 'none' }, color: "inherit"  }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{  display: { xs: 'none', sm: 'none', md: 'flex' }  }}>
                {navItems.map((item) => (
                  <Button startIcon={item.path === location.pathname ? item.iconSelected : item.icon }
                    key={item.path} 
                    sx={{
                      mr: 1,
                      fontSize: 16,
                      display: 'flex',
                      color: "inherit", 
                      '&.active': { color: theme.palette.mode === 'dark' ? 'primary.main' : "background.default" },
                    }}  
                    component={NavLink} 
                    to={item.path}
                    size="inherit"
                  >
                    {item.title}
                  </Button>
                ))}
                <ThemeSwitcher darkMode={darkMode} handleChangeTheme={handleChangeTheme} />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      <Box component="nav">
        <SwipeableDrawer anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          onOpen={handleDrawerToggle}
          // container={container}
          // variant="temporary"
          // ModalProps={{ keepMounted: true, /* Better open performance on mobile*/ }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: "background.default", borderRadius: "24px 0 0 24px" },
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </Box>
      {
        isHome ? null : 
        <>
          <Toolbar/>
        </>
      }
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};