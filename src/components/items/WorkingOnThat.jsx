import React from 'react'
import { Typography } from '../material-ui/Typography'
import { Grid } from '../material-ui/Grid'

export const WorkingOnThat = () => {
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
                    I´m working on that.
                </Typography>
            </Grid>
        </Grid>
    </>
  )
}
