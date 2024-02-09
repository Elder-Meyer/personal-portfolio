import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '../styles/ScrollbarStyle.css'
const Home = lazy(() => import('../views/home/Home').then((module) => ({ default: module.Home })))
const Projects = lazy(() => import('../views/projects/Projects').then((module) => ({ default: module.Projects })))
const ProjectDetails = lazy(() => import('../views/projects/ProjectDetails').then((module) => ({ default: module.ProjectDetails })))
const Blog = lazy(() => import('../views/blog/Blog').then((module) => ({ default: module.Blog })))
const Contact = lazy(() => import('../views/contact/Contact').then((module) => ({ default: module.Contact })))
const Error = lazy(() => import('../views/error/Error').then((module) => ({ default: module.Error })))
const DrawerAppBar = lazy(() => import('../components/layout/navbar/DrawerAppBar').then((module) => ({ default: module.DrawerAppBar })))
const WavyDivider = lazy(() => import('../components/items/WavyDivider').then((module) => ({ default: module.WavyDivider })))
const AppFooter = lazy(() => import('../components/layout/footer/AppFooter').then((module) => ({ default: module.AppFooter })))
import { Box, Fab } from '@mui/material'
import { BtnScrollTop } from '../components/items/btnScrollTop'
import { KeyboardArrowUp } from '@mui/icons-material'
import ScrollToTop from '../components/items/ScrollToTop'
import { Loader } from '../components/items/Loader'

export const Router = (props) => {
  return (
    <Box sx={{backgroundColor: "background.paper"}}>
      <Suspense fallback={<Loader/>}>
        <BrowserRouter>
          <DrawerAppBar />
          <Box id="back-to-top-anchor" />

          <ScrollToTop>
            <Routes>
              <Route 
                path='/'                         
                element={<Navigate to='/home'/>}
              />
              <Route 
                path='/home/'                    
                element={
                    <Home/>
                } 
              />
              <Route 
                path='/projects'
                element={
                  <Projects/>
                }
              />
              <Route 
                path="/projects/:id"
                element={
                  <ProjectDetails/>
                }
              />
              <Route 
                path='/blog/'                    
                element={
                    <Blog/>
                } 
              />
              <Route 
                path='/contact/'                 
                element={
                    <Contact/>
                } 
              />
              <Route 
                path='*'                         
                element={
                    <Error/>
                } 
              />
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
