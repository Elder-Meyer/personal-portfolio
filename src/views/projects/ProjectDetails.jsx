import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Typography, Container, Box, Grid, Toolbar, Button } from '@mui/material'
import { projects } from '../home/Projects/webProjects/projectsData';

export const ProjectDetails = () => {

  const [project, setProject] = useState("");

  const params = useParams();

  useEffect(()=>{
    let project = projects.filter(project => project.id === params.id);
    setProject(project[0]);
  }, [])

  return (
    <Box sx={{backgroundColor: "background.default"}}>

      <Container maxWidth="lg">
        <Grid container columnSpacing={1} rowSpacing={1}>
          <Grid item xs={12}>
            <Typography color="primary.light" variant="h4" fontWeight={800} sx={{lineHeight:4}}>
              {project.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="text.primary" variant="body1">
              {project.shortDescription}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={project.imgPrincipal} height="100px" width="700px"/>
          </Grid>
          <Grid item xs={12}>
            <Typography color="primary.light" variant="h5">
              About
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="text.primary" variant="body1">
              {project.description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="primary.light" variant="h5">
              Techonologies
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="text.primary" variant="body1">elder</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="primary.light" variant="h5">
              Website
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="text.primary" variant="body1">
              {project.toURL}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="primary.light" variant="h5">
              Github
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="text.primary" variant="body1">
              enlace a github
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              ir al proyecto
            </Button>
          </Grid>
        </Grid>
      </Container>

    </Box>
  )
}
