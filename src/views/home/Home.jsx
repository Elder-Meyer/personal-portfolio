import React, { lazy } from 'react'
const Presentation = lazy(() => import('./Presentation/Presentation').then((module) => ({ default:module.Presentation })))
const SkillAndLanguages = lazy(() => import('./SkillAndLanguages/SkillAndLanguages').then((module) => ({ default:module.SkillAndLanguages })))
const Projects = lazy(() => import('../projects/Projects').then((module) => ({ default:module.Projects })))
// MATERIAL UI - LOCAL
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
