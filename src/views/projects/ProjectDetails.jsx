import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Container, Box, Grid, Stack, Button, Chip, Link, CardMedia, Card, Toolbar, IconButton, Divider, Paper } from "@mui/material";
import { projects } from "../home/Projects/webProjects/projectsData";
import { ArrowBackSharp } from "@mui/icons-material";
import { Link as LinkRoute } from "react-router-dom";

export const ProjectDetails = () => {
  const [project, setProject] = useState("");

  const params = useParams();

  useEffect(() => {
    let project = projects.filter((project) => project.id === params.id);
    setProject(project[0]);
  }, []);

  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          {/* TITULO */}
          <Grid item xs={12}>
            <Stack direction={{xs:"column", sm: "row"}} spacing={0} display="flex" alignItems="flex-start">
              <IconButton aria-label="back"
                component={LinkRoute}
                to="/projects"
              >
                <ArrowBackSharp />
              </IconButton>
              <Typography color="primary.light" variant="h4" fontWeight={800}>
                {project.title}
              </Typography>
            </Stack>
            <Divider />
          </Grid>

          {/* SUBTITULO */}
          <Grid item xs={12}>
            <Typography color="text.primary" variant="body1">
              {project.shortDescription}
            </Typography>
          </Grid>

          {/* USO DE GRID PURO */}
          {/* GRID - PRINCIPAL DATA */}
          <Grid container item display="grid" gap={2}
            gridTemplateRows="auto" //repeat(2, 1fr)
            gridTemplateColumns="repeat(4, 1fr)"
          >
            {/* IMAGEN */}
            <Grid container item
              gridRow={{ xs: "1", md: "1 / span 2", lg: "span 2" }}
              gridColumn={{ xs: "1 / -1", md: "1 / span 2", lg: "span 3" }}
            >
              <Card elevation={3} sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={project.imgPrincipal}
                  alt={project.id}
                />
              </Card>
            </Grid>

            {/* SOBRE */}
            <Grid container item
              gridRow={{ xs: "2", md: "1", lg: "1" }}
              gridColumn={{ xs: "1 / -1", md: "3 / span 2", lg: "4" }}
            >
              <Grid item xs={12}>
                <Typography color="text.secondary" variant="caption" display="flex" justifyContent="flex-end">
                  {project.date}
                </Typography>
                <Divider />
                <br/>
                <Typography color="primary.light" variant="h5" fontWeight={400}>
                  About
                </Typography>
                <Typography color="text.primary" variant="body1">
                  {project.largeDescription}
                </Typography>
              </Grid>
            </Grid>

            {/* TECNOLOGÍAS */}
            <Grid container item
              gridRow={{ xs: "3", md: "2", lg: "2" }}
              gridColumn={{ xs: "1 / -1", md: "3 / span 2", lg: "4" }}
            >
              <Grid item>
                <Typography color="primary.light" variant="h5">
                  Techonologies
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={0.5}>
                  { project && project.techs 
                      ? project.techs.map((tech, index) => (
                        <Chip 
                          key={index}
                          label={tech}
                          variant="outlined" 
                        />
                      ))
                      : "No existe la propiedad techs"
                  }
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* WEBSITE */}
          <Grid container item spacing={0}>
            <Grid item>
              <Typography color="primary.light" variant="h5">
                Website
              </Typography>
              <Typography color="text.primary" variant="body1">
                <Link href={project.href} target="_BLANK">
                  {project.href}
                </Link>
              </Typography>
            </Grid>
          </Grid>

          {/* GITHUB */}
          <Grid container item spacing={0}>
            <Grid item>
              <Typography color="primary.light" variant="h5">
                Github
              </Typography>
              <Typography color="text.primary" variant="body1">
                <Link href={project.repo} target="_BLANK">
                  {project.repo}
                </Link>
              </Typography>
            </Grid>
          </Grid>

          {/* IRA AL PROYECTO */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth href={project.href} target="_BLANK">
              Go to Project
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
