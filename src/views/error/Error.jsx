import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Typography } from '../../components/material-ui/Typography'
import { Button } from '../../components/material-ui/Button'
import { Container } from '../../components/material-ui/Container'
import { Grid } from '../../components/material-ui/Grid'
import { ArrowBack } from '@mui/icons-material'

export const Error = () => {
    const { t } = useTranslation();
    return (
        <Container maxWidth="lg" sx={{minHeight: {xs: "55vh", sm: "60vh", md: "67vh"}, display: "flex", alignItems: "center" }}>
            <Grid container columnSpacing={2} py={10}>
                <Grid item xs={12}>
                    <Typography color="text.secondary" variant='subtitle1' textAlign="center"> 404 </Typography>  
                </Grid>
                <Grid item xs={12}>
                    <Typography textAlign="center" sx={{fontSize: {xs: 40, sm: 50, md:60}, fontWeight: 700, color: "primary.main"}}> ¯\_(ツ)_/¯ </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography textAlign="center" gutterBottom sx={{fontSize: {xs: 40, sm: 50, md:60}, fontWeight: 700, color: "primary.main"}}> {t('error.title')} </Typography>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Button variant='contained' component={Link} to="/" startIcon={<ArrowBack/>}> {t('error.btn')} </Button>
                </Grid>
            </Grid>
        </Container>
    )
}