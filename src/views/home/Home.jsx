import React from 'react'
import { Presentation } from './Presentation/Presentation'
import { SkillAndLanguages } from './SkillAndLanguages/SkillAndLanguages'
import { Projects } from './Projects/Projects'

export const Home = () => {
  return (
    <>
      <Presentation/>  
      <SkillAndLanguages/>    
      <Projects/>
    </>
  )
}
