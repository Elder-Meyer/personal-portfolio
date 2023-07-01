import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { WorkingOnThat } from '../../components/items/WorkingOnThat'

export const Contact = () => {
  return (
    <>
      <Typography variant='h2' sx={{mt:1}}>
          Contact
      </Typography>
      <WorkingOnThat />
    </>
  )
}
