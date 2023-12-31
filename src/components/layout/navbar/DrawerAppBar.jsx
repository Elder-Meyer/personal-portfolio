import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HideOnScroll } from './fnHideOnScroll';
import { Container, ListItemIcon } from '@mui/material';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Elder } from './Elder';
import { useTheme } from '@emotion/react';
import { Book, BookOutlined, ContactPage, ContactPageOutlined, Home, HomeOutlined } from '@mui/icons-material';
import { ElevationScroll } from './fnElevationScroll';


const drawerWidth = 240;
const navItems = [{title: 'Home', path: '/home', icon: <HomeOutlined/>, iconSelected: <Home/>}, {title: 'Blog', path: '/blog', icon: <BookOutlined/>, iconSelected: <Book/>}, {title: 'Contact', path: '/contact', icon: <ContactPageOutlined/>, iconSelected: <ContactPage/>}];

function DrawerAppBar(props) {
  const theme = useTheme();
  Elder(theme.palette.background.default)
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const navBackgroundStyle = isHome ? { backgroundColor: "transparent", paddingTop: 1 } : { backgroundColor: "background.default", paddingTop: 1 };
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: "primary.light" }}>
        Elder M.
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton 
              sx={{
                textAlign: 'left',
                pl: 7,
                color: '#fff', // Color por defecto para enlaces inactivos
                '&.active': { // Estilos para enlaces activos
                  color: 'primary.light',
                },
              }}
              component={NavLink} to={item.path}
            >
              <ListItemIcon sx={{color: 'inherit'}}>
                {item.path === location.pathname ? item.iconSelected : item.icon }
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
        {/* <HideOnScroll {...props}> */}
          <ElevationScroll {...props}> 
            <AppBar sx={navBackgroundStyle} enableColorOnDark id="header-principal">
              <Container maxWidth="lg">
                <Toolbar sx={{justifyContent: "space-between"}}>
                  <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    color="primary.light"
                    sx={{  display: { xs: 'flex', sm: 'flex' }, fontSize: '2.5rem', textDecoration: "none" }}
                  >
                    Elder M.
                  </Typography>
                  <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ display: { xs: "flex", sm: "flex", md: 'none' } }}
                      >
                    <MenuIcon />
                  </IconButton>
                  <Box sx={{  display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                      {navItems.map((item) => (
                        <Button 
                        startIcon={item.path === location.pathname ? item.iconSelected : item.icon }
                        key={item.path} 
                        sx={{
                          mr: 1,
                          fontSize: 16,
                          display: 'flex',
                            color: '#fff', // Color por defecto para enlaces inactivos
                            '&.active': { // Estilos para enlaces activos
                              color: 'primary.light',
                            },
                          }}  
                          component={NavLink} 
                          to={item.path}
                          size="inherit"
                          >
                          {item.title}
                        </Button>
                      ))}
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
          </ElevationScroll>
        {/* </HideOnScroll> */}

        <Box component="nav">
            <Drawer
                anchor="right"
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: "background.default" },
                }}
            >
                {drawer}
            </Drawer>
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

export default DrawerAppBar;