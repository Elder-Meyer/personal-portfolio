import { Container } from "../../components/material-ui/Container";
import { Grid } from "../../components/material-ui/Grid";
import { Typography } from "../../components/material-ui/Typography";

export const AboutMe = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: { xs: "55vh", sm: "60vh", md: "67vh" }}}
    >
      <Grid container columnSpacing={2} py={3}>
        <Grid item xs={6}>
          <Typography
            color="text.secondary"
            variant="subtitle1"
          >
            contenido uno
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            color="text.secondary"
            variant="subtitle1"
          >
            contenido dos
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
