import { Box, Grid, Container } from '@mui/material'
import React from 'react'
import { WorkingOnThat } from '../../components/items/WorkingOnThat'
import { Typography } from '../../components/material-ui/Typography'

export const Contact = () => {
  return (
    <Box sx={{backgroundColor: "background.default"}}>
      <Container maxWidth="lg">
        <Grid container columnSpacing={2} py={5}>
          <Grid item xs={12}>
            <Typography color="text.secondary" variant='subtitle1' textAlign="center" >
                Contact
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <WorkingOnThat />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
