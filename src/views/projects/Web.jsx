import React, { forwardRef, useState } from 'react'
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

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Web = ({t}) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {projects.map((project, index) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index}>
              <Card
                elevation={0}
                sx={{
                  maxWidth: "100%",
                  transition: "0.2s",
                  borderRadius: 5,
                  // border: "3px solid red",
                  // border: "2px solid",
                  // borderColor: "secondary.dark",
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
          open={open}
          handleClose={handleClose}
          Transition={Transition}
          project={selectedProject}
        />
      )}
    </>
  );
};
