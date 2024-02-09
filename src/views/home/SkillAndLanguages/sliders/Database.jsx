import firebase from "../../../../assets/img/tecnologies/firebase.webp";
import mongo from "../../../../assets/img/tecnologies/mongo.webp";
import mysql from "../../../../assets/img/tecnologies/mysql.webp";
import cloud from "../../../../assets/img/tecnologies/cloud.webp";

import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardMedia } from "@mui/material";
import { Typography } from "../../../../components/material-ui/Typography";
import { Box } from "../../../../components/material-ui/Box";

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

export const Database = () => {
  return (
    <>
      <Typography variant="h5" color="primary.light" gutterBottom>
        Database
      </Typography>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3300}
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
              image={firebase}
              alt="firebase"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              Firebase
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
              image={mongo}
              alt="mongo"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              Mongo db
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
              image={mysql}
              alt="mysql"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              MySQL
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
              image={cloud}
              alt="cloud"
            />
            <Typography
              color="text.secondary"
              textAlign="center"
              sx={{ userSelect: "none", pointerEvents: "none" }}
            >
              Google Cloud
            </Typography>
          </Box>
        </Box>
      </Carousel>
    </>
  );
};
