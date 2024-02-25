import { Box } from '../../components/material-ui/Box'
import { Grid } from '../../components/material-ui/Grid'
import { Stack } from '../../components/material-ui/Stack'
import { FormContact } from './FormContact'

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