import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { Box, DialogActions, DialogContent, DialogTitle, useMediaQuery, useTheme, Slide } from "@mui/material";
import { OpenInNewOutlined, VisibilityOutlined } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, handleClose, Transition, project }) {
  console.log(project.id);
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        maxWidth="lg"
        disableScrollLock
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Toolbar sx={{borderBottom: 2, borderColor: 'divider', bgcolor: "background.paper"}}>
          <DialogTitle sx={{flex:1, fontWeight: 400, fontSize: {xs: 20, sm:25, md:30, lg:35}}} variant="h6" id="alert-dialog-title" color="primary.light" >
            {project.title}
          </DialogTitle>
          
          <IconButton
            edge="start"
            onClick={handleClose}
            aria-label="close"
            sx={{color: "error.main" }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </Toolbar>

        <DialogContent sx={{bgcolor: "background.paper"}}>
          <Box sx={{display: {xs: "none", sm: "none", md: "flex"}}}>
            <img
              width="100%"
              src={project.imgMd}
              alt={project.title}
            />
          </Box>
          <Box sx={{display: {xs: "none", sm: "flex", md: "none"}}}>
            <img
              width="100%"
              src={project.imgSm}
              alt={project.title}
            />
          </Box>
          <Box sx={{display: {xs: "flex", sm: "none", md: "none"}}}>
            <img
              width="100%"
              src={project.imgXs}
              alt={project.title}
            />
          </Box>
          {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions sx={{bgcolor: "background.paper"}} >
          <Button 
            variant="contained" /* onClick={handleClose} */
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
            Go
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
            View 
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
}
