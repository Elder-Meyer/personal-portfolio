import React from 'react';
import './pixelart.css'
import { Container, Grid } from '@mui/material';

const CatGrid = () => {
  return (
    <Container maxWidth="md">
        <Grid container spacing={2} columns={40}>
            <Grid item sx={{background: "white"}}       xs={6}></Grid>
            <Grid item sx={{background: "#052516"}}   xs={5}></Grid>
            <Grid item sx={{background: "white"}}       xs={6}></Grid>
            <Grid item sx={{background: "#052516"}}   xs={1}></Grid>
            <Grid item sx={{background: "white"}}       xs={22}></Grid>


            <Grid item sx={{background: "white"}}       xs={4}></Grid>
            <Grid item sx={{background: "#003e43"}}   xs={2}></Grid>
            <Grid item sx={{background: "#005960"}}   xs={2}></Grid>
            <Grid item sx={{background: "#123524"}}   xs={3}></Grid>
            <Grid item sx={{background: "#052516"}}   xs={2}></Grid>
            <Grid item sx={{background: "white"}}       xs={3}></Grid>
            <Grid item sx={{background: "#052516"}}   xs={2}></Grid>
            <Grid item sx={{background: "white"}}       xs={22}></Grid>


            <Grid item sx={{background: "white"}}       xs={3}></Grid>
            <Grid item sx={{background: "#003e43"}}   xs={2}></Grid>
            <Grid item sx={{background: "#005960"}}   xs={2}></Grid>
            <Grid item sx={{background: "#123524"}}   xs={6}></Grid>
            <Grid item sx={{background: "#052516"}}   xs={1}></Grid>
            <Grid item sx={{background: "white"}}       xs={1}></Grid>
            <Grid item sx={{background: "#052516"}}   xs={1}></Grid>
            <Grid item sx={{background: "#123524"}}   xs={1}></Grid>
            <Grid item sx={{background: "#052516"}}   xs={1}></Grid>
            <Grid item sx={{background: "white"}}       xs={22}></Grid>


            
        </Grid>
    </Container>

  );
};

export default CatGrid;
