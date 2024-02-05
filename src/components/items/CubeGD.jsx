import { Box, CardMedia } from '@mui/material';
import React from 'react';
import cube from '../../assets/img/principal/wave-glow.webp'

export function CubeGD({animation}){
  

  return(
    <CardMedia
      sx={{
          // mt: {xs: 10, sm: 5, md: 10}, 
          transform: "rotate(180deg)",
          width: {xs: 56, sm: 56, md: 56},
          bgcolor: "transparent",
      }}
      component="img"
      height={"100%"}
      image={cube}
      alt="just a simple cube from GD"
      title='just a cube'
    />
  )
}