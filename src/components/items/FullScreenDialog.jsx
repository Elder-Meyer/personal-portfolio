import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import { Box, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { OpenInNewOutlined, VisibilityOutlined } from "@mui/icons-material";

export default function FullScreenDialog({
  open,
  handleClose,
  Transition,
  project,
}) {
  console.log(project.id);

  return (
    <div>

      <Dialog
        fullWidth
        maxWidth="lg"
        disableScrollLock
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

          <Toolbar>
            
            {/* <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" color="secondary.light" fontWeight={500}>
              {project.title}
            </Typography> */}
            <DialogTitle sx={{flex:1, fontWeight: 900, fontSize: {xs: 25, sm:30, md:35}}} variant="h6" id="alert-dialog-title" color="secondary.light" >
              {project.title}
            </DialogTitle>
            
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{color: "primary.light"}}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>

        <DialogContent>
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
        <DialogActions /* sx={{bgcolor: "background.default"}} */>
          <Button variant="outlined" /* onClick={handleClose} */
            component={Link}
            target="_blank"
            to={project.toURL}
            sx={{
              borderRadius: 5,
              color: "primary.light",
              bgcolor: "background.default",
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
            endIcon={<OpenInNewOutlined/>}
            size="large"
          >
            Go
          </Button>
          <Button variant="outlined" onClick={handleClose} autoFocus
            component={Link}
            to={project.id}
            sx={{
              borderRadius: 5,
              color: "primary.light",
              borderColor: "primary.main",
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
            endIcon={<VisibilityOutlined/>}
            size="large"
          >
            View 
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
}
