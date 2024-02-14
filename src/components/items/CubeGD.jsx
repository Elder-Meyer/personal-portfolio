import React from 'react';
import cube from '../../assets/img/principal/cube-glow.webp'
import { CardMedia } from '../material-ui/CardMedia';

export function CubeGD({animation}){
  return(
    <CardMedia
      sx={{
          // mt: {xs: 10, sm: 5, md: 10}, 
          transform: "rotate(180deg)",
          width: 42,
          bgcolor: "transparent",
          userSelect: "none"
      }}
      component="img"
      height={"100%"}
      image={cube}
      alt="just a simple cube from GD"
      title='just a cube'
    />
  )
}