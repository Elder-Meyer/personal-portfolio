import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Stack, Button, Chip, Link, CardMedia, Card, Toolbar, IconButton, Divider, Paper } from "@mui/material";
import { projects } from "./projectsData";
import { ArrowBackSharp, GitHub, Language } from "@mui/icons-material";
import { Link as LinkRoute } from "react-router-dom";
import { Typography } from "../../components/material-ui/Typography";
import { Box } from "../../components/material-ui/Box";

export const ProjectDetails = () => {
  const [project, setProject] = useState("");

  const params = useParams();

  useEffect(() => {
    let project = projects.filter((project) => project.id === params.id);
    setProject(project[0]);
  }, []);

  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      <Container maxWidth="xl">
        <Paper elevation={0} sx={{p: {xs:1, md:2, lg:3}}}>
          <Grid container spacing={2}>
            {/* TITULO */}
            <Grid item xs={12}>
              <Stack direction={{xs:"column", sm: "row"}} spacing={0} display="flex" alignItems="flex-start">
                <IconButton aria-label="back" component={LinkRoute} to="/projects">
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

            {/* GRID - PRINCIPAL DATA */}
            <Grid container item spacing={2}>
              {/* IMAGE CONTAINER */}
              <Grid item xs={12} sm={12} md={6} lg={7} xl={8}
                component={Stack}
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Card elevation={3}>
                  <CardMedia component="img"
                    height="180"
                    image={project.imgPrincipal}
                    alt={project.id}
                  />
                </Card>
              </Grid>
              {/* PRINCIPAL DATA CONTAINER */}
              <Grid container item xs={12} sm={12} md={6} lg={5} xl={4}>
                {/* ABOUT - INFO */}
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <Typography color="text.secondary" variant="caption" display="flex" justifyContent="flex-end">
                      {project.date}
                    </Typography>
                    <Divider />
                    <Typography color="primary.light" variant="h5" fontWeight={400}>
                      About
                    </Typography>
                    <Typography color="text.primary" variant="body1" sx={{textWrap: "pretty"}}>
                      {project.largeDescription}
                    </Typography>
                  </Stack>
                </Grid>
                {/* TECHNOLOGIES DATA CONTAINER */}
                <Grid item xs={12} component={Stack}>
                  <Stack spacing={1} justifyContent={"flex-end"}>
                    <Typography color="primary.light" variant="h5">
                      Technologies
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={0.5}>
                      { project && project.techs 
                        ? project.techs.map((tech, index) => (
                          <Chip key={index}
                            label={tech}
                            variant="filled" 
                          />
                        ))
                        : "No existe la propiedad techs"
                      }
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>

            {/* WEBSITE */}
            <Grid item xs={12} sm={6}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Language color="primary"/>
                <Link color="primary" variant="h5" href={project.href} target="_BLANK" underline="always">
                  Website
                </Link>
              </Stack>
            </Grid>

            {/* GITHUB */}
            <Grid item xs={12} sm={6}>
              <Stack direction="row" spacing={1} alignItems="center">
                <GitHub color="primary"/>
                <Link color="primary" variant="h5" href={project.repo} target="_BLANK" underline="always">
                  GitHub
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Paper>          
      </Container>
    </Box>
  );
};
