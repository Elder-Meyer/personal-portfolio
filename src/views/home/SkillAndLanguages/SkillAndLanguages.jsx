import React from 'react'
import { Database } from './sliders/Database'
import { Frameworks } from './sliders/Frameworks'
import { ProgrammingLanguages } from './sliders/ProgrammingLanguages'
import { SpeakLanguages } from './sliders/SpeakLanguages'
import { WebDevelopment } from './sliders/WebDevelopment'
// MATERIAL UI - LOCAL
import { Typography } from '../../../components/material-ui/Typography'
import { Box } from '../../../components/material-ui/Box'
import { Container } from '../../../components/material-ui/Container'
import { Paper } from '../../../components/material-ui/Paper'
import { Toolbar } from '../../../components/material-ui/Toolbar'
import { useTranslation } from 'react-i18next'

export const SkillAndLanguages = () => {
  const { t } = useTranslation();
  return (
    <Box component='section' sx={{ bgcolor: "background.default",  px:{ xs: 0, sm:1, md:2, lg:2}, py: {xs:5, sm:5, md:6} }}>
      <Container maxWidth="lg">
        <Paper sx={{borderRadius: 4, py: 3, px: {xs: 2, sm:2, md:2, lg: 8, xl:16 }, bgcolor: "background.paper" }} elevation={0}>
          <Typography color='text.primary' textAlign="center" sx={{ fontSize: 40, fontWeight: 500}} gutterBottom>
            {t('home.skills.titleskills')}
          </Typography>
          <Typography color='text.secondary' textAlign="center" sx={{fontSize: 18, my:3}}>
            {t('home.skills.descriptionskills')}
          </Typography>
            <WebDevelopment t={t}/>
          <Toolbar/>
            <ProgrammingLanguages t={t}/>
          <Toolbar/>
            <Frameworks t={t}/>
          <Toolbar/>
            <Database t={t}/>
          <Toolbar/>
          
          <Typography textAlign="center" color="primary.main" sx={{fontSize: 40, fontWeight: 500}} gutterBottom>
            {t('home.skills.titlelanguages')}
          </Typography>
          <Typography color="text.secondary" textAlign="center" sx={{fontSize: 18, my:3}}>
            {t('home.skills.descriptionlanguages')}
          </Typography>
          <SpeakLanguages t={t}/>
          
        </Paper>
      </Container>
    </Box>
  )
}
