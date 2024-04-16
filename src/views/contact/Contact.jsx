import { Grid, Stack } from '@mui/material';
import { FormContact } from './FormContact'

export const Contact = () => {
  return (
    <Stack direction="row" useFlexGap  minHeight={{xs: "auto", sm: "auto", md: "67vh"}} justifyContent="center" alignItems="center">
      <Grid container columnSpacing={2} >
        <Grid item xs={12}>
          <FormContact/>
        </Grid>
      </Grid>
    </Stack>
  );
}