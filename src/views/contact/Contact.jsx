import React from 'react'
// MATERIAL UI - LOCAL
import { Box } from '../../components/material-ui/Box'
import { Container } from '../../components/material-ui/Container'
import { Grid } from '../../components/material-ui/Grid'
import { FormContact } from './FormContact'
import { Stack } from '../../components/material-ui/Stack'

export const Contact = () => {
  return (
    <Box sx={{ backgroundColor: "background.default"}}>
      <Stack direction="row" useFlexGap  minHeight="60vh" justifyContent="center" alignItems="center">
        <Container maxWidth="lg">
          <Grid container columnSpacing={2} pt={5}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <FormContact/>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
}
