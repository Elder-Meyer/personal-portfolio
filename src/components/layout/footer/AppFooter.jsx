import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Link as LinkRoute } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { CardMedia, Container, TextField, useTheme } from '@mui/material';
import appFooterFacebook from './appFooterFacebook.png';
import appFooterTwitter from './appFooterTwitter.png';
import ponyLaughBlinkingV2 from '../../../assets/img/pony/ponyLaughBlinkingV2.gif';
import UseAnimations from 'react-useanimations';
import facebook from "react-useanimations/lib/facebook";
import twitter from "react-useanimations/lib/twitter";
import github from "react-useanimations/lib/github";


function Copyright() {
  return (
    <React.Fragment>
      <Box sx={{display: "flex", justifyContent: "center"}}>

        <Link color="primary.light" component={LinkRoute} to="/home">
        {'© '}
          Elder Meyer {" "}
        {new Date().getFullYear()}
        </Link>{' '}
      </Box>
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'secondary.light',
  transition: "all 0.3s ease-in-out",
  mr: 1,
  '&:hover': {
    bgcolor: 'primary.light',
    borderRadius: "10%",
    transform: "scale(1.1)",
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'es-ES',
    name: 'Español',
  },
];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AppFooter() {

  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'background.default' }}
    >
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center"}}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          Oops, this feature is not available yet :p
        </Alert>
      </Snackbar>
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} md={3} order={{md: 1, sm:1, xs:4}}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item >
                <Box sx={{ display: 'flex', justifyContent: "center" }}>
                  <LinkRoute to="https://facebook.com/yahir.meyer" target='_BLANK'>
                    <UseAnimations 
                      animation={facebook} 
                      size={56} 
                      strokeColor={theme.palette.primary.light} 
                      fillColor='blue' 
                    />
                  </LinkRoute>
                  <LinkRoute to="https://twitter.com/elder_yahir" target='_BLANK'>
                    <UseAnimations 
                      animation={twitter} 
                      size={56} 
                      strokeColor={theme.palette.primary.light}
                      fillColor='blue' 
                    />
                  </LinkRoute>
                  <LinkRoute to="https://github.com/Elder-Meyer" target='_BLANK'>
                    <UseAnimations 
                      animation={github} 
                      size={56} 
                      strokeColor={theme.palette.primary.light}
                      fillColor='blue' 
                    />
                  </LinkRoute>
                </Box>

                
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={2} order={{md: 2, sm:2, xs:1}}>
            <Typography color="secondary.light" variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link color="primary.light" component={LinkRoute} to="/terms">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link color="primary.light" component={LinkRoute} to="/privacy">Privacy</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link color="primary.light" component={LinkRoute} to="/contact">About me</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={4} order={{md: 3, sm:3, xs:2}}>
            <Typography color="secondary.light" variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              onChange={handleClick}
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ 
                mt: 1, width: 150,
                '& .MuiInputBase-root': {
                  color: 'secondary.light', // Cambia el color del texto del TextField
                  bgcolor: 'background.paper', // Cambia el color de fondo del TextField
                },
                '& .MuiSelect-root': {
                  bgcolor: 'secondary.light', // Cambia el color de fondo del menú desplegable
                },
                '& .MuiMenuItem-root': {
                  backgroundColor: 'red', // Cambia el color de fondo de las opciones
                  color: 'yellow', // Cambia el color del texto de las opciones
                },
               }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4} md={3} order={{md: 4, sm:4, xs:3}}>
            <Box sx={{display: "flex", justifyContent: {xs:"center", sm: "center", md:"flex-end"}}}>
              <CardMedia
                  sx={{
                      // mt: {xs: 10, sm: 5, md: 10}, 
                      width: {xs: "40%", sm: "50%", md:"50%"},
                      bgcolor: "transparent",
                  }}
                  component="img"
                  height={"100%"}
                  image={ponyLaughBlinkingV2}
                  alt="ponyLaughBlinkingV2"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
