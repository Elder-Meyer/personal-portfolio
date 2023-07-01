
import { Box, Container, Paper, Toolbar, Typography } from '@mui/material'
import React from 'react'

import { Database } from './sliders/Database'
import { Frameworks } from './sliders/Frameworks'
import { ProgrammingLanguages } from './sliders/ProgrammingLanguages'
import { SpeakLanguages } from './sliders/SpeakLanguages'
import { WebDevelopment } from './sliders/WebDevelopment'



export const SkillAndLanguages = () => {
  return (
    <Box component='section' sx={{ border: "3px solid #121212", bgcolor: "background.default"}}>
      <Container maxWidth="lg">
        <Paper sx={{borderRadius: 15, py: 3, px: 7, mt: -10, mb:10, bgcolor: "background.paper"}}>
          <Typography textAlign="center" sx={{color: "white", fontSize: 45, fontWeight: 500}} gutterBottom>
            Skills
          </Typography>
          <Typography color="secondary.light" textAlign="center" sx={{fontSize: 18, my:3}}>
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

          
          <Typography textAlign="center" sx={{color: "white", fontSize: 45, fontWeight: 500}} gutterBottom>
            Languages
          </Typography>
          <Typography color="secondary.light" textAlign="center" sx={{fontSize: 18, my:3}}>
            I understand (and speak) three languages.
          </Typography>
          <SpeakLanguages/>
          
        </Paper>
      </Container>
    </Box>
  )
}
