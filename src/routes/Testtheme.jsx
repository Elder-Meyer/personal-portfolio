import React from "react";
import {
  Container,
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  Stack,
  Divider,
  Chip,
  List,
  ListItemAvatar,
  Avatar,
  ListItem,
  ListItemText,
  Toolbar,
  IconButton,
  AppBar
} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { Menu } from "@mui/icons-material";


export const Testtheme = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ backgroundColor: "background.default" }}>
        <Grid container spacing={5}>
          <Grid item xs={2}>
            <Card variant="outlined" sx={{ maxWidth: 460 }}>
              <Box sx={{ p: 2 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography gutterBottom variant="h5" component="div">
                    Toothbrush
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    $4.50
                  </Typography>
                </Stack>
                <Typography color="text.secondary" variant="body2">
                  Pinstriped cornflower blue cotton blouse takes you on a walk
                  to the park or just down the hall.
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body2">
                  Select type
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip color="primary" label="Soft" size="small" />
                  <Chip label="Medium" size="small" />
                  <Chip label="Hard" size="small" />
                </Stack>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Paper sx={{ p: 3, m: 3 }}>
              <Typography variant="h1" component="div">
                $429
              </Typography>
            </Paper>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="primary" enableColorOnDark>
                    {appBarLabel('enableColorOnDark')}
                </AppBar>
                <AppBar position="static" color="primary">
                    {appBarLabel('default')}
                </AppBar>
            </Stack>
          </Grid>
          <Grid item xs={5}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};


function appBarLabel(label) {
    return (
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Menu/>
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {label}
        </Typography>
      </Toolbar>
    );
  }