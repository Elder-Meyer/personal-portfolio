import React from 'react'
import { Web } from './Web';
// MATERIAL UI - LOCAL
import { Typography } from '../../components/material-ui/Typography';
import { Box } from '../../components/material-ui/Box';
import { Container } from '../../components/material-ui/Container';
import { Paper } from '../../components/material-ui/Paper';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <Paper
      elevation={0}
      component="section"
      // aqui está lo importante si quieres hacer un cambio y poner el wavy divider
      sx={{
        display: "flex",
        borderRadius:0,
        alignItems: "center",
        pt: {xs: 15, sm: 0, md: 0, lg: 0, xl:0} ,
        pb:15,
        backgroundColor: "background.default",
        // border: "3px solid red",
      }}
    >
      <Container maxWidth="xl">
          <Typography textAlign="center" color="primary.main" sx={{fontSize: 40, fontWeight: 500}} gutterBottom>
            {t('projects.title')}
          </Typography>
          <Box 
            sx={{ 
              // borderBottom: 1, borderColor: 'divider' 
            }}
          >
            <Typography color="text.secondary" textAlign="center" sx={{fontSize: 18, my:3}}>
              {t('projects.subtitle')}
            </Typography>
          </Box>
          {/* <BasicTabs/> */}
          <Web t={t}/>
      </Container>
      
    </Paper>
  );
}
