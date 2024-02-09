import { Box, Button, Grid, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowBack,  } from '@mui/icons-material'
import { Typography } from '../../components/material-ui/Typography'

export const Error = () => {
  return (
    <Box sx={{backgroundColor: "background.default"}}>
        <Container maxWidth="lg">
            <Grid container columnSpacing={2} py={10}>
                <Grid item xs={12}>
                    <Typography  
                        textAlign="center"
                        sx={{fontSize: {xs: 40, sm: 50, md:60}, fontWeight: 700, color: "primary.main"}}
                    >
                        ¯\_(ツ)_/¯
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography  
                        textAlign="center"
                        gutterBottom
                        sx={{fontSize: {xs: 40, sm: 50, md:60}, fontWeight: 700, color: "primary.main"}}
                    >
                        There is nothing here. 
                    </Typography>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Button variant='contained' component={Link} to="/" startIcon={<ArrowBack/>}>
                        back to home
                    </Button>
                </Grid>
            </Grid>
       
        </Container>
    </Box>
  )
}
