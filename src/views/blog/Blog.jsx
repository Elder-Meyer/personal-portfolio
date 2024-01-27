import { Box, Card, CardActionArea, CardMedia, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { WorkingOnThat } from '../../components/items/WorkingOnThat'

export const Blog = () => {
  return (
    <Box sx={{backgroundColor: "background.paper"}}>
      <Typography color="text.secondary" variant='h2' >
          Blog
      </Typography>  
      <WorkingOnThat />
    </Box>
  )
}
