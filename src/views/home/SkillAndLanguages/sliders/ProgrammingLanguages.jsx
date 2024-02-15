import python from "../../../../assets/img/tecnologies/python.webp";
import cpp from "../../../../assets/img/tecnologies/cpp.webp";
import csharp from "../../../../assets/img/tecnologies/csharp.webp";
import javascript from "../../../../assets/img/tecnologies/javascript.webp";
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

export const ProgrammingLanguages = ({t}) => {
  return (
    <>
      <Typography variant="h5" color="primary.light" gutterBottom>
        {t('home.skills.pro')}
      </Typography>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3100}
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
              image={python}
              alt="python"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              Python
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
              image={cpp}
              alt="cpp"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              C++
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
              image={csharp}
              alt="csharp"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              C#
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
              alt="java"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              JavaScript
            </Typography>
          </Box>
        </Box>
      </Carousel>
    </>
  );
};
