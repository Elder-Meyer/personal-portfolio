import cube from '../../assets/img/principal/cube-glow.webp'
import { CardMedia } from '../material-ui/CardMedia';

export function CubeGD({animation}){
  return(
    <CardMedia component="img"
      image={cube}
      alt="just a simple cube from GD"
      title='just a cube'
      sx={{ 
        aspectRatio: "42/42", width: 42, bgcolor: "transparent", userSelect: "none",
        // animation: "hithere 1s ease infinite",
        // animation: "spin 4s infinite linear",
        animation: "swing 2s ease infinite",
        // animation: "wobble 3s ease infinite",
        '@keyframes hithere': {
          '30%':      { transform: "scale(1.1)" },
          '40%, 60%': { transform: "rotate(-5deg) scale(1.1)" },
          '50%':      { transform: "rotate(5deg) scale(1.1)" },
          '70%':      { transform: "rotate(0deg) scale(1.1)" },
          '100%':     { transform: "scale(1)" },
        },
        '@keyframes spin': {
          'from': { transform: "rotate(0deg)" },
          'to':   { transform: "rotate(360deg)" },
        },
        '@keyframes swing': {
          '20%': { transform: "rotate(15deg)" },
          '40%': { transform: "rotate(-10deg)" },
          '60%': { transform: "rotate(5deg)" },
          '80%': { transform: "rotate(-5deg)" },
          '100%':{ transform: "rotate(0)" },
        },
        '@keyframes wobble': {
          '0%':   { transform: "translateX(0%)" },
          '15%':  { transform: "translateX(-25%) rotate(-5deg)" },
          '30%':  { transform: "translateX(20%) rotate(3deg)" },
          '45%':  { transform: "translateX(-15%) rotate(-3deg)" },
          '60%':  { transform: "translateX(10%) rotate(2deg)" },
          '75%':  { transform: "translateX(-5%) rotate(-1deg)" },
          '100%': { transform: "translateX(0%)" },
        },
        
      }}
    />
  )
}