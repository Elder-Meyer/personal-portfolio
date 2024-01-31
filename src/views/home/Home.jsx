import React from 'react'
import { Presentation } from './Presentation/Presentation'
import { SkillAndLanguages } from './SkillAndLanguages/SkillAndLanguages'
import { Projects } from './Projects/Projects'
import { Box } from '@mui/material'

export const Home = () => {
  return (
    <Box>
      <Presentation/>  
      <Projects/>
      <SkillAndLanguages/>    
    </Box>
  )
}
