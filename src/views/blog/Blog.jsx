import { useTranslation } from 'react-i18next'
import { Container } from '../../components/material-ui/Container'
import { Grid } from '../../components/material-ui/Grid'
import { Typography } from '../../components/material-ui/Typography'
import { WorkingOnThat } from '../../components/items/WorkingOnThat'
import { Paper } from '../../components/material-ui/Paper'
import { CardContent } from '../../components/material-ui/CardContent'
import { CardActions } from '../../components/material-ui/CardActions'
import { Button } from '../../components/material-ui/Button'
import { Box } from '../../components/material-ui/Box'
import { Card } from '../../components/material-ui/Card'
import { Chip } from '../../components/material-ui/Chip'
import { CardMedia } from '../../components/material-ui/CardMedia'
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
          <Typography color="text.secondary" variant='subtitle1' textAlign="left"> Articulos </Typography>  
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant='outlined'>
            <CardMedia
              sx={{ height: 194 }}  
              // component="img"
              // height="194"
              image="https://mui.com/static/images/cards/paella.jpg"
              alt="Paella dish"
            />
            <CardContent sx={{p:3}}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                26 October 2017
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                Header style Collector for your prototypes
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
            <CardActions>
              <Button size="small" variant="text" disableElevation>Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card variant='outlined'>
            <CardMedia
              sx={{ height: 194 }}  
              // component="img"
              // height="194"
              image="https://mui.com/static/images/cards/live-from-space.jpg"
              alt="Paella dish"
            />
            <CardContent sx={{p:3}}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                26 October 2017
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                Header style Collector for your prototypes
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
            <CardActions>
              <Button size="small" variant="text" disableElevation>Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card variant='outlined'>
            <CardMedia
              sx={{ height: 194 }}  
              // component="img"
              // height="194"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="Paella dish"
            />
            <CardContent sx={{p:3}}>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                26 October 2017
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                Header style Collector for your prototypes
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
            <CardActions>
              <Button size="small" variant="text" disableElevation>Read More</Button>
            </CardActions>
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