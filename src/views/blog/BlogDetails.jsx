import React from 'react'
import Typography from '@mui/material/Typography'
import { Container } from '../../components/material-ui/Container'
import { Box } from '../../components/material-ui/Box'

export const BlogDetails = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" fontWeight={600}>
        Como centrar un div en CSS
      </Typography>
      <Typography variant="caption" paragraph>
        5 agosto 2021 {bull} 3 minutos de lectura     
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ '& > span': { fontWeight: 600 } }}>
        Si hay una broma recurrente en CSS siempre ha sido <span>la dificultad de centrar un elemento tanto horizontal como verticalmente en condiciones.</span> Durante muchos años nos han acompañado multitud de hacks para poder conseguirlo… pero hoy en día ya no es necesario.
      </Typography>
      <Typography gutterBottom>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo maiores ullam omnis ratione dolore reiciendis quaerat cum! Impedit accusantium magnam odit harum? Accusamus ducimus nam officiis est, culpa ullam blanditiis.</Typography>
      <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus a ad in delectus quisquam iusto quaerat animi, dolorum amet modi exercitationem ducimus reiciendis neque omnis numquam, odio laboriosam nam non?</Typography>
    </Container>
  )
}


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
