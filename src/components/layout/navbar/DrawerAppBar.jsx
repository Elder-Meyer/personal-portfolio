import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@emotion/react';
import { Book, BookOutlined, ContactPage, ContactPageOutlined, Home, HomeOutlined, Menu } from '@mui/icons-material';
import { Box, Typography, Button, Container, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon, SwipeableDrawer, Toolbar, Tooltip, Stack } from '@mui/material';
import ThemeSwitcher from '../../items/ThemeSwitcher';
import { CubeGD } from '../../items/CubeGD'
import { ElevationScroll } from '../../../utils/fnElevationScroll';
import { ScrollIndicator } from '../../items/ScrollIndicator';
import { useTranslation } from 'react-i18next';
import { IconScrolled } from '../../items/IconScrolled';

const drawerWidth = 240;

export const DrawerAppBar = ({darkMode, handleChangeTheme, window}, props) => {
  const { t } = useTranslation()
  const theme = useTheme();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => { setMobileOpen((prevState) => !prevState); };

  const navItems = [{title: t("navbar.items.home"), path: '/home', icon: <HomeOutlined/>, iconSelected: <Home/>}, {title: t("navbar.items.blog"), path: '/blog', icon: <BookOutlined/>, iconSelected: <Book/>}, {title: t("navbar.items.contact"), path: '/contact', icon: <ContactPageOutlined/>, iconSelected: <ContactPage/>}];
  const isHome = location.pathname === "/home" || location.pathname === "/";
  const drawer = (
    <Box sx={{ textAlign: 'center', height: "100%" }}>
      <Typography variant="h6" sx={{ my: 2, color: "primary.light" }}> Elder M. </Typography>
      <Divider variant="middle"/>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding onClick={handleDrawerToggle}>
            <ListItemButton component={NavLink} to={item.path} sx={{ textAlign: 'left', pl: 7, color: 'text.primary', '&.active': { color: 'primary.light' } }}>
              <ListItemIcon sx={{color: 'inherit'}}>
                {item.path === location.pathname ? item.iconSelected : item.icon }
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider variant="middle"/>
      <Stack direction="column" spacing={1} alignItems="center" justifyContent="center" py={2}>
        <ThemeSwitcher darkMode={darkMode} handleChangeTheme={handleChangeTheme} />
      </Stack>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <ElevationScroll {...props}> 
        <AppBar position='fixed' sx={{backgroundColor: theme.palette.mode === "dark" ? `${theme.palette.background.default}bf` : `${theme.palette.primary.dark}cc` , backdropFilter: "blur(8px)" }}>
          <Container maxWidth="xl">
            <Toolbar sx={{justifyContent: "space-between", mx:-2 }}>
              <IconScrolled {...props}>
                  <Link to="/home" style={{ textDecoration: "none", color: "inherit" }} aria-label="Go home" >
                    <CubeGD animate={3} aria-label='Go home' />
                  </Link>            
              </IconScrolled>
              <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { xs: "flex", sm: "flex", md: 'none' }, color: "inherit"}} >
                <Menu />
              </IconButton>
              <Box sx={{  display: { xs: 'none', sm: 'none', md: 'flex' }  }}>
                {navItems.map((item) => (
                  <Button key={item.path} component={NavLink} to={item.path} size="inherit"
                    startIcon={item.path === location.pathname ? item.iconSelected : item.icon }
                    sx={{ mr: 1, fontSize: 16, display: 'flex', color: "inherit", '&.active': { color: theme.palette.mode === 'dark' ? 'primary.main' : "background.default" },}}  
                  >
                    {item.title}
                  </Button>
                ))}
                <ThemeSwitcher darkMode={darkMode} handleChangeTheme={handleChangeTheme} />
              </Box>
            </Toolbar>
          </Container>
          <ScrollIndicator/>
        </AppBar>
      </ElevationScroll>

      <Box component="nav">
        <SwipeableDrawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} onOpen={handleDrawerToggle}
          // container={container}
          // variant="temporary"
          // ModalProps={{ keepMounted: true, /* Better open performance on mobile*/ }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: "background.default", borderRadius: "40px 0 0 40px" },
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </Box>
      { isHome ? null : <Toolbar/> }
    </Box>
  );
}