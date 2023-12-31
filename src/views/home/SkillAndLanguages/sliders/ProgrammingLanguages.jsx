import python from "../../../../assets/img/tecnologies/python.png";
import cpp from "../../../../assets/img/tecnologies/cpp.png";
import csharp from "../../../../assets/img/tecnologies/csharp.png";
import java from "../../../../assets/img/tecnologies/java.png";

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

export const ProgrammingLanguages = () => {
  return (
    <>
      <Typography variant="h5" color="primary.light" gutterBottom>
        Programming Language
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
              color="secondary.light"
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
              color="secondary.light"
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
              color="secondary.light"
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
              image={java}
              alt="java"
            />
            <Typography
              color="secondary.light"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              Java
            </Typography>
          </Box>
        </Box>
      </Carousel>
    </>
  );
};
