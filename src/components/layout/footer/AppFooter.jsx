import { forwardRef, useEffect, useState } from 'react';
import { Link as LinkRoute } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TextField, useTheme, MenuItem, styled, Snackbar, Alert, AlertTitle } from '@mui/material';
import UseAnimations from 'react-useanimations';
import facebook from "react-useanimations/lib/facebook";
import twitter from "react-useanimations/lib/twitter";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin"
import { Box } from '../../material-ui/Box';
import { Container } from '../../material-ui/Container';
import { Divider } from '../../material-ui/Divider';
import { Grid } from '../../material-ui/Grid';
import { Link } from '../../material-ui/Link';
import { Stack } from '../../material-ui/Stack';
import { Typography } from '../../material-ui/Typography';
import { CubeGD } from '../../items/CubeGD';
import useAnalyticsEventTracker from '../../../config/analytics/useAnalyticsEventTracker';
import { PopUpAlert } from '../../items/PopUpAlert';
import InputAdornment from '@mui/material/InputAdornment';
import { Face, Language } from '@mui/icons-material';
import Cookies from 'js-cookie';

function Copyright({theme, t}) {
  return ( <Box sx={{color: theme.palette.mode==='dark'?"text.secondary":"background.paper"}}>
      <Typography variant="caption"> {'©  '}{ new Date().getFullYear() }{" Elder Meyer, "}{t("footer.copy")} </Typography>
  </Box> );
}

export const AppFooter = () => {
  const theme = useTheme();
  const { i18n, t } = useTranslation();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [variantAlert, setVariantAlert] = useState("");
  const [textAlert, setTextAlert] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  
  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    setSelectedLanguage(lang_code);
    Cookies.set('language', lang_code);
    setVariantAlert("info")
    setTextAlert(t("footer.alert"))
    setSnackbarOpen(true)
  };

  const LANGUAGES = [
    { label: t("footer.language.en"), code: "en" },
    { label: t("footer.language.es"), code: "es" },
  ];

  useEffect(() => {
    const userLanguage = navigator.language;
    const storedLanguage = Cookies.get('language');

    if (storedLanguage) {
        i18n.changeLanguage(storedLanguage);
        setSelectedLanguage(storedLanguage);
        console.log(storedLanguage)
    } else {
        if (userLanguage.includes("en")) {
            i18n.changeLanguage("en");
            setSelectedLanguage("en");
        } else if (userLanguage.includes("es")) {
            i18n.changeLanguage("es");
            setSelectedLanguage("es");
        } else {
            i18n.changeLanguage("en");
            setSelectedLanguage("en");
        }
        Cookies.set('language', selectedLanguage);
    }
}, []);
  
  const gaEventTracker = useAnalyticsEventTracker("contact us")
  return (
    <Box component="footer" sx={{ display: 'flex', backgroundColor: theme.palette.mode === 'dark' ? "background.paper" : "primary.main" }}>
      <PopUpAlert snackbarOpen={snackbarOpen} setSnackbarOpen={setSnackbarOpen} variantAlert={variantAlert} textAlert={textAlert} />
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Stack direction="row" spacing={1} height={"100%"} justifyContent={{xs: "center", md: "flex-start"}} alignItems="center" mx={2}>
              <CubeGD/>
              <Typography variant='h5' fontWeight={700} color={theme.palette.mode === "dark" ? "primary.main" : "background.paper"}> Elder </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack direction="row" spacing={3} height={"100%"} flexWrap={"wrap"} useFlexGap justifyContent={{xs: "center", md: "flex-end"}} alignItems={"center"} mx={2} color={theme.palette.mode === "dark" ? "primary.light" : "background.default"}>
              <Link color="inherit" variant='subtitle1' underline='hover' component={LinkRoute} to='/about-me' onClick={() => gaEventTracker('About me')}> {t('footer.links.about')} </Link>
              <Link color="inherit" variant='subtitle1' underline='hover' component={LinkRoute} to='/blog'     onClick={() => gaEventTracker('blog')}    > {t('footer.links.blog')} </Link>
              <Link color="inherit" variant='subtitle1' underline='hover' component={LinkRoute} to='/contact'  onClick={() => gaEventTracker('contact')} > {t('footer.links.contact')} </Link>
              <CssTextField onChange={onChangeLang}
                select size="small"
                label={t("footer.language.title")}
                value={selectedLanguage}
                SelectProps={{ MenuProps: {disableScrollLock: true},}}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Language color='inherit'/></InputAdornment>,
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
            <Stack direction="row" spacing={1} height={"100%"} justifyContent={{xs:"center", sm: "flex-start"}} alignItems="center" mx={2} textAlign={"center"}>
              <Copyright theme={theme} t={t} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" spacing={0.5} height={"100%"} justifyContent={{xs: "center", sm: "flex-end"}} alignItems={"center"} mx={2} color={theme.palette.mode === "dark" ? "primary.light" : "background.paper"}>
              <LinkRoute to="https://www.linkedin.com/in/elder-meyer/" target='_BLANK'>
                <UseAnimations animation={linkedin} size={45} 
                  strokeColor={theme.palette.mode === "dark" ?  theme.palette.primary.light : theme.palette.background.default} 
                />
              </LinkRoute>
              <LinkRoute to="https://twitter.com/elder_yahir" target='_BLANK'>
                <UseAnimations animation={twitter} size={45} 
                  strokeColor={theme.palette.mode === "dark" ?  theme.palette.primary.light : theme.palette.background.default} 
                />
              </LinkRoute>
              <LinkRoute to="https://github.com/elder-meyer" target='_BLANK'>
                <UseAnimations animation={github} size={45} 
                  strokeColor={theme.palette.mode === "dark" ?  theme.palette.primary.light : theme.palette.background.default} 
                />
              </LinkRoute>
              <LinkRoute to="https://facebook.com/elder.meyer784/" target='_BLANK'>
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
  width: 145,
  '& label ': { color: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.background.default, },
  '& label.Mui-focused': { color: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.background.default, },
  '.MuiSelect-select':{ color: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.background.default, },
  '.MuiSvgIcon-root':{ color: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.background.default, },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': { borderColor: theme.palette.mode === "dark" ? theme.palette.primary.main : theme.palette.background.paper, },
    '& fieldset': { borderColor: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.background.default, },
    '&.Mui-focused fieldset': { borderColor: theme.palette.mode === "dark" ? theme.palette.primary.light : theme.palette.background.default, },
  },
}));