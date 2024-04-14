import React from 'react'
import Typography from '@mui/material/Typography'
import { Container } from '../../components/material-ui/Container'
import { Box } from '../../components/material-ui/Box'
import { Toolbar } from '../../components/material-ui/Toolbar'
import { Paper } from '../../components/material-ui/Paper'
import Alert from '@mui/material/Alert';
import { Stack } from '../../components/material-ui/Stack'
import { styled, useTheme } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

export const BlogDetails = () => {
  const theme = useTheme()
  return (
    <>
    <Container maxWidth="md" sx={{ position: "relative", zIndex: 10 }}> 
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

      <div>
        <Accordion>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Collapsible Group Item #1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti est, natus reprehenderit consequuntur harum itaque assumenda ad voluptate earum corporis maxime aspernatur non, temporibus tempora error tenetur. Animi, dolorem! Doloremque!s
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Collapsible Group Item #2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur autem nemo nulla doloremque corporis recusandae qui at, a, quas ipsam! Voluptate, voluptatibus. Alias beatae quam et consectetur ex provident. Autem atque obcaecati eos, sit tempora, dolore voluptas reiciendis suscipit aliquam itaque dicta veritatis asperiores ipsum odit at? Nesciunt illo earum eum nisi harum provident accusantium cumque tempora maiores aliquam?
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
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

    </Container>
    <Box component="div" sx={{ width: {xs: 300, sm: 400, md: 500}, height: {xs: 300, sm: 400, md: 500}, filter: "blur(270px)", opacity: 0.8, position: "absolute", top: -50, right: 0, zIndex: 5 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <path fill={theme.palette.mode === "dark" ? "#5C62E0" : "#F5F5F5"} d="M25.36 226.56L25.36 20.92 222.12 20.92"></path>
        <path fill={theme.palette.mode === "dark" ? "#5C62E0" : "#F5F5F5"} d="M77.88 279.08L77.88 73.44 274.64 73.44"></path>
      </svg>
    </Box>
    <Box component="div" sx={{ width: {xs: 300, sm: 400, md: 500}, height: {xs: 300, sm: 400, md: 500}, filter: "blur(270px)", opacity: 0.4, position: "absolute", bottom: -700, left: 0, zIndex: 5 }}>
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 300 300">
        <rect width="157.42" height="157.42" x="125.36" y="121.07" fill={theme.palette.mode === "dark" ? "#5C62E0" : "#F5F5F5"} rx="20" ry="20"></rect>
        <rect width="83.59" height="83.59" x="21.68" y="17.39" fill={theme.palette.mode === "dark" ? "#5C62E0" : "#F5F5F5"} opacity="0.25" rx="10" ry="10"></rect>
        <rect width="140.6" height="140.6" x="63.47" y="59.19" fill={theme.palette.mode === "dark" ? "#152d73" : "#A8A8A8"} opacity="0.5" rx="15" ry="15"></rect>
      </svg>
    </Box>
    </>
  )
}

const bull = ( <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}>•</Box> );

const Accordion = styled((props) => ( <MuiAccordion disableGutters elevation={0} square {...props} /> ))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': { borderBottom: 0 },
  '&::before': { display: 'none' },
}));

const AccordionSummary = styled((props) => ( <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props}/> ))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': { transform: 'rotate(90deg)' },
  '& .MuiAccordionSummary-content': { marginLeft: theme.spacing(1) },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));