import { useTranslation } from 'react-i18next'
import { Container } from '../../components/material-ui/Container'
import { Grid } from '../../components/material-ui/Grid'
import { Typography } from '../../components/material-ui/Typography'
import { CardContent } from '../../components/material-ui/CardContent'
import { CardActions } from '../../components/material-ui/CardActions'
import { Button } from '../../components/material-ui/Button'
import { Box } from '../../components/material-ui/Box'
import { Card } from '../../components/material-ui/Card'
import { CardMedia } from '../../components/material-ui/CardMedia'
import { Link } from "react-router-dom"
// import { useEffect, useState } from 'react'
// import { getItems } from '../../app/api'

export const Blog = () => {
  const { t } = useTranslation();
  // const [projects, setProjects] = useState(null)

  // const getProjectsData = async() => {
  //   const p = await getItems();
  //   setProjects(p)
  // }

  // useEffect(() =>{
  //   getProjectsData();
  //   console.log("projects =>", projects)
  // }, [])
  return (
    <Container maxWidth="lg" sx={{minHeight: {xs: "55vh", sm: "60vh", md: "67vh"}, display: "flex", alignItems: "flex-start" }}>
      <Grid container spacing={2} py={1}>
        <Grid item xs={12}>
          <Typography color="text.secondary" variant='subtitle1' textAlign="left" sx={{display: {xs: "none", md: "block"}}}> Blog </Typography>  
        </Grid>
        {/* reserva */}        
        <Grid item xs={12} sm={12} md={4}>
          <Card sx={{ display: 'flex', flexDirection: {xs: "column", sm: "row", md: "column"} }} variant="outlined">
            <CardMedia
              component="img"
              sx={{ 
                width: { xs: "auto", sm: 200, md: "auto"},
                height: { xs: 194, sm: "auto", md: 194 }
              }}
              image="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png"
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  18 March 2024
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                  How center an element with CSS
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  CSS
                </Typography>
                <Typography variant="body2">
                It´s very easy to create stylish and beautiful prototypes for your futurre proyects both graphical and dynamic
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions >
                <Button size="small" variant="contained" fullWidth disableElevation
                  component={Link}
                  to={"post-01-centrar-un-elemento-en-css"}
                >
                  Read More
                </Button>
              </CardActions>
            </Box>
          </Card>
        </Grid>
        
        
      </Grid>
    </Container>
  )
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);