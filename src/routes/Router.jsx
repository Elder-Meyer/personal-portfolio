import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '../styles/ScrollbarStyle.css'
const Blog = lazy(() => import('../views/blog/Blog').then((module) => ({ default: module.Blog })))
const Contact = lazy(() => import('../views/contact/Contact').then((module) => ({ default: module.Contact })))
const Error = lazy(() => import('../views/error/Error').then((module) => ({ default: module.Error })))
import DrawerAppBar from '../components/layout/navbar/DrawerAppBar'
import { Box, Fab } from '@mui/material'
import { BtnScrollTop } from '../components/items/btnScrollTop'
import { KeyboardArrowUp } from '@mui/icons-material'
import AppFooter from '../components/layout/footer/AppFooter'
import ScrollToTop from '../components/items/ScrollToTop'
import { WavyDivider } from '../components/items/WavyDivider'
import { Loader } from '../components/items/Loader'
import { Home } from '../views/home/Home'
import { ProjectDetails } from '../views/projects/ProjectDetails'
import { Projects } from '../views/projects/Projects'
import { Testtheme } from './Testtheme'

export const Router = (props) => {
  return (
    <Box sx={{backgroundColor: "background.paper"}}>
      <BrowserRouter>
          <DrawerAppBar />
          <Box id="back-to-top-anchor" />

          <ScrollToTop>
            <Suspense fallback={<Loader/>}>
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
                  path='/test-palette-theme/'                    
                  element={
                      <Testtheme/>
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
            </Suspense>

            <BtnScrollTop {...props}>
              <Fab size="small" aria-label="scroll back to top" 
                sx={{
                  bgcolor: 'primary.light',
                  color: 'background.default',
                  '&:hover': {
                    bgcolor: "background.default", 
                    color: "primary.light", 
                  },
                }}
              >
                  <KeyboardArrowUp />
              </Fab>
            </BtnScrollTop>
          </ScrollToTop>
          
          <WavyDivider/>
          <AppFooter/>
      </BrowserRouter>
    </Box>
  )
}
