import { Container, Paper, Toolbar } from '@mui/material'
import React from 'react'
import { Database } from './sliders/Database'
import { Frameworks } from './sliders/Frameworks'
import { ProgrammingLanguages } from './sliders/ProgrammingLanguages'
import { SpeakLanguages } from './sliders/SpeakLanguages'
import { WebDevelopment } from './sliders/WebDevelopment'
import { Typography } from '../../../components/material-ui/Typography'
import { Box } from '../../../components/material-ui/Box'



export const SkillAndLanguages = () => {
  return (
    <Box component='section' sx={{ bgcolor: "background.default",  px:{ xs: 0, sm:1, md:2, lg:2}, py: {xs:5, sm:5, md:6} }}>
      <Container maxWidth="lg">
        <Paper sx={{borderRadius: 4, py: 3, px: {xs: 2, sm:2, md:2, lg: 8, xl:16 }, bgcolor: "background.paper" }} elevation={0}>
          <Typography color='text.primary' textAlign="center" sx={{ fontSize: 40, fontWeight: 500}} gutterBottom>
            Skills
          </Typography>
          <Typography color='text.secondary' textAlign="center" sx={{fontSize: 18, my:3}}>
            I have skills and experience with the following technologies and programming languages.
          </Typography>
            <WebDevelopment/>
          <Toolbar/>
            <ProgrammingLanguages/>
          <Toolbar/>
            <Frameworks/>
          <Toolbar/>
            <Database/>
          <Toolbar/>

          
          <Typography textAlign="center" sx={{color: "white", fontSize: 40, fontWeight: 500}} gutterBottom>
            Languages
          </Typography>
          <Typography color="text.secondary" textAlign="center" sx={{fontSize: 18, my:3}}>
            I understand (and speak) three languages.
          </Typography>
          <SpeakLanguages/>
          
        </Paper>
      </Container>
    </Box>
  )
}
