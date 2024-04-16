import { Box, Divider } from '@mui/material'
import { lazy } from 'react'
const Presentation = lazy(() => import('./Presentation/Presentation').then((module) => ({ default:module.Presentation })))
const Skills = lazy(() => import('./skills/Skills').then((module) => ({ default:module.Skills })))
const Projects = lazy(() => import('../projects/Projects').then((module) => ({ default:module.Projects })))

export const Home = () => {
  return (
    <Box>
      <Presentation/>  
      <Divider variant="middle" />
      <Projects/>
      <Divider variant="middle" />
      <Skills/>    
    </Box>
  )
}