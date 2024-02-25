import { useTranslation } from 'react-i18next'
import { Container } from '../../components/material-ui/Container'
import { Grid } from '../../components/material-ui/Grid'
import { Typography } from '../../components/material-ui/Typography'
import { WorkingOnThat } from '../../components/items/WorkingOnThat'

export const Blog = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg" sx={{minHeight: {xs: "55vh", sm: "60vh", md: "67vh"}, display: "flex", alignItems: "center" }}>
      <Grid container columnSpacing={2} py={5}>
        <Grid item xs={12}>
          <Typography color="text.secondary" variant='subtitle1' textAlign="center"> {t('blog.title')} </Typography>  
        </Grid>
        <Grid item xs={12}>
          <WorkingOnThat />
        </Grid>
      </Grid>
    </Container>
  )
}