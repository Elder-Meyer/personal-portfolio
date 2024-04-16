import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
const Home            = lazy(() => import('../views/home/Home').then((module) => ({ default: module.Home })))
const Projects        = lazy(() => import('../views/projects/Projects').then((module) => ({ default: module.Projects })))
const ProjectDetails  = lazy(() => import('../views/projects/ProjectDetails').then((module) => ({ default: module.ProjectDetails })))
const Blog            = lazy(() => import('../views/blog/Blog').then((module) => ({ default: module.Blog })))
const BlogDetails     = lazy(() => import('../views/blog/BlogDetails').then((module) => ({ default: module.BlogDetails })))
const Contact         = lazy(() => import('../views/contact/Contact').then((module) => ({ default: module.Contact })))
const AboutMe         = lazy(() => import('../views/about-me/AboutMe').then((module) => ({ default: module.AboutMe })))
const Error           = lazy(() => import('../views/error/Error').then((module) => ({ default: module.Error })))
const Loader          = lazy(() => import('../components/items/Loader').then((module) => ({ default: module.Loader })))
const Breadcrumb      = lazy(() => import('../components/items/Breadcrumbs').then((module) => ({ default: module.Breadcrumb })))
const BtnScrollTop    = lazy(() => import('../components/items/btnScrollTop').then((module) => ({ default: module.BtnScrollTop })))
const DrawerAppBar    = lazy(() => import('../components/layout/navbar/DrawerAppBar').then((module) => ({ default: module.DrawerAppBar })))
const WavyDivider     = lazy(() => import('../components/items/WavyDivider').then((module) => ({ default: module.WavyDivider })))
const AppFooter       = lazy(() => import('../components/layout/footer/AppFooter').then((module) => ({ default: module.AppFooter })))
import { Box, Fab } from '@mui/material'
import { KeyboardArrowUp } from '@mui/icons-material'
import ScrollToTop from '../components/items/ScrollToTop'

export const Router = ({darkMode, handleChangeTheme}, props) => {
  return (
    // <Box sx={{bgcolor: "background.default"}}>
      <BrowserRouter>
        <Box id="back-to-top-anchor" />
        <ScrollToTop>
          <Suspense fallback={<Loader/>}>
            <DrawerAppBar darkMode={darkMode} handleChangeTheme={handleChangeTheme}/>
            <Breadcrumb/>
            <Routes>
              <Route path='/'             element={<Navigate to='/home'/>} />
              <Route path='/home/'        element={<Home/>} />
              <Route path='/projects'     element={<Projects/>} />
              <Route path="/projects/:id" element={<ProjectDetails/>} />
              <Route path='/blog/'        element={<Blog/>} />
              <Route path='/blog/post-01-1712600908448'     element={<BlogDetails/>} />
              <Route path='/contact/'     element={<Contact/>} />
              <Route path='/about-me/'     element={<AboutMe/>} />
              <Route path='*'             element={<Error/>} />
            </Routes>
            <BtnScrollTop {...props}>
              <Fab size="small" aria-label="scroll back to top" color='primary'>
                <KeyboardArrowUp/>
              </Fab>
            </BtnScrollTop>
            <WavyDivider/>
            <AppFooter/>
          </Suspense>
        </ScrollToTop>
      </BrowserRouter>
    // </Box>
  )
}