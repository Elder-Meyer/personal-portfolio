import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Link as LinkRoute } from 'react-router-dom';
import { TextField, useTheme } from '@mui/material';
import cube from '../../../assets/img/principal/cube-glow.webp';
import UseAnimations from 'react-useanimations';
import facebook from "react-useanimations/lib/facebook";
import twitter from "react-useanimations/lib/twitter";
import github from "react-useanimations/lib/github";
import useAnalyticsEventTracker from '../../../config/useAnalyticsEventTracker';
// MATERIAL UI - LOCAL
import { Typography } from '../../material-ui/Typography';
import { Box } from '../../material-ui/Box';
import { CardMedia } from '../../material-ui/CardMedia';
import { Container } from '../../material-ui/Container';
import { Grid } from '../../material-ui/Grid';
import { Link } from '../../material-ui/Link';

function Copyright() {
  return (
    <React.Fragment>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <Link color="text.secondary" component={LinkRoute} to="/home">
          {'© Elder Meyer '}
          { new Date().getFullYear() }
        </Link>
      </Box>
    </React.Fragment>
  );
}

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

export const AppFooter = () => {

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

  const gaEventTracker = useAnalyticsEventTracker("contact us")

  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', backgroundColor: "background.paper" }}
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
                      strokeColor={theme.palette.text.primary} 
                      fillColor='blue' 
                    />
                  </LinkRoute>
                  <LinkRoute to="https://twitter.com/elder_yahir" target='_BLANK'>
                    <UseAnimations 
                      animation={twitter} 
                      size={56} 
                      strokeColor={theme.palette.text.primary} 
                      fillColor='blue' 
                    />
                  </LinkRoute>
                  <LinkRoute to="https://github.com/Elder-Meyer" target='_BLANK'>
                    <UseAnimations 
                      animation={github} 
                      size={56} 
                      strokeColor={theme.palette.text.primary} 
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
            <Typography color="text.primary" variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link color="text.secondary" variant='subtitle1' component={LinkRoute} to="/terms">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link color="text.secondary" variant='subtitle1' component={LinkRoute} onClick={()=> gaEventTracker('privacy')} to="/privacy">Privacy</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link color="text.secondary" variant='subtitle1' component={LinkRoute} onClick={()=> gaEventTracker('call')} to="/contact">About me</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={4} order={{md: 3, sm:3, xs:2}}>
            <Typography color="text.primary" variant="h6" marked="left" gutterBottom>
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
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4} md={3} order={{md: 4, sm:4, xs:3}}>
            <Box sx={{display: "flex", justifyContent: {xs:"center", sm: "center", md:"center", lg: "flex-end"}}}>
              <CardMedia
                sx={{
                    // mt: {xs: 10, sm: 5, md: 10}, 
                    width: {xs: 56, sm: 56, md: 56},
                    bgcolor: "transparent",
                }}
                component="img"
                height={"100%"}
                image={cube}
                alt="just a simple cube from GD"
                title='just a cube'
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
