import react from "../../../../assets/img/tecnologies/react.png";
import vite from "../../../../assets/img/tecnologies/vite.png";
import node from "../../../../assets/img/tecnologies/node.png";
import bootstrap from "../../../../assets/img/tecnologies/bootstrap.png";
import materialui from "../../../../assets/img/tecnologies/materialui.png";
import sass from "../../../../assets/img/tecnologies/sass.png";

import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, CardMedia, Typography } from "@mui/material";

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

export const Frameworks = () => {
  return (
    <>
      <Typography variant="h5" color="primary.light" gutterBottom>
        Frameworks and libraries
      </Typography>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3200}
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
              image={react}
              alt="react"
            />
            <Typography
              color="secondary.light"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              React
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
              image={vite}
              alt="vite"
            />
            <Typography
              color="secondary.light"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              Vite
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
              image={node}
              alt="node"
            />
            <Typography
              color="secondary.light"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              Node
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
              image={bootstrap}
              alt="bootstrap"
            />
            <Typography
              color="secondary.light"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              Bootstrap
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
              image={materialui}
              alt="materialui"
            />
            <Typography
              color="secondary.light"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              Material ui
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
              image={sass}
              alt="sass"
            />
            <Typography
              color="secondary.light"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              SASS
            </Typography>
          </Box>
        </Box>
      </Carousel>
    </>
  );
};
