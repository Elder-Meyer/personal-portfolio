import { Box, Tab, Tabs, TextField, Typography, Container } from '@mui/material'
import React, { useState } from 'react'
import BasicTabs from './BasicTabs';


export const Projects = () => {

  return (
    <Box
      component="section"
      // aqui está lo importante si quieres hacer un cambio y poner el wavy divider
      sx={{
        minHeight: "15rem",
        display: "flex",
        
        alignItems: "center",
        py: 4,
        backgroundColor: "background.paper",
        // border: "3px solid red",
      }}
    >
      <Container maxWidth="xl">
        <Typography textAlign="center" sx={{color: "white", fontSize: 45, fontWeight: 500}} gutterBottom>
          Projects
        </Typography>
        <Typography color="secondary.light" textAlign="center" sx={{fontSize: 18, my:3}}>
          Here you can see some of my created work.
        </Typography>
        <BasicTabs/>
      </Container>
      
    </Box>
  );
}
