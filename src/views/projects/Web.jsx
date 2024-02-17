import React, { forwardRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import FullScreenDialog from '../../components/items/FullScreenDialog';
import { projects } from './projectsData';
import { OpenInNewOutlined, VisibilityOutlined } from '@mui/icons-material';
// MATERIAL UI - LOCAL
import { Typography } from '../../components/material-ui/Typography';
import { CardMedia } from '../../components/material-ui/CardMedia';
import { Button } from '../../components/material-ui/Button';
import { Card } from '../../components/material-ui/Card';
import { CardActionArea } from '../../components/material-ui/CardActionArea';
import { CardActions } from '../../components/material-ui/CardActions';
import { CardContent } from '../../components/material-ui/CardContent';
import { Grid } from '../../components/material-ui/Grid';
import { Slide } from '../../components/material-ui/Slide';
import { Stack } from '../../components/material-ui/Stack';
import i18n from '../../config/lan/i18n';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Web = ({t}) => {
  const [translatedProjects, setTranslatedProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (project) => { setSelectedProject(project); setOpen(true); };

  const handleClose = () => { setOpen(false); };

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => { setHoveredCard(index); };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  useEffect(() => { updateTranslatedProjects(); }, [i18n.language]);

  const updateTranslatedProjects = () => {
    const updatedProjects = projects.map(project => {
        switch (project.id) {
            case "project-01-corazon-huasteco":
                return { 
                  ...project, 
                  title:            i18n.t("projectsdata.project01.title"),
                  date:             i18n.t("projectsdata.project01.date"),
                  shortDescription: i18n.t("projectsdata.project01.shortdescription"),
                  largeDescription: i18n.t("projectsdata.project01.largedescription"),
                };
            case "project-02-app-caih":
                return { 
                  ...project, 
                  title:            i18n.t("projectsdata.project02.title"),
                  date:             i18n.t("projectsdata.project02.date"),
                  shortDescription: i18n.t("projectsdata.project02.shortdescription"),
                  largeDescription: i18n.t("projectsdata.project02.largedescription"),
                };
            case "project-03-dulce-delicia":
                return { 
                  ...project, 
                  title:            i18n.t("projectsdata.project03.title"),
                  date:             i18n.t("projectsdata.project03.date"),
                  shortDescription: i18n.t("projectsdata.project03.shortdescription"),
                  largeDescription: i18n.t("projectsdata.project03.largedescription"),
                };
            case "project-04-fashion-fusion":
                return { 
                  ...project, 
                  title:            i18n.t("projectsdata.project04.title"),
                  date:             i18n.t("projectsdata.project04.date"),
                  shortDescription: i18n.t("projectsdata.project04.shortdescription"),
                  largeDescription: i18n.t("projectsdata.project04.largedescription"),
                };
            default:
                return { ...project };
        }
    });
    setTranslatedProjects(updatedProjects);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {translatedProjects.map((project, index) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index}>
              <Card
                elevation={0}
                sx={{
                  maxWidth: "100%",
                  transition: "0.2s",
                  borderRadius: 5,
                  transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                <CardActionArea onClick={() => handleClickOpen(project)} 
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  sx={{ /*border: "3px solid blue",*/ }}
                >
                  <CardMedia
                    component="img"
                    loading='lazy'
                    height="180"
                    image={project.imgPrincipal}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontWeight={500}
                      color="primary.main"
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.shortDescription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                
                <CardActions>
                  <Stack direction="row" spacing={0.5}>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: 5,
                        '&:hover': {
                          borderColor: "primary.light",
                        },
                        '&:hover svg': {
                          animation: "expand 1.1s /* infinite */"
                        },
                        '@keyframes expand': {
                          '0%': { transform: "scale(1)", transformOrigin: "left bottom" },
                          '50%': { transform: "scale(1.2)", transformOrigin: "left bottom" },
                          '100%': { transform: "scale(1)", transformOrigin: "left bottom" }
                        }
                      }}
                      component={Link}
                      target="_blank"
                      to={project.href}
                      endIcon={<OpenInNewOutlined/>}
                      disableElevation
                    >
                      {t('projects.pbtn')}
                    </Button>

                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: 5,
                        color: "text.secondary",
                        '&:hover svg': {
                          animation: "blink 1.1s /* infinite */"
                        },
                        '@keyframes blink': {
                          '0%': { transform: "scale(1)", opacity: 1 },
                          '50%': { transform: "scale(0.5)", opacity: 0 },
                          '100%': { transform: "scale(1)", opacity: 1 },
                        }
                      }}
                      component={Link}
                      to={`/projects/${project.id}/`}
                      endIcon={<VisibilityOutlined/>}
                    >
                      {t('projects.sbtn')}
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {selectedProject && (
        <FullScreenDialog
          t={t}
          open={open}
          handleClose={handleClose}
          Transition={Transition}
          project={selectedProject}
        />
      )}
    </>
  );
};
