import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Typography, Button, Container, Grid, Stack } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { CubeGD } from '../../components/items/CubeGD'

export const Error = () => {
    const { t } = useTranslation();
    return (
        <Container maxWidth="lg" sx={{minHeight: {xs: "55vh", sm: "60vh", md: "67vh"}, display: "flex", alignItems: "center" }}>
            <Grid container columnSpacing={2} py={10}>
                <Grid item xs={12}>
                    <Typography color="text.secondary" variant='subtitle1' textAlign="center" gutterBottom> 404 </Typography>  
                </Grid>
                <Grid item xs={12}>
                    <Stack width="100%" justifyContent="center" direction="row">
                        <CubeGD animate={5} large={100}/>
                    </Stack>
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