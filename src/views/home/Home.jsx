import React, { lazy } from 'react'
const Presentation = lazy(() => import('./Presentation/Presentation').then((module) => ({ default:module.Presentation })))
const Skills = lazy(() => import('./Skills/Skills').then((module) => ({ default:module.Skills })))
const Projects = lazy(() => import('../projects/Projects').then((module) => ({ default:module.Projects })))
// MATERIAL UI - LOCAL
import { Box } from '../../components/material-ui/Box'

export const Home = () => {
  return (
    <Box>
      <Presentation/>  
      <Projects/>
      <Skills/>    
    </Box>
  )
}
