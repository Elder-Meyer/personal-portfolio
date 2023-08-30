import { FileDownloadOutlined } from '@mui/icons-material'
import { Box, Button, Card, CardActionArea, CardMedia, Container, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import elderMeyer from '../../../assets/img/principal/elderMeyerV2.png'
import space from '../../../assets/img/principal/space.jpg'
import curvyLines from '../../../assets/img/principal/curvyLines.svg'
import drawLines from '../../../assets/img/principal/drawLines.svg'
import rainLines from '../../../assets/img/principal/rainLines.svg'
import Typewriter from 'typewriter-effect'
import ExampleDoc from "../../../assets/docs/exampleDoc.pdf"
import { useTheme } from '@emotion/react'

export const Presentation = () => {
  const theme = useTheme();
  return (
    <Box component='section' sx={{ background: theme.palette.background.default, backgroundImage: `url(${curvyLines})`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", alignItems: "center"}}>
      <Container maxWidth="lg" sx={{py: {xs: 15, sm: 20, md: 25}}}>
        <Grid container spacing={2} px={2}>
          <Grid item xs={12} sm={12} md={7}>
            <CaptionInfo/>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <ImageContent/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}


const CaptionInfo = () => {
  return (
    <Box sx={{color: "white", display: 'flex', flexFlow: 'column wrap', justifyContent: 'center',/* minHeight: '100vh', */ }}>
      <Typography variant='h1' sx={{fontWeight: 500, fontSize: {xs: 76, sm: 86, md: 96}}}>
        Hi! I'm Elder.
      </Typography>
      <Typography variant='h2' sx={{fontWeight: 100, fontSize: {xs: 35, sm: 50, md: 55}}}>
        <Typewriter
          options={{
            strings: [ "Web Developer", "Web Designer", "UI/UX Dev" ],
            loop: true,
            autoStart: true,
          }}
        />
      </Typography>
      <Typography variant='subtitle1' color="secondary.light" sx={{fontSize: "1.3rem"}}>
        I am a developer who is passionate about developing and designing web applications.
      </Typography>
      <Toolbar/>
      <Box>
        <Button
          variant='contained'
          size='large' 
          href={ExampleDoc} download="elderMeyer-cv" target='_blank'
          sx={{
            color: "primary.light",
            position: "relative",
            transition: "all 0.3s ease",
            '&:hover': {
              '&': {
                transform: "translateY(-5px)" // Ajusta el valor según el desplazamiento deseado
              }
            }
          }}
        >
          <Typography sx={{pr:1}}>
            Download my CV
          </Typography>
          <FileDownloadOutlined/>
        </Button>
        
      </Box>
    </Box>
  )
}

const ImageContent = () => {
  return (
    <Card
    data-aos="fade-right"
    elevation={0}
    sx={{
      bgcolor: "transparent",
    }}
    >
    <Box  
      sx={{display: "flex", justifyContent: "center"}}
    >
      <Box
        sx={{width: {xs: "100%", sm: "70%", md: "100%"},}}
        component="img"
        height={"100%"}
        src={elderMeyer}
        alt="elderMeyer"
      />
    </Box>
    </Card>
  )
}