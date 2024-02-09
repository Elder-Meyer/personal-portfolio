import React from 'react'
import { WorkingOnThat } from '../../components/items/WorkingOnThat'
// MATERIAL UI - LOCAL
import { Typography } from '../../components/material-ui/Typography'
import { Box } from '../../components/material-ui/Box'
import { Container } from '../../components/material-ui/Container'
import { Grid } from '../../components/material-ui/Grid'

export const Blog = () => {
  return (
    <Box sx={{backgroundColor: "background.default"}}>
      <Container maxWidth="lg">
        <Grid container columnSpacing={2} py={5}>
          <Grid item xs={12}>
            <Typography color="text.secondary" variant='subtitle1' textAlign="center">
                Blog
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
