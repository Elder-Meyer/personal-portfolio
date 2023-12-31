import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Slide, Typography } from '@mui/material'
import React, { forwardRef, useState } from 'react'
import { Link } from 'react-router-dom';
import FullScreenDialog from '../../../../components/items/FullScreenDialog';
import { projects } from './projects';
import { OpenInNewOutlined, VisibilityOutlined } from '@mui/icons-material';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Web = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {projects.map((project, index) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={index}>
              <Card
                sx={{
                  bgcolor: "background.default",
                  maxWidth: "100%",
                  transition: "0.2s",
                  borderRadius: 5,
                  border: "2px solid",
                  borderColor: "secondary.dark",
                  "&:hover": {
                    transform: "scale(1.05)"
                  }
                }}
              >
                <CardActionArea onClick={() => handleClickOpen(project)}>
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
                      color="secondary.main"
                      fontWeight={500}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="secondary.light">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="medium"
                    color="primary"
                    variant="outlined"
                    sx={{
                      borderRadius: 5,
                      bgcolor: "background.paper",
                      color: "primary.light",
                      borderColor: "primary.main",
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
                    to={project.toURL}
                    endIcon={<OpenInNewOutlined/>}
                  >
                    Go
                  </Button>
                  <Button
                    size="medium"
                    color="primary"
                    variant="outlined"
                    sx={{
                      borderRadius: 5,
                      color: "primary.light",
                      bgcolor: "background.default",
                      '&:hover': {
                        borderColor: "primary.light",
                      },
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
                    to={project.id}
                    endIcon={<VisibilityOutlined/>}
                  >
                    View
                  </Button>
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
