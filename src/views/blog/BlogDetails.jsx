import React from 'react'
import Typography from '@mui/material/Typography'
import { Container } from '../../components/material-ui/Container'
import { Box } from '../../components/material-ui/Box'
import { Toolbar } from '../../components/material-ui/Toolbar'
import { Paper } from '../../components/material-ui/Paper'
import Alert from '@mui/material/Alert';
import { Stack } from '../../components/material-ui/Stack'

export const BlogDetails = () => {
  return (
    <Container maxWidth="md">
      <Toolbar variant='dense' sx={{display: {xs: "none", md: "block"} }}/>
      <Typography variant="h1" component="h1" fontWeight={600} fontSize={36} gutterBottom>
        Las diferentes formas de centrar un elemento en CSS.
      </Typography>
      <Typography variant="caption" component="div" fontSize={12} paragraph>
        18 Marzo 2024 {bull} 5 minutos de lectura     
      </Typography>
      <Typography variant="body2" component="p" fontSize={18} paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam provident veritatis beatae molestiae. Dolor quos explicabo, pariatur ratione ipsa quo rerum soluta magni a maiores ad non sit repellat nulla?
        Voluptates voluptatibus similique recusandae sunt eum quasi sequi odio iusto animi, placeat aperiam fugiat neque optio fugit, praesentium ullam labore voluptatem necessitatibus hic quos maiores officia sed dicta? Distinctio, ipsum!
      </Typography>
      <Typography variant="body2" component="p" fontSize={18} paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quod obcaecati expedita impedit atque quae quos placeat explicabo porro, odio hic voluptates, sapiente possimus ad animi nesciunt maiores fugit suscipit.
      </Typography>
      <br/>

      <Typography variant="h2" component="h2" fontWeight={600} fontSize={24} paragraph>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
      <Typography variant="body2" component="p" fontSize={18} paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam provident veritatis beatae molestiae. Dolor quos explicabo, pariatur ratione ipsa quo rerum soluta magni a maiores ad non sit repellat nulla?
      </Typography>
      <Typography variant="body2" component="p" fontSize={18} paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quod obcaecati expedita impedit atque quae quos placeat explicabo porro, odio hic voluptates, sapiente possimus ad animi.
      </Typography>
      <br/>
      <Stack spacing={2}>
        <Alert variant="standard" severity="success">
          This is a filled success Alert.
        </Alert>
        <Paper sx={{p:6}} variant='elevation' elevation={1}></Paper>
      </Stack>
      <Toolbar variant="dense" />
      
      
      <Typography variant="h2" component="h2" fontWeight={600} fontSize={24} paragraph>2. Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
      <Typography variant="body2" component="p" fontSize={18} paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam provident veritatis beatae molestiae. Dolor quos explicabo, pariatur ratione ipsa quo rerum soluta magni a maiores ad non sit repellat nulla?
      </Typography>
      <Typography variant="body2" component="p" fontSize={18} paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quod obcaecati expedita impedit atque quae quos placeat explicabo porro, odio hic voluptates, sapiente possimus ad animi.
      </Typography>
      <br/>
      <Stack spacing={2}>
        <Alert variant="standard" severity="info">
          This is a filled success Alert.
        </Alert>
        <Paper sx={{p:6}} variant='elevation' elevation={1}></Paper>
      </Stack>
      <Toolbar variant="dense" />
      
      
      <Typography variant="h2" component="h2" fontWeight={600} fontSize={24} paragraph>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
      <Typography variant="body2" component="p" fontSize={18} paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam provident veritatis beatae molestiae. Dolor quos explicabo, pariatur ratione ipsa quo rerum soluta magni a maiores ad non sit repellat nulla?
      </Typography>
      <Typography variant="body2" component="p" fontSize={18} paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quod obcaecati expedita impedit atque quae quos placeat explicabo porro, odio hic voluptates, sapiente possimus ad animi.
      </Typography>
      <br/>
      <Stack spacing={2}>
        <Alert variant="standard" severity="warning">
          This is a filled success Alert.
        </Alert>
        <Paper sx={{p:6}} variant='elevation' elevation={1}></Paper>
      </Stack>
      <Toolbar variant="dense" />
      

      <Typography variant="h2" component="h2" fontWeight={600} fontSize={24} paragraph>4. Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
      <Typography variant="body2" component="p" fontSize={18} paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam provident veritatis beatae molestiae. Dolor quos explicabo, pariatur ratione ipsa quo rerum soluta magni a maiores ad non sit repellat nulla?
      </Typography>
      <Typography variant="body2" component="p" fontSize={18} paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quod obcaecati expedita impedit atque quae quos placeat explicabo porro, odio hic voluptates, sapiente possimus ad animi.
      </Typography>
      <br/>
      <Stack spacing={2}>
        <Alert variant="standard" severity="error">
          This is a filled success Alert.
        </Alert>
        <Paper sx={{p:6}} variant='elevation' elevation={1}></Paper>
      </Stack>
      <Toolbar variant="dense" />


      <Box component="div" sx={{ width: {xs: 280, md: 500}, height: {xs: 280, md: 500}, filter: "blur(270px)", opacity: 0.8, position: "absolute", top: -50, right: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
          <path fill="#5C62E0" d="M25.36 226.56L25.36 20.92 222.12 20.92"></path>
          <path fill="#5C62E0" d="M77.88 279.08L77.88 73.44 274.64 73.44"></path>
        </svg>
      </Box>
      <Box component="div" sx={{ width: {xs: 280, md: 500}, height: {xs: 280, md: 500}, filter: "blur(270px)", opacity: 0.4, position: "absolute", bottom: -700, left: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 300 300">
          <rect width="157.42" height="157.42" x="125.36" y="121.07" fill="#5C62E0" rx="20" ry="20"></rect>
          <rect width="83.59" height="83.59" x="21.68" y="17.39" fill="#6b789b" opacity="0.25" rx="10" ry="10"></rect>
          <rect width="140.6" height="140.6" x="63.47" y="59.19" fill="#152d73" opacity="0.5" rx="15" ry="15"></rect>
        </svg>
      </Box>
    </Container>
  )
}

const bull = ( <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}>•</Box> );