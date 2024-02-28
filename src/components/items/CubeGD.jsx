import cube from '../../assets/img/principal/cube-glow.webp'
import { CardMedia } from '../material-ui/CardMedia';

export function CubeGD({animation}){
  return(
    <CardMedia component="img"
      sx={{ aspectRatio: "42/42", width: 42, bgcolor: "transparent", userSelect: "none" }}
      image={cube}
      alt="just a simple cube from GD"
      title='just a cube'
    />
  )
}