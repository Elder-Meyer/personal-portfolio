import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
const Home            = lazy(() => import('../views/home/Home').then((module) => ({ default: module.Home })))
const Projects        = lazy(() => import('../views/projects/Projects').then((module) => ({ default: module.Projects })))
const ProjectDetails  = lazy(() => import('../views/projects/ProjectDetails').then((module) => ({ default: module.ProjectDetails })))
const Blog            = lazy(() => import('../views/blog/Blog').then((module) => ({ default: module.Blog })))
const Contact         = lazy(() => import('../views/contact/Contact').then((module) => ({ default: module.Contact })))
const Error           = lazy(() => import('../views/error/Error').then((module) => ({ default: module.Error })))
const AboutMe         = lazy(() => import('../views/about-me/AboutMe').then((module) => ({ default: module.AboutMe })))
import { DrawerAppBar } from '../components/layout/navbar/DrawerAppBar'
import { WavyDivider } from '../components/items/WavyDivider'
import { AppFooter } from '../components/layout/footer/AppFooter'
import { Fab } from '@mui/material'
import { BtnScrollTop } from '../components/items/btnScrollTop'
import { KeyboardArrowUp } from '@mui/icons-material'
import ScrollToTop from '../components/items/ScrollToTop'
import { Loader } from '../components/items/Loader'
import { Box } from '../components/material-ui/Box'
import Breadcrumb from '../components/items/Breadcrumbs'

export const Router = ({darkMode, handleChangeTheme}, props) => {
  return (
    <Box sx={{bgcolor: "background.default"}}>
      <Suspense fallback={<Loader/>}>
        <BrowserRouter>
          <Box id="back-to-top-anchor" />
          <DrawerAppBar darkMode={darkMode} handleChangeTheme={handleChangeTheme}/>
            <ScrollToTop>
              <Breadcrumb/>
              <Routes>
                <Route path='/'             element={<Navigate to='/home'/>} />
                <Route path='/home/'        element={<Home/>} />
                <Route path='/projects'     element={<Projects/>} />
                <Route path="/projects/:id" element={<ProjectDetails/>} />
                <Route path='/blog/'        element={<Blog/>} />
                <Route path='/contact/'     element={<Contact/>} />
                <Route path='/about-me/'     element={<AboutMe/>} />
                <Route path='*'             element={<Error/>} />
              </Routes>
              <BtnScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top" color='primary'>
                  <KeyboardArrowUp/>
                </Fab>
              </BtnScrollTop>
            </ScrollToTop>
          <WavyDivider/>
          <AppFooter/>
        </BrowserRouter>
      </Suspense>
    </Box>
  )
}