import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Typography, Container, Box, Grid} from '@mui/material'
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
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="text.primary">
              {project.id}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="text.primary">
              {project.title}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="text.primary">
              {project.shortDescription}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="text.primary">
              {project.description}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="text.primary">
              {project.toURL}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
