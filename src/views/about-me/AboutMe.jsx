import { ArrowRight, Email, LinkedIn, Phone, Web } from "@mui/icons-material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Container } from "../../components/material-ui/Container";
import { Grid } from "../../components/material-ui/Grid";
import { Paper } from "../../components/material-ui/Paper";
import { Stack } from "../../components/material-ui/Stack";
import { Typography } from "../../components/material-ui/Typography";
import { Chip } from "../../components/material-ui/Chip";
import { Divider } from "../../components/material-ui/Divider";
import { ChipDownloadCV } from "./ChipDownloadCV";

export const AboutMe = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: { xs: "55vh", sm: "60vh", md: "67vh" }}}>
      <Paper  elevation={0} sx={{p: {xs:1, md:2, lg:3}, borderRadius: 5 }}>
        <Grid container spacing={2}>
          {/* Nombre */}
          <Grid item xs={12} sm={5} md={6}>
            <Stack direction="column" spacing={1}>
              <Typography color="text.primary" variant="h2" fontWeight={700}>
                Elder Meyer
              </Typography>
              <Typography color="text.primary" variant="h6" fontWeight={700}>
                TSU. EN TECNOLOGÍAS DE LA INFORMACIÓN
              </Typography>
            </Stack>
          </Grid>
          {/* Contacto */}
          <Grid item xs={12} sm={7} md={6}>
            <Stack direction="column" spacing={0.5} height="100%" justifyContent="center">
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip label={<Phone/>} />
                <Typography color="text.secondary" variant="body1" component="a" href="tel:+527712448126">
                  {"(+52) 7712448126"}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip label={<Email/>} />
                <Typography color="text.secondary" variant="body1" component="a" href="mailto:meyer.sanchez30000@gmail.com">
                  {"meyer.sanchez300@gmail.com"}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip label={<LinkedIn/>} />
                <Typography color="text.secondary" variant="body1" component="a" href="https://www.linkedin.com/in/elder-meyer/" target="_BLANK">
                  {"linkedin.com/in/elder-meyer"}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip label={<Web/>} />
                <Typography color="text.secondary" variant="body1" component="a" href="https://elder-meyer.web.app" target="_BLANK">
                  {"elder-meyer.web.app"}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          {/* Desc */}
          <Grid item xs={12}>
            <Typography color="text.secondary" variant="body1">
              Desarrollador web apasionado por crear aplicaciones que sean útiles, atractivas e innovadoras.
              Siempre explorando nuevas tecnologías y tendencias para ofrecer productos que estén a la vanguardia de la
              innovación en la web.
              Desarrollador proactivo, organizado y con capacidad de trabajo en equipo,
            </Typography>
          </Grid>
          <Grid item xs={12}> <Divider /> </Grid>
          {/* Experiencia */}
          <Grid item xs={12}>
            <Typography color="text.primary" variant="h5" fontWeight={700}>
              Experiencia Laboral
            </Typography>
            <Typography color="text.primary" variant="subtitle1">
              Auxiliar
            </Typography>
            <Typography color="text.primary" variant="subtitle2">
              Tienda de abarrotes, Sep 2020 - Nov 2023
            </Typography>
            <Typography color="text.secondary" variant="body1">
              Atención al cliente: Brindar un servicio de atención al cliente amable y eficiente, resolviendo las dudas y consultas de los clientes.
              Organización de productos:Mantener los productos en los estantes de manera ordenada y accesible para los clientes. Habilidades
              de comunicación y atención al cliente:Capacidad para comunicarse de forma efectiva con los clientes, resolviendo sus dudas y
              consultas de forma amable y eficiente. Habilidades de organización y planificación:Capacidad para organizar y planificar el trabajo
              de manera eficiente.
            </Typography>
          </Grid>
          <Grid item xs={12}> <Divider /> </Grid>
          {/* Educación */}
          <Grid item xs={12} sm={6}>
            <Typography color="text.primary" variant="h5" fontWeight={700}>
              Educación
            </Typography>
            <Stack direction="column" spacing={3}>
              <div>
                <Typography color="text.primary" variant="caption">
                  2022 - Presente
                </Typography>
                <Typography color="text.primary" variant="h6">
                  Universidad Tecnologica de la Huasteca Hidalguense
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  Ing. en Desarrollo y Gestión de Software
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
                  TSU. en Tecnologías de la información
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
                  Capacitación para el trabajo en informatica
                </Typography>
              </div>
            </Stack>
          </Grid>
          {/* Habilidades */}
          <Grid container item xs={12} sm={6}>
            <Grid item xs={12}>
              <Typography color="text.primary" variant="h5" fontWeight={700}>
                Habilidades
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
                Comunicación Asertiva, Resolución de Problemas, Trabajo en Equipo, Autodidacta
              </Typography>
              <Typography color="text.secondary" variant="body1">
                Inglés (Intermedio)
              </Typography>
            </Grid>
          </Grid>
          {/* Download BTN */}
          <Grid item xs={12}>
            <ChipDownloadCV/>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};