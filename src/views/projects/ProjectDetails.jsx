import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "./projectsData";
import { ArrowBackSharp, GitHub, Language } from "@mui/icons-material";
import { Link as LinkRoute } from "react-router-dom";
// MATERIAL UI - LOCAL
import { Typography } from "../../components/material-ui/Typography";
import { Box } from "../../components/material-ui/Box";
import { CardMedia } from "../../components/material-ui/CardMedia";
import { Card } from "../../components/material-ui/Card";
import { Chip } from "../../components/material-ui/Chip";
import { Container } from "../../components/material-ui/Container";
import { Divider } from "../../components/material-ui/Divider";
import { Grid } from "../../components/material-ui/Grid";
import { IconButton } from "../../components/material-ui/IconButton";
import { Link } from "../../components/material-ui/Link";
import { Paper } from "../../components/material-ui/Paper";
import { Stack } from "../../components/material-ui/Stack";
import { useTranslation } from "react-i18next";

export const ProjectDetails = () => {
  const { t } = useTranslation();
  const [translatedProject, setTranslatedProject] = useState(null);
  const params = useParams();

  useEffect(() => {
    
    // Find the project based on the id from the params
    const foundProject = projects.find((project) => project.id === params.id);
    
    // Translate the project properties
    const translatedProject = translateProject(foundProject);
    
    // Set the translated project
    setTranslatedProject(translatedProject);
    
  }, [params.id, t]); // Update when id or language changes

  // Function to translate the project properties
  const translateProject = (project) => {
    const projectIdNumber = project.id.match(/\d+/)[0]; // Extrae el primer número encontrado en el id
    return {
      ...project,
      title:            t(`projectsdata.project${projectIdNumber}.title`),
      date:             t(`projectsdata.project${projectIdNumber}.date`),
      shortDescription: t(`projectsdata.project${projectIdNumber}.shortdescription`),
      largeDescription: t(`projectsdata.project${projectIdNumber}.largedescription`),
      // Add more properties to translate if needed
    };
  };

  if (!translatedProject){
    return <div>loading...</div>
  }

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
                  {translatedProject.title}
                </Typography>
              </Stack>
              <Divider />
            </Grid>

            {/* SUBTITULO */}
            <Grid item xs={12}>
              <Typography color="text.primary" variant="body1">
                {translatedProject.shortDescription}
              </Typography>
            </Grid>

            {/* GRID - PRINCIPAL DATA */}
            <Grid container item spacing={2}>
              {/* IMAGE CONTAINER */}
              <Grid container item xs={12} sm={12} md={6} lg={7} xl={8}
                component={Stack}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Card elevation={3}>
                  <CardMedia component="img"
                    height="180"
                    image={translatedProject.imgPrincipal}
                    alt={translatedProject.id}
                  />
                </Card>
              </Grid>
              {/* PRINCIPAL DATA CONTAINER */}
              <Grid container item xs={12} sm={12} md={6} lg={5} xl={4}>
                {/* ABOUT - INFO */}
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <Typography color="text.secondary" variant="caption" display="flex" justifyContent="flex-end">
                      {translatedProject.date}
                    </Typography>
                    <Divider />
                    <Typography color="primary.light" variant="h5" fontWeight={400}>
                      {t('projectsdetails.about')}
                    </Typography>
                    <Typography color="text.primary" variant="body1" sx={{textWrap: "pretty"}}>
                      {translatedProject.largeDescription}
                    </Typography>
                  </Stack>
                </Grid>
                {/* TECHNOLOGIES DATA CONTAINER */}
                <Grid item xs={12} component={Stack}>
                  <Stack spacing={1} justifyContent={"flex-end"}>
                    <Typography color="primary.light" variant="h5">
                      {t('projectsdetails.technologies')}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={0.5}>
                      { translatedProject && translatedProject.techs 
                        ? translatedProject.techs.map((tech, index) => (
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
                <Link color="primary" variant="h5" href={translatedProject.href} target="_BLANK" underline="always">
                  {t('projectsdetails.website')}
                </Link>
              </Stack>
            </Grid>

            {/* GITHUB */}
            <Grid item xs={12} sm={6}>
              <Stack direction="row" spacing={1} alignItems="center">
                <GitHub color="primary"/>
                <Link color="primary" variant="h5" href={translatedProject.repo} target="_BLANK" underline="always">
                  {t('projectsdetails.repo')}
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Paper>          
      </Container>
    </Box>
  );
};