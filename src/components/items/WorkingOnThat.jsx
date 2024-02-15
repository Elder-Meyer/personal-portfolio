import React from 'react'
import { Typography } from '../material-ui/Typography'
import { Grid } from '../material-ui/Grid'
import { useTranslation } from 'react-i18next';

export const WorkingOnThat = () => {
    const { t } = useTranslation();
  return (
    <>
        <Grid container spacing={2} py={5}>
            <Grid item xs={12}>
                <Typography  
                    textAlign="center"
                    sx={{fontSize: {xs: 40, sm: 50, md:60}, fontWeight: 700, color: "primary.main"}}
                >
                    {"(◕‿↼)"}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography  
                    textAlign="center"
                    sx={{fontSize: {xs: 40, sm: 50, md:60}, fontWeight: 700, color: "primary.main"}}
                >
                    {t('workon.title')}
                </Typography>
            </Grid>
        </Grid>
    </>
  )
}
