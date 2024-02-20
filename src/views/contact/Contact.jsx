import React from 'react'
// MATERIAL UI - LOCAL
import { Box } from '../../components/material-ui/Box'
import { Grid } from '../../components/material-ui/Grid'
import { FormContact } from './FormContact'
import { Stack } from '../../components/material-ui/Stack'

export const Contact = () => {
  return (
    <Box sx={{ backgroundColor: "background.default"}}>
      <Stack direction="row" useFlexGap  minHeight={{xs: "auto", sm: "auto", md: "60vh"}} justifyContent="center" alignItems="center">
        <Grid container columnSpacing={2} >
          <Grid item xs={12}>
            <FormContact/>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
