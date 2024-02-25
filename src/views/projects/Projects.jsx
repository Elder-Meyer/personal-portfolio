import { useTranslation } from 'react-i18next';
import { Box } from '../../components/material-ui/Box';
import { Container } from '../../components/material-ui/Container';
import { Stack } from '../../components/material-ui/Stack';
import { Typography } from '../../components/material-ui/Typography';
import { Web } from './Web';

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <Box component='section' sx={{ px:{ xs: 0, sm:1, md:2, lg:2}, py: {xs:3, md:10, xl: 20} }}>
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