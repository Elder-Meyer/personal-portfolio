import { useTranslation } from 'react-i18next'
import { Container, Grid, Typography, CardContent, CardActions, Button, Box, Card, CardMedia, Chip } from '@mui/material'
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
                  {t('blog.postprev.date')}
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                  {t('blog.postprev.title')}
                </Typography>
                <Box sx={{ mb: 1.5 }}>
                  <Chip color="info" label={t('blog.postprev.category')} />
                </Box>
                <Typography variant="body2">
                  {t('blog.postprev.subject')}
                </Typography>
              </CardContent>
              <CardActions >
                <Button size="small" variant="contained" fullWidth disableElevation
                  component={Link}
                  to={"post-01-1712600908448"}
                >
                  {t('blog.postprev.btn')}
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