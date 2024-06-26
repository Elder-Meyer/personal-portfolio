import { useTranslation } from 'react-i18next';
import { Web } from './Web';
import { useLocation } from 'react-router-dom';
import { Box, Container, Stack, Typography } from '@mui/material';

export const Projects = () => {
  const { t } = useTranslation();
  const location = useLocation()
  const isProjects = location.pathname === "/projects";
  return (
    <Box component='section' sx={{ px:{ xs: 0, lg:2}, py: isProjects ? 1 : {xs:3, md:10, xl: 20}, minHeight: isProjects ?  {xs: "auto", sm: "auto", md: "62vh"} : "auto" }} >
      <Container maxWidth="xl">
        <Stack direction="column" spacing={1} pb={2}>
          <Typography color="primary.main" textAlign="center" sx={{fontSize: 40, fontWeight: 500}} >
            {t('projects.title')}
          </Typography>
          <Typography color="text.secondary" textAlign="center" sx={{fontSize: 18}}>
            {t('projects.subtitle')}
          </Typography>
        </Stack>
        <Web t={t}/>
      </Container>
    </Box>
  );
}