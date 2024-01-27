import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { WorkingOnThat } from '../../components/items/WorkingOnThat'

export const Contact = () => {
  return (
    <Box sx={{backgroundColor: "background.paper"}}>
      <Typography color="text.secondary" variant='h2' >
          Contact
      </Typography>
      <WorkingOnThat />
    </Box>
  )
}
