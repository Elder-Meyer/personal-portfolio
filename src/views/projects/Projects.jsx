import { Paper, Container, Box } from '@mui/material'
import React from 'react'
import { Web } from './Web';
import { Typography } from '../../components/material-ui/Typography';

export const Projects = () => {
  return (
    <Paper
      elevation={0}
      component="section"
      // aqui está lo importante si quieres hacer un cambio y poner el wavy divider
      sx={{
        display: "flex",
        borderRadius:0,
        alignItems: "center",
        pt: {xs: 15, sm: 0, md: 0, lg: 0, xl:0} ,
        pb:15,
        backgroundColor: "background.default",
        // border: "3px solid red",
      }}
    >
      <Container maxWidth="xl">
          <Typography textAlign="center" sx={{color: "white", fontSize: 40, fontWeight: 500}} gutterBottom>
            Projects
          </Typography>
          <Box 
            sx={{ 
              // borderBottom: 1, borderColor: 'divider' 
            }}
          >
            <Typography color="text.secondary" textAlign="center" sx={{fontSize: 18, my:3}}>
              Here you can see some of my created work.
            </Typography>
          </Box>
          {/* <BasicTabs/> */}
          <Web/>
      </Container>
      
    </Paper>
  );
}
