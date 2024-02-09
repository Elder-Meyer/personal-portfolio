import { FileDownloadOutlined } from '@mui/icons-material'
import React from 'react'
import cube from '../../../assets/img/principal/cube-glow.webp'
import Typewriter from 'typewriter-effect'
import ExampleDoc from "../../../assets/docs/exampleDoc.pdf"
// MATERIAL UI - LOCAL
import { Typography } from '../../../components/material-ui/Typography'
import { Box } from '../../../components/material-ui/Box'
import { Button } from '../../../components/material-ui/Button'
import { Card } from '../../../components/material-ui/Card'
import { Container } from '../../../components/material-ui/Container'
import { Grid } from '../../../components/material-ui/Grid'
import { Toolbar } from '../../../components/material-ui/Toolbar'
import { Tooltip } from '../../../components/material-ui/Tooltip'

export const Presentation = () => {
  return (
    <Box component='section' 
      sx={{ 
        backgroundColor: "background.default", minHeight: "100vh",
        // border: "3px solid blue"
      }} display='flex' alignItems='center'
    >
      <Container maxWidth="lg" 
        sx={{ 
          py: {xs: 15, sm: 10, md: 10, lg: 10, xl:20} ,
          borderBottom: 1, borderColor: 'divider',
          // border: "3px solid green"
        }}
      >
        <Grid container spacing={2} px={2}>
          <Grid item xs={12} sm={12} md={9}>
            <CaptionInfo/>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <ImageContent/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const CaptionInfo = () => {
  return (
    <Box sx={{display: 'flex', flexFlow: 'column wrap', justifyContent: 'center',/* minHeight: '100vh', */ }}>
      <Typography variant='h1' color='text.primary' sx={{fontWeight: 500, fontSize: {xs: 76, sm: 86, md: 96}}}>
        Hi! I'm Elder.
      </Typography>
      <Typography variant='h2' color='primary.light' 
        sx={{
          fontWeight: 100, fontSize: {xs: 35, sm: 50, md: 55},
          position: "relative"
        }}
      >
        <Box sx={{position: "absolute"}}>
          <Typewriter
            options={{
              strings: [ "Web Developer", "Web Designer", "UI/UX Developer", "Software Enginner" ],
              loop: true,
              autoStart: true,
            }}
          />
        </Box>
        <Toolbar sx={{ my:2}} />
      </Typography>
      <Typography variant='body2' color="text.secondary" sx={{fontSize: "1.3rem"}}>
        I am a developer who is passionate about developing and designing web applications.
      </Typography>
      <Box my={3}>
        <Button 
          variant="contained" 
          size="medium" 
          endIcon={<FileDownloadOutlined/>}
          href={ExampleDoc} download="elderMeyer-cv" target='_blank'
          sx={{borderRadius: 5}}
          disableElevation
        >
          Download my CV
        </Button>
      </Box>
      <Toolbar sx={{display: {xs: "none", sm: "none", md: "block"}}} />
    </Box>
  )
}

const ImageContent = () => {
  return (
    <Card
      elevation={0}
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
      <Box  
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tooltip title={":)"} arrow placement='right'>
          <a href="https://gdbrowser.com/u/Mesher" target="_BLANK">
            <Box
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
                  '10%':  { transform: "scale(1.1, .9)    translateY(0)",    },
                  '30%':  { transform: "scale(.9, 1.1)    translateY(-40px)",    },
                  '50%':  { transform: "scale(1.05, .95)  translateY(0)",  },
                  '57%':  { transform: "scale(1, 1)       translateY(-8px)",       },
                  '64%':  { transform: "scale(1, 1)       translateY(0)",       },
                  '100%': { transform: "scale(1, 1)       translateY(0)",       },
                }
              }}
              component="img"
              height={"100%"}
              src={cube}
              alt="elderMeyer"
            />
          </a>
        </Tooltip>
      </Box>
    </Card>
  )
}