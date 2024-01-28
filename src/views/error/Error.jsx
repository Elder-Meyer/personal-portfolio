import { Box, Button, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import ponyHeadShakeBlinking from '../../assets/img/pony/ponyHeadShakeBlinking.gif'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <Box sx={{backgroundColor: "background.paper"}}>
        <Container maxWidth="xs" sx={{pt: {xs: 10, sm: 5, md: 10}, }}>
            <Typography  
                textAlign="center"
                sx={{fontSize: {xs: 40, sm: 50, md:60}, fontWeight: 700, color: "primary.main"}}
            >
                ¯\_(ツ)_/¯
            </Typography>
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <CardMedia
                    sx={{
                        // mt: {xs: 10, sm: 5, md: 10}, 
                        width: {xs: "60%", sm: "70%", md:"60%"},
                        bgcolor: "transparent",
                    }}
                    component="img"
                    height={"100%"}
                    image={ponyHeadShakeBlinking}
                    alt="ponyHeadShakeBlinking"
                />
            </Box>
        </Container>
        {/* <Typography  
            textAlign="center"
            sx={{fontSize: {xs: 40, sm: 50, md:60}, fontWeight: 700, color: "primary.main"}}
        >
            ¯\_(ツ)_/¯
        </Typography> */}
        <Typography  
            textAlign="center"
            sx={{fontSize: {xs: 40, sm: 50, md:60}, fontWeight: 700, color: "primary.main"}}
        >
            There is nothing here. 
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center", pb: 5}}>
            <Button variant='contained' component={Link} to="/">
                back to home
            </Button>
        </Box>
    </Box>
  )
}
