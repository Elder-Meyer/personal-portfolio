// Breadcrumbs.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography, } from '@mui/material';
import { Container } from '../material-ui/Container';
import { NavigateNext, Home, Book, ContactPage, Warning, EmojiEmotions, Description, Subject, WorkHistory } from '@mui/icons-material';

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Container maxWidth="xl" sx={{py:1}}>
        <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
            <Link to="/">
                <Home sx={{mr: 0.5}} fontSize='inherit'/>
                Home 
            </Link>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                const icon = getIcon(name);
                return isLast ? (
                    <Typography key={routeTo} color="text.primary">
                        {icon} {name}
                    </Typography>
                ) : (
                    <Link key={routeTo} to={routeTo}>
                        {icon} {name}
                    </Link>
                );
            })}
        </Breadcrumbs>
    </Container>
  );
}

function getIcon(name) {
    if(name.includes('project-')){
        return <Description sx={{mr: 0.5}} fontSize='inherit' />
    }
    if(!isNaN(name)){
        return <Subject sx={{mr: 0.5}} fontSize='inherit' />
    }
    switch (name) {
      case 'about-me':
        return <EmojiEmotions sx={{mr: 0.5}} fontSize='inherit' />;
      case 'contact':
        return <ContactPage sx={{mr: 0.5}} fontSize='inherit' />;
      case 'blog' :
        return <Book sx={{mr: 0.5}} fontSize='inherrit' />
      case 'projects' :
        return <WorkHistory sx={{mr: 0.5}} fontSize='inherit' />
      default:
        return <Warning sx={{mr: 0.5}} fontSize='inherit'/>;
    }
  }

export default Breadcrumb;