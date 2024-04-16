import { useTranslation } from 'react-i18next';
import { CubeGD } from './CubeGD';
import { Typography, Grid, Stack } from '@mui/material'

export const WorkingOnThat = () => {
    const { t } = useTranslation();
    return (
        <Grid container spacing={2} py={5}>
            <Grid item xs={12}>
                <Stack width="100%" justifyContent="center" direction="row">
                    <CubeGD animate={2} large={100}/>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Typography textAlign="center" sx={{fontSize: {xs: 40, sm: 50, md:60}, fontWeight: 700, color: "primary.main"}}>
                    {t('workon.title')}
                </Typography>
            </Grid>
        </Grid>
    )
}