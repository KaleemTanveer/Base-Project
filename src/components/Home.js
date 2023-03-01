import React from "react";
import home from "../assets/home.jfif";
import { Typography, Box } from "@mui/material";
const Home = () => {
  const backGround = {
    backgroundImage: `url(${home})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    height: 400,
    alignItem: "center",
  };
  return (
    <Box
      sx={{
        ...backGround,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          pt:6,
          color: "white",
          
        }}
      >
        Welcome.
      </Typography>
      <Typography
        variant="h4"
        sx={{
            
            color: "white",
        }}
      >
        Millions of movies, TV shows and people to discover. Explore now.
      </Typography>
    </Box>
  );
};
export default Home
