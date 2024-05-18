import { useEffect, useState } from 'react';
import cube from '../../assets/img/principal/cube-glow.webp'
import { CardMedia } from '@mui/material';


export function CubeGD({animate, large = 42}){
  const [animation, setAnimation] = useState( {animation: "", time: "", keyframes: {}} )

  useEffect(() => {
    changeAnimation(animate)
  }, [])

  const changeAnimation = (animationNum) =>{
    switch(animationNum){
      case 1:
        setAnimation({
          ...animation,
          animation: "spin",
          time: "4s infinite linear",
          keyframes: {
            'from': { transform: "rotate(0deg)" },
            'to':   { transform: "rotate(360deg)" },
          }
        });
        break;
      case 2:
        setAnimation({
          ...animation,
          animation: "elastic-spin",
          time: "3s infinite ease",
          keyframes: {
            'from': { transform: "rotate(0deg)" },
            'to':   { transform: "rotate(720deg)" },
          }
        });
        break;
      case 3:
        setAnimation({
          ...animation,
          animation: "hithere",
          time: "1s ease infinite",
          keyframes: {
            '30%':      { transform: "scale(1.1)" },
            '40%, 60%': { transform: "rotate(-5deg) scale(1.1)" },
            '50%':      { transform: "rotate(5deg) scale(1.1)" },
            '70%':      { transform: "rotate(0deg) scale(1.1)" },
            '100%':     { transform: "scale(1)" },
          }
        });
        break;
      case 4:
        setAnimation({
          ...animation,
          animation: "swing",
          time: "2s ease infinite",
          keyframes: {
            '20%': { transform: "rotate(15deg)" },
            '40%': { transform: "rotate(-10deg)" },
            '60%': { transform: "rotate(5deg)" },
            '80%': { transform: "rotate(-5deg)" },
            '100%':{ transform: "rotate(0)" },
          }
        });
        break;
      case 5:
        setAnimation({
          ...animation,
          animation: "wobble",
          time: "3s ease infinite",
          keyframes: {
            '0%':   { transform: "translateX(0%)" },
            '15%':  { transform: "translateX(-25%) rotate(-5deg)" },
            '30%':  { transform: "translateX(20%) rotate(3deg)" },
            '45%':  { transform: "translateX(-15%) rotate(-3deg)" },
            '60%':  { transform: "translateX(10%) rotate(2deg)" },
            '75%':  { transform: "translateX(-5%) rotate(-1deg)" },
            '100%': { transform: "translateX(0%)" },
          }
        });
        break;
      default :
        setAnimation({animation: "none", time: "", keyframes: {}});
        break;
    }
    console.log("animacion cambiado")
  }

  return(
    <CardMedia component="img"
      image={cube}
      width={`${large}px`}
      draggable="false"
      alt="Principal Image of the Website"
      title='Principal image'
      sx={{ 
        aspectRatio: "42/42", width: large, bgcolor: "transparent", userSelect: "none",
        '&:hover': {
          animation: `${animation.animation} ${animation.time}`,
        },
        [`@keyframes ${animation.animation}`]: animation.keyframes,
      }}
    />
  )
}