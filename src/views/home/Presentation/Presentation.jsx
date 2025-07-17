import { useTranslation } from 'react-i18next'
import { ArrowCircleRight, ArrowRight, East, FileDownloadOutlined, KeyboardArrowRight } from '@mui/icons-material'
import cube from '../../../assets/img/principal/cube-glow.webp'
import Typewriter from 'typewriter-effect'
import { useMediaQuery, styled, Box, Button, Card, Container, Grid, Stack, Toolbar, Tooltip, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Presentation = () => {
  const { t } = useTranslation();
  return (
    <Box component='section' display='flex' alignItems='center' sx={{ minHeight: "97vh" }}>
      <Container maxWidth="lg" sx={{mt:{xs:10, sm: 1}}}>
        <Grid container spacing={1} px={{xs:1, sm:3, md:5}}>
          <Grid item xs={12} sm={12} md={9}>
            <CaptionInfo t={t} />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <ImageContent/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const CaptionInfo = ({t}) => {
  const isSmallScreen = useMediaQuery('(max-width:334px)');
  return (
    <Stack direction="column">
      <Typography paragraph  variant='h1' color='text.primary' sx={{fontWeight: 600, fontSize: {xs: 76, sm: 86, md: 96}}}>
        {t('home.presentation.title')} <CaptionName> Elder </CaptionName>
      </Typography>
      <Typography variant='h2' color='primary.light' 
        sx={{
          fontWeight: 500, fontSize: isSmallScreen ? "30px" : {xs: 35, sm: 50, md: 55}, mb: 2
        }}
      >
        <Typewriter
          options={{
            strings: [ "Web Developer", "Web Designer", "UI/UX Developer" ],
            loop: true,
            autoStart: true,
          }}
        />
      </Typography>
      <Typography paragraph variant='body2' color="text.primary" sx={{fontSize: "1.3rem", fontWeight: 300}}>
        {t('home.presentation.description')}
      </Typography>
      <Box>
        <GradientButton variant="contained" size="large" disableElevation
          component={Link}
          to={'/about-me'}
          endIcon={<KeyboardArrowRight />}
        >
          {t('home.presentation.viewmoreinfo')}
        </GradientButton>
      </Box>
    </Stack>
  )
}

const ImageContent = () => {
  return (
    <Card elevation={0}
      sx={{
        bgcolor: "transparent",
        height: '100%',
        display:'flex',
        alignItems: {xs: "flex-start", md: "center"},
        justifyContent: {xs: 'flex-start',  md: 'center'},
        flexFlow: {xs: "column wrap", md: "row wrap"},
      }}
    >
      <Toolbar sx={{display: {xs: "block", md: "none"} }} />
      <Box sx={{ display: "flex", justifyContent: "center", }}>
        <Tooltip title={"gdbrowser.com"} arrow placement='right'>
          <a href="https://gdbrowser.com/u/Mesher" target="_BLANK">
            <Box component="img" height={"100%"} src={cube} alt="GD Browser Profile" title="GD Browser Profile"
              sx={{
                width: {xs: "100%", sm: "100%", md: "100%"},
                paddingX: 1,
                animationDuration: "2s",
                animationIterationCount: "infinite",
                transformOrigin: "bottom",
                animationName: "bounce-7",
                animationTimingFunction: "cubic-bezier(0.280, 0.840, 0.420, 1)",
                '@keyframes bounce-7': {
                  '0%':   { transform: "scale(1, 1)       translateY(0)",       },
                  '10%':  { transform: "scale(1.1, .8)    translateY(0)",    },
                  '30%':  { transform: "scale(.8, 1.1)    translateY(-40px)",    },
                  '50%':  { transform: "scale(1.05, .95)  translateY(0)",  },
                  '57%':  { transform: "scale(1, 1)       translateY(0)",       },
                  '64%':  { transform: "scale(1, 1)       translateY(0)",       },
                  '100%': { transform: "scale(1, 1)       translateY(0)",       },
                },
                '&:hover':{ animationPlayState: "paused" }
              }}
            />
          </a>
        </Tooltip>
      </Box>
    </Card>
  )
}

export const CaptionName = styled("span")(({ theme })=>({
  backgroundImage: "linear-gradient(92deg, #7F7EFF 10%, #56A5FE 60%, #02FFFF)",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundSize: "150%",
  fontSize: "clamp(2rem, 10w, 8rem)",
  WebkitBackgroundClip: "text",
  animation: "animated_gradient_text 4s ease-in-out infinite",


  '@keyframes animated_gradient_text' : {
    '0%':{ backgroundPosition: "0% 50%" },
    '50%':{ backgroundPosition: "100% 50%" },
    '100%':{ backgroundPosition: "0% 50%" },
  }
}));

export const GradientButton = styled(Button)(({ theme })=>({
  fontSize: "1rem",
  color: "#fff",
  background: "linear-gradient(90deg, #7d7dff, #00bc7d, #00cccc, #7d7dff)",
  // background: "linear-gradient(90deg, #7d7dff, #00ffc0, #00ffff, #7d7dff)",
  backgroundSize: "400%",
  borderRadius: "24px",
  zIndex: 1,  
  animationPlayState: "paused",
  
  '&:hover': {
    animation: "animate 8s linear infinite",
    animationPlayState: "running",
  },

  '@keyframes animate' : {
    '0%':{ backgroundPosition: "0%" },
    '100%':{ backgroundPosition: "400%" },
  },

  '&:before': {
    content: '""',
    position: 'absolute',
    top: "-5px",
    left: "-5px",
    bottom: "-5px",
    right: "-5px",
    zIndex: -1,
    background: "linear-gradient(90deg, #7d7dff, #00bc7d, #00cccc, #7d7dff)",
    // background: "linear-gradient(90deg, #7d7dff, #00ffc0, #00ffff, #7d7dff)",
    backgroundSize: "400%",
    borderRadius: "24px",
    filter: "blur(25px)",
    opacity: 0,
    transition: "0.5s"
  },

  '&:hover:before': {
    filter: "blur(25px)",
    opacity: 1,
    animation: "animate 8s linear infinite"
  }
}));