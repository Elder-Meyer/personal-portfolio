import { Box, Card, CardActionArea, CardMedia, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { WorkingOnThat } from '../../components/items/WorkingOnThat'

export const Blog = () => {
  return (
    <>
      <Typography variant='h2' sx={{mt:1}}>
          Blog
      </Typography>  
      <WorkingOnThat />
    </>
  )
}
