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
import useAnalyticsEventTracker from '../../../config/analytics/useAnalyticsEventTracker';
import { Typography } from '../../material-ui/Typography';
import { Box } from '../../material-ui/Box';
import { CardMedia } from '../../material-ui/CardMedia';
import { Container } from '../../material-ui/Container';
import { Grid } from '../../material-ui/Grid';
import { Link } from '../../material-ui/Link';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../material-ui/Stack';

function Copyright({theme}) {
  return (
    <Box sx={{display: "flex", justifyContent: "center", color: theme.palette.mode==='dark'?"text.secondary":"background.paper"}}>
      <Link color="inherit" component={LinkRoute} to="/home">
        {'© Elder Meyer '}{ new Date().getFullYear() }
      </Link>
    </Box>
  );
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AppFooter = () => {
  const theme = useTheme();
  const { i18n, t } = useTranslation();

  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClick = () => { setOpenAlert(true); };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') { return; }
    setOpenAlert(false);
  };

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    handleClick()
  };

  const LANGUAGES = [
    { label: t("footer.language.en"), code: "en" },
    { label: t("footer.language.es"), code: "es" },
  ];

  const gaEventTracker = useAnalyticsEventTracker("contact us")
  return (
    <Box component="footer" sx={{ display: 'flex', backgroundColor: theme.palette.mode === 'dark' ? "background.paper" : "primary.main" }}>
      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert} anchorOrigin={{ vertical: "top", horizontal: "center"}} >
        <Alert onClose={handleCloseAlert} severity="info" sx={{ width: '100%', color: "white" }}>
          {t("footer.alert")}
        </Alert>
      </Snackbar>
      
      <Container sx={{ my: 8 }}>
        <Grid container spacing={3}>
          
          <Grid item xs={12} sm={4} md={3} order={{md: 1, sm:1, xs:4}}>
            <Stack direction="column" spacing={0.5}>
              <Stack direction="row" justifyContent="center">
                <LinkRoute to="https://facebook.com/yahir.meyer" target='_BLANK'>
                  <UseAnimations 
                    animation={facebook} 
                    size={56} 
                    strokeColor={theme.palette.mode === "dark" ?  theme.palette.primary.light : theme.palette.background.default} 
                  />
                </LinkRoute>
                <LinkRoute to="https://twitter.com/elder_yahir" target='_BLANK'>
                  <UseAnimations 
                    animation={twitter} 
                    size={56} 
                    strokeColor={theme.palette.mode === "dark" ?  theme.palette.primary.light : theme.palette.background.default} 
                  />
                </LinkRoute>
                <LinkRoute to="https://github.com/Elder-Meyer" target='_BLANK'>
                  <UseAnimations 
                    animation={github} 
                    size={56} 
                    strokeColor={theme.palette.mode === "dark" ?  theme.palette.primary.light : theme.palette.background.default} 
                  />
                </LinkRoute>
              </Stack>
              <Copyright theme={theme} />
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={4} md={2} order={{md: 2, sm:2, xs:1}}>
            <Stack direction="column" spacing={0.5}>
              <Typography color={theme.palette.mode==='dark'?"primary.light":"background.default"} variant="h6" marked="left" gutterBottom>
                {t('footer.legal.title')}
              </Typography>
              <Link color="inherit" variant='subtitle1' component={LinkRoute} to="/terms">{t('footer.legal.terms')}</Link>
              <Link color="inherit" variant='subtitle1' component={LinkRoute} onClick={()=> gaEventTracker('privacy')} to="/privacy">{t('footer.legal.privacy')}</Link>
              <Link color="inherit" variant='subtitle1' component={LinkRoute} onClick={()=> gaEventTracker('call')} to="/contact">{t('footer.legal.about')}</Link>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={8} md={4} order={{md: 3, sm:3, xs:2}}>
            <Stack direction="column" spacing={0.5}>
              <Typography color={theme.palette.mode==='dark'?"primary.light":"background.default"} variant="h6" marked="left" gutterBottom>
                {t("footer.language.title")}
              </Typography>
              <TextField
                onChange={onChangeLang}
                select
                size="medium"
                variant="standard"
                defaultValue={i18n.language}
                SelectProps={{
                  native: true,
                }}
                sx={{ 
                  width: 150,
                  '& .MuiInputBase-root': {
                    color: theme.palette.mode==='dark'?"text.secondary":"primary.dark", 
                    bgcolor: theme.palette.mode==='dark'?"background.paper":"background.paper", 
                    
                  },
                  '& .MuiSelect-root': {
                    bgcolor: theme.palette.mode==='dark'?"text.secondary":"green", 
                  },
                }}
              >
                {LANGUAGES.map(({ code, label }) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </TextField>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={4} md={3} order={{md: 4, sm:4, xs:3}}>
            <Stack direction="row" justifyContent={"center"}>
              <CardMedia
                sx={{
                  width: 56,
                  bgcolor: "transparent",
                }}
                component="img"
                height={"100%"}
                image={cube}
                alt="just a simple cube from GD"
                title='just a cube'
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}