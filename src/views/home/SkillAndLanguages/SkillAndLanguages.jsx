
import { Box, Container, Paper, Toolbar, Typography } from '@mui/material'
import React from 'react'

import { Database } from './sliders/Database'
import { Frameworks } from './sliders/Frameworks'
import { ProgrammingLanguages } from './sliders/ProgrammingLanguages'
import { SpeakLanguages } from './sliders/SpeakLanguages'
import { WebDevelopment } from './sliders/WebDevelopment'



export const SkillAndLanguages = () => {
  return (
    <Box component='section' sx={{ bgcolor: "background.default",  px:2, py: {xs:5, sm:5, md:6} }}>
      <Container maxWidth="lg">
        <Paper sx={{borderRadius: 15, py: 3, px: 7, bgcolor: "background.paper" }} elevation={1}>
          <Typography color='text.primary' textAlign="center" sx={{ fontSize: 45, fontWeight: 500}} gutterBottom>
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

          
          <Typography textAlign="center" sx={{color: "white", fontSize: 45, fontWeight: 500}} gutterBottom>
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
