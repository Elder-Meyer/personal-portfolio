import eeuu from "../../../../assets/img/languages/eeuu.webp";
import french from "../../../../assets/img/languages/french.webp";
import spain from "../../../../assets/img/languages/spain.webp";
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
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

export const SpeakLanguages = ({t}) => {
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3400}
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
              image={eeuu}
              alt="eeuu"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              {t('home.skills.en')}
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
              image={french}
              alt="french"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              {t('home.skills.fr')}
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
              image={spain}
              alt="spain"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              {t('home.skills.es')}
            </Typography>
          </Box>
        </Box>
      </Carousel>
    </>
  );
};
