import { ArrowRight, ContactPage, Email, LightMode, LinkedIn, Phone, Web } from "@mui/icons-material";
import { List, ListItem, ListItemText, Container, Grid, Paper, Stack, Typography, Chip, Divider, IconButton, Button } from '@mui/material'
import { ChipDownloadCV } from "./ChipDownloadCV";
import { useTranslation } from 'react-i18next'
import { Link as LinkMUI } from "@mui/material";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  const { t } = useTranslation()
  return (
    <Container maxWidth="md" sx={{ minHeight: { xs: "55vh", sm: "60vh", md: "67vh" }}}>
      <Paper  elevation={0} sx={{p: {xs:1, md:2, lg:3}, borderRadius: 5 }}>
        <Grid container spacing={2}>
          {/* Nombre */}
          <Grid item xs={12} sm={5} md={7}>
            <Stack direction="column" spacing={1}>
              <Typography color="text.primary" variant="h2" fontWeight={700}>
                ELDER MEYER
              </Typography>
              <Typography color="text.primary" variant="h6" fontWeight={700}>
                {t("aboutme.personal.degree")}
              </Typography>
            </Stack>
          </Grid>
          {/* Contacto */}
          <Grid item xs={12} sm={7} md={5}>
            <Stack direction="column" spacing={0.5} height="100%" justifyContent="center">
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip label={<Phone/>} />
                <Typography color="text.secondary" variant="body1" component="a" href="tel:+527712448126">
                  {"(+52) 7712448126"}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip label={<Email/>} />
                <Typography color="text.secondary" variant="body1" component="a" href="mailto:meyer.sanchez3000@gmail.com">
                  {"meyer.sanchez3000@gmail.com"}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip label={<LinkedIn/>} />
                <Typography color="text.secondary" variant="body1" component="a" href="https://www.linkedin.com/in/elder-meyer/" target="_BLANK">
                  {"elder-meyer"}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          {/* Desc */}
          <Grid item xs={12}>
            <Typography color="text.secondary" variant="body1">
              {t("aboutme.personal.info")}
            </Typography>
          </Grid>
          <Grid item xs={12}> <Divider /> </Grid>
          {/* Experiencia en proyectos */}
          <Grid item xs={12}>
            <Typography color="text.primary" variant="h5" fontWeight={700}>
              {t("aboutme.workexp.title")}
            </Typography>
          </Grid>
          {/* Proyectos */}
          {/* project 1 */}
          <Grid item xs={12}>
            <Typography color="text.primary" variant="subtitle1" fontWeight={700}>
              {t("aboutme.workexp.projects.project01.title")}
            </Typography>
            <LinkMUI component={Link} href="#" underline="always">
              {t("aboutme.workexp.projects.project01.url")}
            </LinkMUI>
            <Typography color="text.secondary" variant="body1">
              {t("aboutme.workexp.projects.project01.info")}
            </Typography>
          </Grid>
          {/* project 2 */}
          <Grid item xs={12}>
            <Typography color="text.primary" variant="subtitle1" fontWeight={700}>
              {t("aboutme.workexp.projects.project02.title")}
            </Typography>
            <LinkMUI component={Link} href="#" underline="always">
              {t("aboutme.workexp.projects.project02.url")}
            </LinkMUI>
            <Typography color="text.secondary" variant="body1">
              {t("aboutme.workexp.projects.project02.info")}
            </Typography>
          </Grid>
          {/* project 3 */}
          <Grid item xs={12}>
            <Typography color="text.primary" variant="subtitle1" fontWeight={700}>
              {t("aboutme.workexp.projects.project03.title")}
            </Typography>
            <LinkMUI component={Link} href="#" underline="always">
              {t("aboutme.workexp.projects.project03.url")}
            </LinkMUI>
            <Typography color="text.secondary" variant="body1" paragraph>
              {t("aboutme.workexp.projects.project03.info")}
            </Typography>
          </Grid>
          <Grid item xs={12}> <Divider /> </Grid>
          {/* Educación */}
          <Grid item xs={12} sm={6}>
            <Typography color="text.primary" variant="h5" fontWeight={700}>
              {t("aboutme.education.title")}
            </Typography>
            <Stack direction="column" spacing={3}>
              <div>
                <Typography color="text.primary" variant="caption">
                  2022 - 2025
                </Typography>
                <Typography color="text.primary" variant="h6">
                  Universidad Tecnologica de la Huasteca Hidalguense
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {t("aboutme.education.eng")}
                </Typography>
              </div>
              <div>
                <Typography color="text.primary" variant="caption">
                  2020 - 2022
                </Typography>
                <Typography color="text.primary" variant="h6">
                  Universidad Tecnologica de la Huasteca Hidalguense
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {t("aboutme.education.tsu")}
                </Typography>
              </div>
              <div>
                <Typography color="text.primary" variant="caption">
                  2017 - 2020
                </Typography>
                <Typography color="text.primary" variant="h6">
                  Colegio de Bachilleres del Estado de Hidalgo
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {t("aboutme.education.coll")} 
                </Typography>
              </div>
            </Stack>
          </Grid>
          {/* Habilidades */}
          <Grid container item xs={12} sm={6}>
            <Grid item xs={12}>
              <Typography color="text.primary" variant="h5" fontWeight={700}>
                {t("aboutme.skills.title")}
              </Typography>
            </Grid>
            {/* listas */}
            <Grid item xs={4}>
              <List dense disablePadding>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="HTML5"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="CSS"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Sass"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Bootstrap"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Tailwind"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Material UI"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Figma"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/> 
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="JavaScript"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="React JS"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <List dense disablePadding>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="React Native"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Node JS"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Vue JS"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Vite"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Vitest"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Jest"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="MongoDB"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/> 
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="MySQL"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="PHP"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <List dense disablePadding>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="C++"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Python"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Git"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="GitHub"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Google Docs"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Google Analytics"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Firebase"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/> 
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="DevOps"
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ArrowRight fontSize="small"/>
                  <ListItemText
                    sx={{ my: 0 }}
                    primary="Desarrollo Web"
                  />
                </ListItem>
              </List>
            </Grid>
            {/* info final */}
            <Grid item xs={12}>
              <br/>
              <Typography color="text.secondary" variant="body1" gutterBottom>
                {t("aboutme.skills.skills")}
              </Typography>
              <Typography color="text.secondary" variant="body1">
                {t("aboutme.skills.language")}
              </Typography>
            </Grid>
          </Grid>
          {/* Download BTN */}
          <Grid item xs={7} component={Stack} justifyContent={"flex-start"} alignItems={"center"}>
            <ChipDownloadCV/>
          </Grid>
          <Grid item xs={5} component={Stack} justifyContent={"flex-end"} alignItems={"center"}>
            <IconButton component={Link} to={"/contact"} color="primary" size="medium" sx={{ borderColor: "divider", borderWidth: 1, borderStyle: "solid", display: {xs: "flex", sm: "none"} }}>
              <ContactPage fontSize="inherit" /> 
            </IconButton>
            <Button component={Link} to={"/contact"} size="medium" variant="outlined" sx={{ borderRadius: 5, display: {xs: "none", sm: "flex"} }} endIcon={<ContactPage/>}>
              {t("aboutme.backbtn")}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};