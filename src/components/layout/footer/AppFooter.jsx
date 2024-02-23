import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Link as LinkRoute } from 'react-router-dom';
import { TextField, useTheme, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import cube from '../../../assets/img/principal/cube-glow.webp';
import UseAnimations from 'react-useanimations';
import facebook from "react-useanimations/lib/facebook";
import twitter from "react-useanimations/lib/twitter";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin"
import useAnalyticsEventTracker from '../../../config/analytics/useAnalyticsEventTracker';
import { Typography } from '../../material-ui/Typography';
import { Box } from '../../material-ui/Box';
import { CardMedia } from '../../material-ui/CardMedia';
import { Container } from '../../material-ui/Container';
import { Grid } from '../../material-ui/Grid';
import { Link } from '../../material-ui/Link';
import { useTranslation } from 'react-i18next';
import { Stack } from '../../material-ui/Stack';
import { Divider } from '../../material-ui/Divider';

function Copyright({theme, t}) {
  return ( <Box sx={{color: theme.palette.mode==='dark'?"text.secondary":"background.paper"}}>
      <Typography variant="caption"> {'©  '}{ new Date().getFullYear() }{" Elder Meyer, "}{t("footer.copy")} </Typography>
  </Box> );
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const AppFooter = () => {
  const theme = useTheme();
  const { i18n, t } = useTranslation();

  const [openAlert, setOpenAlert] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState(i18n.language);

  const handleClick = () => { setOpenAlert(true); };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') { return; }
    setOpenAlert(false);
  };

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    setSelectedLanguage(lang_code);
    handleClick();
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
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={1} height={"100%"} justifyContent={{xs: "center", md: "flex-start"}} alignItems="center" mx={2}>
              <CardMedia component="img"
                sx={{ width: 42, bgcolor: "transparent" }}
                image={cube} alt="just a simple cube from GD" title='just a cube'
              />
              <Typography variant='h5' fontWeight={700} color={theme.palette.mode === "dark" ? "primary.main" : "background.paper"}> Elder </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack direction="row" spacing={3} height={"100%"} flexWrap={"wrap"} justifyContent={{xs: "center", md: "flex-end"}} alignItems={"center"} mx={2} color={theme.palette.mode === "dark" ? "primary.light" : "background.default"}>
              <Link color="inherit" variant='subtitle1' underline='hover' component={LinkRoute} to='/about-me' onClick={() => gaEventTracker('About me')}> {t('footer.links.about')} </Link>
              <Link color="inherit" variant='subtitle1' underline='hover' component={LinkRoute} to='/blog'     onClick={() => gaEventTracker('blog')}    > {t('footer.links.blog')} </Link>
              <Link color="inherit" variant='subtitle1' underline='hover' component={LinkRoute} to='/contact'  onClick={() => gaEventTracker('contact')} > {t('footer.links.contact')} </Link>
              
              <CssTextField 
                onChange={onChangeLang}
                select
                label={t("footer.language.title")}
                size="small"
                value={selectedLanguage}
                SelectProps={{
                  MenuProps: {disableScrollLock: true},
                }}
              >
                {LANGUAGES.map((option) => (
                  <MenuItem key={option.code} value={option.code}>
                    {option.label}
                  </MenuItem>
                ))}
              </CssTextField>
            </Stack>
          </Grid>
          <Grid item xs={12}> <Divider color="inherit"/> </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" spacing={1} height={"100%"} justifyContent={{xs:"center", sm: "flex-start"}} alignItems="center" mx={2}>
              <Copyright theme={theme} t={t} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" spacing={0.5} height={"100%"} justifyContent={{xs: "center", sm: "flex-end"}} alignItems={"center"} mx={2} color={theme.palette.mode === "dark" ? "primary.light" : "background.paper"}>
              <LinkRoute to="https://www.linkedin.com/in/elder-meyer-196a3a290/" target='_BLANK'>
                <UseAnimations animation={linkedin} size={45} 
                  strokeColor={theme.palette.mode === "dark" ?  theme.palette.primary.light : theme.palette.background.default} 
                />
              </LinkRoute>
              <LinkRoute to="https://twitter.com/elder_yahir" target='_BLANK'>
                <UseAnimations animation={twitter} size={45} 
                  strokeColor={theme.palette.mode === "dark" ?  theme.palette.primary.light : theme.palette.background.default} 
                />
              </LinkRoute>
              <LinkRoute to="https://github.com/Elder-Meyer" target='_BLANK'>
                <UseAnimations animation={github} size={45} 
                  strokeColor={theme.palette.mode === "dark" ?  theme.palette.primary.light : theme.palette.background.default} 
                />
              </LinkRoute>
              <LinkRoute to="https://facebook.com/yahir.meyer" target='_BLANK'>
                <UseAnimations animation={facebook} size={45} 
                  strokeColor={theme.palette.mode === "dark" ?  theme.palette.primary.light : theme.palette.background.default} 
                />
              </LinkRoute>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const CssTextField = styled(TextField)(({ theme })=>({
  width: 115,
  '& label ': {
    color: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.background.default,
  },
  '& label.Mui-focused': {
    color: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.background.default,
  },
  '.MuiSelect-select':{
    color: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.background.default,
  },
  '.MuiSvgIcon-root':{
    color: "white",
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.mode === "dark" ? theme.palette.primary.main : theme.palette.background.paper,
    },
    '& fieldset': {
      borderColor: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.background.default,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.background.default,
    },
  },
}));