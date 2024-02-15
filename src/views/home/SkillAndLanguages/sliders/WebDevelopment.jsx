import html from "../../../../assets/img/tecnologies/html.webp";
import css from "../../../../assets/img/tecnologies/css.webp";
import javascript from "../../../../assets/img/tecnologies/javascript.webp";
import php from "../../../../assets/img/tecnologies/php.webp";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// MATERIAL UI - LOCAL
import { Typography } from "../../../../components/material-ui/Typography";
import { Box } from "../../../../components/material-ui/Box";
import { CardMedia } from "../../../../components/material-ui/CardMedia";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 304 },
    items: 2,
  },
  smallMobile: {
    breakpoint: { max: 304, min: 0 },
    items: 1,
  },
};

export const WebDevelopment = ({t}) => {
  return (
    <>
      <Typography variant="h5" color="primary.light" gutterBottom>
        {t('home.skills.web')}
      </Typography>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
            <CardMedia
              sx={{ userSelect: "none", pointerEvents: "none" }}
              component="img"
              height={"100%"}
              image={html}
              alt="html"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              HTML
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
            <CardMedia
              sx={{ userSelect: "none", pointerEvents: "none" }}
              component="img"
              height={"100%"}
              image={css}
              alt="css"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              CSS
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
            <CardMedia
              sx={{ userSelect: "none", pointerEvents: "none" }}
              component="img"
              height={"100%"}
              image={javascript}
              alt="javascript"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              Javascript
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: { xs: "90%", sm: "70%", md: "70%" } }}>
            <CardMedia
              sx={{ userSelect: "none", pointerEvents: "none" }}
              component="img"
              height={"100%"}
              image={php}
              alt="php"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              PHP
            </Typography>
          </Box>
        </Box>
      </Carousel>
    </>
  );
};
