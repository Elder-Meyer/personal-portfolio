import { Box, CardMedia, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ponyDoubleNodBlinking from '../../assets/img/pony/ponyDoubleNodBlinking.gif'

export const WorkingOnThat = () => {
  return (
    <>
        <Container maxWidth="xs" sx={{mt: {xs: 10, sm: 5, md: 5}, }}>
            <Typography  
                textAlign="center"
                sx={{fontSize: {xs: 40, sm: 50, md:60}, fontWeight: 700, color: "primary.main"}}
            >
                {"(◕‿↼)"}
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
                    image={ponyDoubleNodBlinking}
                    alt="ponyDoubleNodBlinking"
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
            I´m working on that.
        </Typography>
        
    </>
  )
}
