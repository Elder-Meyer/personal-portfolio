import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography, Chip, Container } from '@mui/material';
import { emphasize, styled } from '@mui/material/styles';
import { NavigateNext, Home, Book, ContactPage, Warning, EmojiEmotions, Description, Subject, WorkHistory } from '@mui/icons-material';

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const isBlogDetails = location.pathname.includes("/blog/post")
  
  return (
    <Container maxWidth="xl" sx={{py:1, position: isBlogDetails ? "relative" : "static", zIndex: isBlogDetails ? "10" : "none"}}>
      <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
        <StyledBreadcrumb component={Link} to="/" label="Home" icon={<Home sx={{mr: 0.5}} fontSize='inherit'/>} />
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const icon = getIcon(name);
          return isLast ? (
            <StyledBreadcrumb
              component={Typography}
              key={routeTo}
              label={name}
              icon={icon}
              sx={{ '&:hover':{ cursor: "default" } }}
            />
          ) : (
            <StyledBreadcrumb
              component={Link}
              key={routeTo}
              to={routeTo}
              label={name}
              icon={icon}
            />
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
  if(!isNaN(name) || name.includes('post-') ){
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

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
      cursor: "pointer"
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

export default Breadcrumb;