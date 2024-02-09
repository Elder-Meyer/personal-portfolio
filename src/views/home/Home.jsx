import React from 'react'
import { Presentation } from './Presentation/Presentation'
import { SkillAndLanguages } from './SkillAndLanguages/SkillAndLanguages'
import { Projects } from '../projects/Projects'
import { Box } from '../../components/material-ui/Box'

export const Home = () => {
  return (
    <Box>
      <Presentation/>  
      <Projects/>
      <SkillAndLanguages/>    
    </Box>
  )
}
