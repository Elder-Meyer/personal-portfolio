import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../views/home/Home'
import { Blog } from '../views/blog/Blog'
import DrawerAppBar from '../components/layout/navbar/DrawerAppBar'
import { Contact } from '../views/contact/Contact'
import { Error } from '../views/error/Error'
import { Box, Fab, Toolbar } from '@mui/material'
import { BtnScrollTop } from '../components/items/btnScrollTop'
import { KeyboardArrowUp } from '@mui/icons-material'
import AppFooter from '../components/layout/footer/AppFooter'
import ScrollToTop from '../components/items/ScrollToTop'
import { DividerCurve } from '../components/items/DividerCurve'
import { WavyDivider } from '../components/items/WavyDivider'

export const Router = (props) => {
  return (
    <BrowserRouter>
        <DrawerAppBar />
        <Box id="back-to-top-anchor" />

        <ScrollToTop>
          <Routes>
              <Route path='/'                         element={<Navigate to='/home'/>}/>
              <Route path='/home/'                    element={<Home/>} />
              <Route path='/blog/'                    element={<Blog/>} />
              <Route path='/contact/'                 element={<Contact/>} />
              <Route path='*'                         element={<Error/>} />
          </Routes>

          <BtnScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top" 
              sx={{
                bgcolor: "background.default", color: "primary.light", 
                '&:hover': {
                  bgcolor: 'primary.light',
                  color: 'background.default'
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
  )
}
